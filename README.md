# Documentation

# Access Point

```bash
sudo apt update
sudo apt upgrade -y

# set country
sudo raspi-config

# set the ssid
sudo nmcli con add con-name hotspot ifname wlan0 type wifi ssid "RealIoT"

# set the password
sudo nmcli con modify hotspot wifi-sec.key-mgmt wpa-psk
sudo nmcli con modify hotspot wifi-sec.psk "raspberry"

# activate it
sudo nmcli con modify hotspot 802-11-wireless.mode ap 802-11-wireless.band bg ipv4.method shared

# settings
sudo nmtui
```

# uptdate kernel

```bash
sudo rpi-kernel
```

# Install docker

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

1. Create the docker group
   `sudo groupadd docker`
2. Add your user to the group
   `sudo usermod -aG docker $USER`
3.

# Install Portainer

```bash
docker volume create portainer_data
```

```bash
docker run -d \
   -p 8000:8000 \
   -p 9443:9443 \
   --name portainer \
   --restart=always \
   -v /var/run/docker.sock:/var/run/docker.sock \
   -v portainer_data:/data \
   portainer/portainer-ce:latest \
   --http-enabled
```

# Create Docker network

```bash
docker network create --driver=bridge --subnet=172.20.0.0/16 realiot_network
```

# install Gitlab

Install the Container

```bash
docker run \
   --detach \
   -restart unless-stopped  \
   --name gitlab-ce \
   --privileged \
   --memory 4G \
   --publish 2222:22 \
   --publish 80:80 \
   --publish 443:443 \
   --network=realiot_network \
   --ip=172.20.0.100 \
   --hostname localhost \
   --add-host host.docker.internal:host-gateway \
   --env GITLAB_ROOT_PASSWORD="raspberry" \
   --volume /srv/gitlab-ce/conf:/etc/gitlab:z \
   --volume /srv/gitlab-ce/logs:/var/log/gitlab:z \
   --volume /srv/gitlab-ce/data:/var/opt/gitlab:z \
    yrzr/gitlab-ce-arm64v8:latest
```

Change the external url (use your own text editor if you dont want to use vim)

```bash
sudo vim /srv/gitlab-ce/config/gitlab.rb

```

and add the line `external_url 'http://realiot.local`

# Flush the IP Table and make it persistent

```bash
sudo iptables -P INPUT ACCEPT
sudo iptables -P FORWARD ACCEPT
sudo iptables -P OUTPUT ACCEPT
sudo iptables -F

sudo apt install iptables-persistent
```

Then press `yes` and `yes`.

## install GitLab runner

```bash
docker run -d \
   --name gitlab-runner \
   --restart always \
   -v /srv/gitlab-runner/config:/etc/gitlab-runner \
   -v /var/run/docker.sock:/var/run/docker.sock \
   --network=realiot_network \
   --ip 172.20.0.101 \
   gitlab/gitlab-runner:v16.11.0

```

for the Webhook to work you need to do the following steps:

1. On the left sidebar, at the bottom, select **Admin Area**.
2. Select **Settings** > **Network**.
3. Expand **Outbound requests**.
4. Select the **Allow requests to the local network from webhooks and integrations** checkbox.

go to the main page of gitlab (`http://realiot.local`) and go to your repository `Settings` -> `CI/CD` -> `Runners` and create a new runner.
Choose Linux and set the tag to realiot-runner and check `Run untagged jobs`. After that click on create runner. The Website may not load. you'll need to wait until it fails and then rplace 172.20.0.100 with the ip of your raspberry or with `realiot.local`

go back to the terminal and register the runner

```bash
docker exec -it gitlab-runner gitlab-runner register \
   --docker-privileged \
   --url http://172.20.0.100 \
   --token ${YOUR_TOKEN}
```

press enter on URL and set the name to `realiot-runner`.
As executer choose `docker` and as image `node:20.13.0`.

enter

```bash
sudo vim /srv/gitlab-runner/config/config.toml
```

and enter below `[runners.docker]` the line ` allowed_pull_policies = "if-not-present`.

Add the pub ssh key from your device and the raspberrys to the gitlab.

# Install Verdaccio the local npm registry

