#include <WiFi.h>
#include <PubSubClient.h>

const char *ssid = "RealIoT";
const char *password = "raspberry";
const char *mqtt_server = "172.20.0.99";
const int mqtt_port = 1883;

WiFiClient espClient;
PubSubClient client(espClient);

const char *led_button_topic = "led-controller/led-button";
const char *led_brightness_topic = "led-controller/led-brightness";

const byte led_gpio = 23;
int ledBrightness = 250;
bool lightOn = false;

void setup_wifi()
{
  delay(10);
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.setMinSecurity(WIFI_AUTH_WPA_PSK);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void callback(char *topic, byte *payload, unsigned int length)
{
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");

  payload[length] = '\0';
  String message = String((char *)payload);

  if (strcmp(topic, led_brightness_topic) == 0)
  {
    int brightness = message.toInt();
    if (brightness >= 0 && brightness <= 100)
    {
      ledBrightness = map(brightness, 0, 100, 0, 255);
      if (lightOn)
      {
        ledcWrite(0, ledBrightness);
      }
      else
      {
        ledcWrite(0, 0);
      }
      Serial.print("Set LED brightness to: ");
      Serial.println(brightness);
    }
  }
  else if (strcmp(topic, led_button_topic) == 0)
  {
    if (lightOn)
    {
      ledcWrite(0, 0);
      lightOn = false;
    }
    else
    {
      ledcWrite(0, ledBrightness);
      lightOn = true;
    }
  }
}

void reconnect()
{
  while (!client.connected())
  {
    Serial.print("Attempting MQTT connection...");

    if (client.connect("ESP32Client"))
    {
      Serial.println("connected");
      client.subscribe(led_button_topic);
      client.subscribe(led_brightness_topic);
    }
    else
    {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}

void setup()
{
  Serial.begin(115200);
  ledcAttachPin(led_gpio, 0);
  ledcSetup(0, 5000, 8);
  setup_wifi();
  client.setServer(mqtt_server, mqtt_port);
  client.setCallback(callback);
}

void loop()
{
  if (!client.connected())
  {
    reconnect();
  }
  client.loop();
}
