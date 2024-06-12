import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import mqtt from "mqtt";
const SettingsCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let show_password = false;
  let ssid = "";
  let password = "";
  const mqttClient = mqtt.connect("mqtt://localhost:9001");
  mqttClient.on("connect", () => {
    console.log("Connected to MQTT broker");
  });
  mqttClient.on("error", (error) => {
    console.error("MQTT error:", error);
  });
  return `<div class="card variant-soft p-16"><h1 class="font-light text-3xl pb-12" data-svelte-h="svelte-14peu8b">Change Access Point Settings</h1> <form class="flex align-sub"><div><label class="label"><span data-svelte-h="svelte-1ee3laz">New SSID</span> <input type="text" placeholder="SSID" class="input"${add_attribute("value", ssid, 0)}></label> <label class="label"><span data-svelte-h="svelte-18iafh">New Password</span> ${`<input type="password" placeholder="Password" class="input"${add_attribute("value", password, 0)}>`}</label> <div class="inline-flex align-middle space-x-5 mt-5"><label class="label flex align-middle space-x-3"><span data-svelte-h="svelte-7e9aks">Show Password</span> <input type="checkbox" class="input w-5 h-5 rounded-none"${add_attribute("checked", show_password, 1)}></label> <button type="submit" class="btn variant-ghost-secondary" data-svelte-h="svelte-18wdjvj">Save and Reboot</button></div></div></form></div> <div class="card variant-soft p-16 mt-10"><h1 class="font-light text-3xl pb-12" data-svelte-h="svelte-1g1rqw6">Other</h1> <form class="flex align-sub mb-4" data-svelte-h="svelte-7t4mud"><div><button type="submit" class="btn variant-ghost-secondary">Flash Demo</button></div></form> <form class="flex align-sub" data-svelte-h="svelte-mf7vcj"><button type="submit" class="btn variant-ghost-secondary">Shutdown</button></form></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container mx-auto">${validate_component(SettingsCard, "Card").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
