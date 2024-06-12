#!/bin/bash

MQTT_BROKER="172.20.0.99"  

MQTT_TOPIC_SETTINGS="access_point/settings"
MQTT_TOPIC_SHUTDOWN="device/shutdown"


handle_settings_message() {
    local message="$1"
    local ssid=$(echo "$message" | jq -r '.ssid')
    local password=$(echo "$message" | jq -r '.password')

    if ! command -v jq &> /dev/null || ! command -v nmcli &> /dev/null; then
        echo "Required commands (jq, nmcli) not found. Install them first."
        return 1
    fi

    sudo nmcli connection modify hotspot wifi.ssid "$ssid"
    sudo nmcli connection modify hotspot wifi-sec.psk "$password"

    sudo nmcli connection down hotspot
    sudo nmcli connection up hotspot
}

handle_shutdown_message() {
    local message="$1"
    
    if [[ "$message" == *"shutdown"* ]]; then
        echo "Received shutdown command. Initiating system shutdown..."
        sudo shutdown now
    fi
}

while true; do
    mosquitto_sub -h "$MQTT_BROKER" -t "$MQTT_TOPIC_SETTINGS" | while read -r message; do
        handle_settings_message "$message"
    done &  

    mosquitto_sub -h "$MQTT_BROKER" -t "$MQTT_TOPIC_SHUTDOWN" | while read -r message; do
        handle_shutdown_message "$message"
    done

    sleep 1  
done
