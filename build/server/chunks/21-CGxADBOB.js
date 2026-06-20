import { P as PUBLIC_STRAPI_URL } from './public-CNFaYwnI.js';

//#region src/routes/simulations/[slug]/+page.js
async function load({ params }) {
	return await (await fetch(`${PUBLIC_STRAPI_URL}/api/simulations?filters[name]=${params.slug}&populate=*`)).json();
}

var _page = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 21;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CWhZQwI_.js')).default;
const universal_id = "src/routes/simulations/[slug]/+page.js";
const imports = ["_app/immutable/nodes/21.BrGbcC61.js","_app/immutable/chunks/Xf70Baoe.js","_app/immutable/chunks/l4Ok9s1x.js","_app/immutable/chunks/oXK2wOQ4.js","_app/immutable/chunks/CWS1LksB.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/xCGOj7KR.js"];
const stylesheets = ["_app/immutable/assets/blocks_renderer.KoOTbvmw.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=21-CGxADBOB.js.map
