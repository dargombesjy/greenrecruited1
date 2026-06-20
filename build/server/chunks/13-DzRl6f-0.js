import { P as PUBLIC_STRAPI_URL } from './public-CNFaYwnI.js';

//#region src/routes/modules/+page.js
async function load({ params }) {
	return await (await fetch(`${PUBLIC_STRAPI_URL}/api/learning-modules?populate=*`)).json();
}

var _page = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DzNotHhA.js')).default;
const universal_id = "src/routes/modules/+page.js";
const imports = ["_app/immutable/nodes/13.AjzelN8E.js","_app/immutable/chunks/Xf70Baoe.js","_app/immutable/chunks/l4Ok9s1x.js","_app/immutable/chunks/xihTtKlq.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=13-DzRl6f-0.js.map
