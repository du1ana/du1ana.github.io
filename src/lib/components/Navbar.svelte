<script>
  import { page } from '$app/stores';
  import { slide } from 'svelte/transition';
  import Icon from '@iconify/svelte';

  let isOpen = false;

  const NAV_ITEMS = [
    { path: '/', label: 'Home', icon: 'lucide:home' },
    { path: '/projects', label: 'Projects', icon: 'lucide:code-2' },
    { path: '/technologies', label: 'Technologies', icon: 'lucide:layers' },
    { path: '/experience', label: 'Experience', icon: 'lucide:briefcase' },
    { path: '/gallery', label: 'Gallery', icon: 'lucide:image' },
    { path: '/about', label: 'About', icon: 'lucide:user' },
  ];

  function isActive(path) {
    if (path === '/') return $page.url.pathname === '/';
    return $page.url.pathname.startsWith(path);
  }
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
  <div class="container">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-4 group">
        <img src="/logo/du_logo_w.svg" alt="du1ana logo" class="h-6 w-auto" />
        <span class="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
          du1ana
        </span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-1">
        {#each NAV_ITEMS as item}
          <a
            href={item.path}
            aria-current={isActive(item.path) ? 'page' : undefined}
            class="flex items-center gap-2 px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 {isActive(item.path)
              ? 'bg-primary/10 text-primary'
              : 'text-muted-foreground hover:text-foreground hover:bg-secondary'}"
          >
            <Icon icon={item.icon} class="w-4 h-4" />
            {item.label}
          </a>
        {/each}
      </div>

      <!-- Mobile Menu Button -->
      <button
        on:click={() => (isOpen = !isOpen)}
        class="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <Icon icon={isOpen ? 'lucide:x' : 'lucide:menu'} class="w-5 h-5" />
      </button>
    </div>

    <!-- Mobile Navigation -->
    {#if isOpen}
      <div id="mobile-menu" transition:slide={{ duration: 200 }} class="md:hidden border-t border-border">
        <div class="py-4 space-y-1">
          {#each NAV_ITEMS as item}
            <a
              href={item.path}
              on:click={() => (isOpen = false)}
              aria-current={isActive(item.path) ? 'page' : undefined}
              class="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 {isActive(item.path)
                ? 'bg-primary/10 text-primary'
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary'}"
            >
              <Icon icon={item.icon} class="w-5 h-5" />
              {item.label}
            </a>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</nav>
