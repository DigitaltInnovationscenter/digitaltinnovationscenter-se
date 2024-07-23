<script lang="ts">
  import { ArrowTopRightOnSquare, Icon } from "svelte-hero-icons";
  import ExploreCard from "./ExploreCard.svelte";
  import Container from "../shared/Container.svelte";
  import { register } from "swiper/element/bundle";
  import type { ExploreData } from "$lib/interfaces/ui/ExplorativeData";

  export let exploreData: ExploreData;

  register();
</script>

<Container foreGroundColor="bg-default-gray-100" rounded={false}>
  <div class="max-w-[1362px] w-full m-auto space-y-12 lg:space-y-20 px-10">
    <div class="w-full text-center">
      <h3 class="text-3xl leading-snug lg:text-6xl font-bold text-slate-800">
        {exploreData.Header}
      </h3>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {#each exploreData.TechCard as card}
        <ExploreCard exploreCard={card} />
      {/each}
    </div>
    <div class="w-full text-center text-secondary-purple-100">
      {#if exploreData.CTA && exploreData.CTA[0]}
        <a
          href={exploreData.CTA[0].url}
          class="flex items-center justify-center transition hover:opacity-50 font-semibold"
        >
          {exploreData.CTA[0].text}
          <Icon src={ArrowTopRightOnSquare} class="w-6 h-6 inline ml-2" />
        </a>
      {/if}
    </div>
  </div>
</Container>
