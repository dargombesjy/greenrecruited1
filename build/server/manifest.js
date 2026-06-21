const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/logo.jpg","images/logo.svg","robots.txt"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.BdNBXdPI.js",app:"_app/immutable/entry/app.BNholRIV.js",imports:["_app/immutable/entry/start.BdNBXdPI.js","_app/immutable/chunks/_S9ngg5a.js","_app/immutable/chunks/Xf70Baoe.js","_app/immutable/entry/app.BNholRIV.js","_app/immutable/chunks/Xf70Baoe.js","_app/immutable/chunks/kNaey6uv.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-clpo0xY3.js')),
			__memo(() => import('./chunks/1-Hxui5_Qj.js')),
			__memo(() => import('./chunks/2-39QDhjO9.js')),
			__memo(() => import('./chunks/3-BWY-4Azd.js')),
			__memo(() => import('./chunks/4-DxVvIQDF.js')),
			__memo(() => import('./chunks/5-C2CYy4ep.js')),
			__memo(() => import('./chunks/6-6AICvpij.js')),
			__memo(() => import('./chunks/7-B0UkVePw.js')),
			__memo(() => import('./chunks/8-CnT9Zvdf.js')),
			__memo(() => import('./chunks/9-DBmK45z-.js')),
			__memo(() => import('./chunks/10-CE9aS7jm.js')),
			__memo(() => import('./chunks/11-Bk1db1JC.js')),
			__memo(() => import('./chunks/12-22IltrqW.js')),
			__memo(() => import('./chunks/13-DzRl6f-0.js')),
			__memo(() => import('./chunks/14-BLQEVXvr.js')),
			__memo(() => import('./chunks/15-C5zVrEub.js')),
			__memo(() => import('./chunks/16-CvDNjAWi.js')),
			__memo(() => import('./chunks/17-B6D8ygtz.js')),
			__memo(() => import('./chunks/18-DdR8lIQs.js')),
			__memo(() => import('./chunks/19-CN2Z5c3R.js')),
			__memo(() => import('./chunks/20-CFocWtQB.js')),
			__memo(() => import('./chunks/21-vznFtKqC.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/about/guide",
				pattern: /^\/about\/guide\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/about/howto",
				pattern: /^\/about\/howto\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/actions",
				pattern: /^\/actions\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/actions/[slug]",
				pattern: /^\/actions\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/auth",
				pattern: /^\/auth\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/auth/login",
				pattern: /^\/auth\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/forum",
				pattern: /^\/forum\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/modules",
				pattern: /^\/modules\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/modules/[slug]",
				pattern: /^\/modules\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/reflection",
				pattern: /^\/reflection\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/resources",
				pattern: /^\/resources\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/resources/article/[slug]",
				pattern: /^\/resources\/article\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/resources/news/[slug]",
				pattern: /^\/resources\/news\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/resources/videos/[slug]",
				pattern: /^\/resources\/videos\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/simulations",
				pattern: /^\/simulations\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/simulations/[slug]",
				pattern: /^\/simulations\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
