import { e as escape_html, c as attr } from './server-ZNF6Hlfr.js';
import { P as PUBLIC_STRAPI_URL } from './public-CNFaYwnI.js';
import { B as BlocksRenderer } from './blocks_renderer-mk7nIrHg.js';

//#region src/lib/components/action.svelte
function Action($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { item, imgUrl } = $$props;
		$$renderer.push(`<h3 class="font-bold text-2xl">${escape_html(item.title)}</h3> <div class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4"><div class="col-span-1 w-full overflow-y-scroll p-2.5"><img class="w-full object-cover"${attr("src", imgUrl)} alt=""/></div> <div class="col-span-3 w-full overflow-y-scroll p-2.5">`);
		BlocksRenderer($$renderer, { content: item.action_info });
		$$renderer.push(`<!----></div></div> <div class="p-2">`);
		BlocksRenderer($$renderer, { content: item.long_text });
		$$renderer.push(`<!----></div>`);
	});
}
//#endregion
//#region src/routes/actions/[slug]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		function getImgUrl() {
			return PUBLIC_STRAPI_URL + data.data.image.url;
		}
		$$renderer.push(`<div class="mx-auto px-10 w-3/4 p-4">`);
		Action($$renderer, {
			item: data.data,
			imgUrl: getImgUrl()
		});
		$$renderer.push(`<!----></div>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BWkUmSFz.js.map