```bash
docker run -d \
  --name verdaccio \
  -p 4873:4873 \
  -v verdaccio-data:/verdaccio/storage \
  --restart always \
  --network realiot_network \
  --ip 172.20.0.103 \
  verdaccio/verdaccio:4
```

go to the repository/scripts folder and execute the script `install_dependencies.sh` to cache the dependencies.

```bash
bash install_dependencies.sh
```

After that start shell in the container and check if the dependencies were cached correctly.

```bash
docker exec -u root -it verdaccio /bin/sh
ls /verdaccio/storage/data

```

Then edit the config file

```bash
vi /verdaccio/conf/config.yaml
```

Comment both lines with `proxy: npmjs` and save it.

## Add Repository

Clone the repository from the RealIoT Repository:

```bash
cd ~/
git clone URL TODO
```

Go back to your Gitlab instance
Create an Repository with the name RealIoT(or any other name you want).
Go to the Repository and click on `Settings` -> `Access Tokens` -> `Add new token`
Give it the name `raspberrypi` (or any other name) and change the Expiration date to something far in the future. Select atleast the role Maintainer and check all the options below. Click on `Create project access token`.
Copy the token, go to the cloned Repository and replace {YOUR_TOKEN} with the token. save it.

Open the repositry in the terminal and enter:

```bash
sudo apt install npm
```

```bash
git checkout developement
```

```bash
npm set registry http://realiot.local:4873/ --location project
npm adduser --registry http://realiot.local:4873 --auth-type=legacy
```

add a username, password and mail.

For the caching of the dependencies we execute the following script:

```bash
apt install jq
bash scripts/install_dependencies.sh
```

Check if the dependencies were cached correctly

```bash
docker exec -u root -it verdaccio /bin/sh
ls /verdaccio/storage/data
```

Modify the config file.

```bash
vi /verdaccio/conf/config.yaml
```

comment the line `proxy: npmjs` save and enter `exit`.

Open the repositry in the terminal and enter:

```bash
git remote set-url origin http://realiot.local
git push origin --all

```

TODO add project and change access token

# MQTT Mosquitto

Create the folder and the config file

```bash
sudo mkdir -p $HOME/mosquitto/config
CONFIG_CONTENT="listener 1883 0.0.0.0\nlistener 9001 0.0.0.0\nprotocol websockets\nallow_anonymous true\n"
echo -e "$CONFIG_CONTENT" | sudo tee $HOME/mosquitto/config/mosquitto.conf > /dev/null
```

Create the docker container

```bash
docker run -d \
   --restart=always \
   --name mosquitto \
   -p 1883:1883 \
   -p 9001:9001 \
   --network realiot_network \
   --ip 172.20.0.99 \
   -v $HOME/mosquitto/config:/mosquitto/config \
   eclipse-mosquitto
```

# Install the services

## install the needed dependencies

```bash
cd ~/
sudo apt install python3-full -y
# Create the virtual environment
python3 -m venv myenv
source myenv/bin/activate

pip3 install esptool

pip3 install paho-mqtt pyserial

```

## Install auto restart systemd

navigate to the realiot folder

```bash
cd ~/realiot
git checkout development
```

copy the service folder to the home directory

```bash
cp -r services ~/
```

```bash
sudo vim /etc/systemd/system/esp-flash.service
```

paste the following content

```bash
[Unit]
Description=Start myenv and flash script at boot

[Service]
ExecStartPre=/bin/sleep 10
ExecStart=/bin/bash -c "source $HOME/myenv/bin/activate && python $HOME/services/flashing/flashing-service.py"
WorkingDirectory=$HOME
StandardOutput=inherit
StandardError=inherit
Restart=always
User=pi

[Install]
WantedBy=multi-user.target
```

save it and exit

Reload systemd and enable service

```bash
sudo systemctl daemon-reload
sudo systemctl enable esp-flash.service
sudo systemctl start esp-flash.service
```

Install the Webhook service

```bash
pip install flask
```

go in gitlab to the repository and create a webhook with the url `http://realiot.local:6000/webhook`.
enable Push events and select All branches.
disable SSL verification and click on `Add webhook`.

# exec shell commands in js

https://stackoverflow.com/questions/72388542/in-linux-how-to-execute-shell-command-from-javascript

```bash
npm install --registry="http://realiot.local:4873"
```

```

```
