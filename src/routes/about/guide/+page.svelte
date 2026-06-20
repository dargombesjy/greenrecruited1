<script>
	import { goto } from '$app/navigation';
	import { PUBLIC_STRAPI_URL } from '$env/static/public';
	import { BlocksRenderer } from "$lib/components/blocks_renderer/index.js";
	// import Footer from '$lib/Footer.svelte';

	let { data } = $props();

	// function gotoItem(par) {
	// 	let dest = '/about/' + par;
	// 	goto(dest);
	// }
</script>

<div class="p10 mx-auto my-8 w-3/4">
	<!-- <div class="relative -z-10 w-full flex-none">
		<div class="absolute top-[75%] px-8 text-4xl font-bold text-white">{data.data.title}</div>
	</div> -->
	{#each data.data as item, idx}
		{#if idx % 2 == 0}
			<div class="flex w-full">
				<div class="w-1/2">
					<img class="h-96 object-fill" src="{PUBLIC_STRAPI_URL}{item.image.url}" alt="" />
				</div>
				<div class="flex w-1/2 flex-col pr-4 pl-8">
					<p class="h-1/3 content-center text-3xl font-bold">{item.title}</p>
					<div class="h-1/3">
						<BlocksRenderer content={item.description} />
					</div>
				</div>
			</div>
		{:else}
			<div class="flex w-full">
				<div class="flex w-1/2 flex-col pr-4 pl-8">
					<p class="h-1/3 content-center text-3xl font-bold">{item.title}</p>
					<div class="h-1/3">
						<BlocksRenderer content={item.description} />
					</div>
				</div>
				<div class="w-1/2">
					<img class="h-96 object-fill" src="{PUBLIC_STRAPI_URL}{item.image.url}" alt="" />
				</div>
			</div>
		{/if}
	{/each}
</div>

<!-- <Footer /> -->
