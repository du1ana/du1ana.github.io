<script>
  import { fly } from 'svelte/transition';
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';
  import LogoPlaceholder from '$lib/components/LogoPlaceholder.svelte';
  import Card from '$lib/components/Card.svelte';
  import { getProjectsByTechnology } from '$lib/data/projects.js';
  import { TECH_CATEGORIES } from '$lib/data/technologies.js';

  export let data;
  const { technology } = data;

  const relatedProjects = getProjectsByTechnology(technology.id);

  const categoryLabels = {
    [TECH_CATEGORIES.LANGUAGE]: 'Language',
    [TECH_CATEGORIES.FRAMEWORK]: 'Framework/Library',
    [TECH_CATEGORIES.PLATFORM]: 'Platform',
    [TECH_CATEGORIES.DATABASE]: 'Database',
    [TECH_CATEGORIES.TOOL]: 'Tool/AI',
    [TECH_CATEGORIES.SERVICE]: 'Cloud Service',
    [TECH_CATEGORIES.BLOCKCHAIN]: 'Blockchain/Web3',
  };
</script>

<div class="min-h-screen pt-20">
  <div class="container py-8">
    <Breadcrumb items={[
      { label: 'Technologies', path: '/technologies' },
      { label: technology.name, path: `/technologies/${technology.id}` },
    ]} />

    <div in:fly={{ y: 20, duration: 500 }} class="flex items-center gap-4 mb-8">
      <LogoPlaceholder name={technology.name} logo={technology.logo} icon={technology.icon} size="xl" />
      <div>
        <h1 class="text-4xl md:text-5xl font-display">{technology.name}</h1>
        <p class="text-muted-foreground capitalize">{categoryLabels[technology.category] || technology.category}</p>
      </div>
    </div>

    <section in:fly={{ y: 20, duration: 500, delay: 100 }} class="card p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4">About</h2>
      <p class="text-muted-foreground">{technology.description || 'No description available.'}</p>
    </section>

    <section in:fly={{ y: 20, duration: 500, delay: 200 }}>
      <h2 class="text-2xl font-semibold mb-4">
        Projects Using {technology.name}
        <span class="text-muted-foreground font-normal ml-2">({relatedProjects.length})</span>
      </h2>

      {#if relatedProjects.length > 0}
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each relatedProjects as project, index}
            <div in:fly={{ y: 20, duration: 300, delay: 300 + index * 50 }}>
              <Card
                name={project.name}
                logo={project.logo}
                description={project.description}
                status={project.status}
                links={project.links || {}}
                github={project.github}
                linkTo="/projects/{project.id}"
              />
            </div>
          {/each}
        </div>
      {:else}
        <p class="text-muted-foreground">No projects found using this technology.</p>
      {/if}
    </section>
  </div>
</div>
