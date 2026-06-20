<script>
	import { BlocksRenderer } from "$lib/components/blocks_renderer/index.js";
	let { data } = $props();
</script>

<div class="mx-auto px-10 w-3/4 p-4">
	<div class="flex">
		<div class="aspect-[16/9] w-full">
			<iframe
				class="h-full w-full"
				src="https://youtube.com/embed/{data.data.video_id}"
				frameborder="0"
				title="Test"
				name="video-01"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			></iframe>
		</div>
	</div>
    <div class="my-4">
		<BlocksRenderer content={data.data.long_text} />
	</div>
</div>
