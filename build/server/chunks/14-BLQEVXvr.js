import { P as PUBLIC_STRAPI_URL } from './public-CNFaYwnI.js';

//#region src/routes/modules/[slug]/+page.js
async function load({ params }) {
	return await (await fetch(`${PUBLIC_STRAPI_URL}/api/learning-modules/${params.slug}?populate=*`)).json();
}

var _page = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C32UcSij.js')).default;
const universal_id = "src/routes/modules/[slug]/+page.js";
const imports = ["_app/immutable/nodes/14.CCgfTAkN.js","_app/immutable/chunks/Xf70Baoe.js","_app/immutable/chunks/l4Ok9s1x.js","_app/immutable/chunks/BfVv2tS0.js","_app/immutable/chunks/DnYebt4I.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/DV5iELcj.js","_app/immutable/chunks/BWv1JkdC.js","_app/immutable/chunks/xCGOj7KR.js"];
const stylesheets = ["_app/immutable/assets/blocks_renderer.KoOTbvmw.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=14-BLQEVXvr.js.map
