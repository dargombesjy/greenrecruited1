<script>
    import "./layout.css";
    import favicon from "$lib/assets/favicon.ico";
    import * as Menubar from "$lib/components/ui/menubar/index.js";
    import NavigationMenuItem from "$lib/components/ui/navigation-menu/navigation-menu-item.svelte";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<div class="sticky top-0 flex items-center justify-between bg-secondary/75 z-50">
    <a href="/" class="ml-4 flex items-center">
        <img src="/images/logo.jpg" class="me-3 h-6 sm:h-9" alt="Site Logo" />
        <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
        >
            GreenRecruitED
        </span>
    </a>
    <Menubar.Root
        class="p-9 my-2.5 bg-primary justify-center text-primary-foreground border-none rounded-3xl"
    >
        <!-- <Menubar.Menu>
            <Menubar.Trigger class="text-lg px-4 py-2">
                <a href="/">Home</a>
            </Menubar.Trigger>
        </Menubar.Menu> -->
        <Menubar.Menu>
            <Menubar.Trigger class="text-lg px-4 py-2">
                <a href="/about">About</a>
            </Menubar.Trigger>
        </Menubar.Menu>
        <Menubar.Menu>
            <Menubar.Trigger class="text-lg px-4 py-2">
                <a href="/modules">Modules</a>
            </Menubar.Trigger>
        </Menubar.Menu>
        <Menubar.Menu>
            <Menubar.Trigger class="text-lg px-4 py-2">
                <a href="/actions">Action</a>
            </Menubar.Trigger>
        </Menubar.Menu>
        <Menubar.Menu>
            <Menubar.Trigger class="text-lg px-4 py-2">
                <a href="/reflection">Reflection</a>
            </Menubar.Trigger>
        </Menubar.Menu>
        <Menubar.Menu>
            <Menubar.Trigger class="text-lg px-4 py-2">
                <a href="/simulations">Simulation</a>
            </Menubar.Trigger>
        </Menubar.Menu>
    </Menubar.Root>

    <div class="w-36"></div>
</div>

{@render children()}
