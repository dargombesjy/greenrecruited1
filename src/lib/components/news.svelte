<script>
    import { BlocksRenderer } from "$lib/components/blocks_renderer/index.js";

    let { item, imgUrl } = $props();
</script>

<h3 class="font-bold text-2xl">{item.title}</h3>
<div class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4">
    <div class="col-span-1 w-full overflow-y-scroll p-2.5">
        <img
            class="w-full object-cover"
            src={imgUrl}
            alt=""
        />
    </div>
    <div class="col-span-3 w-full overflow-y-scroll p-2.5">
        <BlocksRenderer content={item.long_text} />
    </div>
</div>
<div class="p-2">
    <BlocksRenderer content={item.overview_info} />
</div>
