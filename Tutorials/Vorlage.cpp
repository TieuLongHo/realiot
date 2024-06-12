#include <WiFi.h>
#include <PubSubClient.h>
///////////////////////////////////////////Verbindung zum AccessPoint und MQTT Server///////////////////////////////////////////
// Die SSID und das Passwort muss an das eigene AccessPoint Einstellungen angepasst werden
const char *ssid = "RealIoT";
const char *password = "raspberry";
const char *mqtt_server = "172.20.0.99";
const int mqtt_port = 1883;

WiFiClient espClient;
PubSubClient client(espClient);
/////////////////////////////Die Topics müssen angepasst werden, damit der ESP32 auf die richtigen Topics hört/////////////////////////////
const char *topic1 = "beispiel/topic1";
const char *topic2 = "beispiel/topic2";

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
// Diese Funktion wird aufgerufen, wenn eine Nachricht auf einem der Topics ankommt
void callback(char *topic, byte *payload, unsigned int length)
{
    Serial.print("Message arrived [");
    Serial.print(topic);
    Serial.print("] ");

    payload[length] = '\0';
    String message = String((char *)payload);

    // Hier wird überprüft ob der Topic mit dem ersten Topic übereinstimmt
    if (strcmp(topic, topic1) == 0)
    {
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////Hier wird der Code für das erste Topic eingefügt//////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }
    // Hier wird überprüft ob der Topic mit dem zweiten Topic übereinstimmt
    else if (strcmp(topic, topic2) == 0)
    {
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////Hier wird der Code für das zweite Topic eingefügt//////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }
}
// Diese Funktion wird aufgerufen, wenn die Verbindung zum MQTT Server verloren geht
void reconnect()
{
    while (!client.connected())
    {
        Serial.print("Attempting MQTT connection...");

        if (client.connect("ESP32Client"))
        {
            Serial.println("connected");
            ///////// Hier wird der Client auf die beiden Topics abonniert
            client.subscribe(topic1);
            client.subscribe(topic2);
            ///////// Hier wird eine Nachricht auf das erste Topic gesendet
            client.publish("beispiel/topic1", "Hello from ESP32");
            client.publish("beispiel/topic2", "I Love RealIoT");
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
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////// Hier die Logik einfügen/////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}

void loop()
{
    if (!client.connected())
    {
        reconnect();
    }
    client.loop();
}