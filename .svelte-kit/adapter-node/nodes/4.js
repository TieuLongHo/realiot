import * as universal from '../entries/pages/exercises/_exerciseId_/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/exercises/_exerciseId_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/exercises/[exerciseId]/+page.ts";
export const imports = ["_app/immutable/nodes/4.5YJzL7d-.js","_app/immutable/chunks/scheduler.XPdri8eM.js","_app/immutable/chunks/index.feB5lYD0.js","_app/immutable/chunks/each.-oqiv04n.js","_app/immutable/chunks/mqtt.esm.TiVwhrDm.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.oD2DyzWQ.js","_app/immutable/chunks/index.6rTIfMeh.js","_app/immutable/chunks/stores.ktaxjYYd.js","_app/immutable/chunks/combined-tutorials.xwySuFA0.js","_app/immutable/chunks/stores.wynd5dga.js","_app/immutable/chunks/singletons.rkvBkrrW.js"];
export const stylesheets = ["_app/immutable/assets/4.46WfX2Md.css","_app/immutable/assets/ProgressBar.P4zMGmUE.css"];
export const fonts = [];
