<script>
    import { PUBLIC_STRAPI_URL } from "$env/static/public";
    import Action from "$lib/components/action.svelte";

    let { data } = $props();
    function getImgUrl() {
        let thumbnailUrl = PUBLIC_STRAPI_URL + data.data.image.url;
        return thumbnailUrl;
    }
</script>

<div class="mx-auto px-10 w-3/4 p-4">
    <Action item={data.data} imgUrl={getImgUrl()} />
</div>

<style>
</style>
