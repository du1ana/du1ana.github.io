<script>
  import Icon from '@iconify/svelte';

  /** @type {{ label: string, path: string }[]} */
  export let items = [];
</script>

<nav class="breadcrumb mb-6" aria-label="Breadcrumb">
  <a href="/" class="breadcrumb-item flex items-center gap-1">
    <Icon icon="lucide:home" class="w-4 h-4" />
    <span class="sr-only">Home</span>
  </a>

  {#each items as item, index}
    <Icon icon="lucide:chevron-right" class="w-4 h-4 breadcrumb-separator" />
    {#if index === items.length - 1}
      <span class="breadcrumb-current">{item.label}</span>
    {:else}
      <a href={item.path} class="breadcrumb-item">{item.label}</a>
    {/if}
  {/each}
</nav>
