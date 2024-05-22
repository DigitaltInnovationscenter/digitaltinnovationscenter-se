<script lang="ts">
  import Hero from "$lib/components/about/Hero.svelte";
  import Horizone from "$lib/components/about/Horizon.svelte";
  import Team from "$lib/components/about/Team.svelte";

  export let data: any;
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<Hero data={data.hero} />
<Team data={data.team} />
<Horizone />
