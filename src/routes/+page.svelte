<script>
  import { fly } from 'svelte/transition';
  import FeaturedProjects from '$lib/components/FeaturedProjects.svelte';
  import { getAllProjects, PROJECT_STATUS } from '$lib/data/projects.js';

  const allProjects = getAllProjects();
  const featuredProjects = allProjects
    .filter(p => p.status === PROJECT_STATUS.LIVE || p.status === PROJECT_STATUS.IN_DEVELOPMENT)
    .slice(0, 3);
</script>

<div class="min-h-screen pt-16 relative overflow-hidden flex items-center">
  <!-- Abstract shapes background -->
  <div class="absolute inset-0 pointer-events-none overflow-hidden">
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
    <div class="shape shape-3"></div>
  </div>

  <!-- Animation - desktop: absolute right half -->
  <div class="absolute top-0 right-0 h-full w-1/2 z-0 hidden lg:flex items-center justify-center">
    <img
      src="/animations/du_anim_opt.webp"
      alt="du1ana animation"
      class="w-4/5 max-h-[80%] object-contain"
    />
  </div>

  <!-- Content -->
  <div class="container relative z-10 py-12 pointer-events-none">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

      <!-- Animation - mobile only -->
      <div
        in:fly={{ y: 0, duration: 500, delay: 100 }}
        class="lg:hidden flex justify-center pointer-events-none"
      >
        <img
          src="/animations/du_anim_opt.webp"
          alt="du1ana animation"
          class="w-48 md:w-64 object-contain"
        />
      </div>

      <!-- Featured Projects -->
      <div
        in:fly={{ x: 20, duration: 500, delay: 200 }}
        class="pointer-events-auto"
      >
        <div class="mb-6">
          <h2 class="text-3xl font-display mb-2">Featured Projects</h2>
        </div>
        <FeaturedProjects projects={featuredProjects} />
      </div>
    </div>
  </div>
</div>
