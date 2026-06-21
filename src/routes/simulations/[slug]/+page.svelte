<script>
	import { PUBLIC_STRAPI_URL } from "$env/static/public";
	import { goto } from "$app/navigation";
	import { BlocksRenderer } from "$lib/components/blocks_renderer/index.js";
	import { setContext } from "svelte";
	import * as RadioGroup from "$lib/components/ui/radio-group/index.js";

	let { data } = $props();
	let choicepar = $state({
		next_node: '',
		recent_parent: '',
		parent_node: data.data[0].name
	});
	let nextpar = $derived.by(() => {
		return data.data[0].next_simulation;
	});

	const slugify = (str = '') => str.toLowerCase().replace(/ /g, '-').replace(/\./g, '');
	function updateChoice(par, upnode) {
		choicepar.next_node = par;
		choicepar.recent_parent = upnode;
	}
	function gotoChoice() {
		let dest = '/simulations/' + choicepar.next_node;
		if (choicepar.next_node == '') {
			dest = '/simulations/' + choicepar.parent_node;
		}
		goto(dest);
		choicepar.next_node = '';
	}
	function gotoSimulation(sim) {
		let dest = '/simulations';
		if (sim != 'reset') {
			dest = dest + '/' + sim;
		}
		goto(dest);
	}
</script>

<div class="mx-auto flex w-3/4 flex-col p-8 mb-8">
	{#if data.data[0].image}
		<img
			src="{PUBLIC_STRAPI_URL}{data.data[0].image.url}"
			class="h-40 w-40 self-center rounded-full object-cover"
			alt=""
		/>
	{/if}

	<div class="mt-8 mb-4 text-center text-2xl">{data.data[0].long_title}</div>
	<div class="my-4 self-center text-xl">
		<BlocksRenderer content={data.data[0].description} />
	</div>

	<div class="self-center text-lg">
		{#each data.data[0].choices as path}
			<div class="flex gap-1">
				<input
					onclick={() => updateChoice(path.next_node, data.data[0].name)}
					id={slugify(path.choice_name)}
					type="radio"
					name="choices"
					class="peer"
				/>
				<label for={slugify(path.choice_name)} class="p-3 rounded-lg peer-checked:bg-muted/80">
					{path.choice_text}
				</label>
			</div>
		{/each}
	</div>

	{#if choicepar.next_node}
		<button
			class="mt-4 w-48 cursor-pointer self-center rounded-xl bg-primary py-4 text-center text-primary-foreground"
			onclick={() => gotoChoice()}
			>Submit
		</button>
	{:else if nextpar}
		<button
			class="mt-4 w-48 cursor-pointer self-center rounded-xl bg-primary py-4 text-center text-primary-foreground"
			onclick={() => gotoSimulation(nextpar)}
			>Simulasi Berikutnya
		</button>
	{:else}
		<button
			class="mt-4 w-48 cursor-pointer self-center rounded-xl bg-primary py-4 text-center text-primary-foreground"
			onclick={() => gotoSimulation('reset')}
			>Reset
		</button>
	{/if}
</div>

<style>
</style>
