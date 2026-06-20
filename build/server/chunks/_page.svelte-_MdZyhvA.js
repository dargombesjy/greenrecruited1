import { i as ensure_array_like, c as attr, f as stringify, e as escape_html } from './server-ZNF6Hlfr.js';
import './client-C4L3Bnc8.js';
import { P as PUBLIC_STRAPI_URL } from './public-CNFaYwnI.js';
import { B as BlocksRenderer } from './blocks_renderer-mk7nIrHg.js';
import './index-server-DQuk9j5G.js';
import './internal2-9edDzU87.js';
import './index-DBqjc0Yf.js';

//#region src/routes/about/guide/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		$$renderer.push(`<div class="p10 mx-auto my-8 w-3/4"><!--[-->`);
		const each_array = ensure_array_like(data.data);
		for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
			let item = each_array[idx];
			if (idx % 2 == 0) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="flex w-full"><div class="w-1/2"><img class="h-96 object-fill"${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(item.image.url)}`)} alt=""/></div> <div class="flex w-1/2 flex-col pr-4 pl-8"><p class="h-1/3 content-center text-3xl font-bold">${escape_html(item.title)}</p> <div class="h-1/3">`);
				BlocksRenderer($$renderer, { content: item.description });
				$$renderer.push(`<!----></div></div></div>`);
			} else {
				$$renderer.push("<!--[-1-->");
				$$renderer.push(`<div class="flex w-full"><div class="flex w-1/2 flex-col pr-4 pl-8"><p class="h-1/3 content-center text-3xl font-bold">${escape_html(item.title)}</p> <div class="h-1/3">`);
				BlocksRenderer($$renderer, { content: item.description });
				$$renderer.push(`<!----></div></div> <div class="w-1/2"><img class="h-96 object-fill"${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(item.image.url)}`)} alt=""/></div></div>`);
			}
			$$renderer.push(`<!--]-->`);
		}
		$$renderer.push(`<!--]--></div>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte-_MdZyhvA.js.map
