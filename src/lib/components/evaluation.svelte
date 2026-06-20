<script>
    import * as Tabs from "$lib/components/ui/tabs/index";
    import { BlocksRenderer } from "$lib/components/blocks_renderer/index";
    import { Textarea } from "$lib/components/ui/textarea/index";
    let { data } = $props();
</script>

<Tabs.Root value={data[0].indx_num} class="w-full">
    <Tabs.List>
        {#each data as el}
            <Tabs.Trigger value={el.indx_num}>{el.indx_num}</Tabs.Trigger>
        {/each}
    </Tabs.List>
    {#each data as el}
        <Tabs.Content value={el.indx_num}>
            <div class="p-4">
                <BlocksRenderer content={el.question} />
            </div>
            <Textarea value={el.answer} placeholder="jawaban anda..." />
        </Tabs.Content>
    {/each}
</Tabs.Root>
