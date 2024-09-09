<script lang="ts">
  import Hero from "$lib/components/about/Hero.svelte";
  import Horizone from "$lib/components/about/Horizon.svelte";
  import Team from "$lib/components/about/Team.svelte";
  import type { HeroFigureData, TeamData } from "$lib/interfaces";

  export let data: { hero: HeroFigureData; team: TeamData };
</script>

<svelte:head>
  <title>Digitalt Innovationscenter - Om oss</title>
  <meta name="description" content="About this app" />
</svelte:head>

<Hero heroData={data.hero} />
<Team teamData={data.team} />
<Horizone />
