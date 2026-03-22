<script>
  import { fly } from 'svelte/transition';
  import Icon from '@iconify/svelte';
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';
  import Card from '$lib/components/Card.svelte';
  import { getAllProjects, PROJECT_TYPES, PROJECT_STATUS } from '$lib/data/projects.js';
  import { getTechnologyById } from '$lib/data/technologies.js';

  const allProjects = getAllProjects();

  let typeFilter = 'all';
  let statusFilter = 'all';
  let filterKey = 0;

  $: filteredProjects = allProjects.filter(p => {
    const matchesType = typeFilter === 'all' || p.proj_type === typeFilter;
    const matchesStatus = statusFilter === 'all' || p.status === statusFilter;
    return matchesType && matchesStatus;
  });

  function setTypeFilter(val) { typeFilter = val; filterKey++; }
  function setStatusFilter(val) { statusFilter = val; filterKey++; }
  function resetFilters() { typeFilter = 'all'; statusFilter = 'all'; filterKey++; }

  const typeLabel = {
    [PROJECT_TYPES.PROFESSIONAL]: 'Professional',
    [PROJECT_TYPES.ACADEMIC]: 'Academic',
    [PROJECT_TYPES.SIDE_PROJECT]: 'Side Project',
  };
</script>

<div class="min-h-screen pt-20">
  <div class="container py-8">
    <Breadcrumb items={[{ label: 'Projects', path: '/projects' }]} />

    <div in:fly={{ y: 20, duration: 500 }} class="mb-8">
      <h1 class="text-4xl md:text-5xl font-display mb-2">Projects</h1>
      <p class="text-muted-foreground">A collection of my professional and personal projects</p>
    </div>

    <!-- Filters -->
    <div in:fly={{ y: 20, duration: 500, delay: 100 }} class="flex flex-wrap items-center gap-4 mb-8">
      <div class="flex items-center gap-2 text-base text-muted-foreground">
        <Icon icon="lucide:filter" class="w-4 h-4" />
        <span>Filter:</span>
      </div>

      <!-- Type filter -->
      <div class="flex gap-2">
        {#each [['all', 'All'], [PROJECT_TYPES.PROFESSIONAL, 'Professional'], [PROJECT_TYPES.SIDE_PROJECT, 'Side Projects'], [PROJECT_TYPES.ACADEMIC, 'Academic']] as [val, label]}
          <button
            on:click={() => setTypeFilter(val)}
            class="px-3 py-1.5 rounded-lg text-base font-medium transition-colors {typeFilter === val
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary hover:bg-secondary/80'}"
          >{label}</button>
        {/each}
      </div>

      <div class="hidden sm:block w-px h-6 bg-border"></div>

      <!-- Status filter -->
      <div class="flex gap-2">
        {#each [['all', 'All Status'], [PROJECT_STATUS.LIVE, 'Live'], [PROJECT_STATUS.IN_DEVELOPMENT, 'In Development']] as [val, label]}
          <button
            on:click={() => setStatusFilter(val)}
            class="px-3 py-1.5 rounded-lg text-base font-medium transition-colors {statusFilter === val
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary hover:bg-secondary/80'}"
          >{label}</button>
        {/each}
      </div>
    </div>

    <!-- Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each filteredProjects as project, index (`${filterKey}-${project.id}`)}
        <div in:fly={{ y: 20, duration: 300, delay: index * 60 }}>
          <Card
            name={project.name}
            logo={project.logo}
            icon={project.icon}
            description={project.description}
            status={project.status}
            tags={project.technology_ids.slice(0, 4).map(id => {
              const tech = getTechnologyById(id);
              return tech ? tech.name : id;
            })}
            links={project.links || {}}
            github={project.github}
            linkTo="/projects/{project.id}"
            subtitle={typeLabel[project.proj_type] || 'Side Project'}
          />
        </div>
      {/each}
    </div>

    {#if filteredProjects.length === 0}
      <div in:fly={{ y: 20, duration: 300 }} class="text-center py-12">
        <p class="text-muted-foreground">No projects match your filters</p>
        <button
          on:click={resetFilters}
          class="mt-4 link"
        >Clear filters</button>
      </div>
    {/if}
  </div>
</div>
