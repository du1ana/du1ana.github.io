<script>
  import { fly, fade } from 'svelte/transition';
  import Icon from '@iconify/svelte';
  import { onDestroy } from 'svelte';

  export let images = [];
  export let title = null;

  const AUTO_SWITCH_INTERVAL = 4000;

  let activeIndex = 0;
  let isPaused = false;
  let lightboxOpen = false;
  let direction = 1;

  function goTo(index) {
    direction = index > activeIndex ? 1 : -1;
    activeIndex = index;
  }

  function goNext() {
    direction = 1;
    activeIndex = (activeIndex + 1) % images.length;
  }

  function goPrev() {
    direction = -1;
    activeIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
  }

  const timer = setInterval(() => {
    if (!isPaused && !lightboxOpen && images.length > 1) goNext();
  }, AUTO_SWITCH_INTERVAL);

  onDestroy(() => clearInterval(timer));

  function handleKeydown(e) {
    if (!lightboxOpen) return;
    if (e.key === 'Escape') lightboxOpen = false;
    if (e.key === 'ArrowLeft') goPrev();
    if (e.key === 'ArrowRight') goNext();
  }

  $: currentImage = images[activeIndex];
</script>

<svelte:window on:keydown={handleKeydown} />

{#if images.length > 0}
  <div class="space-y-4">
    {#if title}
      <h3 class="text-xl font-semibold text-foreground">{title}</h3>
    {/if}

    <div class="card p-4 md:p-6">
      <!-- Main display -->
      <div
        class="relative w-full aspect-video rounded-lg overflow-hidden bg-black/20 cursor-pointer group"
        on:click={() => (lightboxOpen = true)}
        role="button"
        tabindex="0"
        on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && (lightboxOpen = true)}
        aria-label="Open lightbox"
      >
        {#key activeIndex}
          <img
            in:fly={{ x: direction * 300, duration: 350 }}
            out:fly={{ x: direction * -300, duration: 350 }}
            src={currentImage.url}
            alt={currentImage.caption || `Screenshot ${activeIndex + 1}`}
            class="absolute inset-0 w-full h-full object-contain"
          />
        {/key}

        <!-- Hover overlay -->
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center pointer-events-none">
          <span class="text-white/0 group-hover:text-white/80 transition-colors text-sm font-medium">
            Click to enlarge
          </span>
        </div>

        <!-- Inline nav arrows -->
        {#if images.length > 1}
          <button
            on:click|stopPropagation={goPrev}
            class="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
            aria-label="Previous image"
          >
            <Icon icon="lucide:chevron-left" class="w-5 h-5" />
          </button>
          <button
            on:click|stopPropagation={goNext}
            class="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
            aria-label="Next image"
          >
            <Icon icon="lucide:chevron-right" class="w-5 h-5" />
          </button>
        {/if}
      </div>

      <!-- Caption -->
      <div class="mt-4 min-h-[3rem]">
        {#key activeIndex}
          <p
            in:fly={{ y: 8, duration: 200 }}
            out:fly={{ y: -8, duration: 200 }}
            class="text-sm text-muted-foreground"
          >
            {currentImage.caption || ''}
          </p>
        {/key}
      </div>

      <!-- Controls bar -->
      <div class="flex items-center gap-3 mt-3">
        <div class="flex items-center gap-0 flex-1">
          {#each images as _, i}
            <button
              on:click={() => goTo(i)}
              class="p-2 flex items-center justify-center"
              aria-label="Go to image {i + 1}"
              aria-current={i === activeIndex ? 'true' : undefined}
            >
              <span class="block h-1.5 rounded-full transition-all duration-300 {i === activeIndex
                ? 'w-6 bg-primary'
                : 'w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'}"></span>
            </button>
          {/each}
        </div>
        <span class="text-xs text-muted-foreground tabular-nums">{activeIndex + 1} / {images.length}</span>
        {#if images.length > 1}
          <button
            on:click={() => (isPaused = !isPaused)}
            class="p-2 rounded hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            aria-label={isPaused ? 'Resume auto-switch' : 'Pause auto-switch'}
          >
            <Icon icon={isPaused ? 'lucide:play' : 'lucide:pause'} class="w-4 h-4" />
          </button>
        {/if}
      </div>

      <!-- Thumbnail strip -->
      {#if images.length > 1}
        <div class="flex gap-2 mt-3 overflow-x-auto pb-1">
          {#each images as img, i}
            <button
              on:click={() => goTo(i)}
              class="flex-shrink-0 w-16 h-10 md:w-20 md:h-12 rounded overflow-hidden border-2 transition-all duration-200 {i === activeIndex
                ? 'border-primary ring-1 ring-primary/30'
                : 'border-transparent opacity-50 hover:opacity-80'}"
            >
              <img src={img.url} alt={img.caption || `Thumbnail ${i + 1}`} class="w-full h-full object-cover" />
            </button>
          {/each}
        </div>
      {/if}
    </div>

    <!-- Lightbox -->
    {#if lightboxOpen}
      <div
        transition:fade
        class="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center"
        on:click={() => (lightboxOpen = false)}
        on:keydown={(e) => e.key === 'Escape' && (lightboxOpen = false)}
        role="dialog"
        tabindex="-1"
        aria-modal="true"
        aria-label="Image lightbox"
      >
        <!-- Close -->
        <button
          on:click={() => (lightboxOpen = false)}
          class="absolute top-4 right-4 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors z-10"
          aria-label="Close lightbox"
        >
          <Icon icon="lucide:x" class="w-6 h-6 text-white" />
        </button>

        {#if images.length > 1}
          <button
            on:click|stopPropagation={goPrev}
            class="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <Icon icon="lucide:chevron-left" class="w-6 h-6 text-white" />
          </button>
          <button
            on:click|stopPropagation={goNext}
            class="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <Icon icon="lucide:chevron-right" class="w-6 h-6 text-white" />
          </button>
        {/if}

        <div
          class="max-w-6xl w-full mx-4 px-12"
          on:click|stopPropagation
          role="presentation"
        >
          {#key activeIndex}
            <img
              in:fly={{ x: direction * 300, duration: 300 }}
              out:fly={{ x: direction * -300, duration: 300 }}
              src={currentImage.url}
              alt={currentImage.caption || `Screenshot ${activeIndex + 1}`}
              class="max-w-full max-h-[80vh] object-contain rounded-lg mx-auto"
            />
          {/key}
          {#if currentImage.caption}
            <p class="text-center text-white/80 mt-4 text-sm max-w-2xl mx-auto">{currentImage.caption}</p>
          {/if}
        </div>

        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
          {activeIndex + 1} / {images.length}
        </div>
      </div>
    {/if}
  </div>
{/if}
