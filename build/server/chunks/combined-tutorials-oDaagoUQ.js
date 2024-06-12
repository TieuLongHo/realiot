const tutorials = [
  {
    id: "led-controller",
    title: "LED Controller",
    intro: "This is a simple LED controller that allows you to turn on and off an LED with a button.",
    difficulty: "easy",
    components: [
      {
        name: "LED",
        description: "a light-emitting diode (LED) is a semiconductor light source that emits light when current flows through it. Electrons in the semiconductor recombine with electron holes, releasing energy in the form of photons. This effect is called electroluminescence.",
        functions: ""
      }
    ],
    story: "You're in a cozy Workshop tucked away in a picturesque town. Inside, there's an intriguing project underway—a setup of colorful LEDs. These LEDs are not just any lights, they can transform your space into a vibrant display of colors, all at your fingertips. One day, disaster strikes! The physical switch used to control these magical LEDs suddenly stops working. No matter how many times you press it, the lights remain unchanged. Frustrated but determined, you realize there's a solution—harnessing the power of technology to control the LEDs from afar. Your task is to create a simple LED controller that can turn the lights on and off with the press of a button. Are you up for the challenge?",
    user_input: {
      buttons: [
        {
          label: "ON/OFF Switch",
          topic: "led-button"
        }
      ],
      sliders: [
        {
          label: "Brightness",
          topic: "led-brightness"
        }
      ],
      graphs: [],
      displays: []
    },
    solution: {}
  },
  {
    id: "temperature-observing",
    title: "Temperature Observing",
    intro: "In this project, you will read the Temperature from a sensor and display it on the screen.",
    difficulty: "easy",
    components: [
      {
        name: "TMP36",
        description: "The TMP36 is a low voltage, precision centigrade temperature sensor. It provides a voltage output that is linearly proportional to the Celsius temperature. It also doesn't require any external calibration to provide typical accuracies of ±1°C at +25°C and ±2°C over the −40°C to +125°C temperature range.",
        functions: ""
      }
    ],
    story: "You are a zookeeper and you need to monitor the temperature of the animals in the zoo. You have a temperature sensor that can help you with this task. You need to connect the sensor to the board and display the temperature on the screen.",
    user_input: {
      buttons: [],
      sliders: [],
      graphs: [
        {
          label: "Temperature",
          topic: "temperature"
        }
      ],
      displays: []
    },
    solution: {}
  }
];
const data = {
  tutorials
};

export { data as d };
//# sourceMappingURL=combined-tutorials-oDaagoUQ.js.map
