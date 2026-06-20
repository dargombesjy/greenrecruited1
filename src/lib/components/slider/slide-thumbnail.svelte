<script>
	let slide = $state({
		selected: 0,
		seled: 0,
		content: {}
	});
	let { onclick } = $props();

	let slideNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
</script>

<div id="thumbnail-row" class="flex w-full overflow-clip">
	{#each slideNumbers as num}
		<div id="thumbnail-container" class="w-16 flex-none items-center justify-center text-center">
			<button
				id="thumbnail-item"
				class="cursor-pointer text-4xl opacity-40 hover:opacity-100 active:opacity-100"
				{onclick}
			>
				{num}
			</button>
		</div>
	{/each}
</div>
