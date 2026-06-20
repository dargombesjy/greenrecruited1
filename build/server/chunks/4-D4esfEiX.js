import { P as PUBLIC_STRAPI_URL } from './public-CNFaYwnI.js';

//#region src/routes/+page.js
async function load({ params }) {
	return await (await fetch(`${PUBLIC_STRAPI_URL}/api/home-page?populate=*`)).json();
}

var _page = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CF2tofHw.js')).default;
const universal_id = "src/routes/+page.js";
const imports = ["_app/immutable/nodes/4.DpfQXz6u.js","_app/immutable/chunks/Xf70Baoe.js","_app/immutable/chunks/l4Ok9s1x.js","_app/immutable/chunks/oXK2wOQ4.js","_app/immutable/chunks/CWS1LksB.js","_app/immutable/chunks/xihTtKlq.js"];
const stylesheets = ["_app/immutable/assets/4.DxTRl6cM.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=4-D4esfEiX.js.map
