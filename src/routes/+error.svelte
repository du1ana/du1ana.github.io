<script>
  import { page } from '$app/stores';
</script>

<div class="min-h-screen pt-20 flex items-center justify-center">
  <div class="text-center">
    <h1 class="text-6xl font-display mb-4">{$page.status}</h1>
    <p class="text-muted-foreground mb-6">{$page.error?.message || 'Something went wrong'}</p>
    <a href="/" class="btn-primary">Go Home</a>
  </div>
</div>
