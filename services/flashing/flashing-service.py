import os
import time
import serial.tools.list_ports
import paho.mqtt.client as mqtt
import warnings
import threading
import subprocess
import queue
import json

warnings.filterwarnings("ignore", category=DeprecationWarning)

BROKER = "172.20.0.99"
PORT = 1883
TOPIC_SUBSCRIBE = "esp32/flash"
TOPIC_PUBLISH = "esp32/ports"
TOPIC_FLASH = "esp32/flash_device"
TOPIC_FLASH_STATUS = "esp32/flash_status"

last_ports = set()
flash_queue = queue.Queue()


def list_serial_ports():
    return set([port.device for port in serial.tools.list_ports.comports()])


def on_connect(client, userdata, flags, rc):
    print(f"Connected with result code {rc}")
    client.subscribe(TOPIC_SUBSCRIBE)
    client.subscribe(TOPIC_FLASH)


def on_message(client, userdata, msg):
    global last_ports
    if msg.topic == TOPIC_SUBSCRIBE:
        ports = list_serial_ports()
        client.publish(TOPIC_PUBLISH, json.dumps(list(ports)), qos=1)
    elif msg.topic == TOPIC_FLASH:
        serial_port = msg.payload.decode()
        client.publish(TOPIC_FLASH_STATUS, "flashing", qos=1)
        flash_queue.put(serial_port)


def flash_device(client, flash_queue):
    while True:
        serial_port = flash_queue.get()
        if serial_port is None:
            break
        home_dir = os.getenv("HOME")
        bootloader_file = f"{home_dir}/services/flashing/led-controller/bootloader.bin"
        partition_file = f"{home_dir}/services/flashing/led-controller/partitions.bin"
        firmware_file = f"{home_dir}/services/flashing/led-controller/firmware.bin"

        command = [
            "esptool.py",
            "--chip",
            "esp32",
            "--port",
            serial_port,
            "--baud",
            "115200",
            "write_flash",
            "-z",
            "0x1000",
            bootloader_file,
            "0x8000",
            partition_file,
            "0x10000",
            firmware_file,
        ]

        try:
            subprocess.run(command, check=True)
            print(f"Flashed ESP32 on port {serial_port}")
            client.publish(TOPIC_FLASH_STATUS, "success", qos=1)
        except subprocess.CalledProcessError as e:
            print(f"Error flashing ESP32: {e}")
            client.publish(TOPIC_FLASH_STATUS, "error", qos=1)


def monitor_ports(client):
    global last_ports
    while True:
        current_ports = list_serial_ports()
        if current_ports != last_ports:
            last_ports = current_ports
            client.publish(TOPIC_PUBLISH, json.dumps(list(current_ports)))
        time.sleep(5)


client = mqtt.Client(
    client_id="",
    clean_session=True,
    userdata=None,
    protocol=mqtt.MQTTv311,
    transport="tcp",
)
client.on_connect = on_connect
client.on_message = on_message

client.connect(BROKER, PORT, 60)

monitor_thread = threading.Thread(target=monitor_ports, args=(client,))
monitor_thread.start()

flash_thread = threading.Thread(target=flash_device, args=(client, flash_queue))
flash_thread.start()

client.loop_start()

try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    print("Exiting...")
    client.loop_stop()
    monitor_thread.join()
    flash_queue.put(None)
    flash_thread.join()
