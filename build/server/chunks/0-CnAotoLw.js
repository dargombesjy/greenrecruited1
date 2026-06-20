//#region src/routes/+layout.server.js
function load({ locals }) {
	return { user: locals.user || null };
}

var _layout_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-DjvQ4JMZ.js')).default;
const server_id = "src/routes/+layout.server.js";
const imports = ["_app/immutable/nodes/0.4n7g5zAm.js","_app/immutable/chunks/Xf70Baoe.js","_app/immutable/chunks/BfVv2tS0.js","_app/immutable/chunks/DnYebt4I.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/DV5iELcj.js"];
const stylesheets = ["_app/immutable/assets/0.CaNJ3sm2.css"];
const fonts = ["_app/immutable/assets/roboto-cyrillic-ext-wght-normal.BCp_3N7R.woff2","_app/immutable/assets/roboto-cyrillic-wght-normal.fOt7epNf.woff2","_app/immutable/assets/roboto-greek-ext-wght-normal.Bgw4czJT.woff2","_app/immutable/assets/roboto-greek-wght-normal.DlT9XTxE.woff2","_app/immutable/assets/roboto-math-wght-normal.4a3xuzGk.woff2","_app/immutable/assets/roboto-symbols-wght-normal.B7iHSfaG.woff2","_app/immutable/assets/roboto-vietnamese-wght-normal._f1XEJpo.woff2","_app/immutable/assets/roboto-latin-ext-wght-normal.DYIxWhlt.woff2","_app/immutable/assets/roboto-latin-wght-normal.ccAYIvAh.woff2","_app/immutable/assets/raleway-cyrillic-ext-wght-normal.Dc5xu4We.woff2","_app/immutable/assets/raleway-cyrillic-wght-normal.B0Yo_ULV.woff2","_app/immutable/assets/raleway-vietnamese-wght-normal.wikBsL6_.woff2","_app/immutable/assets/raleway-latin-ext-wght-normal.CwtNDoQR.woff2","_app/immutable/assets/raleway-latin-wght-normal.CSF1BaNN.woff2"];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=0-CnAotoLw.js.map
