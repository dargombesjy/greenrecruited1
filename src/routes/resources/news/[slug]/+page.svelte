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
</div>
