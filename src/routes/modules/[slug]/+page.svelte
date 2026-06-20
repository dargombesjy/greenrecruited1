<script>
    import { BlocksRenderer } from "$lib/components/blocks_renderer/index.js";
    import Evaluation from "$lib/components/evaluation.svelte";
    import Reflection from "$lib/components/reflection.svelte";
    import { PUBLIC_STRAPI_URL } from "$env/static/public";
    // import Youtube from 'svelte-youtube-embed';

    let { menu } = $state("longtext");
    let { data } = $props();

    function handleAssign(par) {
        menu = par;
    }
    menu = "video";

    async function fetchData() {
        const res = await fetch(
            `${PUBLIC_STRAPI_URL}/api/learning-modules?populate=*`,
        );
        const data = await res.json();

        if (res.ok) {
            return data;
        } else {
            throw new Error(data);
        }
    }
</script>

<div class="mx-auto w-3/4 p-4">
    <h3 class="font-bold text-3xl">{data.data.title}</h3>
    <!-- <div>{data.data.description}</div> -->
    <div class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4">
        <!-- <div class="col-span-3 w-full aspect-[16/9] border border-solid border-gray"> -->
        <div
            class="col-span-3 aspect-video w-full overflow-y-scroll border p-2.5"
        >
            {#if menu == "longtext"}
                <BlocksRenderer content={data.data.long_text} />
            {:else if menu == "video"}
                <iframe
                    class="h-full w-full"
                    src="https://youtube.com/embed/{data.data.video_id}"
                    frameborder="0"
                    title="Test"
                    name="video-01"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
                <!-- <Youtube id={data.data.video_id} /> -->
            {:else if menu == "deepdive"}
                <BlocksRenderer content={data.data.deep_dive} />
            {:else if menu == "evaluasi"}
                {#if data.data.evaluations.length > 0}
                    <Evaluation data={data.data.evaluations} />
                {/if}
            {:else if menu == "refleksi"}
                <!-- <Editor /> -->
                <Reflection />
            {/if}
        </div>
        <div class="col-span-1 w-full">
            <button
                class="block cursor-pointer px-10 py-2 text-left text-[20pt]"
                onclick={() => handleAssign("longtext")}
            >
                TUJUAN PEMBELAJARAN
            </button>
            <button
                class="block cursor-pointer px-10 py-2 text-left text-[20pt]"
                onclick={() => handleAssign("video")}
            >
                VIDEO
            </button>
            <button
                class="block cursor-pointer px-10 py-2 text-left text-[20pt]"
                onclick={() => handleAssign("deepdive")}
            >
                GALI LEBIH DALAM
            </button>
            <button
                class="block cursor-pointer px-10 py-2 text-left text-[20pt]"
                onclick={() => handleAssign("evaluasi")}
            >
                EVALUASI
            </button>
            <button
                class="block cursor-pointer px-10 py-2 text-left text-[20pt]"
                onclick={() => handleAssign("refleksi")}
            >
                REFLEKSI
            </button>
        </div>

        {#await fetchData()}
            <p>loading...</p>
        {:then items}
            {#each items.data as item}
                {#if !(item.documentId === data.data.documentId)}
                    <a
                        href="/modules/{item.documentId}"
                        class="relative cursor-pointer overflow-hidden bg-white transition-all duration-300 hover:shadow-lg"
                    >
                        <div class="aspect-8/6 w-full p-3">
                            <img
                                src="{PUBLIC_STRAPI_URL}{item.image.url}"
                                alt=""
                                class="h-full w-full object-contain"
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
                {/if}
            {/each}
        {/await}

        <!-- <div
            class="relative cursor-pointer overflow-hidden bg-white transition-all duration-300 hover:shadow-lg"
        >
            <div class="aspect-8/6 w-full p-3">
                <img src="" alt="" class="h-full w-full object-contain" />
            </div>
            <div class="p-6">
                <hr class="mb-6 border border-gray-300" />
                <div>
                    <h4>Introduction to Recruitment</h4>
                    <h4>2nd line</h4>
                </div>
            </div>
        </div>

        <div
            class="relative cursor-pointer overflow-hidden bg-white transition-all duration-300 hover:shadow-lg"
        >
            <div class="aspect-8/6 w-full p-3">
                <img src="" alt="" class="h-full w-full object-contain" />
            </div>
            <div class="p-6">
                <hr class="mb-6 border border-gray-300" />
                <div>
                    <h4>Introduction to Recruitment</h4>
                    <h4>2nd line</h4>
                </div>
            </div>
        </div>

        <div
            class="relative cursor-pointer overflow-hidden bg-white transition-all duration-300 hover:shadow-lg"
        >
            <div class="aspect-8/6 w-full p-3">
                <img src="" alt="" class="h-full w-full object-contain" />
            </div>
            <div class="p-6">
                <hr class="mb-6 border border-gray-300" />
                <div>
                    <h4>Introduction to Recruitment</h4>
                    <h4>2nd line</h4>
                </div>
            </div>
        </div> -->
    </div>
</div>

<style>
</style>
