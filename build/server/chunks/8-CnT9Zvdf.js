import { P as PUBLIC_STRAPI_URL } from './public-CNFaYwnI.js';

//#region src/routes/actions/+page.js
async function load({ params }) {
	return await (await fetch(`${PUBLIC_STRAPI_URL}/api/actions?populate=*`)).json();
}

var _page = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DV0BKFu3.js')).default;
const universal_id = "src/routes/actions/+page.js";
const imports = ["_app/immutable/nodes/8.Cms7yxOV.js","_app/immutable/chunks/Xf70Baoe.js","_app/immutable/chunks/l4Ok9s1x.js","_app/immutable/chunks/xihTtKlq.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=8-CnT9Zvdf.js.map
