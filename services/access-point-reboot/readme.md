# Create a systemd service for the settings

```shell
vi settings_service.sh
```

# 2. Install the mosquitto client

```
sudo apt install mosquitto-clients
```

# 3. Create the systemd service unit file

```shell
sudo vi /etc/systemd/system/settings_service.service
```

# Paste the following content into the file:

```shell
[Unit]
Description=Settings Service MQTT Listener
After=network.target

[Service]
Type=simple
ExecStart=/usr/bin/sudo /bin/bash $HOME/services/settings-service.sh
Restart=always
User=pi
Group=pi

[Install]
WantedBy=multi-user.target
```

# Save and close the file (:wq).

# 4. Reload systemd to read the new service unit file

sudo systemctl daemon-reload

# 5. Start the settings service

sudo systemctl start settings_service

# 6. Enable the service to start on boot

sudo systemctl enable settings_service
