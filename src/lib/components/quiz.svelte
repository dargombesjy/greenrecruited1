<script>
	import SlideThumbnail from "./slider/slide-thumbnail.svelte";
	import SlideCaption from "./slider/slide-caption.svelte";

	let slideNum = $state(0);

	let slideContents = [
		{
			id: 1,
			content: 'This is content no.1'
		},
		{
			id: 2,
			content: 'This is content no 2'
		}
	];

	function pxClick(par) {
		slideNum = 9;
	}

	function nxClick(par) {
		slideNum = 10;
	}

	function selectSlide(par) {
		slide.selected = par;
		let obj = slideContents.filter((el) => el.id == par);

		slide.content = obj[0] ? obj[0].content : '';
	}
</script>

<div id="slides-container">
	<SlideThumbnail />
	<SlideCaption prevClick={() => pxClick()} nextClick={() => nxClick()} />
	<div id="slide-content">{slideNum}</div>
</div>

<style>
</style>
