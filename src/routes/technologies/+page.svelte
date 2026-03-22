<script>
  import { fly } from 'svelte/transition';
  import Icon from '@iconify/svelte';
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';
  import LogoPlaceholder from '$lib/components/LogoPlaceholder.svelte';
  import { getAllTechnologies, TECH_CATEGORIES } from '$lib/data/technologies.js';

  const allTechnologies = getAllTechnologies();

  let categoryFilter = 'all';
  let filterKey = 0;

  $: filteredTechnologies = categoryFilter === 'all'
    ? allTechnologies
    : allTechnologies.filter(t => t.category === categoryFilter);

  function setCategoryFilter(val) { categoryFilter = val; filterKey++; }

  const categories = [...new Set(allTechnologies.map(t => t.category))];

  const categoryLabels = {
    [TECH_CATEGORIES.LANGUAGE]: 'Languages',
    [TECH_CATEGORIES.FRAMEWORK]: 'Frameworks & Libraries',
    [TECH_CATEGORIES.PLATFORM]: 'Platforms',
    [TECH_CATEGORIES.DATABASE]: 'Databases',
    [TECH_CATEGORIES.TOOL]: 'Tools & AI',
    [TECH_CATEGORIES.SERVICE]: 'Cloud Services',
    [TECH_CATEGORIES.BLOCKCHAIN]: 'Blockchain & Web3',
  };
</script>

<div class="min-h-screen pt-20">
  <div class="container py-8">
    <Breadcrumb items={[{ label: 'Technologies', path: '/technologies' }]} />

    <div in:fly={{ y: 20, duration: 500 }} class="mb-8">
      <h1 class="text-4xl md:text-5xl font-display mb-2">Technologies</h1>
      <p class="text-muted-foreground">The tech stack I work with</p>
    </div>

    <!-- Filters -->
    <div in:fly={{ y: 20, duration: 500, delay: 100 }} class="flex flex-wrap items-center gap-3 mb-8">
      <div class="flex items-center gap-2 text-base text-muted-foreground">
        <Icon icon="lucide:filter" class="w-4 h-4" />
        <span>Filter:</span>
      </div>
      <button
        on:click={() => setCategoryFilter('all')}
        class="px-3 py-1.5 rounded-lg text-base font-medium transition-colors {categoryFilter === 'all'
          ? 'bg-primary text-primary-foreground'
          : 'bg-secondary hover:bg-secondary/80'}"
      >All</button>
      {#each categories as category}
        <button
          on:click={() => setCategoryFilter(category)}
          class="px-3 py-1.5 rounded-lg text-base font-medium transition-colors {categoryFilter === category
            ? 'bg-primary text-primary-foreground'
            : 'bg-secondary hover:bg-secondary/80'}"
        >{categoryLabels[category] || category}</button>
      {/each}
    </div>

    <!-- Grid -->
    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {#each filteredTechnologies as tech, index (`${filterKey}-${tech.id}`)}
        <div in:fly={{ y: 20, duration: 300, delay: index * 30 }}>
          <a
            href="/technologies/{tech.id}"
            class="card p-4 flex items-center gap-3 hover:border-primary/30 transition-all duration-300 group"
          >
            <LogoPlaceholder name={tech.name} logo={tech.logo} icon={tech.icon} size="md" />
            <div class="flex-1 min-w-0">
              <h3 class="text-lg group-hover:text-primary transition-colors truncate">{tech.name}</h3>
              <p class="text-sm text-muted-foreground capitalize">{categoryLabels[tech.category] || tech.category}</p>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</div>
