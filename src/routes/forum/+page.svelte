<script>
  import Post from "$lib/components/post.svelte";

  let { data } = $props();

  let categories = $state(["all", "svelte", "css", "general"]);
  let selectedCategory = $state("all");

  // Form State for New Post
  let newTitle = $state("");
  let newContent = $state("");
  let newCategory = $state("general");

  // Filter posts based on selected category
  // $: filteredPosts = selectedCategory === "all"
  //   ? posts
  //   : posts.filter(p => p.category === selectedCategory);

  // let filteredPosts = $derived(posts);

  function createPost() {
    if (!newTitle.trim() || !newContent.trim()) return;

    const newPost = {
      id: Date.now(),
      title: newTitle,
      author: "AnonymousCoder",
      category: newCategory,
      content: newContent,
      upvotes: 1,
      comments: []
    };

    posts = [newPost, ...posts]; // Prepend new post to the list

    // Reset form
    newTitle = "";
    newContent = "";
  }
</script>

<header class="navbar">
  <h1>DevForum</h1>
</header>

<div class="forum-container">
  <aside class="sidebar">
    <h3>Categories</h3>
    <ul>
      {#each categories as cat}
        <li>
          <button
            class:active={selectedCategory === cat}
            onclick={() => selectedCategory = cat}
          >
            #{cat}
          </button>
        </li>
      {/each}
    </ul>
  </aside>

  <main class="feed">
    <div class="create-post-card">
      <h3>Create a New Post</h3>
      <input type="text" bind:value={newTitle} placeholder="Title" />
      <textarea bind:value={newContent} placeholder="What's on your mind?"></textarea>
      <div class="form-footer">
        <select bind:value={newCategory}>
          {#each categories.filter(c => c !== 'all') as cat}
            <option value={cat}>#{cat}</option>
          {/each}
        </select>
        <button onclick={createPost}>Publish</button>
      </div>
    </div>

    {#each data.data as post}
      <Post post={post} />
    {:else}
      <p class="no-posts">No posts found in this category yet.</p>
    {/each}
  </main>
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: system-ui, -apple-system, sans-serif;
    background-color: #f4f6f8;
    color: #333;
  }
  .navbar {
    background: #ffffff;
    padding: 0.5rem 2rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    border-bottom: 1px solid #e0e0e0;
  }
  .navbar h1 { margin: 0; font-size: 1.5rem; color: #ff4500; }

  .forum-container {
    display: grid;
    grid-template-columns: 200px 1fr;
    max-width: 1000px;
    margin: 2rem auto;
    gap: 2rem;
    padding: 0 1rem;
  }

  .sidebar ul { list-style: none; padding: 0; }
  .sidebar button {
    display: block;
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    text-transform: capitalize;
  }
  .sidebar button:hover, .sidebar button.active {
    background: #e0e0e0;
    font-weight: bold;
    color: #ff4500;
  }

  .feed { display: flex; flex-direction: column; }

  .create-post-card {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    margin-bottom: 2rem;
  }
  .create-post-card h3 { margin-top: 0; }
  .create-post-card input, .create-post-card textarea, .create-post-card select {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 0.75rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .create-post-card textarea { height: 80px; resize: vertical; }
  .form-footer { display: flex; justify-content: space-between; align-items: center; }
  .form-footer select { width: auto; margin: 0; }
  .form-footer button {
    background: #ff4500;
    color: white;
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
  .form-footer button:hover { background: #e03d00; }
  .no-posts { text-align: center; color: #666; margin-top: 2rem; }
</style>
