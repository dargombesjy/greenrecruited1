import { e as escape_html, c as attr } from './server-ZNF6Hlfr.js';
import { B as BlocksRenderer } from './blocks_renderer-mk7nIrHg.js';

//#region src/lib/components/news.svelte
function News($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { item, imgUrl } = $$props;
		$$renderer.push(`<h3 class="font-bold text-2xl">${escape_html(item.title)}</h3> <div class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4"><div class="col-span-1 w-full overflow-y-scroll p-2.5"><img class="w-full object-cover"${attr("src", imgUrl)} alt=""/></div> <div class="col-span-3 w-full overflow-y-scroll p-2.5">`);
		BlocksRenderer($$renderer, { content: item.long_text });
		$$renderer.push(`<!----></div></div> <div class="p-2">`);
		BlocksRenderer($$renderer, { content: item.overview_info });
		$$renderer.push(`<!----></div>`);
	});
}

export { News as N };
//# sourceMappingURL=news-BDxpiObt.js.map
