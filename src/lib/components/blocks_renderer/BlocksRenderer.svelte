<script>
    // import type {
    //     BlockComponents,
    //     ModifierComponents,
    //     BlocksRendererProps,
    // } from '$lib/types/index.js';

    import { mergeComponents, generateBlockKey } from "$lib/components/blocks_renderer/utils/index";

    import Paragraph from '$lib/components/blocks_renderer/blocks/Paragraph.svelte';
    import Heading from '$lib/components/blocks_renderer/blocks/Heading.svelte';
    import Quote from '$lib/components/blocks_renderer/blocks/Quote.svelte';
    import Code from '$lib/components/blocks_renderer/blocks/Code.svelte';
    import Image from '$lib/components/blocks_renderer/blocks/Image.svelte';
    import List from '$lib/components/blocks_renderer/blocks/List.svelte';
    import ListItem from '$lib/components/blocks_renderer/blocks/ListItem.svelte';

    import Bold from "$lib/components/blocks_renderer/modifiers/Bold.svelte";
    import Italic from "$lib/components/blocks_renderer/modifiers/Italic.svelte";
    import Underline from "$lib/components/blocks_renderer/modifiers/Underline.svelte";
    import Strikethrough from "$lib/components/blocks_renderer/modifiers/Strikethrough.svelte";
    import InlineCode from "$lib/components/blocks_renderer/modifiers/Code.svelte";
    import Link from "$lib/components/blocks_renderer/modifiers/Link.svelte";

    const { content, blocks = {}, modifiers = {} } = $props();

    const defaultBlocks = {
        paragraph: Paragraph,
        heading: Heading,
        quote: Quote,
        code: Code,
        image: Image,
        list: List,
        'list-item': ListItem,
    };

    const defaultModifiers = {
        bold: Bold,
        italic: Italic,
        underline: Underline,
        strikethrough: Strikethrough,
        code: InlineCode,
        link: Link,
    };

    let resolvedBlocks = $derived(mergeComponents(defaultBlocks, blocks));
    let resolvedModifiers = $derived(mergeComponents(defaultModifiers, modifiers));
</script>

{#if Array.isArray(content)}
    {#each content as node, index (generateBlockKey(node, index))}
        {#if resolvedBlocks[node.type]}
            <!-- {@const Block = resolvedBlocks[node.type] as unknown as import('svelte').Component} -->
            {@const Block = resolvedBlocks[node.type]}
            <Block {node} {index} modifiers={resolvedModifiers} />
        {:else}
            <div class="blocks-renderer-unknown">
                Unknown block type: <code>{node.type}</code>
            </div>
        {/if}
    {/each}
{:else}
    <div class="blocks-renderer-empty">No content to render.</div>
{/if}

<style>
    .blocks-renderer-unknown {
        color: #b00;
        background: #fee;
        border: 1px solid #fcc;
        font-family: monospace;
        padding: 0.5em;
        margin: 0.25em 0;
        border-radius: 0.25rem;
    }

    .blocks-renderer-empty {
        color: #888;
        font-style: italic;
        margin: 0.25em 0;
    }
</style>
