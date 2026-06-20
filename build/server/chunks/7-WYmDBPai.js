import { P as PUBLIC_STRAPI_URL } from './public-CNFaYwnI.js';

//#region src/routes/about/howto/+page.js
async function load({ params }) {
	return await (await fetch(`${PUBLIC_STRAPI_URL}/api/lesson-plans?populate=*`)).json();
}

var _page = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-bAddLK4E.js')).default;
const universal_id = "src/routes/about/howto/+page.js";
const imports = ["_app/immutable/nodes/7.DaKudE3e.js","_app/immutable/chunks/Xf70Baoe.js","_app/immutable/chunks/l4Ok9s1x.js","_app/immutable/chunks/CWS1LksB.js","_app/immutable/chunks/oXK2wOQ4.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/xCGOj7KR.js"];
const stylesheets = ["_app/immutable/assets/blocks_renderer.KoOTbvmw.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=7-WYmDBPai.js.map
