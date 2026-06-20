import { i as ensure_array_like, c as attr, f as stringify, e as escape_html } from './server-ZNF6Hlfr.js';
import { P as PUBLIC_STRAPI_URL } from './public-CNFaYwnI.js';

//#region src/routes/actions/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		$$renderer.push(`<div class="mx-auto w-3/4 p-4"><div class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3"><!--[-->`);
		const each_array = ensure_array_like(data.data);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let item = each_array[$$index];
			$$renderer.push(`<div class="relative cursor-pointer overflow-hidden bg-white transition-all duration-300 hover:shadow-lg"><a${attr("href", `/actions/${stringify(item.documentId)}`)} class="block" aria-label="product-wrapper"><div class="aspect-8/6 w-full p-3"><img${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(item.image.url)}`)} alt="" class="h-full w-full object-fill"/></div> <div class="p-6"><hr class="mb-6 border border-gray-300"/> <div><h4>${escape_html(item.title)}</h4></div></div></a></div>`);
		}
		$$renderer.push(`<!--]--></div></div>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DV0BKFu3.js.map
