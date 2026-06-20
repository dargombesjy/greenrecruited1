<script>
	import { marked } from 'marked';
	let markdown = $state("");
</script>

<h1>Apa yang anda dapatkan...</h1>
<textarea class="w-full" bind:value={markdown}></textarea>

<!-- <div class="preview">{@html marked(markdown)}</div> -->
