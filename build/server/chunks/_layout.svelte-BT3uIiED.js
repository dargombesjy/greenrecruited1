//#region src/routes/modules/+layout.svelte
function _layout($$renderer, $$props) {
	let { children } = $$props;
	children($$renderer);
	$$renderer.push(`<!---->`);
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-BT3uIiED.js.map
