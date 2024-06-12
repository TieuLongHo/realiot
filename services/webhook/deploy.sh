#!/bin/bash

PROJECT_DIR="$HOME/server/realiot"
SERVER_DIR="$HOME/server/build"

cd $PROJECT_DIR

git pull origin production

npm install --registry="http://172.20.0.103:4873"
npm run build

sudo systemctl stop realiot-server.service
rm -rf $SERVER_DIR
cp -r $PROJECT_DIR $SERVER_DIR
sudo systemctl start realiot-server.service

echo "Deployment complete!"