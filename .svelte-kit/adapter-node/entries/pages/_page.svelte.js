import { c as create_ssr_component, k as subscribe, l as createEventDispatcher, s as setContext, e as escape, n as each, g as getContext, o as set_store_value, p as onDestroy, a as add_attribute, b as compute_slots, v as validate_component } from "../../chunks/ssr.js";
import { p as prefersReducedMotionStore, a as fade } from "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { w as writable } from "../../chunks/index.js";
const cBase$1 = "space-y-4";
const cHeader$1 = "flex items-center border-t mt-[15px]";
const cHeaderStep = "-mt-[15px] transition-all duration-300";
const cContent$1 = "";
const Stepper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isActive;
  let classesBase;
  let classesHeader;
  let classesHeaderStep;
  let classesBadge;
  let classesContent;
  let $state, $$unsubscribe_state;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  const dispatch = createEventDispatcher();
  let { gap = "gap-4" } = $$props;
  let { stepTerm = "Step" } = $$props;
  let { badge = "variant-filled-surface" } = $$props;
  let { active = "variant-filled" } = $$props;
  let { border = "border-surface-400-500-token" } = $$props;
  let { start = 0 } = $$props;
  let { justify = "justify-between" } = $$props;
  let { buttonBack = "variant-ghost" } = $$props;
  let { buttonBackType = "button" } = $$props;
  let { buttonBackLabel = "&larr; Back" } = $$props;
  let { buttonNext = "variant-filled" } = $$props;
  let { buttonNextType = "button" } = $$props;
  let { buttonNextLabel = "Next &rarr;" } = $$props;
  let { buttonComplete = "variant-filled-primary" } = $$props;
  let { buttonCompleteType = "button" } = $$props;
  let { buttonCompleteLabel = "Complete" } = $$props;
  let { regionHeader = "" } = $$props;
  let { regionContent = "" } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { transitionIn = fade } = $$props;
  let { transitionInParams = { duration: 100 } } = $$props;
  let { transitionOut = fade } = $$props;
  let { transitionOutParams = { duration: 100 } } = $$props;
  let state = writable({ current: start, total: 0 });
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  setContext("state", state);
  setContext("dispatchParent", dispatch);
  setContext("stepTerm", stepTerm);
  setContext("gap", gap);
  setContext("justify", justify);
  setContext("buttonBack", buttonBack);
  setContext("buttonBackType", buttonBackType);
  setContext("buttonBackLabel", buttonBackLabel);
  setContext("buttonNext", buttonNext);
  setContext("buttonNextType", buttonNextType);
  setContext("buttonNextLabel", buttonNextLabel);
  setContext("buttonComplete", buttonComplete);
  setContext("buttonCompleteType", buttonCompleteType);
  setContext("buttonCompleteLabel", buttonCompleteLabel);
  setContext("transitions", transitions);
  setContext("transitionIn", transitionIn);
  setContext("transitionInParams", transitionInParams);
  setContext("transitionOut", transitionOut);
  setContext("transitionOutParams", transitionOutParams);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.stepTerm === void 0 && $$bindings.stepTerm && stepTerm !== void 0)
    $$bindings.stepTerm(stepTerm);
  if ($$props.badge === void 0 && $$bindings.badge && badge !== void 0)
    $$bindings.badge(badge);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.buttonBack === void 0 && $$bindings.buttonBack && buttonBack !== void 0)
    $$bindings.buttonBack(buttonBack);
  if ($$props.buttonBackType === void 0 && $$bindings.buttonBackType && buttonBackType !== void 0)
    $$bindings.buttonBackType(buttonBackType);
  if ($$props.buttonBackLabel === void 0 && $$bindings.buttonBackLabel && buttonBackLabel !== void 0)
    $$bindings.buttonBackLabel(buttonBackLabel);
  if ($$props.buttonNext === void 0 && $$bindings.buttonNext && buttonNext !== void 0)
    $$bindings.buttonNext(buttonNext);
  if ($$props.buttonNextType === void 0 && $$bindings.buttonNextType && buttonNextType !== void 0)
    $$bindings.buttonNextType(buttonNextType);
  if ($$props.buttonNextLabel === void 0 && $$bindings.buttonNextLabel && buttonNextLabel !== void 0)
    $$bindings.buttonNextLabel(buttonNextLabel);
  if ($$props.buttonComplete === void 0 && $$bindings.buttonComplete && buttonComplete !== void 0)
    $$bindings.buttonComplete(buttonComplete);
  if ($$props.buttonCompleteType === void 0 && $$bindings.buttonCompleteType && buttonCompleteType !== void 0)
    $$bindings.buttonCompleteType(buttonCompleteType);
  if ($$props.buttonCompleteLabel === void 0 && $$bindings.buttonCompleteLabel && buttonCompleteLabel !== void 0)
    $$bindings.buttonCompleteLabel(buttonCompleteLabel);
  if ($$props.regionHeader === void 0 && $$bindings.regionHeader && regionHeader !== void 0)
    $$bindings.regionHeader(regionHeader);
  if ($$props.regionContent === void 0 && $$bindings.regionContent && regionContent !== void 0)
    $$bindings.regionContent(regionContent);
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
  isActive = (step) => step === $state.current;
  classesBase = `${cBase$1} ${$$props.class ?? ""}`;
  classesHeader = `${cHeader$1} ${border} ${gap} ${regionHeader}`;
  classesHeaderStep = `${cHeaderStep}`;
  classesBadge = (step) => isActive(step) ? active : badge;
  classesContent = `${cContent$1} ${regionContent}`;
  $$unsubscribe_state();
  $$unsubscribe_prefersReducedMotionStore();
  return `<div class="${"stepper " + escape(classesBase, true)}" data-testid="stepper"> ${$state.total ? `<header class="${"stepper-header " + escape(classesHeader, true)}">${each(Array.from(Array($state.total).keys()), (step) => {
    return `<div class="${[
      "stepper-header-step " + escape(classesHeaderStep, true),
      isActive(step) ? "flex-1" : ""
    ].join(" ").trim()}"><span class="${"badge " + escape(classesBadge(step), true)}">${escape(isActive(step) ? `${stepTerm} ${step + 1}` : step + 1)}</span> </div>`;
  })}</header>` : ``}  <div class="${"stepper-content " + escape(classesContent, true)}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const cBase = "space-y-4";
const cHeader = "text-2xl font-bold";
const cContent = "space-y-4";
const cNavigation = "flex";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesHeader;
  let classesContent;
  let classesNavigation;
  let $$slots = compute_slots(slots);
  let $state, $$unsubscribe_state;
  let { locked = false } = $$props;
  let { regionHeader = "" } = $$props;
  let { regionContent = "" } = $$props;
  let { regionNavigation = "" } = $$props;
  let { state = getContext("state") } = $$props;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  let { dispatchParent = getContext("dispatchParent") } = $$props;
  let { stepTerm = getContext("stepTerm") } = $$props;
  let { gap = getContext("gap") } = $$props;
  let { justify = getContext("justify") } = $$props;
  let { buttonBack = getContext("buttonBack") } = $$props;
  let { buttonBackType = getContext("buttonBackType") } = $$props;
  let { buttonBackLabel = getContext("buttonBackLabel") } = $$props;
  let { buttonNext = getContext("buttonNext") } = $$props;
  let { buttonNextType = getContext("buttonNextType") } = $$props;
  let { buttonNextLabel = getContext("buttonNextLabel") } = $$props;
  let { buttonComplete = getContext("buttonComplete") } = $$props;
  let { buttonCompleteType = getContext("buttonCompleteType") } = $$props;
  let { buttonCompleteLabel = getContext("buttonCompleteLabel") } = $$props;
  let { transitions = getContext("transitions") } = $$props;
  let { transitionIn = getContext("transitionIn") } = $$props;
  let { transitionInParams = getContext("transitionInParams") } = $$props;
  let { transitionOut = getContext("transitionOut") } = $$props;
  let { transitionOutParams = getContext("transitionOutParams") } = $$props;
  const stepIndex = $state.total;
  set_store_value(state, $state.total++, $state);
  onDestroy(() => {
    set_store_value(state, $state.total--, $state);
  });
  if ($$props.locked === void 0 && $$bindings.locked && locked !== void 0)
    $$bindings.locked(locked);
  if ($$props.regionHeader === void 0 && $$bindings.regionHeader && regionHeader !== void 0)
    $$bindings.regionHeader(regionHeader);
  if ($$props.regionContent === void 0 && $$bindings.regionContent && regionContent !== void 0)
    $$bindings.regionContent(regionContent);
  if ($$props.regionNavigation === void 0 && $$bindings.regionNavigation && regionNavigation !== void 0)
    $$bindings.regionNavigation(regionNavigation);
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  if ($$props.dispatchParent === void 0 && $$bindings.dispatchParent && dispatchParent !== void 0)
    $$bindings.dispatchParent(dispatchParent);
  if ($$props.stepTerm === void 0 && $$bindings.stepTerm && stepTerm !== void 0)
    $$bindings.stepTerm(stepTerm);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.buttonBack === void 0 && $$bindings.buttonBack && buttonBack !== void 0)
    $$bindings.buttonBack(buttonBack);
  if ($$props.buttonBackType === void 0 && $$bindings.buttonBackType && buttonBackType !== void 0)
    $$bindings.buttonBackType(buttonBackType);
  if ($$props.buttonBackLabel === void 0 && $$bindings.buttonBackLabel && buttonBackLabel !== void 0)
    $$bindings.buttonBackLabel(buttonBackLabel);
  if ($$props.buttonNext === void 0 && $$bindings.buttonNext && buttonNext !== void 0)
    $$bindings.buttonNext(buttonNext);
  if ($$props.buttonNextType === void 0 && $$bindings.buttonNextType && buttonNextType !== void 0)
    $$bindings.buttonNextType(buttonNextType);
  if ($$props.buttonNextLabel === void 0 && $$bindings.buttonNextLabel && buttonNextLabel !== void 0)
    $$bindings.buttonNextLabel(buttonNextLabel);
  if ($$props.buttonComplete === void 0 && $$bindings.buttonComplete && buttonComplete !== void 0)
    $$bindings.buttonComplete(buttonComplete);
  if ($$props.buttonCompleteType === void 0 && $$bindings.buttonCompleteType && buttonCompleteType !== void 0)
    $$bindings.buttonCompleteType(buttonCompleteType);
  if ($$props.buttonCompleteLabel === void 0 && $$bindings.buttonCompleteLabel && buttonCompleteLabel !== void 0)
    $$bindings.buttonCompleteLabel(buttonCompleteLabel);
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
  classesBase = `${cBase} ${$$props.class ?? ""}`;
  classesHeader = `${cHeader} ${regionHeader}`;
  classesContent = `${cContent} ${regionContent}`;
  classesNavigation = `${cNavigation} ${justify} ${gap} ${regionNavigation}`;
  $$unsubscribe_state();
  return `  ${stepIndex === $state.current ? `<div class="${"step " + escape(classesBase, true)}" data-testid="step"> <header class="${"step-header " + escape(classesHeader, true)}">${slots.header ? slots.header({}) : `${escape(stepTerm)} ${escape(stepIndex + 1)}`}</header>  <div class="${"step-content " + escape(classesContent, true)}">${slots.default ? slots.default({}) : `(${escape(stepTerm)} ${escape(stepIndex + 1)} Content)`}</div>  ${$state.total > 1 ? `<div class="${"step-navigation " + escape(classesNavigation, true)}">${stepIndex === 0 && $$slots.navigation ? ` <div class="step-navigation-slot">${slots.navigation ? slots.navigation({}) : ``}</div>` : ` <button${add_attribute("type", buttonBackType, 0)} class="${"btn " + escape(buttonBack, true)}" ${$state.current === 0 ? "disabled" : ""}><!-- HTML_TAG_START -->${buttonBackLabel}<!-- HTML_TAG_END --></button>`} ${stepIndex < $state.total - 1 ? ` <button${add_attribute("type", buttonNextType, 0)} class="${"btn " + escape(buttonNext, true)}" ${locked ? "disabled" : ""}>${locked ? `<svg class="w-3 aspect-square fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"></path></svg>` : ``} <span><!-- HTML_TAG_START -->${buttonNextLabel}<!-- HTML_TAG_END --></span></button>` : ` <button${add_attribute("type", buttonCompleteType, 0)} class="${"btn " + escape(buttonComplete, true)}" ${locked ? "disabled" : ""}><!-- HTML_TAG_START -->${buttonCompleteLabel}<!-- HTML_TAG_END --></button>`}</div>` : ``}</div>` : ``}`;
});
const canUseDOM = () => typeof window !== "undefined" && "document" in window && "location" in window;
const getLocation = (source) => {
  return {
    ...source.location,
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  };
};
const createHistory = (source) => {
  const listeners = [];
  let location = getLocation(source);
  return {
    get location() {
      return location;
    },
    listen(listener) {
      listeners.push(listener);
      const popstateListener = () => {
        location = getLocation(source);
        listener({ location, action: "POP" });
      };
      source.addEventListener("popstate", popstateListener);
      return () => {
        source.removeEventListener("popstate", popstateListener);
        const index = listeners.indexOf(listener);
        listeners.splice(index, 1);
      };
    },
    navigate(to, { state, replace = false, preserveScroll = false, blurActiveElement = true } = {}) {
      state = { ...state, key: Date.now() + "" };
      try {
        if (replace)
          source.history.replaceState(state, "", to);
        else
          source.history.pushState(state, "", to);
      } catch (e) {
        source.location[replace ? "replace" : "assign"](to);
      }
      location = getLocation(source);
      listeners.forEach(
        (listener) => listener({ location, action: "PUSH", preserveScroll })
      );
      if (blurActiveElement)
        document.activeElement.blur();
    }
  };
};
const createMemorySource = (initialPathname = "/") => {
  let index = 0;
  const stack = [{ pathname: initialPathname, search: "" }];
  const states = [];
  return {
    get location() {
      return stack[index];
    },
    addEventListener(name, fn) {
    },
    removeEventListener(name, fn) {
    },
    history: {
      get entries() {
        return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return states[index];
      },
      pushState(state, _, uri) {
        const [pathname, search = ""] = uri.split("?");
        index++;
        stack.push({ pathname, search });
        states.push(state);
      },
      replaceState(state, _, uri) {
        const [pathname, search = ""] = uri.split("?");
        stack[index] = { pathname, search };
        states[index] = state;
      }
    }
  };
};
createHistory(
  canUseDOM() ? window : createMemorySource()
);
const Lorem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-di6tbl">Proident ullamco do labore magna. Culpa reprehenderit id elit laboris pariatur velit pariatur.
	Anim aute eu sint amet ad excepteur eu sint eiusmod aute et. Ullamco adipisicing ad exercitation
	quis eu duis laboris aute. Enim laboris cillum commodo dolor excepteur in. Nulla culpa id duis
	aliqua commodo nisi excepteur deserunt sint adipisicing irure commodo sit. Tempor mollit est elit
	irure anim magna laboris commodo. Ut id Lorem ullamco excepteur eiusmod eu laborum anim cillum in
	laboris sit. Labore veniam sit anim aliqua cupidatat excepteur occaecat magna excepteur. Nulla
	culpa anim sit veniam quis nisi laborum. Ut aliqua quis quis velit amet Lorem aliqua. Pariatur
	irure irure ex ut nisi laborum qui elit aute sit. Ut consequat dolore et nulla aute aute
	exercitation sunt Lorem enim amet. Deserunt culpa tempor dolore veniam consectetur commodo irure
	amet non cillum nulla anim duis dolor. Ex tempor dolore ullamco adipisicing velit incididunt
	ullamco. Sit fugiat proident ullamco do aliqua pariatur deserunt nisi irure ullamco ut sint enim
	ea. Quis in voluptate consectetur mollit ea labore laborum. Reprehenderit fugiat minim dolore et
	laborum ipsum aliquip occaecat do cillum enim. Laborum exercitation nulla ea commodo enim nostrud
	quis ut commodo</p>`;
});
const MainCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="card variant-soft p-16">${validate_component(Stepper, "Stepper").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Step, "Step").$$render($$result, {}, {}, {
        header: () => {
          return `Welcome`;
        },
        default: () => {
          return `${validate_component(Lorem, "Lorem").$$render($$result, {}, {}, {})}`;
        }
      })} ${validate_component(Step, "Step").$$render($$result, {}, {}, {
        header: () => {
          return `IoT-Education Board`;
        },
        default: () => {
          return `${validate_component(Lorem, "Lorem").$$render($$result, {}, {}, {})}`;
        }
      })} ${validate_component(Step, "Step").$$render($$result, {}, {}, {
        header: () => {
          return `Visual Studio Code`;
        },
        default: () => {
          return `${validate_component(Lorem, "Lorem").$$render($$result, {}, {}, {})}`;
        }
      })} ${validate_component(Step, "Step").$$render($$result, {}, {}, {
        header: () => {
          return `Platform IO`;
        },
        default: () => {
          return `${validate_component(Lorem, "Lorem").$$render($$result, {}, {}, {})}`;
        }
      })} ${validate_component(Step, "Step").$$render($$result, {}, {}, {
        header: () => {
          return `How does it work?`;
        },
        default: () => {
          return `${validate_component(Lorem, "Lorem").$$render($$result, {}, {}, {})}`;
        }
      })} ${validate_component(Step, "Step").$$render($$result, {}, {}, {
        header: () => {
          return `File structure`;
        },
        default: () => {
          return `${validate_component(Lorem, "Lorem").$$render($$result, {}, {}, {})}`;
        }
      })} ${validate_component(Step, "Step").$$render($$result, {}, {}, {
        header: () => {
          return `Have Fun!`;
        },
        default: () => {
          return `${validate_component(Lorem, "Lorem").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container mx-auto">${validate_component(MainCard, "MainCard").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
