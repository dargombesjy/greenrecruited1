<script>
    import { PUBLIC_STRAPI_URL } from "$env/static/public";
    let { data } = $props();
</script>

<div class="mx-auto w-3/4 p-4">
    <div class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {#each data.data as item}
            <div
                class="relative cursor-pointer overflow-hidden bg-white transition-all duration-300 hover:shadow-lg"
            >
                <a
                    href="/modules/{item.documentId}"
                    class="block"
                    aria-label="product-wrapper"
                >
                    <div class="aspect-8/6 w-full p-3">
                        <img
                            src="{PUBLIC_STRAPI_URL}{item.image.url}"
                            alt=""
                            class="h-full w-full object-fill"
                        />
                    </div>
                    <div class="p-6">
                        <hr class="mb-6 border border-gray-300" />
                        <div>
                            <h4>{item.title}</h4>
                            <!-- <h4>{item.description}</h4> -->
                        </div>
                    </div>
                </a>
            </div>
        {/each}
    </div>
</div>
