<script>
  import Icon from '@iconify/svelte';
  import LogoPlaceholder from './LogoPlaceholder.svelte';

  export let name = '';
  export let logo = null;
  export let icon = null;
  export let description = '';
  export let tags = [];
  export let status = null;
  export let links = {};
  export let github = null;
  export let linkTo = null;
  export let subtitle = null;
  export let meta = null;
  export let className = '';

  const statusMap = {
    live: { label: 'Live', cls: 'status-live' },
    in_development: { label: 'In Development', cls: 'status-development' },
    archived: { label: 'Archived', cls: 'status-archived' },
  };
</script>

<div class="card p-4 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 {className}">
  <svelte:element this={linkTo ? 'a' : 'div'} href={linkTo ?? undefined} class="block">
    <!-- Header -->
    <div class="flex items-start gap-3 mb-3">
      <LogoPlaceholder {name} {logo} {icon} size="md" />
      <div class="flex-1 min-w-0">
        <h3 class="text-xl text-foreground truncate">{name}</h3>
        {#if subtitle}
          <p class="text-base text-muted-foreground truncate">{subtitle}</p>
        {/if}
      </div>
      {#if status && statusMap[status]}
        <span class={statusMap[status].cls}>{statusMap[status].label}</span>
      {/if}
    </div>

    {#if description}
      <p class="text-base text-muted-foreground line-clamp-2 mb-3">{description}</p>
    {/if}

    {#if meta}
      <p class="text-sm text-muted-foreground/70 mb-3">{meta}</p>
    {/if}

    {#if tags.length > 0}
      <div class="flex flex-wrap gap-1.5 mb-3">
        {#each tags.slice(0, 5) as tag}
          <span class="badge-secondary text-sm">{tag}</span>
        {/each}
        {#if tags.length > 5}
          <span class="badge-outline text-sm">+{tags.length - 5}</span>
        {/if}
      </div>
    {/if}

    <slot />
  </svelte:element>

  <!-- External links -->
  {#if Object.keys(links).length > 0 || github}
    <div class="flex flex-wrap gap-2 pt-3 mt-3 border-t border-border">
      {#each Object.entries(links) as [label, url]}
        {#if url}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1 text-base text-muted-foreground hover:text-primary transition-colors"
            on:click|stopPropagation
          >
            <Icon icon="lucide:external-link" class="w-3 h-3" />
            {label}
          </a>
        {/if}
      {/each}
      {#if github}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
          on:click|stopPropagation
        >
          <Icon icon="lucide:github" class="w-3 h-3" />
          GitHub
        </a>
      {/if}
    </div>
  {/if}
</div>
