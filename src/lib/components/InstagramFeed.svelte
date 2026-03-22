<script>
  import Icon from '@iconify/svelte';

  export let posts = [];
  export let profileUrl = 'https://www.instagram.com/';

  function postId(url) {
    return url.match(/\/p\/([A-Za-z0-9_-]+)\//)?.[1] ?? null;
  }
</script>

{#if posts.length > 0}
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    {#each posts as url}
      {@const id = postId(url)}
      {#if id}
        <div class="overflow-hidden rounded-xl" style="aspect-ratio: 4/5;">
          <iframe
            src="https://www.instagram.com/p/{id}/embed/?theme=dark&v=14"
            style="width:100%; height:900px; border:none; display:block;"
            loading="lazy"
            scrolling="no"
            title="Instagram post"
            allow="fullscreen"
          ></iframe>
        </div>
      {/if}
    {/each}
  </div>
{:else}
  <div class="card p-10 flex flex-col items-center gap-4 text-center">
    <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center">
      <Icon icon="simple-icons:instagram" class="w-7 h-7 text-white" />
    </div>
    <div>
      <p class="font-medium mb-1">No posts added yet</p>
      <p class="text-base text-muted-foreground">
        Add post URLs to <code class="text-primary text-sm">src/lib/data/instagram.js</code>
      </p>
    </div>
    <a href={profileUrl} target="_blank" rel="noopener noreferrer" class="btn-outline flex items-center gap-2 mt-2">
      <Icon icon="simple-icons:instagram" class="w-4 h-4" />
      Visit profile
    </a>
  </div>
{/if}
