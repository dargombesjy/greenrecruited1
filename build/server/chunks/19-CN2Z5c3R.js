import { P as PUBLIC_STRAPI_URL } from './public-CNFaYwnI.js';

//#region src/routes/resources/videos/[slug]/+page.js
async function load({ params }) {
	return await (await fetch(`${PUBLIC_STRAPI_URL}/api/resources-videos/${params.slug}?populate=*`)).json();
}

var _page = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 19;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-X1AhGOCZ.js')).default;
const universal_id = "src/routes/resources/videos/[slug]/+page.js";
const imports = ["_app/immutable/nodes/19.gt57XPh3.js","_app/immutable/chunks/Xf70Baoe.js","_app/immutable/chunks/l4Ok9s1x.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/xCGOj7KR.js"];
const stylesheets = ["_app/immutable/assets/blocks_renderer.KoOTbvmw.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=19-CN2Z5c3R.js.map
