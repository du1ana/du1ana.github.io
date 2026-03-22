<script>
  import Icon from '@iconify/svelte';

  // Map from react-icons style names to Iconify icon IDs
  const ICON_MAP = {
    // Simple Icons (si:)
    SiJavascript: 'simple-icons:javascript',
    SiC: 'simple-icons:c',
    SiGnubash: 'simple-icons:gnubash',
    SiNodedotjs: 'simple-icons:nodedotjs',
    SiReact: 'simple-icons:react',
    SiUnity: 'simple-icons:unity',
    SiDocker: 'simple-icons:docker',
    SiUbuntu: 'simple-icons:ubuntu',
    SiMongodb: 'simple-icons:mongodb',
    SiRipple: 'ri:xrp-line',
    RiXrpLine: 'ri:xrp-line',
    RiPassValidLine: 'ri:pass-valid-line',
    RiShieldUserLine: 'ri:shield-user-line',
    BxWallet: 'bx:wallet',
    EosIconsBlockchain: 'eos-icons:blockchain',
    SiWalletconnect: 'simple-icons:walletconnect',
    SiTensorflow: 'simple-icons:tensorflow',
    SiKeras: 'simple-icons:keras',
    SiTwilio: 'simple-icons:twilio',
    SiOpenai: 'simple-icons:openai',
    SiPython: 'simple-icons:python',
    SiRust: 'simple-icons:rust',
    SiTypescript: 'simple-icons:typescript',
    SiSvelte: 'simple-icons:svelte',
    SiRedux: 'simple-icons:redux',
    SiDotnet: 'simple-icons:dotnet',
    // Tabler Icons (tabler:)
    TbBrandAzure: 'tabler:brand-azure',
    TbCloud: 'tabler:cloud',
    TbDatabase: 'tabler:database',
    TbVector: 'tabler:vector',
    TbBrain: 'tabler:brain',
    TbCube: 'tabler:cube',
    TbServerBolt: 'tabler:server-bolt',
    TbSearch: 'tabler:search',
    TbFaceId: 'tabler:face-id',
    TbParking: 'tabler:parking',
    TbVirus: 'tabler:virus',
    // FontAwesome 6 (fa6-solid:)
    FaShield: 'fa6-solid:shield',
    FaGlobe: 'fa6-solid:globe',
    FaMicrochip: 'fa6-solid:microchip',
    FaHeadset: 'fa6-solid:headset',
    FaRoad: 'fa6-solid:road',
    FaPersonWalking: 'fa6-solid:person-walking',
  };

  export let name = '';
  export let logo = null;
  export let icon = null;
  export let size = 'md';

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-14 h-14 text-xl',
    xl: 'w-20 h-20 text-2xl',
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 28,
    xl: 40,
  };

  function getInitials(name) {
    if (!name) return '?';
    const words = name.split(/[\s/]+/).filter(Boolean);
    if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
    return words.slice(0, 2).map(w => w[0]).join('').toUpperCase();
  }

  function getColorFromName(name) {
    if (!name) return 'from-primary/40 to-secondary/60';
    const colors = [
      'from-primary/40 to-secondary/60',
      'from-secondary/60 to-primary/30',
      'from-muted/80 to-secondary/50',
      'from-primary/30 to-muted/70',
      'from-secondary/40 to-primary/50',
      'from-primary/50 to-secondary/30',
      'from-muted/60 to-primary/40',
      'from-secondary/50 to-muted/40',
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  }

  $: resolvedIcon = icon ? (ICON_MAP[icon] ?? icon) : null;
  $: colorClass = getColorFromName(name);
</script>

{#if logo}
  <img
    src={logo}
    alt="{name} logo"
    class="{sizeClasses[size]} rounded-lg object-cover border border-border flex-shrink-0"
  />
{:else}
  <div
    class="{sizeClasses[size]} rounded-lg bg-gradient-to-br {colorClass} flex items-center justify-center text-primary border border-primary/20 flex-shrink-0"
  >
    {#if resolvedIcon}
      <Icon icon={resolvedIcon} width={iconSizes[size]} height={iconSizes[size]} />
    {:else}
      {getInitials(name)}
    {/if}
  </div>
{/if}
