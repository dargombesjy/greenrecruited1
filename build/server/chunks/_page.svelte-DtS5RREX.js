import { i as ensure_array_like, c as attr, f as stringify } from './server-ZNF6Hlfr.js';
import { P as PUBLIC_STRAPI_URL } from './public-CNFaYwnI.js';

//#region src/routes/resources/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		$$renderer.push(`<div class="mx-auto w-3/4"><h3 class="mt-4 py-2 font-bold text-3xl">VIDEO</h3> <div class="flex gap-2 overflow-x-auto"><!--[-->`);
		const each_array = ensure_array_like(data.data.videos);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let video = each_array[$$index];
			$$renderer.push(`<a${attr("href", `/resources/videos/${stringify(video.documentId)}`)} class="block" aria-label="product-wrapper"><div class="relative -z-10 w-80 flex-none"><img class="h-48 w-full object-cover"${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(video.thumbnail.url)}`)} alt=""/></div></a>`);
		}
		$$renderer.push(`<!--]--></div> <h3 class="mt-4 py-2 font-bold text-3xl">ARTIKEL</h3> <div class="flex gap-2 overflow-x-auto"><!--[-->`);
		const each_array_1 = ensure_array_like(data.data.articles);
		for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
			let article = each_array_1[$$index_1];
			$$renderer.push(`<a${attr("href", `/resources/article/${stringify(article.documentId)}`)} class="block" aria-label="product-wrapper"><div class="relative -z-10 w-80 flex-none"><img class="h-48 w-full object-cover"${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(article.thumbnail.url)}`)} alt=""/></div></a>`);
		}
		$$renderer.push(`<!--]--></div> <h3 class="mt-4 py-2 font-bold text-3xl">BERITA</h3> <div class="flex gap-2 overflow-x-auto"><!--[-->`);
		const each_array_2 = ensure_array_like(data.data.news);
		for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
			let news = each_array_2[$$index_2];
			$$renderer.push(`<a${attr("href", `/resources/news/${stringify(news.documentId)}`)} class="block" aria-label="product-wrapper"><div class="relative -z-10 w-80 flex-none"><img class="h-48 w-full object-cover"${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(news.thumbnail.url)}`)} alt=""/></div></a>`);
		}
		$$renderer.push(`<!--]--></div></div>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DtS5RREX.js.map
