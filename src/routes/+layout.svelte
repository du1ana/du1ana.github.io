<script>
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<svelte:head>
  <title>du1ana</title>
  <link rel="icon" type="image/svg+xml" href="/logo/du_logo_w.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" />
</svelte:head>

<a
  href="#main-content"
  class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:text-sm focus:font-medium"
>
  Skip to content
</a>

<div class="min-h-screen bg-background text-foreground">
  <Navbar />
  <main id="main-content">
    <slot />
  </main>
</div>
