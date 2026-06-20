import { P as PUBLIC_STRAPI_URL } from './public-CNFaYwnI.js';
import { N as News } from './news-BDxpiObt.js';
import './server-ZNF6Hlfr.js';
import './blocks_renderer-mk7nIrHg.js';

//#region src/routes/resources/news/[slug]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		function getImgUrl() {
			return PUBLIC_STRAPI_URL + data.data.thumbnail.url;
		}
		$$renderer.push(`<div class="mx-auto px-10 w-3/4 p-4">`);
		News($$renderer, {
			item: data.data,
			imgUrl: getImgUrl()
		});
		$$renderer.push(`<!----></div>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DeJqnkHF.js.map
