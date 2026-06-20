import { c as attr, f as stringify, e as escape_html, i as ensure_array_like, d as derived } from './server-ZNF6Hlfr.js';
import './client-C4L3Bnc8.js';
import { P as PUBLIC_STRAPI_URL } from './public-CNFaYwnI.js';
import { B as BlocksRenderer } from './blocks_renderer-mk7nIrHg.js';
import './index-server-DQuk9j5G.js';
import './internal2-9edDzU87.js';
import './index-DBqjc0Yf.js';

//#region src/routes/simulations/[slug]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		({
			parent_node: data.data[0].name
		});
		let nextpar = derived(() => {
			return data.data[0].next_simulation;
		});
		const slugify = (str = "") => str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
		$$renderer.push(`<div class="mx-auto flex h-screen w-3/4 flex-col p-8">`);
		if (data.data[0].image) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<img${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(data.data[0].image.url)}`)} class="h-40 w-40 self-center rounded-full object-cover" alt=""/>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="mt-8 mb-4 text-center text-2xl">${escape_html(data.data[0].long_title)}</div> <div class="my-4 self-center text-xl">`);
		BlocksRenderer($$renderer, { content: data.data[0].description });
		$$renderer.push(`<!----></div> <div class="self-center text-lg"><!--[-->`);
		const each_array = ensure_array_like(data.data[0].choices);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let path = each_array[$$index];
			$$renderer.push(`<div class="flex gap-2 mb-2"><input${attr("id", slugify(path.choice_name))} type="radio" name="choices" class="peer"/> <label${attr("for", slugify(path.choice_name))} class="peer-checked:bg-red-200">${escape_html(path.choice_text)}</label></div>`);
		}
		$$renderer.push(`<!--]--></div> `);
		if (nextpar()) {
			$$renderer.push("<!--[1-->");
			$$renderer.push(`<button class="mt-4 w-48 cursor-pointer self-center rounded-[20px] bg-primary-50 py-4 text-center text-white">Simulasi Berikutnya</button>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<button class="mt-4 w-48 cursor-pointer self-center rounded-[20px] bg-primary-50 py-4 text-center text-white">Reset</button>`);
		}
		$$renderer.push(`<!--]--></div>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CWhZQwI_.js.map
