<script lang="ts">
  import CardGrid from "$lib/components/CardGrid.svelte";
  import Container from "$lib/components/Container.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import ProjectCarousel from "$lib/components/ProjectCarousel.svelte";
  import ProjectGrid from "$lib/components/ProjectGrid.svelte";

  export let data;
</script>

<Header />
<div class="flex flex-col">
  <Hero {data} />
  <Container bgColor="bg-gray-100">
    <ProjectCarousel {data} />
    <CardGrid {data} />
  </Container>
  <Container bgColor="bg-white">
    <ProjectGrid {data} />
  </Container>
</div>
<Footer />
