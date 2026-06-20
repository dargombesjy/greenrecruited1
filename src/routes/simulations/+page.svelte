<script>
	import { goto } from '$app/navigation';
	// import Footer from '$lib/Footer.svelte';
	// let { data } = $props();

	function gotoItem(par) {
		let dest = '/simulations/' + par;
		goto(dest);
	}
</script>

<div class="mx-auto w-3/4">
	<div class="flex justify-around px-10 py-4">
		<div class="flex w-1/2 flex-col justify-center p-8 text-[28pt]">
			<p class="text-center">
				SIMULASI REKRUTMEN
				<!-- {row.title} -->
			</p>
		</div>
		<div class="flex w-1/2 flex-col items-center p-8">
			<p class="text-center">
				Organisasi berkelanjutan dimulai dari proses rekrutmen yang berkelanjutan pula
				<!-- {row.long_title} -->
			</p>
			<button
				onclick={() => gotoItem('rekrutmen_hijau')}
				class="mt-4 w-48 cursor-pointer rounded-2xl bg-primary py-4 text-center text-primary-foreground text-lg"
			>
				Mulai simulasi
			</button>
		</div>
	</div>
</div>

<!-- <Footer /> -->
