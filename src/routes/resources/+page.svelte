<script>
	import { PUBLIC_STRAPI_URL } from '$env/static/public';
	// import Footer from '$lib/Footer.svelte';
	let { data } = $props();
</script>

<div class="mx-auto w-3/4">
	<h3 class="mt-4 py-2 font-bold text-3xl">VIDEO</h3>
	<div class="flex gap-2 overflow-x-auto">
		{#each data.data.videos as video}
			<a href="/resources/videos/{video.documentId}" class="block" aria-label="product-wrapper">
				<div class="relative -z-10 w-80 flex-none">
					<img
						class="h-48 w-full object-cover"
						src="{PUBLIC_STRAPI_URL}{video.thumbnail.url}"
						alt=""
					/>
				</div>
			</a>
		{/each}
	</div>

	<h3 class="mt-4 py-2 font-bold text-3xl">ARTIKEL</h3>
	<div class="flex gap-2 overflow-x-auto">
		{#each data.data.articles as article}
			<a href="/resources/article/{article.documentId}" class="block" aria-label="product-wrapper">
				<div class="relative -z-10 w-80 flex-none">
					<img
						class="h-48 w-full object-cover"
						src="{PUBLIC_STRAPI_URL}{article.thumbnail.url}"
						alt=""
					/>
				</div>
			</a>
		{/each}
	</div>

	<h3 class="mt-4 py-2 font-bold text-3xl">BERITA</h3>
	<div class="flex gap-2 overflow-x-auto">
		{#each data.data.news as news}
			<a href="/resources/news/{news.documentId}" class="block" aria-label="product-wrapper">
				<div class="relative -z-10 w-80 flex-none">
					<img
						class="h-48 w-full object-cover"
						src="{PUBLIC_STRAPI_URL}{news.thumbnail.url}"
						alt=""
					/>
				</div>
			</a>
		{/each}
	</div>
</div>

<!-- <Footer /> -->
