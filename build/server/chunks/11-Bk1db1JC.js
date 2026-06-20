import { P as PUBLIC_STRAPI_URL } from './public-CNFaYwnI.js';
import { f as fail, r as redirect } from './index-6qZ6Qalj.js';
import './index-DBqjc0Yf.js';

//#region src/routes/auth/login/+page.server.js
async function actions({ request, cookies }) {
	const data = await request.formData();
	const identifier = data.get("email");
	const password = data.get("password");
	const res = await fetch(`${PUBLIC_STRAPI_URL}/api/auth/local`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			identifier,
			password
		})
	});
	const result = await res.json();
	if (!res.ok) return fail(400, { error: result.error?.message || "Login failed" });
	cookies.set({
		path: "/",
		httpOnly: true,
		sameSite: "strict",
		maxAge: 3600 * 24 * 7
	});
	throw redirect(303, "/");
}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions
});

const index = 11;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DACTbq9q.js')).default;
const server_id = "src/routes/auth/login/+page.server.js";
const imports = ["_app/immutable/nodes/11.kFaZHL6D.js","_app/immutable/chunks/Xf70Baoe.js","_app/immutable/chunks/BfVv2tS0.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/DV5iELcj.js","_app/immutable/chunks/BWv1JkdC.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=11-Bk1db1JC.js.map
