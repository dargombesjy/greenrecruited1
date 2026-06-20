import { i as ensure_array_like, e as escape_html, d as derived, c as attr } from './server-ZNF6Hlfr.js';

//#region src/lib/components/blocks_renderer/utils/renderer.js
/** Text node guard */
function isTextNode(n) {
	return n?.type === "text";
}
/** Link node guard */
function isLinkNode(n) {
	return n?.type === "link";
}
/** Collect active inline modifiers */
function getActiveModifiers(n) {
	const m = [];
	if (n.bold) m.push("bold");
	if (n.italic) m.push("italic");
	if (n.underline) m.push("underline");
	if (n.strikethrough) m.push("strikethrough");
	if (n.code) m.push("code");
	return m;
}
/** Merge component maps */
function mergeComponents(def, over) {
	return over ? {
		...def,
		...over
	} : def;
}
//#endregion
//#region src/lib/components/blocks_renderer/ModifierWrapper.svelte
function ModifierWrapper_1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { text, mods, modifiers, index = 0 } = $$props;
		const currentMod = derived(() => mods[index]);
		const Modifier = derived(() => currentMod() ? modifiers[currentMod()] : null);
		const hasMore = derived(() => index < mods.length - 1);
		if (Modifier()) {
			$$renderer.push("<!--[0-->");
			if (Modifier()) {
				$$renderer.push("<!--[-->");
				Modifier()($$renderer, {
					children: ($$renderer) => {
						if (hasMore()) {
							$$renderer.push("<!--[0-->");
							ModifierWrapper_1($$renderer, {
								text,
								mods,
								modifiers,
								index: index + 1
							});
						} else {
							$$renderer.push("<!--[-1-->");
							$$renderer.push(`${escape_html(text)}`);
						}
						$$renderer.push(`<!--]-->`);
					},
					$$slots: { default: true }
				});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`${escape_html(text)}`);
		}
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/lib/components/blocks_renderer/TextRenderer.svelte
function TextRenderer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { node, modifiers } = $$props;
		const parts = derived(() => node.text.split("\n"));
		const activeMods = derived(() => getActiveModifiers(node));
		$$renderer.push(`<!--[-->`);
		const each_array = ensure_array_like(parts());
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let part = each_array[i];
			ModifierWrapper_1($$renderer, {
				text: part,
				mods: activeMods(),
				modifiers
			});
			$$renderer.push(`<!----> `);
			if (i < parts().length - 1) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<br/>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]-->`);
		}
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/lib/components/blocks_renderer/InlineRenderer.svelte
function InlineRenderer_1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { nodes, modifiers } = $$props;
		$$renderer.push(`<!--[-->`);
		const each_array = ensure_array_like(nodes);
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let node = each_array[i];
			if (isTextNode(node)) {
				$$renderer.push("<!--[0-->");
				TextRenderer($$renderer, {
					node,
					modifiers
				});
			} else if (isLinkNode(node)) {
				$$renderer.push("<!--[1-->");
				const Link = modifiers.link;
				if (Link) {
					$$renderer.push("<!--[-->");
					Link($$renderer, {
						url: node.url,
						children: ($$renderer) => {
							InlineRenderer_1($$renderer, {
								nodes: node.children,
								modifiers
							});
						},
						$$slots: { default: true }
					});
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]-->`);
		}
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/lib/components/blocks_renderer/blocks/Paragraph.svelte
function Paragraph($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { node, modifiers } = $$props;
		if (node.children.length === 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<br/>`);
		} else if (node.children.length === 1 && node.children[0].type === "text" && node.children[0].text === "") {
			$$renderer.push("<!--[1-->");
			$$renderer.push(`<br/>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<p>`);
			InlineRenderer_1($$renderer, {
				nodes: node.children,
				modifiers
			});
			$$renderer.push(`<!----></p>`);
		}
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/lib/components/blocks_renderer/blocks/Heading.svelte
function Heading($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { node, modifiers } = $$props;
		if (node.level === 1) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<h1>`);
			InlineRenderer_1($$renderer, {
				nodes: node.children,
				modifiers
			});
			$$renderer.push(`<!----></h1>`);
		} else if (node.level === 2) {
			$$renderer.push("<!--[1-->");
			$$renderer.push(`<h2>`);
			InlineRenderer_1($$renderer, {
				nodes: node.children,
				modifiers
			});
			$$renderer.push(`<!----></h2>`);
		} else if (node.level === 3) {
			$$renderer.push("<!--[2-->");
			$$renderer.push(`<h3>`);
			InlineRenderer_1($$renderer, {
				nodes: node.children,
				modifiers
			});
			$$renderer.push(`<!----></h3>`);
		} else if (node.level === 4) {
			$$renderer.push("<!--[3-->");
			$$renderer.push(`<h4>`);
			InlineRenderer_1($$renderer, {
				nodes: node.children,
				modifiers
			});
			$$renderer.push(`<!----></h4>`);
		} else if (node.level === 5) {
			$$renderer.push("<!--[4-->");
			$$renderer.push(`<h5>`);
			InlineRenderer_1($$renderer, {
				nodes: node.children,
				modifiers
			});
			$$renderer.push(`<!----></h5>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<h6>`);
			InlineRenderer_1($$renderer, {
				nodes: node.children,
				modifiers
			});
			$$renderer.push(`<!----></h6>`);
		}
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/lib/components/blocks_renderer/blocks/Quote.svelte
function Quote($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { node, modifiers } = $$props;
		$$renderer.push(`<blockquote>`);
		InlineRenderer_1($$renderer, {
			nodes: node.children,
			modifiers
		});
		$$renderer.push(`<!----></blockquote>`);
	});
}
//#endregion
//#region src/lib/components/blocks_renderer/blocks/Code.svelte
function Code$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { node } = $$props;
		$$renderer.push(`<pre><code><!--[-->`);
		const each_array = ensure_array_like(node.children);
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let textNode = each_array[i];
			$$renderer.push(`<!---->${escape_html(textNode.text)}`);
		}
		$$renderer.push(`<!--]--></code></pre>`);
	});
}
//#endregion
//#region src/lib/components/blocks_renderer/blocks/Image.svelte
function Image($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { node } = $$props;
		$$renderer.push(`<figure><img${attr("src", node.image.url)}${attr("alt", node.image.alternativeText ?? node.image.name)}${attr("width", node.image.width)}${attr("height", node.image.height)}/> `);
		if (node.image.caption) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<figcaption>${escape_html(node.image.caption)}</figcaption>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></figure>`);
	});
}
//#endregion
//#region src/lib/components/blocks_renderer/blocks/ListItem.svelte
function ListItem($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { node, modifiers } = $$props;
		$$renderer.push(`<li><!--[-->`);
		const each_array = ensure_array_like(node.children);
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let child = each_array[i];
			if (child.type === "text" || child.type === "link") {
				$$renderer.push("<!--[0-->");
				InlineRenderer_1($$renderer, {
					nodes: [child],
					modifiers
				});
			} else {
				$$renderer.push("<!--[-1-->");
				BlocksRenderer($$renderer, {
					content: [child],
					blocks: {},
					modifiers
				});
			}
			$$renderer.push(`<!--]-->`);
		}
		$$renderer.push(`<!--]--></li>`);
	});
}
//#endregion
//#region src/lib/components/blocks_renderer/blocks/List.svelte
function List($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { node, modifiers } = $$props;
		if (node.format === "ordered") {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<ol><!--[-->`);
			const each_array = ensure_array_like(node.children);
			for (let i = 0, $$length = each_array.length; i < $$length; i++) {
				let item = each_array[i];
				ListItem($$renderer, {
					node: item,
					modifiers
				});
			}
			$$renderer.push(`<!--]--></ol>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<ul><!--[-->`);
			const each_array_1 = ensure_array_like(node.children);
			for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
				let item = each_array_1[i];
				ListItem($$renderer, {
					node: item,
					modifiers
				});
			}
			$$renderer.push(`<!--]--></ul>`);
		}
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/lib/components/blocks_renderer/modifiers/Bold.svelte
function Bold($$renderer, $$props) {
	const { children } = $$props;
	$$renderer.push(`<strong>`);
	children?.($$renderer);
	$$renderer.push(`<!----></strong>`);
}
//#endregion
//#region src/lib/components/blocks_renderer/modifiers/Italic.svelte
function Italic($$renderer, $$props) {
	const { children } = $$props;
	$$renderer.push(`<em>`);
	children?.($$renderer);
	$$renderer.push(`<!----></em>`);
}
//#endregion
//#region src/lib/components/blocks_renderer/modifiers/Underline.svelte
function Underline($$renderer, $$props) {
	const { children } = $$props;
	$$renderer.push(`<u>`);
	children?.($$renderer);
	$$renderer.push(`<!----></u>`);
}
//#endregion
//#region src/lib/components/blocks_renderer/modifiers/Strikethrough.svelte
function Strikethrough($$renderer, $$props) {
	const { children } = $$props;
	$$renderer.push(`<s>`);
	children?.($$renderer);
	$$renderer.push(`<!----></s>`);
}
//#endregion
//#region src/lib/components/blocks_renderer/modifiers/Code.svelte
function Code($$renderer, $$props) {
	const { children } = $$props;
	$$renderer.push(`<code>`);
	children?.($$renderer);
	$$renderer.push(`<!----></code>`);
}
//#endregion
//#region src/lib/components/blocks_renderer/modifiers/Link.svelte
function Link($$renderer, $$props) {
	const { url, children } = $$props;
	$$renderer.push(`<a${attr("href", url)} target="_blank" rel="noopener noreferrer">`);
	children?.($$renderer);
	$$renderer.push(`<!----></a>`);
}
//#endregion
//#region src/lib/components/blocks_renderer/BlocksRenderer.svelte
function BlocksRenderer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { content, blocks = {}, modifiers = {} } = $$props;
		const defaultBlocks = {
			paragraph: Paragraph,
			heading: Heading,
			quote: Quote,
			code: Code$1,
			image: Image,
			list: List,
			"list-item": ListItem
		};
		const defaultModifiers = {
			bold: Bold,
			italic: Italic,
			underline: Underline,
			strikethrough: Strikethrough,
			code: Code,
			link: Link
		};
		let resolvedBlocks = derived(() => mergeComponents(defaultBlocks, blocks));
		let resolvedModifiers = derived(() => mergeComponents(defaultModifiers, modifiers));
		if (Array.isArray(content)) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<!--[-->`);
			const each_array = ensure_array_like(content);
			for (let index = 0, $$length = each_array.length; index < $$length; index++) {
				let node = each_array[index];
				if (resolvedBlocks()[node.type]) {
					$$renderer.push("<!--[0-->");
					const Block = resolvedBlocks()[node.type];
					if (Block) {
						$$renderer.push("<!--[-->");
						Block($$renderer, {
							node,
							index,
							modifiers: resolvedModifiers()
						});
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
				} else {
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`<div class="blocks-renderer-unknown svelte-1aj3nao">Unknown block type: <code>${escape_html(node.type)}</code></div>`);
				}
				$$renderer.push(`<!--]-->`);
			}
			$$renderer.push(`<!--]-->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="blocks-renderer-empty svelte-1aj3nao">No content to render.</div>`);
		}
		$$renderer.push(`<!--]-->`);
	});
}

export { BlocksRenderer as B };
//# sourceMappingURL=blocks_renderer-mk7nIrHg.js.map
