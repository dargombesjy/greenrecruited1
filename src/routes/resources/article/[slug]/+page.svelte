<script>
    // import { BlocksRenderer } from "$lib/components/blocks_renderer/index.js";
    import { PUBLIC_STRAPI_URL } from "$env/static/public";
    import News from "$lib/components/news.svelte";

    let { data } = $props();
    function getImgUrl() {
        let thumbnailUrl = PUBLIC_STRAPI_URL + data.data.thumbnail.url;
        return thumbnailUrl;
    }
</script>

<div class="mx-auto px-10 w-3/4 p-4">
    <News item={data.data} imgUrl={getImgUrl()} />
    <!-- <h3 class="font-bold text-2xl">{data.data.title}</h3>
    <div class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4">
        <div class="col-span-1 w-full overflow-y-scroll p-2.5">
            <img
                class="w-full object-cover"
                src="{PUBLIC_STRAPI_URL}{data.data.thumbnail.url}"
                alt=""
            />
        </div>
        <div class="col-span-3 w-full overflow-y-scroll p-2.5">
            <BlocksRenderer content={data.data.long_text} />
        </div>
    </div>
    <div class="p-2">
        <BlocksRenderer content={data.data.overview_info} />
    </div> -->
</div>
