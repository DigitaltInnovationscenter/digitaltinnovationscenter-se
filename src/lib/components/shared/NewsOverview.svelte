<script lang="ts">
  import Container from "./Container.svelte";
  import NewsCard from "./NewsCard.svelte";
  import type { NewsCardData } from "$lib/interfaces";

  export let headerType: "simple" | "extra" | null = "simple";
  export let newsCardData: NewsCardData[];
  export let header: string | null = null;

  export let bgColor = "bg-default-gray-100";
  export let fgColor = "bg-white";
</script>

<Container backgroundColor={bgColor} foreGroundColor={fgColor}>
  <div
    class="max-w-[1362px] w-full m-auto space-y-12 lg:space-y-20 px-10 pt-24 lg:pt-0"
  >
    {#if headerType === "simple" && header}
      <div class="w-full text-left">
        <h3
          class="text-3xl leading-snug lg:text-6xl font-bold text-slate-800 pt-24 lg:pt-0"
        >
          {header}
        </h3>
      </div>
    {:else if headerType === "extra"}
      <div
        class="w-full max-w-[1366px] lg:px-10 m-auto flex flex-col items-start lg:items-center"
      >
        <span class="font-bold text-secondary-purple-100 text-lg">Aktuellt</span
        >
        <h6
          class="font-bold text-4xl text-slate-800 leading-snug text-left lg:text-center mb-4"
        >
          Senaste inläggen
        </h6>
      </div>
    {:else if headerType === null}
      <!-- No Header -->
    {/if}
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
      {#each newsCardData.filter((card) => card.publishedAt !== null) as card}
        <NewsCard cardData={card} />
      {/each}
    </div>
  </div>
</Container>
