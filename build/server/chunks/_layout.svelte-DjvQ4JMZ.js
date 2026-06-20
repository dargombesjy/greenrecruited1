import { t as tick } from './index-server-DQuk9j5G.js';
import { h as head, b as bind_props, s as spread_props, p as props_id, a as attributes, d as derived, c as attr } from './server-ZNF6Hlfr.js';
import { c as cn, a as createId, b as boxWith, d as attachRef, m as mergeProps, e as createBitsAttrs, s as simpleBox, f as boolToEmptyStrOrUndef, g as getDataOpenClosed, h as boolToStr, i as boxFrom } from './utils2-B8hVsBig.js';
import { n as noop, C as Context, R as RovingFocusGroup, w as watch } from './noop-nkPEogq4.js';

//#region src/lib/assets/favicon.ico
var favicon_default = "/_app/immutable/assets/favicon.DJSXWBt-.ico";
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/after-tick.js
function afterTick(fn) {
	(/* @__PURE__ */ tick()).then(fn);
}
//#endregion
//#region node_modules/bits-ui/dist/internal/animations-complete.js
var AnimationsComplete = class {
	#opts;
	#currentFrame = null;
	#observer = null;
	#runId = 0;
	constructor(opts) {
		this.#opts = opts;
	}
	#cleanup() {
		if (this.#currentFrame !== null) {
			window.cancelAnimationFrame(this.#currentFrame);
			this.#currentFrame = null;
		}
		this.#observer?.disconnect();
		this.#observer = null;
		this.#runId++;
	}
	run(fn) {
		this.#cleanup();
		const node = this.#opts.ref.current;
		if (!node) return;
		if (typeof node.getAnimations !== "function") {
			this.#executeCallback(fn);
			return;
		}
		const runId = this.#runId;
		const executeIfCurrent = () => {
			if (runId !== this.#runId) return;
			this.#executeCallback(fn);
		};
		const waitForAnimations = () => {
			if (runId !== this.#runId) return;
			const animations = node.getAnimations();
			if (animations.length === 0) {
				executeIfCurrent();
				return;
			}
			Promise.all(animations.map((animation) => animation.finished)).then(() => {
				executeIfCurrent();
			}).catch(() => {
				if (runId !== this.#runId) return;
				if (node.getAnimations().some((animation) => animation.pending || animation.playState !== "finished")) {
					waitForAnimations();
					return;
				}
				executeIfCurrent();
			});
		};
		const requestWaitForAnimations = () => {
			this.#currentFrame = window.requestAnimationFrame(() => {
				this.#currentFrame = null;
				waitForAnimations();
			});
		};
		if (!this.#opts.afterTick.current) {
			requestWaitForAnimations();
			return;
		}
		this.#currentFrame = window.requestAnimationFrame(() => {
			this.#currentFrame = null;
			const startingStyleAttr = "data-starting-style";
			if (!node.hasAttribute(startingStyleAttr)) {
				requestWaitForAnimations();
				return;
			}
			this.#observer = new MutationObserver(() => {
				if (runId !== this.#runId) return;
				if (node.hasAttribute(startingStyleAttr)) return;
				this.#observer?.disconnect();
				this.#observer = null;
				requestWaitForAnimations();
			});
			this.#observer.observe(node, {
				attributes: true,
				attributeFilter: [startingStyleAttr]
			});
		});
	}
	#executeCallback(fn) {
		const execute = () => {
			fn();
		};
		if (this.#opts.afterTick) afterTick(execute);
		else execute();
	}
};
//#endregion
//#region node_modules/bits-ui/dist/internal/presence-manager.svelte.js
var PresenceManager = class {
	#opts;
	#enabled;
	#afterAnimations;
	#shouldRender = false;
	#transitionStatus = void 0;
	#hasMounted = false;
	#transitionFrame = null;
	constructor(opts) {
		this.#opts = opts;
		this.#shouldRender = opts.open.current;
		this.#enabled = opts.enabled ?? true;
		this.#afterAnimations = new AnimationsComplete({
			ref: this.#opts.ref,
			afterTick: this.#opts.open
		});
		watch(() => this.#opts.open.current, (isOpen) => {
			if (!this.#hasMounted) {
				this.#hasMounted = true;
				return;
			}
			this.#clearTransitionFrame();
			if (!isOpen && this.#opts.shouldSkipExitAnimation?.()) {
				this.#shouldRender = false;
				this.#transitionStatus = void 0;
				this.#opts.onComplete?.();
				return;
			}
			if (isOpen) this.#shouldRender = true;
			this.#transitionStatus = isOpen ? "starting" : "ending";
			if (isOpen) this.#transitionFrame = window.requestAnimationFrame(() => {
				this.#transitionFrame = null;
				if (this.#opts.open.current) this.#transitionStatus = void 0;
			});
			if (!this.#enabled) {
				if (!isOpen) this.#shouldRender = false;
				this.#transitionStatus = void 0;
				this.#opts.onComplete?.();
				return;
			}
			this.#afterAnimations.run(() => {
				if (isOpen === this.#opts.open.current) {
					if (!this.#opts.open.current) this.#shouldRender = false;
					this.#transitionStatus = void 0;
					this.#opts.onComplete?.();
				}
			});
		});
	}
	get shouldRender() {
		return this.#shouldRender;
	}
	get transitionStatus() {
		return this.#transitionStatus;
	}
	#clearTransitionFrame() {
		if (this.#transitionFrame === null) return;
		window.cancelAnimationFrame(this.#transitionFrame);
		this.#transitionFrame = null;
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/is-using-keyboard/is-using-keyboard.svelte.js
var isUsingKeyboard = false;
var IsUsingKeyboard = class {
	static _refs = 0;
	static _cleanup;
	constructor() {}
	get current() {
		return isUsingKeyboard;
	}
	set current(value) {
		isUsingKeyboard = value;
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/menu/menu.svelte.js
var MenuRootContext = new Context("Menu.Root");
var MenuMenuContext = new Context("Menu.Root | Menu.Sub");
var menuAttrs = createBitsAttrs({
	component: "menu",
	parts: [
		"trigger",
		"content",
		"sub-trigger",
		"item",
		"group",
		"group-heading",
		"checkbox-group",
		"checkbox-item",
		"radio-group",
		"radio-item",
		"separator",
		"sub-content",
		"arrow"
	]
});
var MenuRootState = class MenuRootState {
	static create(opts) {
		const root = new MenuRootState(opts);
		return MenuRootContext.set(root);
	}
	opts;
	isUsingKeyboard = new IsUsingKeyboard();
	ignoreCloseAutoFocus = false;
	isPointerInTransit = false;
	constructor(opts) {
		this.opts = opts;
	}
	getBitsAttr = (part) => {
		return menuAttrs.getAttr(part, this.opts.variant.current);
	};
};
var MenuMenuState = class MenuMenuState {
	static create(opts, root) {
		return MenuMenuContext.set(new MenuMenuState(opts, root, null));
	}
	opts;
	root;
	parentMenu;
	contentId = boxWith(() => "");
	contentNode = null;
	contentPresence;
	triggerNode = null;
	constructor(opts, root, parentMenu) {
		this.opts = opts;
		this.root = root;
		this.parentMenu = parentMenu;
		this.contentPresence = new PresenceManager({
			ref: boxWith(() => this.contentNode),
			open: this.opts.open,
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			},
			shouldSkipExitAnimation: () => {
				if (this.root.opts.variant.current !== "menubar" || this.parentMenu !== null) return false;
				return this.root.opts.shouldSkipExitAnimation?.() ?? false;
			}
		});
		if (parentMenu) watch(() => parentMenu.opts.open.current, () => {
			if (parentMenu.opts.open.current) return;
			this.opts.open.current = false;
		});
	}
	toggleOpen() {
		this.opts.open.current = !this.opts.open.current;
	}
	onOpen() {
		this.opts.open.current = true;
	}
	onClose() {
		this.opts.open.current = false;
	}
};
var DropdownMenuTriggerState = class DropdownMenuTriggerState {
	static create(opts) {
		return new DropdownMenuTriggerState(opts, MenuMenuContext.get());
	}
	opts;
	parentMenu;
	attachment;
	constructor(opts, parentMenu) {
		this.opts = opts;
		this.parentMenu = parentMenu;
		this.attachment = attachRef(this.opts.ref, (v) => this.parentMenu.triggerNode = v);
	}
	onclick = (e) => {
		/**
		* MacOS VoiceOver sends a click in Safari/Firefox bypassing the keydown event
		* when V0+Space is pressed. Since we already handle the keydown event and the
		* pointerdown events separately, we ignore it if the detail is not 0.
		*/
		if (this.opts.disabled.current || e.detail !== 0) return;
		this.parentMenu.toggleOpen();
		e.preventDefault();
	};
	onpointerdown = (e) => {
		if (this.opts.disabled.current) return;
		if (e.pointerType === "touch") return e.preventDefault();
		if (e.button === 0 && e.ctrlKey === false) {
			this.parentMenu.toggleOpen();
			if (!this.parentMenu.opts.open.current) e.preventDefault();
		}
	};
	onpointerup = (e) => {
		if (this.opts.disabled.current) return;
		if (e.pointerType === "touch") {
			e.preventDefault();
			this.parentMenu.toggleOpen();
		}
	};
	onkeydown = (e) => {
		if (this.opts.disabled.current) return;
		if (e.key === " " || e.key === "Enter") {
			this.parentMenu.toggleOpen();
			e.preventDefault();
			return;
		}
		if (e.key === "ArrowDown") {
			this.parentMenu.onOpen();
			e.preventDefault();
		}
	};
	#ariaControls = derived(() => {
		if (this.parentMenu.opts.open.current && this.parentMenu.contentId.current) return this.parentMenu.contentId.current;
	});
	#props = derived(() => ({
		id: this.opts.id.current,
		disabled: this.opts.disabled.current,
		"aria-haspopup": "menu",
		"aria-expanded": boolToStr(this.parentMenu.opts.open.current),
		"aria-controls": this.#ariaControls(),
		"data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
		"data-state": getDataOpenClosed(this.parentMenu.opts.open.current),
		[this.parentMenu.root.getBitsAttr("trigger")]: "",
		onclick: this.onclick,
		onpointerdown: this.onpointerdown,
		onpointerup: this.onpointerup,
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
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/use-floating-layer.svelte.js
var FloatingRootContext = new Context("Floating.Root");
var FloatingTooltipRootContext = new Context("Floating.Root");
var FloatingRootState = class FloatingRootState {
	static create(tooltip = false) {
		return tooltip ? FloatingTooltipRootContext.set(new FloatingRootState()) : FloatingRootContext.set(new FloatingRootState());
	}
	anchorNode = simpleBox(null);
	customAnchorNode = simpleBox(null);
	triggerNode = simpleBox(null);
	constructor() {}
};
var FloatingAnchorState = class FloatingAnchorState {
	static create(opts, tooltip = false) {
		return tooltip ? new FloatingAnchorState(opts, FloatingTooltipRootContext.get()) : new FloatingAnchorState(opts, FloatingRootContext.get());
	}
	opts;
	root;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		if (opts.virtualEl && opts.virtualEl.current) root.triggerNode = boxFrom(opts.virtualEl.current);
		else root.triggerNode = opts.ref;
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer.svelte
function Floating_layer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children, tooltip = false } = $$props;
		FloatingRootState.create(tooltip);
		children?.($$renderer);
		$$renderer.push(`<!---->`);
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-anchor.svelte
function Floating_layer_anchor($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { id, children, virtualEl, ref, tooltip = false } = $$props;
		FloatingAnchorState.create({
			id: boxWith(() => id),
			virtualEl: boxWith(() => virtualEl),
			ref
		}, tooltip);
		children?.($$renderer);
		$$renderer.push(`<!---->`);
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/menu/components/menu.svelte
function Menu($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { open = false, dir = "ltr", onOpenChange = noop, onOpenChangeComplete = noop, _internal_variant: variant = "dropdown-menu", _internal_should_skip_exit_animation: shouldSkipExitAnimation = void 0, children } = $$props;
		const root = MenuRootState.create({
			variant: boxWith(() => variant),
			dir: boxWith(() => dir),
			onClose: () => {
				open = false;
				onOpenChange(false);
			},
			shouldSkipExitAnimation: () => shouldSkipExitAnimation?.() ?? false
		});
		MenuMenuState.create({
			open: boxWith(() => open, (v) => {
				open = v;
				onOpenChange(v);
			}),
			onOpenChangeComplete: boxWith(() => onOpenChangeComplete)
		}, root);
		Floating_layer($$renderer, {
			children: ($$renderer) => {
				children?.($$renderer);
				$$renderer.push(`<!---->`);
			}});
		bind_props($$props, { open });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/menubar/menubar.svelte.js
var menubarAttrs = createBitsAttrs({
	component: "menubar",
	parts: [
		"root",
		"trigger",
		"content"
	]
});
var MenubarRootContext = new Context("Menubar.Root");
var MenubarMenuContext = new Context("Menubar.Menu");
var MenubarRootState = class MenubarRootState {
	static create(opts) {
		return MenubarRootContext.set(new MenubarRootState(opts));
	}
	opts;
	rovingFocusGroup;
	attachment;
	wasOpenedByKeyboard = false;
	triggerIds = [];
	/** Outgoing menu id when swapping to another top-level menu... skip exit animation wait only then */
	skipExitAnimationForMenuValue = null;
	valueToChangeHandler = /* @__PURE__ */ new Map();
	constructor(opts) {
		this.opts = opts;
		this.attachment = attachRef(this.opts.ref);
		this.rovingFocusGroup = new RovingFocusGroup({
			rootNode: this.opts.ref,
			candidateAttr: menubarAttrs.trigger,
			loop: this.opts.loop,
			orientation: boxWith(() => "horizontal")
		});
	}
	/**
	* @param id - the id of the trigger to register
	* @returns - a function to de-register the trigger
	*/
	registerTrigger = (id) => {
		this.triggerIds.push(id);
		return () => {
			this.triggerIds = this.triggerIds.filter((triggerId) => triggerId !== id);
		};
	};
	/**
	* @param value - the value of the menu to register
	* @param contentId - the content id to associate with the value
	* @returns - a function to de-register the menu
	*/
	registerMenu = (value, onOpenChange) => {
		this.valueToChangeHandler.set(value, onOpenChange);
		return () => {
			this.valueToChangeHandler.delete(value);
		};
	};
	updateValue = (value) => {
		const currValue = this.opts.value.current;
		const switchingMenus = Boolean(currValue && value && currValue !== value);
		if (switchingMenus) this.skipExitAnimationForMenuValue = currValue;
		const currHandler = this.valueToChangeHandler.get(currValue)?.current;
		const nextHandler = this.valueToChangeHandler.get(value)?.current;
		this.opts.value.current = value;
		if (currHandler && currValue !== value) currHandler(false);
		if (nextHandler) nextHandler(true);
		if (switchingMenus) afterTick(() => {
			this.skipExitAnimationForMenuValue = null;
		});
	};
	getTriggers = () => {
		const node = this.opts.ref.current;
		if (!node) return [];
		return Array.from(node.querySelectorAll(menubarAttrs.selector("trigger")));
	};
	onMenuOpen = (id, triggerId) => {
		this.updateValue(id);
		this.rovingFocusGroup.setCurrentTabStopId(triggerId);
	};
	onMenuClose = () => {
		this.updateValue("");
	};
	onMenuToggle = (id) => {
		this.updateValue(this.opts.value.current ? "" : id);
	};
	#props = derived(() => ({
		id: this.opts.id.current,
		role: "menubar",
		[menubarAttrs.root]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var MenubarMenuState = class MenubarMenuState {
	static create(opts) {
		return MenubarMenuContext.set(new MenubarMenuState(opts, MenubarRootContext.get()));
	}
	opts;
	root;
	#open = derived(() => this.root.opts.value.current === this.opts.value.current);
	get open() {
		return this.#open();
	}
	set open($$value) {
		return this.#open($$value);
	}
	wasOpenedByKeyboard = false;
	triggerNode = null;
	#triggerId = derived(() => this.triggerNode?.id);
	get triggerId() {
		return this.#triggerId();
	}
	set triggerId($$value) {
		return this.#triggerId($$value);
	}
	#contentId = derived(() => this.contentNode?.id);
	get contentId() {
		return this.#contentId();
	}
	set contentId($$value) {
		return this.#contentId($$value);
	}
	contentNode = null;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		watch(() => this.open, () => {
			if (!this.open) this.wasOpenedByKeyboard = false;
		});
	}
	getTriggerNode() {
		return this.triggerNode;
	}
	toggleMenu() {
		this.root.onMenuToggle(this.opts.value.current);
	}
	openMenu() {
		this.root.onMenuOpen(this.opts.value.current, this.triggerNode?.id ?? "");
	}
};
var MenubarTriggerState = class MenubarTriggerState {
	static create(opts) {
		return new MenubarTriggerState(opts, MenubarMenuContext.get());
	}
	opts;
	menu;
	root;
	attachment;
	isFocused = false;
	#tabIndex = 0;
	constructor(opts, menu) {
		this.opts = opts;
		this.menu = menu;
		this.root = menu.root;
		this.attachment = attachRef(this.opts.ref, (v) => this.menu.triggerNode = v);
	}
	onpointerdown = (e) => {
		if (!this.opts.disabled.current && e.button === 0 && e.ctrlKey === false) {
			if (!this.menu.open) e.preventDefault();
			this.menu.toggleMenu();
		}
	};
	onpointerenter = () => {
		if (Boolean(this.root.opts.value.current) && !this.menu.open) {
			this.menu.openMenu();
			this.menu.getTriggerNode()?.focus();
		}
	};
	onkeydown = (e) => {
		if (this.opts.disabled.current) return;
		if (e.key === "Tab") return;
		if (e.key === "Enter" || e.key === " ") this.root.onMenuToggle(this.menu.opts.value.current);
		if (e.key === "ArrowDown") this.menu.openMenu();
		if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
			this.menu.wasOpenedByKeyboard = true;
			e.preventDefault();
		}
		this.root.rovingFocusGroup.handleKeydown(this.menu.getTriggerNode(), e);
	};
	onfocus = () => {
		this.isFocused = true;
	};
	onblur = () => {
		this.isFocused = false;
	};
	#props = derived(() => ({
		type: "button",
		role: "menuitem",
		id: this.opts.id.current,
		"aria-haspopup": "menu",
		"aria-expanded": boolToStr(this.menu.open),
		"aria-controls": this.menu.open ? this.menu.contentId : void 0,
		"data-highlighted": this.isFocused ? "" : void 0,
		"data-state": getDataOpenClosed(this.menu.open),
		"data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
		"data-menu-value": this.menu.opts.value.current,
		disabled: this.opts.disabled.current ? true : void 0,
		tabindex: this.#tabIndex,
		[menubarAttrs.trigger]: "",
		onpointerdown: this.onpointerdown,
		onpointerenter: this.onpointerenter,
		onkeydown: this.onkeydown,
		onfocus: this.onfocus,
		onblur: this.onblur,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/menubar/components/menubar.svelte
function Menubar$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { id = createId(uid), children, child, ref = null, value = "", dir = "ltr", loop = true, onValueChange = noop, $$slots, $$events, ...restProps } = $$props;
		const rootState = MenubarRootState.create({
			id: boxWith(() => id),
			value: boxWith(() => value, (v) => {
				value = v;
				onValueChange?.(v);
			}),
			dir: boxWith(() => dir),
			loop: boxWith(() => loop),
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
//#region node_modules/bits-ui/dist/bits/menubar/components/menubar-menu.svelte
function Menubar_menu$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { value = createId(uid), onOpenChange = noop, $$slots, $$events, ...restProps } = $$props;
		const menuState = MenubarMenuState.create({
			value: boxWith(() => value),
			onOpenChange: boxWith(() => onOpenChange)
		});
		Menu($$renderer, spread_props([
			{
				open: menuState.open,
				onOpenChange: (open) => {
					if (!open) menuState.root.onMenuClose();
				},
				dir: menuState.root.opts.dir.current,
				_internal_variant: "menubar"
			},
			restProps,
			{ _internal_should_skip_exit_animation: () => menuState.root.skipExitAnimationForMenuValue === menuState.opts.value.current }
		]));
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/menubar/components/menubar-trigger.svelte
function Menubar_trigger$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { id = createId(uid), disabled = false, children, child, ref = null, $$slots, $$events, ...restProps } = $$props;
		const triggerState = MenubarTriggerState.create({
			id: boxWith(() => id),
			disabled: boxWith(() => disabled ?? false),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const dropdownTriggerState = DropdownMenuTriggerState.create(triggerState.opts);
		const triggerAttachment = attachRef((v) => dropdownTriggerState.parentMenu.triggerNode = v);
		const mergedProps = derived(() => mergeProps(restProps, triggerState.props, { ...triggerAttachment }));
		Floating_layer_anchor($$renderer, {
			id,
			ref: triggerState.opts.ref,
			children: ($$renderer) => {
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
			}});
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/menubar/menubar.svelte
function Menubar($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Menubar$1) {
				$$renderer.push("<!--[-->");
				Menubar$1($$renderer, spread_props([
					{
						"data-slot": "menubar",
						class: cn("h-9 rounded-3xl border p-1 flex items-center", className)
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
//#region src/lib/components/ui/menubar/menubar-menu.svelte
function Menubar_menu($$renderer, $$props) {
	let { $$slots, $$events, ...restProps } = $$props;
	if (Menubar_menu$1) {
		$$renderer.push("<!--[-->");
		Menubar_menu$1($$renderer, spread_props([restProps]));
		$$renderer.push("<!--]-->");
	} else {
		$$renderer.push("<!--[!-->");
		$$renderer.push("<!--]-->");
	}
}
//#endregion
//#region src/lib/components/ui/menubar/menubar-trigger.svelte
function Menubar_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Menubar_trigger$1) {
				$$renderer.push("<!--[-->");
				Menubar_trigger$1($$renderer, spread_props([
					{
						"data-slot": "menubar-trigger",
						class: cn("hover:bg-muted aria-expanded:bg-muted rounded-2xl px-2 py-0.75 text-sm font-medium flex items-center outline-hidden select-none", className)
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
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	let { children } = $$props;
	head("12qhfyh", $$renderer, ($$renderer) => {
		$$renderer.push(`<link rel="icon"${attr("href", favicon_default)}/>`);
	});
	$$renderer.push(`<div class="sticky top-0 flex justify-center bg-secondary z-50">`);
	if (Menubar) {
		$$renderer.push("<!--[-->");
		Menubar($$renderer, {
			class: "p-9 my-2.5 bg-primary justify-center text-primary-foreground border-none rounded-3xl",
			children: ($$renderer) => {
				if (Menubar_menu) {
					$$renderer.push("<!--[-->");
					Menubar_menu($$renderer, {
						children: ($$renderer) => {
							if (Menubar_trigger) {
								$$renderer.push("<!--[-->");
								Menubar_trigger($$renderer, {
									class: "text-lg px-4 py-2",
									children: ($$renderer) => {
										$$renderer.push(`<a href="/">Home</a>`);
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
						},
						$$slots: { default: true }
					});
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
				$$renderer.push(` `);
				if (Menubar_menu) {
					$$renderer.push("<!--[-->");
					Menubar_menu($$renderer, {
						children: ($$renderer) => {
							if (Menubar_trigger) {
								$$renderer.push("<!--[-->");
								Menubar_trigger($$renderer, {
									class: "text-lg px-4 py-2",
									children: ($$renderer) => {
										$$renderer.push(`<a href="/about">About</a>`);
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
						},
						$$slots: { default: true }
					});
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
				$$renderer.push(` `);
				if (Menubar_menu) {
					$$renderer.push("<!--[-->");
					Menubar_menu($$renderer, {
						children: ($$renderer) => {
							if (Menubar_trigger) {
								$$renderer.push("<!--[-->");
								Menubar_trigger($$renderer, {
									class: "text-lg px-4 py-2",
									children: ($$renderer) => {
										$$renderer.push(`<a href="/modules">Modules</a>`);
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
						},
						$$slots: { default: true }
					});
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
				$$renderer.push(` `);
				if (Menubar_menu) {
					$$renderer.push("<!--[-->");
					Menubar_menu($$renderer, {
						children: ($$renderer) => {
							if (Menubar_trigger) {
								$$renderer.push("<!--[-->");
								Menubar_trigger($$renderer, {
									class: "text-lg px-4 py-2",
									children: ($$renderer) => {
										$$renderer.push(`<a href="/actions">Action</a>`);
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
						},
						$$slots: { default: true }
					});
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
				$$renderer.push(` `);
				if (Menubar_menu) {
					$$renderer.push("<!--[-->");
					Menubar_menu($$renderer, {
						children: ($$renderer) => {
							if (Menubar_trigger) {
								$$renderer.push("<!--[-->");
								Menubar_trigger($$renderer, {
									class: "text-lg px-4 py-2",
									children: ($$renderer) => {
										$$renderer.push(`<a href="/reflection">Reflection</a>`);
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
						},
						$$slots: { default: true }
					});
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
				$$renderer.push(` `);
				if (Menubar_menu) {
					$$renderer.push("<!--[-->");
					Menubar_menu($$renderer, {
						children: ($$renderer) => {
							if (Menubar_trigger) {
								$$renderer.push("<!--[-->");
								Menubar_trigger($$renderer, {
									class: "text-lg px-4 py-2",
									children: ($$renderer) => {
										$$renderer.push(`<a href="/simulations">Simulation</a>`);
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
						},
						$$slots: { default: true }
					});
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
			},
			$$slots: { default: true }
		});
		$$renderer.push("<!--]-->");
	} else {
		$$renderer.push("<!--[!-->");
		$$renderer.push("<!--]-->");
	}
	$$renderer.push(`</div> `);
	children($$renderer);
	$$renderer.push(`<!---->`);
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-DjvQ4JMZ.js.map
