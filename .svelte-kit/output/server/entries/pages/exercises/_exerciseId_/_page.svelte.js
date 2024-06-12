import { c as create_ssr_component, k as subscribe, s as setContext, e as escape, b as compute_slots, l as createEventDispatcher, g as getContext, a as add_attribute, n as each, v as validate_component } from "../../../../chunks/ssr.js";
import mqtt from "mqtt";
import { TimeSeries } from "smoothie";
import { p as prefersReducedMotionStore, s as slide } from "../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { w as writable } from "../../../../chunks/index.js";
import { g as getModalStore } from "../../../../chunks/stores.js";
import { d as data } from "../../../../chunks/combined-tutorials.js";
import { p as page } from "../../../../chunks/stores2.js";
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  let { autocollapse = false } = $$props;
  let { width = "w-full" } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { disabled = false } = $$props;
  let { padding = "py-2 px-4" } = $$props;
  let { hover = "hover:bg-primary-hover-token" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { caretOpen = "rotate-180" } = $$props;
  let { caretClosed = "" } = $$props;
  let { regionControl = "" } = $$props;
  let { regionPanel = "space-y-4" } = $$props;
  let { regionCaret = "" } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { transitionIn = slide } = $$props;
  let { transitionInParams = { duration: 200 } } = $$props;
  let { transitionOut = slide } = $$props;
  let { transitionOutParams = { duration: 200 } } = $$props;
  const active = writable(null);
  setContext("active", active);
  setContext("autocollapse", autocollapse);
  setContext("disabled", disabled);
  setContext("padding", padding);
  setContext("hover", hover);
  setContext("rounded", rounded);
  setContext("caretOpen", caretOpen);
  setContext("caretClosed", caretClosed);
  setContext("regionControl", regionControl);
  setContext("regionPanel", regionPanel);
  setContext("regionCaret", regionCaret);
  setContext("transitions", transitions);
  setContext("transitionIn", transitionIn);
  setContext("transitionInParams", transitionInParams);
  setContext("transitionOut", transitionOut);
  setContext("transitionOutParams", transitionOutParams);
  if ($$props.autocollapse === void 0 && $$bindings.autocollapse && autocollapse !== void 0)
    $$bindings.autocollapse(autocollapse);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.caretOpen === void 0 && $$bindings.caretOpen && caretOpen !== void 0)
    $$bindings.caretOpen(caretOpen);
  if ($$props.caretClosed === void 0 && $$bindings.caretClosed && caretClosed !== void 0)
    $$bindings.caretClosed(caretClosed);
  if ($$props.regionControl === void 0 && $$bindings.regionControl && regionControl !== void 0)
    $$bindings.regionControl(regionControl);
  if ($$props.regionPanel === void 0 && $$bindings.regionPanel && regionPanel !== void 0)
    $$bindings.regionPanel(regionPanel);
  if ($$props.regionCaret === void 0 && $$bindings.regionCaret && regionCaret !== void 0)
    $$bindings.regionCaret(regionCaret);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0)
    $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0)
    $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0)
    $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0)
    $$bindings.transitionOutParams(transitionOutParams);
  classesBase = `${width} ${spacing} ${$$props.class ?? ""}`;
  $$unsubscribe_prefersReducedMotionStore();
  return ` <div class="${"accordion " + escape(classesBase, true)}" data-testid="accordion">${slots.default ? slots.default({}) : ``}</div>`;
});
const cBase = "";
const cControl = "text-start w-full flex items-center space-x-4";
const cControlCaret = "fill-current w-3 transition-transform duration-[200ms]";
const cPanel = "";
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let openState;
  let classesBase;
  let classesControl;
  let classesCaretState;
  let classesControlCaret;
  let classesPanel;
  let $$slots = compute_slots(slots);
  let $active, $$unsubscribe_active;
  const dispatch = createEventDispatcher();
  let { open = false } = $$props;
  let { id = String(Math.random()) } = $$props;
  let { autocollapse = getContext("autocollapse") } = $$props;
  let { active = getContext("active") } = $$props;
  $$unsubscribe_active = subscribe(active, (value) => $active = value);
  let { disabled = getContext("disabled") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { caretOpen = getContext("caretOpen") } = $$props;
  let { caretClosed = getContext("caretClosed") } = $$props;
  let { regionControl = getContext("regionControl") } = $$props;
  let { regionPanel = getContext("regionPanel") } = $$props;
  let { regionCaret = getContext("regionCaret") } = $$props;
  let { transitions = getContext("transitions") } = $$props;
  let { transitionIn = getContext("transitionIn") } = $$props;
  let { transitionInParams = getContext("transitionInParams") } = $$props;
  let { transitionOut = getContext("transitionOut") } = $$props;
  let { transitionOutParams = getContext("transitionOutParams") } = $$props;
  function setActive(event) {
    if (autocollapse === true) {
      active.set(id);
    } else {
      open = !open;
    }
    onToggle(event);
  }
  function onToggle(event) {
    const currentOpenState = autocollapse ? $active === id : open;
    dispatch("toggle", {
      event,
      id,
      panelId: `accordion-panel-${id}`,
      open: currentOpenState,
      autocollapse
    });
  }
  if (autocollapse && open)
    setActive();
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.autocollapse === void 0 && $$bindings.autocollapse && autocollapse !== void 0)
    $$bindings.autocollapse(autocollapse);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.caretOpen === void 0 && $$bindings.caretOpen && caretOpen !== void 0)
    $$bindings.caretOpen(caretOpen);
  if ($$props.caretClosed === void 0 && $$bindings.caretClosed && caretClosed !== void 0)
    $$bindings.caretClosed(caretClosed);
  if ($$props.regionControl === void 0 && $$bindings.regionControl && regionControl !== void 0)
    $$bindings.regionControl(regionControl);
  if ($$props.regionPanel === void 0 && $$bindings.regionPanel && regionPanel !== void 0)
    $$bindings.regionPanel(regionPanel);
  if ($$props.regionCaret === void 0 && $$bindings.regionCaret && regionCaret !== void 0)
    $$bindings.regionCaret(regionCaret);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0)
    $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0)
    $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0)
    $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0)
    $$bindings.transitionOutParams(transitionOutParams);
  {
    if (open && autocollapse)
      setActive();
  }
  openState = autocollapse ? $active === id : open;
  classesBase = `${cBase} ${$$props.class ?? ""}`;
  classesControl = `${cControl} ${padding} ${hover} ${rounded} ${regionControl}`;
  classesCaretState = openState ? caretOpen : caretClosed;
  classesControlCaret = `${cControlCaret} ${regionCaret} ${classesCaretState}`;
  classesPanel = `${cPanel} ${padding} ${rounded} ${regionPanel}`;
  $$unsubscribe_active();
  return ` <div class="${"accordion-item " + escape(classesBase, true)}" data-testid="accordion-item"> <button type="button" class="${"accordion-control " + escape(classesControl, true)}"${add_attribute("id", id, 0)}${add_attribute("aria-expanded", openState, 0)} aria-controls="${"accordion-panel-" + escape(id, true)}" ${disabled ? "disabled" : ""}> ${$$slots.lead ? `<div class="accordion-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``}  <div class="accordion-summary flex-1">${slots.summary ? slots.summary({}) : `(summary)`}</div>  <div class="${"accordion-summary-caret " + escape(classesControlCaret, true)}"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg></div></button>  ${openState ? `<div class="${"accordion-panel " + escape(classesPanel, true)}" id="${"accordion-panel-" + escape(id, true)}" role="region"${add_attribute("aria-hidden", !openState, 0)}${add_attribute("aria-labelledby", id, 0)}>${slots.content ? slots.content({}) : `(content)`}</div>` : ``}</div>`;
});
const Graph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mqttClient } = $$props;
  let { topic } = $$props;
  let { label } = $$props;
  const line1 = new TimeSeries();
  let canvas;
  mqttClient.on("connect", () => {
    console.log("Connected to MQTT broker");
    console.log("Subscribing to topic:", topic);
    mqttClient.subscribe(topic, (err) => {
    });
  });
  mqttClient.on("message", (topic2, message) => {
    message = parseFloat(message.toString());
    console.log("Received message:", message);
    line1.append(/* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime(), message);
  });
  if ($$props.mqttClient === void 0 && $$bindings.mqttClient && mqttClient !== void 0)
    $$bindings.mqttClient(mqttClient);
  if ($$props.topic === void 0 && $$bindings.topic && topic !== void 0)
    $$bindings.topic(topic);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  return `<div class="mt-5 mb-5"><h2 class="text-lg font-semibold mb-2">${escape(label)}</h2> <p>Topic: ${escape(topic)}</p> <canvas width="900" height="344"${add_attribute("this", canvas, 0)}></canvas> </div>`;
});
const UserInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentTutorial = {} } = $$props;
  const mqttClient = mqtt.connect("mqtt://localhost:9001");
  let user_input = currentTutorial.user_input;
  mqttClient.on("connect", () => {
    console.log("Connected to MQTT broker");
  });
  mqttClient.on("error", (error) => {
    console.error("MQTT error:", error);
  });
  if ($$props.currentTutorial === void 0 && $$bindings.currentTutorial && currentTutorial !== void 0)
    $$bindings.currentTutorial(currentTutorial);
  return `<h2 class="h2 mt-5 mb-5" data-svelte-h="svelte-19dogvw">User Input:</h2> ${user_input.buttons?.length > 0 ? `<div class="mt-4"><div class="text-2xl font-semibold mb-2" data-svelte-h="svelte-h1ubab">Buttons:</div> ${each(user_input.buttons, (button) => {
    return `<p class="mt-3 mb-3">Topic: ${escape(currentTutorial.id + "/" + button.topic)}</p> <button class="btn variant-filled-error">${escape(button.label)} </button>`;
  })}</div>` : ``} ${user_input.sliders?.length > 0 ? `<div class="mt-4"><h2 class="text-2xl font-semibold mb-2" data-svelte-h="svelte-my23ri">Sliders:</h2> ${each(user_input.sliders, (slider) => {
    return `<label class="text-lg font-semibold mb-2">${escape(slider.label)}</label> <p class="mt-3 mb-3">Topic: ${escape(currentTutorial.id + "/" + slider.topic)}</p> <input type="range" min="0" max="100" step="1">`;
  })}</div>` : ``} ${user_input.graphs?.length > 0 ? `<div class="mt-4"><h2 class="text-2xl font-semibold mb-2" data-svelte-h="svelte-tod9m1">Graphs:</h2> ${each(user_input.graphs, (graph) => {
    return `${validate_component(Graph, "Graph").$$render(
      $$result,
      {
        mqttClient,
        topic: currentTutorial.id + "/" + graph.topic,
        label: graph.label
      },
      {},
      {}
    )}`;
  })}</div>` : ``}`;
});
const Arrow_left = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" style="transform: scaleX(-1);" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M13.2328 16.4569C12.9328 16.7426 12.9212 17.2173 13.2069 17.5172C13.4926 17.8172 13.9673 17.8288 14.2672 17.5431L13.2328 16.4569ZM19.5172 12.5431C19.8172 12.2574 19.8288 11.7827 19.5431 11.4828C19.2574 11.1828 18.7827 11.1712 18.4828 11.4569L19.5172 12.5431ZM18.4828 12.5431C18.7827 12.8288 19.2574 12.8172 19.5431 12.5172C19.8288 12.2173 19.8172 11.7426 19.5172 11.4569L18.4828 12.5431ZM14.2672 6.4569C13.9673 6.17123 13.4926 6.18281 13.2069 6.48276C12.9212 6.78271 12.9328 7.25744 13.2328 7.5431L14.2672 6.4569ZM19 12.75C19.4142 12.75 19.75 12.4142 19.75 12C19.75 11.5858 19.4142 11.25 19 11.25V12.75ZM5 11.25C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75V11.25ZM14.2672 17.5431L19.5172 12.5431L18.4828 11.4569L13.2328 16.4569L14.2672 17.5431ZM19.5172 11.4569L14.2672 6.4569L13.2328 7.5431L18.4828 12.5431L19.5172 11.4569ZM19 11.25L5 11.25V12.75L19 12.75V11.25Z" fill="#ffffff"></path></g></svg>`;
});
const Components = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { components = [] } = $$props;
  console.log(components);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  return `<h1 class="h2 mt-5 mb-5" data-svelte-h="svelte-6mphmz">Components</h1> <div class="card p-5 rounded-xl">${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
    default: () => {
      return `${each(components, (component) => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
          content: () => {
            return `${escape(component.description)}`;
          },
          summary: () => {
            return `<span class="text-lg font-bold">${escape(component.name)}</span>`;
          }
        })}`;
      })}`;
    }
  })}</div>`;
});
const Intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { intro = "" } = $$props;
  if ($$props.intro === void 0 && $$bindings.intro && intro !== void 0)
    $$bindings.intro(intro);
  return `<h2 class="h2 mt-5" data-svelte-h="svelte-e9wite">Intro</h2> <p>${escape(intro)}</p>`;
});
const Solution = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getModalStore();
  let { solution = { explanation: "", code: "" } } = $$props;
  if ($$props.solution === void 0 && $$bindings.solution && solution !== void 0)
    $$bindings.solution(solution);
  return `<h2 class="h2 mb-5" data-svelte-h="svelte-1t5tqut">Solution</h2> ${`<button class="btn variant-filled-warning" data-svelte-h="svelte-14fjtj5">Show Solution</button>`}`;
});
const Story = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { story = "" } = $$props;
  if ($$props.story === void 0 && $$bindings.story && story !== void 0)
    $$bindings.story(story);
  return `<h2 class="h2 mt-5 mb-5" data-svelte-h="svelte-1sbdz1q">Story</h2> <p>${escape(story)}</p>`;
});
function findTutorialIndexById(tutorials, tutorialId) {
  return tutorials.findIndex((tutorial) => tutorial.id === tutorialId);
}
const ExerciseCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { exercise } = $$props;
  let tutorialIndex = findTutorialIndexById(data.tutorials, exercise);
  let currentTutorial = data.tutorials[tutorialIndex];
  if ($$props.exercise === void 0 && $$bindings.exercise && exercise !== void 0)
    $$bindings.exercise(exercise);
  return `<div class="card variant-soft p-16"><header class="card-header"><div class="flex align-baseline space-x-5"><a href="/exercises" class="btn p-0 bg-white w-12 h-12 variant-ghost-secondary rounded-2xl">${validate_component(Arrow_left, "Icon").$$render($$result, {}, {}, {})}</a> <h1 class="h1"><span class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone">${escape(currentTutorial.title)}</span></h1></div></header> <section class="p-4">${currentTutorial ? `${validate_component(Intro, "Intro").$$render($$result, { intro: currentTutorial.intro }, {}, {})} ${validate_component(Components, "Components").$$render($$result, { components: currentTutorial.components }, {}, {})} ${validate_component(Story, "Story").$$render($$result, { story: currentTutorial.story }, {}, {})} ${validate_component(UserInput, "UserInput").$$render($$result, { currentTutorial }, {}, {})} ${validate_component(Solution, "Solution").$$render($$result, { solution: currentTutorial.solution }, {}, {})}` : `<p>No tutorial found for exercise ${escape(exercise)}</p>`}</section> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let exercise = $page.params.exerciseId;
  $$unsubscribe_page();
  return `<div class="container mx-auto">${validate_component(ExerciseCard, "ExerciseCard").$$render($$result, { exercise }, {}, {})}</div>`;
});
export {
  Page as default
};
