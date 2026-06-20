<script>
	import { goto } from '$app/navigation';
	import { PUBLIC_STRAPI_URL } from '$env/static/public';
	import RightArrow from "$lib/components/right-arrow.svelte";

	let { data } = $props();
</script>

<div class="mx-8 flex dg-dvh pb-8">
	<div class="my-auto">
		<h2 class="mb-4 text-[60pt] font-bold text-primary-50 dark:text-primary-500">GreenRecruitED</h2>
		<div class="text-[28pt]">Sustainable Recruitment Learning Platform</div>
		<!-- <div class="text-[28pt]">"Learning Recruitment for a Sustainable Future"</div> -->
		<div class="text-[28pt]">{data.data.subtitle}</div>
	</div>
</div>

<div class="w-5/6 mx-auto flex dg-dvh flex-col">
	<video class="w-full" muted autoplay loop playsinline controls disablepictureinpicture>
		<!-- <track kind="captions" /> -->
		<source src="{PUBLIC_STRAPI_URL}{data.data.intro_video.url}" />
	</video>
</div>

<div class="w-5/6 mx-auto my-auto dg-dvh grid grid-cols-3 content-center gap-2">
	{#each data.data.block_1s as block1_item}
		<div class="h-96 bg-primary hover:bg-muted">
			<div class="m-6">
				<p class="mb-2 h-32 text-[32pt] font-bold tracking-tight text-primary-foreground">
					{block1_item.title}
				</p>
				<p class="mb-3 leading-tight text-primary-foreground">
					{block1_item.description}
				</p>
				<button
					onclick={() => goto(block1_item.target_link)}
					class="inline-flex w-40 cursor-pointer items-center justify-center rounded-lg bg-primary-50 px-5
					py-2.5 text-center text-sm font-medium text-primary-foreground focus-within:ring-4
					focus-within:ring-primary-300 focus-within:outline-hidden hover:bg-primary-800"
				>
					Lebih jauh <RightArrow class="text-primary-foreground" />
				</button>
			</div>
		</div>
	{/each}
</div>

<!-- <div class="w-7/8 mx-auto mt-10 grid h-screen grid-cols-3 grid-rows-3 content-center gap-2 text-[20pt]">
	<a href="/" class="content-center rounded-[20px] bg-primary text-center text-primary-foreground">
		<p>{data.data.block_3s[0].title}</p>
	</a>
	<a
		href="/"
		class="col-start-2 row-start-2 content-center rounded-[20px] bg-primary text-center text-primary-foreground"
	>
		<p>{data.data.block_3s[1].title}</p>
	</a>
	<a
		href="/"
		class="col-start-3 row-start-3 content-center rounded-[20px] bg-primary text-center text-primary-foreground"
	>
		<p>{data.data.block_3s[2].title}</p>
	</a>
</div> -->

<!-- <div class="w-5/6 mx-auto mt-10 flex dg-dvh flex-col justify-center">
	<div class="text-center">
		<p>{data.data.lebih_lanjut}</p>
		<button class="mt-4 cursor-pointer rounded-[30px] bg-primary px-8 py-4 text-primary-foreground"
			>Selengkapnya..</button
		>
	</div>
</div> -->

<style>
    .dg-dvh {
      /* Fallback for older browsers */
      /*height: calc(100vh - 100px);*/
      /* Modern dynamic viewport approach */
      height: calc(100dvh - 90px);
    }
</style>
