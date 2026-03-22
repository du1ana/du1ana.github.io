<script>
  import { fly } from 'svelte/transition';
  import { onDestroy } from 'svelte';
  import Icon from '@iconify/svelte';
  import LogoPlaceholder from './LogoPlaceholder.svelte';

  export let projects = [];

  let currentIndex = 0;
  let isAutoPlaying = true;
  let direction = 1;
  let resumeTimer = null;

  const statusColors = {
    live: 'bg-green-500',
    in_development: 'bg-yellow-500',
    archived: 'bg-gray-500',
  };

  $: currentProject = projects[currentIndex];

  function scheduleResume() {
    isAutoPlaying = false;
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => { isAutoPlaying = true; }, 8000);
  }

  function goTo(index) {
    direction = index > currentIndex ? 1 : -1;
    currentIndex = index;
    scheduleResume();
  }

  function goNext() {
    direction = 1;
    currentIndex = (currentIndex + 1) % projects.length;
    scheduleResume();
  }

  function goPrev() {
    direction = -1;
    currentIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    scheduleResume();
  }

  const interval = setInterval(() => {
    if (isAutoPlaying && projects.length > 1) {
      direction = 1;
      currentIndex = (currentIndex + 1) % projects.length;
    }
  }, 5000);

  onDestroy(() => {
    clearInterval(interval);
    clearTimeout(resumeTimer);
  });
</script>

{#if projects.length > 0}
  <div class="relative w-full">
    <!-- Main slideshow container -->
    <div class="relative overflow-hidden rounded-2xl border border-border bg-card min-h-[260px]">
      {#key currentIndex}
        <div
          in:fly={{ x: direction * 100, duration: 500 }}
          class="p-6 md:p-8"
        >
          <div class="flex flex-col md:flex-row gap-6 items-start">
            <!-- Logo -->
            <div class="flex-shrink-0">
              <LogoPlaceholder name={currentProject.name} logo={currentProject.logo} icon={currentProject.icon} size="xl" />
            </div>

            <!-- Content -->
            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between gap-4 mb-3">
                <div class="min-w-0">
                  <h3 class="text-2xl sm:text-3xl md:text-5xl text-foreground mb-1 truncate">{currentProject.name}</h3>
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full flex-shrink-0 {statusColors[currentProject.status] || 'bg-gray-500'}"></span>
                    <span class="text-base text-muted-foreground capitalize">
                      {currentProject.status?.replace('_', ' ')}
                    </span>
                  </div>
                </div>
              </div>

              <p class="text-muted-foreground mb-4 line-clamp-3">
                {currentProject.description || 'No description available.'}
              </p>

              {#if currentProject.technology_ids}
                <div class="flex flex-wrap gap-1.5 mb-4">
                  {#each currentProject.technology_ids.slice(0, 6) as techId}
                    <span class="badge-secondary text-sm capitalize">{techId.replace('_', ' ')}</span>
                  {/each}
                  {#if currentProject.technology_ids.length > 6}
                    <span class="badge-outline text-sm">+{currentProject.technology_ids.length - 6} more</span>
                  {/if}
                </div>
              {/if}

              <div class="flex flex-wrap gap-3">
                <a href="/projects/{currentProject.id}" class="btn-primary">View Details</a>
                {#each Object.entries(currentProject.links || {}).slice(0, 1) as [label, url]}
                  {#if url}
                    <a href={url} target="_blank" rel="noopener noreferrer" class="btn-outline flex items-center gap-2">
                      <Icon icon="lucide:external-link" class="w-4 h-4" />
                      {label}
                    </a>
                  {/if}
                {/each}
              </div>
            </div>
          </div>
        </div>
      {/key}

      <!-- Nav arrows -->
      {#if projects.length > 1}
        <button
          on:click={goPrev}
          class="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 border border-border hover:bg-secondary transition-colors z-10"
          aria-label="Previous project"
        >
          <Icon icon="lucide:chevron-left" class="w-5 h-5" />
        </button>
        <button
          on:click={goNext}
          class="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 border border-border hover:bg-secondary transition-colors z-10"
          aria-label="Next project"
        >
          <Icon icon="lucide:chevron-right" class="w-5 h-5" />
        </button>
      {/if}
    </div>

    <!-- Dots -->
    {#if projects.length > 1}
      <div class="flex justify-center gap-1 mt-4">
        {#each projects as _, index}
          <button
            on:click={() => goTo(index)}
            class="p-3 flex items-center justify-center"
            aria-label="Go to slide {index + 1}"
            aria-current={index === currentIndex ? 'true' : undefined}
          >
            <span class="block h-2 rounded-full transition-all duration-300 {index === currentIndex
              ? 'w-8 bg-primary'
              : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'}"></span>
          </button>
        {/each}
      </div>
    {/if}
  </div>
{/if}
