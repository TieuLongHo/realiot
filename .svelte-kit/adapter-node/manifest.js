export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["arrow-left.svg","favicon.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.5tEvckbb.js","app":"_app/immutable/entry/app.rWC6hjiW.js","imports":["_app/immutable/entry/start.5tEvckbb.js","_app/immutable/chunks/scheduler.XPdri8eM.js","_app/immutable/chunks/singletons.rkvBkrrW.js","_app/immutable/chunks/index.6rTIfMeh.js","_app/immutable/entry/app.rWC6hjiW.js","_app/immutable/chunks/scheduler.XPdri8eM.js","_app/immutable/chunks/index.feB5lYD0.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/exercises",
				pattern: /^\/exercises\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/exercises/[exerciseId]",
				pattern: /^\/exercises\/([^/]+?)\/?$/,
				params: [{"name":"exerciseId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

export const prerendered = new Set([]);
