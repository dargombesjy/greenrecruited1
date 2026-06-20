import { i as ensure_array_like, an as attr_class, e as escape_html, c as attr } from './server-ZNF6Hlfr.js';

//#region src/lib/components/post.svelte
function Post($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { post } = $$props;
		$$renderer.push(`<div class="post-card svelte-1t2wy0y"><div class="voting-sidebar svelte-1t2wy0y"><button class="upvote-btn svelte-1t2wy0y">▲</button> <span>${escape_html(post.upvotes)}</span></div> <div class="post-content svelte-1t2wy0y"><div class="post-header svelte-1t2wy0y"><span class="category svelte-1t2wy0y">#${escape_html(post.category)}</span> <span class="author">Posted by ${escape_html(post.author)}</span></div> <h3 class="svelte-1t2wy0y">${escape_html(post.title)}</h3> <p>${escape_html(post.content)}</p> <div class="post-actions svelte-1t2wy0y"><button class="svelte-1t2wy0y">💬 ${escape_html(post.forum_comments)} Comments</button></div> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div></div>`);
	});
}
//#endregion
//#region src/routes/forum/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		let categories = [
			"all",
			"svelte",
			"css",
			"general"
		];
		let selectedCategory = "all";
		let newTitle = "";
		let newContent = "";
		let newCategory = "general";
		$$renderer.push(`<header class="navbar svelte-f3ctp2"><h1 class="svelte-f3ctp2">DevForum</h1></header> <div class="forum-container svelte-f3ctp2"><aside class="sidebar svelte-f3ctp2"><h3>Categories</h3> <ul class="svelte-f3ctp2"><!--[-->`);
		const each_array = ensure_array_like(categories);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let cat = each_array[$$index];
			$$renderer.push(`<li><button${attr_class("svelte-f3ctp2", void 0, { "active": selectedCategory === cat })}>#${escape_html(cat)}</button></li>`);
		}
		$$renderer.push(`<!--]--></ul></aside> <main class="feed svelte-f3ctp2"><div class="create-post-card svelte-f3ctp2"><h3 class="svelte-f3ctp2">Create a New Post</h3> <input type="text"${attr("value", newTitle)} placeholder="Title" class="svelte-f3ctp2"/> <textarea placeholder="What's on your mind?" class="svelte-f3ctp2">`);
		const $$body = escape_html(newContent);
		if ($$body) $$renderer.push(`${$$body}`);
		$$renderer.push(`</textarea> <div class="form-footer svelte-f3ctp2">`);
		$$renderer.select({
			value: newCategory,
			class: ""
		}, ($$renderer) => {
			$$renderer.push(`<!--[-->`);
			const each_array_1 = ensure_array_like(categories.filter((c) => c !== "all"));
			for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
				let cat = each_array_1[$$index_1];
				$$renderer.option({ value: cat }, ($$renderer) => {
					$$renderer.push(`#${escape_html(cat)}`);
				});
			}
			$$renderer.push(`<!--]-->`);
		}, "svelte-f3ctp2");
		$$renderer.push(` <button class="svelte-f3ctp2">Publish</button></div></div> `);
		const each_array_2 = ensure_array_like(data.data);
		if (each_array_2.length !== 0) {
			$$renderer.push("<!--[-->");
			for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
				let post = each_array_2[$$index_2];
				Post($$renderer, { post });
			}
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push(`<p class="no-posts svelte-f3ctp2">No posts found in this category yet.</p>`);
		}
		$$renderer.push(`<!--]--></main></div>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Djje7F57.js.map
