const manifest = (() => {
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
		client: {"start":"_app/immutable/entry/start.hIZ-nbj8.js","app":"_app/immutable/entry/app.EaGzAarN.js","imports":["_app/immutable/entry/start.hIZ-nbj8.js","_app/immutable/chunks/scheduler.XPdri8eM.js","_app/immutable/chunks/singletons.u0dfbgyk.js","_app/immutable/chunks/index.6rTIfMeh.js","_app/immutable/entry/app.EaGzAarN.js","_app/immutable/chunks/scheduler.XPdri8eM.js","_app/immutable/chunks/index.feB5lYD0.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-c2sTP8-j.js')),
			__memo(() => import('./chunks/1-ObR58x9D.js')),
			__memo(() => import('./chunks/2-5AJoKHby.js')),
			__memo(() => import('./chunks/3-zmaKwcsP.js')),
			__memo(() => import('./chunks/4-xFvA0G7a.js')),
			__memo(() => import('./chunks/5-cnHhUW2L.js'))
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

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
