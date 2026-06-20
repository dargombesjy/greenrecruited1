<script>
    // import type { CodeProps } from '$lib/types/index.js';

    const { node } = $props();
</script>

<pre><code
        >{#each node.children as textNode, i (`${textNode.type}-${i}`)}{textNode.text}{/each}</code
    ></pre>
