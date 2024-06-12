import { c as create_ssr_component, n as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { d as data } from "../../../chunks/combined-tutorials.js";
const ExerciseSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tutorial = data.tutorials;
  return `${each(tutorial, (exercise) => {
    return `<a href="${"/exercises/" + escape(exercise.id, true)}"><div class="card variant-soft p-8 mb-10"><div class="inline-flex space-x-5"><h1 class="text-2xl">${escape(exercise.title)}</h1> ${exercise.difficulty === "easy" ? `<div class="variant-ghost-success h-6 w-12 text-center rounded-xl" data-svelte-h="svelte-lsosvp">Easy</div>` : `${exercise.difficulty === "intermediate" ? `<div class="variant-ghost-warning h-6 w-28 text-center rounded-xl" data-svelte-h="svelte-1oyfgsw">Intermediate</div>` : `${exercise.difficulty === "hard" ? `<div class="variant-ghost-error h-6 w-14 text-center rounded-xl" data-svelte-h="svelte-1lqu99p">Hard</div>` : ``}`}`}</div> <p class="m-9">${escape(exercise.intro)}</p></div> </a>`;
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container mx-auto">${validate_component(ExerciseSelect, "ExerciseSelect").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
