<script>
  import Icon from '@iconify/svelte';
  import { fly } from 'svelte/transition';

  export let items = [];
  export let title = null;
</script>

{#if items.length > 0}
  <div class="space-y-4">
    {#if title}
      <h3 class="text-xl font-semibold text-foreground mb-4">{title}</h3>
    {/if}
    <div class="relative">
      <!-- Timeline line -->
      <div class="absolute left-4 top-0 bottom-0 w-px bg-border"></div>

      <div class="space-y-6">
        {#each items as item, index}
          <div
            in:fly={{ x: -20, duration: 300, delay: index * 100 }}
            class="relative pl-10"
          >
            <!-- Timeline dot -->
            <div class="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background"></div>

            <div class="card p-4">
              <div class="flex items-start justify-between gap-2">
                <div class="flex-1">
                  <h4 class="font-medium text-foreground">{item.name || item.role}</h4>
                  {#if item.date}
                    <p class="flex items-center gap-1 text-base text-muted-foreground mt-1">
                      <Icon icon="lucide:calendar" class="w-3 h-3" />
                      {typeof item.date === 'string'
                        ? item.date
                        : `${item.start_date}${item.end_date ? ` - ${item.end_date}` : ' - Present'}`}
                    </p>
                  {/if}
                  {#if item.start_date && !item.date}
                    <p class="flex items-center gap-1 text-base text-muted-foreground mt-1">
                      <Icon icon="lucide:calendar" class="w-3 h-3" />
                      {item.start_date} - {item.end_date || 'Present'}
                    </p>
                  {/if}
                  {#if item.description}
                    <p class="text-base text-muted-foreground mt-2">{item.description}</p>
                  {/if}
                </div>
                {#if item.link}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-shrink-0 p-2 rounded-lg hover:bg-secondary transition-colors"
                    title="View details"
                  >
                    <Icon icon="lucide:external-link" class="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </a>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
{/if}
