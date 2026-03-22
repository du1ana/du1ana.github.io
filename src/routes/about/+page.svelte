<script>
  import { fly } from 'svelte/transition';
  import Icon from '@iconify/svelte';
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';
  import LogoPlaceholder from '$lib/components/LogoPlaceholder.svelte';
  import { PROFILE, getSocialLinks } from '$lib/data/profile.js';

  const socialLinks = getSocialLinks();

  const socialIcons = {
    github: 'lucide:github',
    linkedin: 'lucide:linkedin',
  };
</script>

<div class="min-h-screen pt-20">
  <div class="container py-8">
    <Breadcrumb items={[{ label: 'About', path: '/about' }]} />

    <div class="max-w-4xl mx-auto">
      <!-- Profile Header -->
      <div in:fly={{ y: 20, duration: 500 }} class="card p-8 text-center mb-8">
        <div class="flex justify-center">
          <LogoPlaceholder name={PROFILE.name} logo={PROFILE.avatar} size="xl" />
        </div>
        <h1 class="text-4xl md:text-5xl font-display mt-6 mb-2">{PROFILE.name}</h1>
        <p class="text-xl text-primary font-medium mb-2">@{PROFILE.username}</p>
        <p class="text-muted-foreground mb-4">{PROFILE.tagline}</p>
        {#if PROFILE.location}
          <p class="flex items-center justify-center gap-2 text-base text-muted-foreground">
            <Icon icon="lucide:map-pin" class="w-4 h-4" />
            {PROFILE.location}
          </p>
        {/if}

        <div class="flex justify-center gap-4 mt-6">
          {#each socialLinks as { platform, url }}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-colors capitalize"
              aria-label="Visit {platform} profile"
            >
              <Icon icon={socialIcons[platform] || 'lucide:external-link'} class="w-5 h-5" />
            </a>
          {/each}
          {#if PROFILE.email}
            <a href="mailto:{PROFILE.email}" class="p-3 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-colors" aria-label="Send email">
              <Icon icon="lucide:mail" class="w-5 h-5" />
            </a>
          {/if}
        </div>
      </div>

      <!-- Bio -->
      <section in:fly={{ y: 20, duration: 500, delay: 100 }} class="card p-8 mb-8">
        <h2 class="text-3xl font-display mb-4">About Me</h2>
        <p class="text-muted-foreground whitespace-pre-line leading-relaxed">{PROFILE.bio}</p>
      </section>

      <!-- Contact -->
      <section in:fly={{ y: 20, duration: 500, delay: 200 }} class="card p-8">
        <h2 class="text-3xl font-display mb-4">Get In Touch</h2>
        <p class="text-muted-foreground mb-6">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <div class="flex flex-wrap gap-4">
          {#if PROFILE.email}
            <a href="mailto:{PROFILE.email}" class="btn-primary flex items-center gap-2">
              <Icon icon="lucide:mail" class="w-4 h-4" />
              Send Email
            </a>
          {/if}
          {#if PROFILE.social.linkedin}
            <a href={PROFILE.social.linkedin} target="_blank" rel="noopener noreferrer" class="btn-outline flex items-center gap-2">
              <Icon icon="lucide:linkedin" class="w-4 h-4" />
              Connect on LinkedIn
            </a>
          {/if}
          {#if PROFILE.resume}
            <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer" class="btn-secondary flex items-center gap-2">
              <Icon icon="lucide:external-link" class="w-4 h-4" />
              View Resume
            </a>
          {/if}
        </div>
      </section>
    </div>
  </div>
</div>
