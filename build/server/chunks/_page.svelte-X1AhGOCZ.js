import { c as attr, f as stringify } from './server-ZNF6Hlfr.js';
import { B as BlocksRenderer } from './blocks_renderer-mk7nIrHg.js';

//#region src/routes/resources/videos/[slug]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		$$renderer.push(`<div class="mx-auto px-10 w-3/4 p-4"><div class="flex"><div class="aspect-[16/9] w-full"><iframe class="h-full w-full"${attr("src", `https://youtube.com/embed/${stringify(data.data.video_id)}`)} frameborder="0" title="Test" name="video-01" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe></div></div> <div class="my-4">`);
		BlocksRenderer($$renderer, { content: data.data.long_text });
		$$renderer.push(`<!----></div></div>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte-X1AhGOCZ.js.map
