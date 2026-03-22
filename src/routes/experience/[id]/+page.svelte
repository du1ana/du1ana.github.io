<script>
  import { fly } from 'svelte/transition';
  import Icon from '@iconify/svelte';
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';
  import LogoPlaceholder from '$lib/components/LogoPlaceholder.svelte';
  import Timeline from '$lib/components/Timeline.svelte';
  import Card from '$lib/components/Card.svelte';
  import { getProjectsByExperience } from '$lib/data/projects.js';
  import { EXP_TYPES } from '$lib/data/experiences.js';

  export let data;
  const { experience } = data;

  const relatedProjects = getProjectsByExperience(experience.id);
</script>

<div class="min-h-screen pt-20">
  <div class="container py-8">
    <Breadcrumb items={[
      { label: 'Experience', path: '/experience' },
      { label: experience.name, path: `/experience/${experience.id}` },
    ]} />

    <!-- Header -->
    <div in:fly={{ y: 20, duration: 500 }} class="flex flex-col md:flex-row gap-6 mb-8">
      <LogoPlaceholder name={experience.name} logo={experience.logo} size="xl" />
      <div class="flex-1">
        <h1 class="text-4xl md:text-5xl font-display mb-2">{experience.name}</h1>
        <p class="flex items-center gap-2 text-muted-foreground mb-3">
          <Icon icon="lucide:calendar" class="w-4 h-4" />
          {experience.start_date} - {experience.end_date || 'Present'}
        </p>
        <span class="badge {experience.exp_type === EXP_TYPES.PROFESSIONAL ? 'badge-primary' : 'badge-secondary'}">
          {experience.exp_type === EXP_TYPES.PROFESSIONAL ? 'Professional' : 'Academic'}
        </span>

        {#if experience.links && Object.keys(experience.links).length > 0}
          <div class="flex flex-wrap gap-3 mt-4">
            {#each Object.entries(experience.links) as [label, url]}
              {#if url}
                <a href={url} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-base text-muted-foreground hover:text-primary transition-colors">
                  <Icon icon="lucide:external-link" class="w-4 h-4" />
                  {label}
                </a>
              {/if}
            {/each}
          </div>
        {/if}
      </div>
    </div>

    <div class="grid lg:grid-cols-3 gap-8">
      <!-- Main Content -->
      <div class="lg:col-span-2 space-y-8">
        <section in:fly={{ y: 20, duration: 500, delay: 100 }} class="card p-6">
          <h2 class="text-2xl font-semibold mb-4">About</h2>
          <p class="text-muted-foreground whitespace-pre-line">
            {experience.description || 'No description available.'}
          </p>
        </section>

        <section in:fly={{ y: 20, duration: 500, delay: 200 }}>
          <h2 class="text-2xl font-semibold mb-4">
            Projects
            <span class="text-muted-foreground font-normal ml-2">({relatedProjects.length})</span>
          </h2>

          {#if relatedProjects.length > 0}
            <div class="grid md:grid-cols-2 gap-4">
              {#each relatedProjects as project, index}
                <div in:fly={{ y: 20, duration: 300, delay: 300 + index * 50 }}>
                  <Card
                    name={project.name}
                    logo={project.logo}
                    icon={project.icon}
                    description={project.description}
                    status={project.status}
                    linkTo="/projects/{project.id}"
                  />
                </div>
              {/each}
            </div>
          {:else}
            <p class="text-muted-foreground">No projects found for this experience.</p>
          {/if}
        </section>
      </div>

      <!-- Sidebar -->
      <div class="space-y-6">
        {#if experience.roles && experience.roles.length > 0}
          <section in:fly={{ y: 20, duration: 500, delay: 300 }} class="card p-6">
            <Timeline items={experience.roles} title="Roles" />
          </section>
        {/if}

        {#if experience.special_events && experience.special_events.length > 0}
          <section in:fly={{ y: 20, duration: 500, delay: 400 }} class="card p-6">
            <Timeline items={experience.special_events} title="Achievements & Events" />
          </section>
        {/if}
      </div>
    </div>
  </div>
</div>
