import { e as escape_html, c as attr, f as stringify, ao as await_block, b as bind_props, a as attributes, am as clsx$1, s as spread_props, p as props_id, d as derived, i as ensure_array_like } from './server-ZNF6Hlfr.js';
import { c as cn, a as createId, b as boxWith, d as attachRef, m as mergeProps, e as createBitsAttrs, f as boolToEmptyStrOrUndef, q as boolToTrueOrUndef, h as boolToStr } from './utils2-B8hVsBig.js';
import { n as noop, C as Context, S as SvelteMap, R as RovingFocusGroup, w as watch } from './noop-nkPEogq4.js';
import { P as PUBLIC_STRAPI_URL } from './public-CNFaYwnI.js';
import { B as BlocksRenderer } from './blocks_renderer-mk7nIrHg.js';
import { t as tv } from './index-B0ofVM4h.js';

//#region node_modules/bits-ui/dist/bits/tabs/tabs.svelte.js
var tabsAttrs = createBitsAttrs({
	component: "tabs",
	parts: [
		"root",
		"list",
		"trigger",
		"content"
	]
});
var TabsRootContext = new Context("Tabs.Root");
var TabsRootState = class TabsRootState {
	static create(opts) {
		return TabsRootContext.set(new TabsRootState(opts));
	}
	opts;
	attachment;
	rovingFocusGroup;
	triggerIds = [];
	valueToTriggerId = new SvelteMap();
	valueToContentId = new SvelteMap();
	constructor(opts) {
		this.opts = opts;
		this.attachment = attachRef(opts.ref);
		this.rovingFocusGroup = new RovingFocusGroup({
			candidateAttr: tabsAttrs.trigger,
			rootNode: this.opts.ref,
			loop: this.opts.loop,
			orientation: this.opts.orientation
		});
	}
	registerTrigger(id, value) {
		this.triggerIds.push(id);
		this.valueToTriggerId.set(value, id);
		return () => {
			this.triggerIds = this.triggerIds.filter((triggerId) => triggerId !== id);
			this.valueToTriggerId.delete(value);
		};
	}
	registerContent(id, value) {
		this.valueToContentId.set(value, id);
		return () => {
			this.valueToContentId.delete(value);
		};
	}
	setValue(v) {
		this.opts.value.current = v;
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		"data-orientation": this.opts.orientation.current,
		[tabsAttrs.root]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var TabsListState = class TabsListState {
	static create(opts) {
		return new TabsListState(opts, TabsRootContext.get());
	}
	opts;
	root;
	attachment;
	#isDisabled = derived(() => this.root.opts.disabled.current);
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(opts.ref);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		role: "tablist",
		"aria-orientation": this.root.opts.orientation.current,
		"data-orientation": this.root.opts.orientation.current,
		[tabsAttrs.list]: "",
		"data-disabled": boolToEmptyStrOrUndef(this.#isDisabled()),
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var TabsTriggerState = class TabsTriggerState {
	static create(opts) {
		return new TabsTriggerState(opts, TabsRootContext.get());
	}
	opts;
	root;
	attachment;
	#tabIndex = 0;
	#isActive = derived(() => this.root.opts.value.current === this.opts.value.current);
	#isDisabled = derived(() => this.opts.disabled.current || this.root.opts.disabled.current);
	#ariaControls = derived(() => this.root.valueToContentId.get(this.opts.value.current));
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(opts.ref);
		watch([() => this.opts.id.current, () => this.opts.value.current], ([id, value]) => {
			return this.root.registerTrigger(id, value);
		});
		this.onfocus = this.onfocus.bind(this);
		this.onclick = this.onclick.bind(this);
		this.onkeydown = this.onkeydown.bind(this);
	}
	#activate() {
		if (this.root.opts.value.current === this.opts.value.current) return;
		this.root.setValue(this.opts.value.current);
	}
	onfocus(_) {
		if (this.root.opts.activationMode.current !== "automatic" || this.#isDisabled()) return;
		this.#activate();
	}
	onclick(_) {
		if (this.#isDisabled()) return;
		this.#activate();
	}
	onkeydown(e) {
		if (this.#isDisabled()) return;
		if (e.key === " " || e.key === "Enter") {
			e.preventDefault();
			this.#activate();
			return;
		}
		this.root.rovingFocusGroup.handleKeydown(this.opts.ref.current, e);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		role: "tab",
		"data-state": getTabDataState(this.#isActive()),
		"data-value": this.opts.value.current,
		"data-orientation": this.root.opts.orientation.current,
		"data-disabled": boolToEmptyStrOrUndef(this.#isDisabled()),
		"aria-selected": boolToStr(this.#isActive()),
		"aria-controls": this.#ariaControls(),
		[tabsAttrs.trigger]: "",
		disabled: boolToTrueOrUndef(this.#isDisabled()),
		tabindex: this.#tabIndex,
		onclick: this.onclick,
		onfocus: this.onfocus,
		onkeydown: this.onkeydown,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var TabsContentState = class TabsContentState {
	static create(opts) {
		return new TabsContentState(opts, TabsRootContext.get());
	}
	opts;
	root;
	attachment;
	#isActive = derived(() => this.root.opts.value.current === this.opts.value.current);
	#ariaLabelledBy = derived(() => this.root.valueToTriggerId.get(this.opts.value.current));
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(opts.ref);
		watch([() => this.opts.id.current, () => this.opts.value.current], ([id, value]) => {
			return this.root.registerContent(id, value);
		});
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		role: "tabpanel",
		hidden: boolToTrueOrUndef(!this.#isActive()),
		tabindex: 0,
		"data-value": this.opts.value.current,
		"data-state": getTabDataState(this.#isActive()),
		"aria-labelledby": this.#ariaLabelledBy(),
		"data-orientation": this.root.opts.orientation.current,
		[tabsAttrs.content]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
function getTabDataState(condition) {
	return condition ? "active" : "inactive";
}
//#endregion
//#region node_modules/bits-ui/dist/bits/tabs/components/tabs.svelte
function Tabs$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { id = createId(uid), ref = null, value = "", onValueChange = noop, orientation = "horizontal", loop = true, activationMode = "automatic", disabled = false, children, child, $$slots, $$events, ...restProps } = $$props;
		const rootState = TabsRootState.create({
			id: boxWith(() => id),
			value: boxWith(() => value, (v) => {
				value = v;
				onValueChange(v);
			}),
			orientation: boxWith(() => orientation),
			loop: boxWith(() => loop),
			activationMode: boxWith(() => activationMode),
			disabled: boxWith(() => disabled),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, rootState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			ref,
			value
		});
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/tabs/components/tabs-content.svelte
function Tabs_content$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { children, child, id = createId(uid), ref = null, value, $$slots, $$events, ...restProps } = $$props;
		const contentState = TabsContentState.create({
			value: boxWith(() => value),
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, contentState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/tabs/components/tabs-list.svelte
function Tabs_list$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { child, children, id = createId(uid), ref = null, $$slots, $$events, ...restProps } = $$props;
		const listState = TabsListState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, listState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/tabs/components/tabs-trigger.svelte
function Tabs_trigger$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { child, children, disabled = false, id = createId(uid), type = "button", value, ref = null, $$slots, $$events, ...restProps } = $$props;
		const triggerState = TabsTriggerState.create({
			id: boxWith(() => id),
			disabled: boxWith(() => disabled ?? false),
			value: boxWith(() => value),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, triggerState.props, { type }));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<button${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></button>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/tabs/tabs.svelte
function Tabs($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, value = "", class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Tabs$1) {
				$$renderer.push("<!--[-->");
				Tabs$1($$renderer, spread_props([
					{
						"data-slot": "tabs",
						class: cn("gap-2 group/tabs flex data-[orientation=horizontal]:flex-col", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						},
						get value() {
							return value;
						},
						set value($$value) {
							value = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, {
			ref,
			value
		});
	});
}
//#endregion
//#region src/lib/components/ui/tabs/tabs-content.svelte
function Tabs_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Tabs_content$1) {
				$$renderer.push("<!--[-->");
				Tabs_content$1($$renderer, spread_props([
					{
						"data-slot": "tabs-content",
						class: cn("text-sm flex-1 outline-none", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/tabs/tabs-list.svelte
var tabsListVariants = tv({
	base: "rounded-full p-1 group-data-horizontal/tabs:h-9 group-data-vertical/tabs:rounded-2xl data-[variant=line]:rounded-none group/tabs-list text-muted-foreground inline-flex w-fit items-center justify-center group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col",
	variants: { variant: {
		default: "cn-tabs-list-variant-default bg-muted",
		line: "cn-tabs-list-variant-line gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
});
function Tabs_list($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, variant = "default", class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Tabs_list$1) {
				$$renderer.push("<!--[-->");
				Tabs_list$1($$renderer, spread_props([
					{
						"data-slot": "tabs-list",
						"data-variant": variant,
						class: cn(tabsListVariants({ variant }), className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/tabs/tabs-trigger.svelte
function Tabs_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Tabs_trigger$1) {
				$$renderer.push("<!--[-->");
				Tabs_trigger$1($$renderer, spread_props([
					{
						"data-slot": "tabs-trigger",
						class: cn("gap-2 rounded-full border border-transparent! px-3 py-1 text-sm font-medium group-data-vertical/tabs:rounded-2xl group-data-vertical/tabs:px-3 group-data-vertical/tabs:py-1.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center whitespace-nowrap transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent", "data-active:bg-background dark:data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 data-active:text-foreground", "after:bg-foreground after:absolute after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/textarea/textarea.svelte
function Textarea($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, value = void 0, class: className, "data-slot": dataSlot = "textarea", $$slots, $$events, ...restProps } = $$props;
		$$renderer.push(`<textarea${attributes({
			"data-slot": dataSlot,
			class: clsx$1(cn("bg-input/50 focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 resize-none rounded-2xl border border-transparent px-3 py-3 text-base transition-[color,box-shadow,background-color] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50", className)),
			...restProps
		})}>`);
		const $$body = escape_html(value);
		if ($$body) $$renderer.push(`${$$body}`);
		$$renderer.push(`</textarea>`);
		bind_props($$props, {
			ref,
			value
		});
	});
}
//#endregion
//#region src/lib/components/evaluation.svelte
function Evaluation($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		if (Tabs) {
			$$renderer.push("<!--[-->");
			Tabs($$renderer, {
				value: data[0].indx_num,
				class: "w-full",
				children: ($$renderer) => {
					if (Tabs_list) {
						$$renderer.push("<!--[-->");
						Tabs_list($$renderer, {
							children: ($$renderer) => {
								$$renderer.push(`<!--[-->`);
								const each_array = ensure_array_like(data);
								for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
									let el = each_array[$$index];
									if (Tabs_trigger) {
										$$renderer.push("<!--[-->");
										Tabs_trigger($$renderer, {
											value: el.indx_num,
											children: ($$renderer) => {
												$$renderer.push(`<!---->${escape_html(el.indx_num)}`);
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
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
					$$renderer.push(` <!--[-->`);
					const each_array_1 = ensure_array_like(data);
					for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
						let el = each_array_1[$$index_1];
						if (Tabs_content) {
							$$renderer.push("<!--[-->");
							Tabs_content($$renderer, {
								value: el.indx_num,
								children: ($$renderer) => {
									$$renderer.push(`<div class="p-4">`);
									BlocksRenderer($$renderer, { content: el.question });
									$$renderer.push(`<!----></div> `);
									Textarea($$renderer, {
										value: el.answer,
										placeholder: "jawaban anda..."
									});
									$$renderer.push(`<!---->`);
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
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
	});
}
//#endregion
//#region src/lib/components/reflection.svelte
function Reflection($$renderer) {
	Textarea($$renderer, { placeholder: "Apa yang anda dapatkan" });
}
//#endregion
//#region src/routes/modules/[slug]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let menu = "longtext".menu;
		let { data } = $$props;
		menu = "video";
		async function fetchData() {
			const res = await fetch(`${PUBLIC_STRAPI_URL}/api/learning-modules?populate=*`);
			const data = await res.json();
			if (res.ok) return data;
			else throw new Error(data);
		}
		$$renderer.push(`<div class="mx-auto w-3/4 p-4"><h3 class="font-bold text-3xl">${escape_html(data.data.title)}</h3> <div class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4"><div class="col-span-3 aspect-video w-full overflow-y-scroll border p-2.5">`);
		if (menu == "longtext") {
			$$renderer.push("<!--[0-->");
			BlocksRenderer($$renderer, { content: data.data.long_text });
		} else if (menu == "video") {
			$$renderer.push("<!--[1-->");
			$$renderer.push(`<iframe class="h-full w-full"${attr("src", `https://youtube.com/embed/${stringify(data.data.video_id)}`)} frameborder="0" title="Test" name="video-01" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>`);
		} else if (menu == "deepdive") {
			$$renderer.push("<!--[2-->");
			BlocksRenderer($$renderer, { content: data.data.deep_dive });
		} else if (menu == "evaluasi") {
			$$renderer.push("<!--[3-->");
			if (data.data.evaluations.length > 0) {
				$$renderer.push("<!--[0-->");
				Evaluation($$renderer, { data: data.data.evaluations });
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]-->`);
		} else if (menu == "refleksi") {
			$$renderer.push("<!--[4-->");
			Reflection($$renderer);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <div class="col-span-1 w-full"><button class="block cursor-pointer px-10 py-2 text-left text-[20pt]">TUJUAN PEMBELAJARAN</button> <button class="block cursor-pointer px-10 py-2 text-left text-[20pt]">VIDEO</button> <button class="block cursor-pointer px-10 py-2 text-left text-[20pt]">GALI LEBIH DALAM</button> <button class="block cursor-pointer px-10 py-2 text-left text-[20pt]">EVALUASI</button> <button class="block cursor-pointer px-10 py-2 text-left text-[20pt]">REFLEKSI</button></div> `);
		await_block($$renderer, fetchData(), () => {
			$$renderer.push(`<p>loading...</p>`);
		}, (items) => {
			$$renderer.push(`<!--[-->`);
			const each_array = ensure_array_like(items.data);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let item = each_array[$$index];
				if (!(item.documentId === data.data.documentId)) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<a${attr("href", `/modules/${stringify(item.documentId)}`)} class="relative cursor-pointer overflow-hidden bg-white transition-all duration-300 hover:shadow-lg"><div class="aspect-8/6 w-full p-3"><img${attr("src", `${stringify(PUBLIC_STRAPI_URL)}${stringify(item.image.url)}`)} alt="" class="h-full w-full object-contain"/></div> <div class="p-6"><hr class="mb-6 border border-gray-300"/> <div><h4>${escape_html(item.title)}</h4></div></div></a>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]-->`);
			}
			$$renderer.push(`<!--]-->`);
		});
		$$renderer.push(`<!--]--></div></div>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte-C32UcSij.js.map
