<script lang="ts">
  import Hero from "$lib/components/about/Hero.svelte";
  import Horizone from "$lib/components/about/Horizon.svelte";
  import Team from "$lib/components/about/Team.svelte";
  import type { HeroFigureData, TeamData } from "$lib/interfaces";

  export let data: { hero: HeroFigureData; team: TeamData };
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<Hero heroData={data.hero} />
<Team Team={data.team} />
<Horizone />
