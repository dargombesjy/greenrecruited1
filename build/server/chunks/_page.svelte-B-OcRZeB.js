import { c as attr, f as stringify, e as escape_html } from './server-ZNF6Hlfr.js';
import { P as PUBLIC_STRAPI_URL } from './public-CNFaYwnI.js';

//#region src/routes/reflection/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		$$renderer.push(`<div class="w-3/4 mx-auto"><div class="relative -z-10 w-full"><img class="w-full object-fill"${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(data.data.main_image.url)}`)} alt=""/> <div class="absolute top-[75%] px-8 text-4xl font-bold text-white">${escape_html(data.data.title)}</div></div> <div class="my-8 flex w-full justify-between"><div class="w-1/2"><img class="w-full"${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(data.data.forum_image.url)}`)} alt=""/></div> <div class="flex w-1/2 flex-col p-4"><p class="text-[24pt]">${escape_html(data.data.forum_title)}</p> <div><span>${escape_html(data.data.forum_desc)}</span></div> <button class="mt-2 w-40 rounded-3xl bg-primary-50 p-2 text-white">Mulai diskusi</button></div></div></div>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte-B-OcRZeB.js.map
