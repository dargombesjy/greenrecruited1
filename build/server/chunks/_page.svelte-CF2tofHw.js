import { e as escape_html, c as attr, f as stringify, i as ensure_array_like } from './server-ZNF6Hlfr.js';
import './client-C4L3Bnc8.js';
import { P as PUBLIC_STRAPI_URL } from './public-CNFaYwnI.js';
import './index-server-DQuk9j5G.js';
import './internal2-9edDzU87.js';
import './index-DBqjc0Yf.js';

//#region src/lib/components/right-arrow.svelte
function Right_arrow($$renderer) {
	$$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 ms-2 h-6 w-6" viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"></path></svg>`);
}
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		$$renderer.push(`<div class="mx-8 flex dg-dvh pb-8 svelte-1uha8ag"><div class="my-auto"><h2 class="mb-4 text-[60pt] font-bold text-primary-50 dark:text-primary-500">GreenRecruitED</h2> <div class="text-[28pt]">Sustainable Recruitment Learning Platform</div> <div class="text-[28pt]">${escape_html(data.data.subtitle)}</div></div></div> <div class="w-5/6 mx-auto flex dg-dvh flex-col svelte-1uha8ag"><video class="w-full" muted="" autoplay="" loop="" playsinline="" controls="" disablepictureinpicture=""><source${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(data.data.intro_video.url)}`)}/></video></div> <div class="w-5/6 mx-auto my-auto dg-dvh grid grid-cols-3 content-center gap-2 svelte-1uha8ag"><!--[-->`);
		const each_array = ensure_array_like(data.data.block_1s);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let block1_item = each_array[$$index];
			$$renderer.push(`<div class="h-96 bg-primary hover:bg-muted"><div class="m-6"><p class="mb-2 h-32 text-[32pt] font-bold tracking-tight text-primary-foreground">${escape_html(block1_item.title)}</p> <p class="mb-3 leading-tight text-primary-foreground">${escape_html(block1_item.description)}</p> <button class="inline-flex w-40 cursor-pointer items-center justify-center rounded-lg bg-primary-50 px-5 py-2.5 text-center text-sm font-medium text-primary-foreground focus-within:ring-4 focus-within:ring-primary-300 focus-within:outline-hidden hover:bg-primary-800">Lebih jauh `);
			Right_arrow($$renderer);
			$$renderer.push(`<!----></button></div></div>`);
		}
		$$renderer.push(`<!--]--></div>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CF2tofHw.js.map
