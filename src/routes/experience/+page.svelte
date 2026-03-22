<script>
  import { fly } from 'svelte/transition';
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';
  import LogoPlaceholder from '$lib/components/LogoPlaceholder.svelte';
  import { getAllExperiences, EXP_TYPES, getCurrentRole } from '$lib/data/experiences.js';

  const allExperiences = getAllExperiences();

  const sorted = [...allExperiences].sort((a, b) => new Date(b.start_date) - new Date(a.start_date));
  const professionalExperiences = sorted.filter(e => e.exp_type === EXP_TYPES.PROFESSIONAL);
  const academicExperiences = sorted.filter(e => e.exp_type === EXP_TYPES.ACADEMIC);
</script>

<div class="min-h-screen pt-20">
  <div class="container py-8">
    <Breadcrumb items={[{ label: 'Experience', path: '/experience' }]} />

    <div in:fly={{ y: 20, duration: 500 }} class="mb-8">
      <h1 class="text-4xl md:text-5xl font-display mb-2">Experience</h1>
      <p class="text-muted-foreground">My professional journey and education</p>
    </div>

    <!-- Professional Experience -->
    {#if professionalExperiences.length > 0}
      <section in:fly={{ y: 20, duration: 500, delay: 100 }} class="mb-12">
        <h2 class="text-3xl font-display mb-6">Professional Experience</h2>
        <div class="space-y-4">
          {#each professionalExperiences as experience, index}
            <div in:fly={{ x: -20, duration: 300, delay: 200 + index * 100 }}>
              <a
                href="/experience/{experience.id}"
                class="card p-6 block hover:border-primary/30 transition-all duration-300 group"
              >
                <div class="flex flex-col sm:flex-row gap-4">
                  <LogoPlaceholder name={experience.name} logo={experience.logo} size="lg" />
                  <div class="flex-1 min-w-0">
                    <!-- Header row -->
                    <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                      <h3 class="text-2xl font-semibold group-hover:text-primary transition-colors">
                        {experience.name}
                      </h3>
                      <span class="text-sm text-muted-foreground shrink-0">
                        {experience.start_date} – {experience.end_date || 'Present'}
                      </span>
                    </div>

                    <!-- Single role: show inline -->
                    {#if experience.roles.length === 1}
                      <p class="text-primary font-medium mt-0.5">{experience.roles[0].role}</p>
                    {:else}
                      <!-- Multi-role timeline -->
                      <div class="mt-3 pl-2 space-y-2">
                        {#each experience.roles as r}
                          <div class="relative pl-4">
                            <span class="absolute -left-[9px] top-[6px] w-2 h-2 rounded-full border-2 border-primary bg-background"></span>
                            <div class="flex flex-wrap items-baseline justify-between gap-x-3">
                              <p class="text-sm font-medium text-foreground">{r.role}</p>
                              <p class="text-xs text-muted-foreground shrink-0">
                                {r.start_date} – {r.end_date || 'Present'}
                              </p>
                            </div>
                          </div>
                        {/each}
                      </div>
                    {/if}

                    {#if experience.special_events && experience.special_events.length > 0}
                      <div class="mt-3 flex flex-wrap gap-2">
                        {#each experience.special_events.slice(0, 2) as event}
                          <span class="badge-primary text-sm">{event.name}</span>
                        {/each}
                      </div>
                    {/if}
                  </div>
                </div>
              </a>
            </div>
          {/each}
        </div>
      </section>
    {/if}

    <!-- Academic Experience -->
    {#if academicExperiences.length > 0}
      <section in:fly={{ y: 20, duration: 500, delay: 300 }}>
        <h2 class="text-3xl font-display mb-6">Education</h2>
        <div class="space-y-4">
          {#each academicExperiences as experience, index}
            <div in:fly={{ x: -20, duration: 300, delay: 400 + index * 100 }}>
              <a
                href="/experience/{experience.id}"
                class="card p-6 block hover:border-primary/30 transition-all duration-300 group"
              >
                <div class="flex flex-col sm:flex-row gap-4">
                  <LogoPlaceholder name={experience.name} logo={experience.logo} size="lg" />
                  <div class="flex-1 min-w-0">
                    <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                      <h3 class="text-2xl font-semibold group-hover:text-primary transition-colors">
                        {experience.name}
                      </h3>
                      <span class="text-sm text-muted-foreground shrink-0">
                        {experience.start_date} – {experience.end_date || 'Present'}
                      </span>
                    </div>
                    <p class="text-primary font-medium mt-0.5">{experience.roles[0].role}</p>
                  </div>
                </div>
              </a>
            </div>
          {/each}
        </div>
      </section>
    {/if}
  </div>
</div>
