<script>
  import { fly } from 'svelte/transition';
  import Icon from '@iconify/svelte';
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';
  import LogoPlaceholder from '$lib/components/LogoPlaceholder.svelte';
  import ScreenshotGallery from '$lib/components/ScreenshotGallery.svelte';
  import { getTechnologyById } from '$lib/data/technologies.js';
  import { getExperienceById } from '$lib/data/experiences.js';
  import { PROJECT_TYPES } from '$lib/data/projects.js';

  export let data;
  const { project } = data;

  const experience = project.experience_id ? getExperienceById(project.experience_id) : null;
  const technologies = project.technology_ids.map(id => getTechnologyById(id)).filter(Boolean);

  const statusMap = {
    live: { label: 'Live', cls: 'status-live' },
    in_development: { label: 'In Development', cls: 'status-development' },
    archived: { label: 'Archived', cls: 'status-archived' },
  };

  const typeLabel = {
    [PROJECT_TYPES.PROFESSIONAL]: 'Professional Project',
    [PROJECT_TYPES.ACADEMIC]: 'Academic Project',
    [PROJECT_TYPES.SIDE_PROJECT]: 'Side Project',
  };
</script>

<div class="min-h-screen pt-20">
  <div class="container py-8">
    <Breadcrumb items={[
      { label: 'Projects', path: '/projects' },
      { label: project.name, path: `/projects/${project.id}` },
    ]} />

    <!-- Header -->
    <div in:fly={{ y: 20, duration: 500 }} class="flex flex-col md:flex-row gap-6 mb-8">
      <LogoPlaceholder name={project.name} logo={project.logo} icon={project.icon} size="xl" />
      <div class="flex-1">
        <div class="flex flex-wrap items-center gap-3 mb-3">
          <h1 class="text-4xl md:text-5xl font-display">{project.name}</h1>
          {#if project.status && statusMap[project.status]}
            <span class={statusMap[project.status].cls}>{statusMap[project.status].label}</span>
          {/if}
        </div>
        <p class="text-muted-foreground mb-2">
          {typeLabel[project.proj_type] || 'Side Project'}
          {#if experience}
            {' '}at{' '}
            <a href="/experience/{experience.id}" class="link">{experience.name}</a>
          {/if}
        </p>
        {#if project.start_date || project.end_date}
          <p class="flex items-center gap-2 text-base text-muted-foreground">
            <Icon icon="lucide:calendar" class="w-4 h-4" />
            {project.start_date || 'N/A'} - {project.end_date || 'Present'}
          </p>
        {/if}
      </div>
    </div>

    <div class="grid lg:grid-cols-3 gap-8">
      <!-- Main Content -->
      <div class="lg:col-span-2 space-y-8">
        <section in:fly={{ y: 20, duration: 500, delay: 100 }} class="card p-6">
          <h2 class="text-2xl font-semibold mb-4">About This Project</h2>
          <p class="text-muted-foreground whitespace-pre-line">
            {project.overview || project.description || 'No description available.'}
          </p>
        </section>

        {#if project.images && project.images.length > 0}
          <section in:fly={{ y: 20, duration: 500, delay: 200 }}>
            <ScreenshotGallery images={project.images} />
          </section>
        {/if}
      </div>

      <!-- Sidebar -->
      <div class="space-y-6">
        <section in:fly={{ y: 20, duration: 500, delay: 200 }} class="card p-6">
          <h3 class="text-xl font-semibold mb-4">Links</h3>
          <div class="space-y-3">
            {#each Object.entries(project.links || {}) as [label, url]}
              {#if url}
                <a href={url} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-base hover:text-primary transition-colors">
                  <Icon icon="lucide:external-link" class="w-4 h-4" />
                  {label}
                </a>
              {/if}
            {/each}
            {#if project.github}
              <a href={project.github} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-base hover:text-primary transition-colors">
                <Icon icon="lucide:github" class="w-4 h-4" />
                GitHub Repository
              </a>
            {/if}
            {#if Object.keys(project.links || {}).length === 0 && !project.github}
              <p class="text-muted-foreground text-base">No links available</p>
            {/if}
          </div>
        </section>

        <section in:fly={{ y: 20, duration: 500, delay: 300 }} class="card p-6">
          <h3 class="text-xl font-semibold mb-4">Technologies</h3>
          <div class="flex flex-wrap gap-2">
            {#each technologies as tech}
              <a
                href="/technologies/{tech.id}"
                class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors text-base"
              >
                <LogoPlaceholder name={tech.name} logo={tech.logo} icon={tech.icon} size="sm" />
                {tech.name}
              </a>
            {/each}
          </div>
        </section>

        {#if experience}
          <section in:fly={{ y: 20, duration: 500, delay: 400 }} class="card p-6">
            <h3 class="text-xl font-semibold mb-4">Built At</h3>
            <a href="/experience/{experience.id}" class="flex items-center gap-3 hover:text-primary transition-colors">
              <LogoPlaceholder name={experience.name} logo={experience.logo} size="md" />
              <div>
                <p class="font-medium">{experience.name}</p>
                <p class="text-base text-muted-foreground">
                  {experience.start_date} - {experience.end_date || 'Present'}
                </p>
              </div>
            </a>
          </section>
        {/if}
      </div>
    </div>
  </div>
</div>
