<script>
  let { post } = $props();

  let showComments = $state(false);
  let newComment = $state("");

  function handleUpvote() {
    post.upvotes += 1;
    post = post; // Trigger Svelte reactivity
  }

  function addComment() {
    if (!newComment.trim()) return;
    post.forum_comments = [...post.forum_comments, {
      id: Date.now(),
      author: "You",
      text: newComment
    }];
    newComment = "";
  }
</script>

<div class="post-card">
  <div class="voting-sidebar">
    <button onclick={handleUpvote} class="upvote-btn">▲</button>
    <span>{post.upvotes}</span>
  </div>

  <div class="post-content">
    <div class="post-header">
      <span class="category">#{post.category}</span>
      <span class="author">Posted by {post.author}</span>
    </div>

    <h3>{post.title}</h3>
    <p>{post.content}</p>

    <div class="post-actions">

      <button onclick={() => showComments = !showComments}>
        💬 {post.forum_comments} Comments
      </button>
    </div>

    {#if showComments}
      <div class="comments-section">
        {#each post.forum_comments as comment (comment.id)}
          <div class="comment">
            <strong>u/{comment.author}:</strong> {comment.longtext}
          </div>
        {/each}

        <div class="comment-input-group">
          <input
            type="text"
            bind:value={newComment}
            placeholder="Write a comment..."
            onkeydown={(e) => e.key === 'Enter' && addComment()}
          />
          <button onclick={addComment}>Reply</button>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  .post-card {
    display: flex;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    margin-bottom: 1rem;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  }
  .voting-sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
    font-weight: bold;
  }
  .upvote-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    color: #888;
  }
  .upvote-btn:hover { color: #ff4500; }
  .post-content { flex: 1; }
  .post-header { font-size: 0.85rem; color: #666; margin-bottom: 0.5rem; }
  .category { color: #ff4500; font-weight: bold; margin-right: 0.5rem; }
  h3 { margin: 0 0 0.5rem 0; color: #222; }
  .post-actions { margin-top: 1rem; }
  .post-actions button { background: none; border: none; color: #666; cursor: pointer; }
  .comments-section { margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee; }
  .comment { font-size: 0.9rem; padding: 0.5rem 0; border-bottom: 1px id #f9f9f9; }
  .comment-input-group { display: flex; margin-top: 1rem; gap: 0.5rem; }
  .comment-input-group input { flex: 1; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; }
  .comment-input-group button { background: #ff4500; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; }
</style>
