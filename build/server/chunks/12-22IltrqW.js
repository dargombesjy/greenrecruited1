import { P as PUBLIC_STRAPI_URL } from './public-CNFaYwnI.js';
import { e as error } from './index-6qZ6Qalj.js';
import './index-DBqjc0Yf.js';

//#region src/routes/forum/+page.js
async function load$1({ params }) {
	return await (await fetch(`${PUBLIC_STRAPI_URL}/api/forum-posts?populate=*`)).json();
}

var _page = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load$1
});

//#region src/routes/forum/+page.server.js
function load({ locals }) {
	if (!locals.user) console.log("not logged in");
}
async function actions({ request, locals }) {
	if (!locals.user || !locals.jwt) throw error(401, "Unauthorized");
	const formData = await request.formData();
	formData.get("title"), formData.get("content"), locals.user.id;
	await fetch(`${PUBLIC_STRAPI_URL}/api/forum-posts`, { method: "" });
}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Djje7F57.js')).default;
const universal_id = "src/routes/forum/+page.js";
const server_id = "src/routes/forum/+page.server.js";
const imports = ["_app/immutable/nodes/12.fJUtrML8.js","_app/immutable/chunks/Xf70Baoe.js","_app/immutable/chunks/l4Ok9s1x.js","_app/immutable/chunks/xihTtKlq.js"];
const stylesheets = ["_app/immutable/assets/12.Du9b_mwN.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=12-22IltrqW.js.map
