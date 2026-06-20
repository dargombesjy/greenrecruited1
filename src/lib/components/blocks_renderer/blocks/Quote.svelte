<script>
    import InlineRenderer from '../InlineRenderer.svelte';
    // import type { QuoteProps } from '$lib/types/index.js';

    const { node, modifiers } = $props();
</script>

<blockquote>
    <InlineRenderer nodes={node.children} {modifiers} />
</blockquote>
