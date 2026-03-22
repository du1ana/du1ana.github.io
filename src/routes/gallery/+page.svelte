<script>
  import { fly, fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import Icon from '@iconify/svelte';
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';
  import { GALLERY_IMAGES, INSTAGRAM_PROFILE } from '$lib/data/instagram.js';

  let loaded = new Array(GALLERY_IMAGES.length).fill(false);
  let imgRefs = [];
  let lightboxIndex = -1;

  onMount(() => {
    // Cached images fire `load` before the listener attaches — check complete on mount
    imgRefs.forEach((img, i) => {
      if (img?.complete && img.naturalWidth > 0) loaded[i] = true;
    });
    loaded = [...loaded];
  });

  $: lightboxImage = lightboxIndex >= 0 ? GALLERY_IMAGES[lightboxIndex] : null;

  function openLightbox(i) { lightboxIndex = i; }
  function closeLightbox() { lightboxIndex = -1; }
  function prevImage() { lightboxIndex = (lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length; }
  function nextImage() { lightboxIndex = (lightboxIndex + 1) % GALLERY_IMAGES.length; }

  function handleKeydown(e) {
    if (lightboxIndex < 0) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  }

  function noSave(e) { e.preventDefault(); return false; }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="min-h-screen pt-20">
  <div class="container py-8">
    <Breadcrumb items={[{ label: 'Gallery', path: '/gallery' }]} />

    <div in:fly={{ y: 20, duration: 500 }} class="flex flex-wrap items-center justify-between gap-4 mb-8">
      <div>
        <h1 class="text-4xl md:text-5xl font-display mb-2">Gallery</h1>
        <p class="text-muted-foreground">Photos by <span class="text-primary">@du1ana.jpg</span></p>
      </div>
      <a
        href={INSTAGRAM_PROFILE}
        target="_blank"
        rel="noopener noreferrer"
        class="btn-outline flex items-center gap-2"
        aria-label="Follow @du1ana.jpg on Instagram"
      >
        <Icon icon="simple-icons:instagram" class="w-4 h-4" />
        Follow for more
      </a>
    </div>

    <!-- Masonry grid -->
    <div in:fly={{ y: 20, duration: 500, delay: 100 }} class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3">
      {#each GALLERY_IMAGES as image, i}
        <div
          class="relative group overflow-hidden rounded-xl mb-3 break-inside-avoid bg-card cursor-pointer select-none"
          style="min-height: 180px;"
          role="button"
          tabindex="0"
          aria-label="Open photo{image.name ? ': ' + image.name : ' ' + (i + 1)}"
          on:click={() => openLightbox(i)}
          on:keydown={e => (e.key === 'Enter' || e.key === ' ') && openLightbox(i)}
          on:contextmenu={noSave}
        >
          <!-- Shimmer skeleton -->
          {#if !loaded[i]}
            <div class="absolute inset-0 shimmer" style="min-height: 180px;"></div>
          {/if}

          <!-- Image -->
          <img
            bind:this={imgRefs[i]}
            src={image.src}
            alt={image.name || `Gallery photo ${i + 1}`}
            class="w-full h-auto block transition-opacity duration-500 {loaded[i] ? 'opacity-100' : 'opacity-0'}"
            loading="lazy"
            draggable="false"
            on:load={() => { loaded[i] = true; loaded = [...loaded]; }}
            on:contextmenu={noSave}
          />

          <!-- Hover overlay with name/description -->
          {#if image.name || image.description}
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 pointer-events-none">
              {#if image.name}
                <p class="text-white text-sm font-medium leading-tight">{image.name}</p>
              {/if}
              {#if image.description}
                <p class="text-white/70 text-xs mt-0.5 leading-tight">{image.description}</p>
              {/if}
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Instagram CTA -->
    <div in:fly={{ y: 20, duration: 500, delay: 200 }} class="mt-12 flex flex-col items-center gap-4 text-center">
      <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center">
        <Icon icon="simple-icons:instagram" class="w-7 h-7 text-white" />
      </div>
      <div>
        <p class="font-medium mb-1">See more on Instagram</p>
        <p class="text-sm text-muted-foreground">Follow <span class="text-primary">@du1ana.jpg</span> for the latest posts</p>
      </div>
      <a
        href={INSTAGRAM_PROFILE}
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary flex items-center gap-2"
        aria-label="Follow @du1ana.jpg on Instagram"
      >
        <Icon icon="simple-icons:instagram" class="w-4 h-4" />
        Follow @du1ana.jpg
      </a>
    </div>
  </div>
</div>

<!-- Lightbox -->
{#if lightboxImage}
  <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
  <div
    transition:fade={{ duration: 200 }}
    class="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center"
    on:click={closeLightbox}
    on:contextmenu={noSave}
  >
    <!-- Close -->
    <button
      class="absolute top-4 right-4 p-3 text-white/60 hover:text-white transition-colors z-10"
      on:click|stopPropagation={closeLightbox}
      aria-label="Close lightbox"
    >
      <Icon icon="lucide:x" class="w-6 h-6" />
    </button>

    <!-- Prev -->
    <button
      class="absolute left-3 top-1/2 -translate-y-1/2 p-3 text-white/60 hover:text-white transition-colors z-10"
      on:click|stopPropagation={prevImage}
      aria-label="Previous photo"
    >
      <Icon icon="lucide:chevron-left" class="w-8 h-8" />
    </button>

    <!-- Image -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img
      src={lightboxImage.src}
      alt={lightboxImage.name || `Photo ${lightboxIndex + 1}`}
      class="max-h-[85vh] max-w-[90vw] object-contain rounded-lg select-none"
      draggable="false"
      on:click|stopPropagation
      on:contextmenu={noSave}
    />

    <!-- Caption -->
    {#if lightboxImage.name || lightboxImage.description}
      <div class="mt-4 text-center px-8 pointer-events-none">
        {#if lightboxImage.name}
          <p class="text-white font-medium">{lightboxImage.name}</p>
        {/if}
        {#if lightboxImage.description}
          <p class="text-white/60 text-sm mt-1">{lightboxImage.description}</p>
        {/if}
      </div>
    {/if}

    <!-- Counter -->
    <span class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-sm select-none">
      {lightboxIndex + 1} / {GALLERY_IMAGES.length}
    </span>

    <!-- Next -->
    <button
      class="absolute right-3 top-1/2 -translate-y-1/2 p-3 text-white/60 hover:text-white transition-colors z-10"
      on:click|stopPropagation={nextImage}
      aria-label="Next photo"
    >
      <Icon icon="lucide:chevron-right" class="w-8 h-8" />
    </button>
  </div>
{/if}

<style>
  @keyframes shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }

  .shimmer {
    background: linear-gradient(
      90deg,
      #0A2535 0%,
      #0d2e40 20%,
      #1D546D 50%,
      #0d2e40 80%,
      #0A2535 100%
    );
    background-size: 800px 100%;
    animation: shimmer 1.8s ease-in-out infinite;
  }
</style>
