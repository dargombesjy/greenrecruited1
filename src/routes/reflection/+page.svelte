<script>
	// import Footer from "$lib/Footer.svelte";
	import { PUBLIC_STRAPI_URL } from "$env/static/public";
    let { data } = $props();
</script>

<div class="w-3/4 mx-auto">
	<div class="relative -z-10 w-full">
		<img class="w-full object-fill" src="{PUBLIC_STRAPI_URL}{data.data.main_image.url}" alt="" />
		<div class="absolute top-[75%] px-8 text-4xl font-bold text-white">{data.data.title}</div>
	</div>

	<div class="my-8 flex w-full justify-between">
		<div class="w-1/2">
			<img class="w-full" src="{PUBLIC_STRAPI_URL}{data.data.forum_image.url}" alt="" />
		</div>
		<div class="flex w-1/2 flex-col p-4">
			<p class="text-[24pt]">{data.data.forum_title}</p>
			<div>
				<span>{data.data.forum_desc}
				</span>
			</div>
			<button class="mt-2 w-40 rounded-3xl bg-primary-50 p-2 text-white">Mulai diskusi</button>
		</div>
	</div>

	<!-- <p class="mt-8 mb-4">APA YANG BISA KITA LAKUKAN ?</p>
	<div class="flex gap-2 overflow-x-auto">
		{#each data.data.todos as todo}
		<div class="relative w-96 flex-none">
			<img class="h-64 w-full object-cover" src="{PUBLIC_STRAPI_URL}{todo.todo_image.url}" alt="" />
			<div class="absolute top-[70%] px-2 text-bold text-white">{todo.title}</div>
		</div>
		{/each}
	</div> -->

</div>

<!-- <Footer /> -->
