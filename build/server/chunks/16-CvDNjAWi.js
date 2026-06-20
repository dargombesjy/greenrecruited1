import { P as PUBLIC_STRAPI_URL } from './public-CNFaYwnI.js';

//#region src/routes/resources/+page.js
async function load({ params }) {
	return await (await fetch(`${PUBLIC_STRAPI_URL}/api/resource?populate[0]=videos.thumbnail&populate[1]=news.thumbnail&populate[2]=articles.thumbnail`)).json();
}

var _page = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 16;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DtS5RREX.js')).default;
const universal_id = "src/routes/resources/+page.js";
const imports = ["_app/immutable/nodes/16.Dy0G9iCq.js","_app/immutable/chunks/Xf70Baoe.js","_app/immutable/chunks/l4Ok9s1x.js","_app/immutable/chunks/xihTtKlq.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=16-CvDNjAWi.js.map
