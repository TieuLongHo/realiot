#include <WiFi.h>
#include <PubSubClient.h>
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_ADS1X15.h>

const char *ssid = "rasp";
const char *password = "Raspberry4!";
const char *mqtt_server = "10.128.0.10";
const int mqtt_port = 1883;
const char *temperature_topic = "temperature-observing/temperature";

WiFiClient espClient;
PubSubClient client(espClient);

Adafruit_ADS1115 ads1115;

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

void reconnect()
{
  while (!client.connected())
  {
    Serial.print("Attempting MQTT connection...");

    if (client.connect("ESP32Client"))
    {
      Serial.println("connected");
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
  Wire.begin();
  ads1115.begin();

  setup_wifi();
  client.setServer(mqtt_server, mqtt_port);
}

void loop()
{
  if (!client.connected())
  {
    reconnect();
  }

  int16_t adc0 = ads1115.readADC_SingleEnded(0); // Read ADC value from AIN0

  float volts0 = ads1115.computeVolts(adc0);
  float temp = (volts0 - 0.5) * 100; // Calculate temperature in Celsius

  char msg[10];
  dtostrf(temp, 4, 2, msg);
  client.publish(temperature_topic, msg);

  Serial.print("Published temperature: ");
  Serial.println(msg);

  delay(500);

  client.loop();
}
