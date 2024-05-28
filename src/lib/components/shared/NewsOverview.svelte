<script lang="ts">
  import Container from "./Container.svelte";
  import NewsCard from "./NewsCard.svelte";

  export let headerType: "simple" | "extra" = "simple";
  export let data: any = [];
</script>

<Container backgroundColor="bg-[#eeeeee]" foreGroundColor="bg-white">
  <div class="max-w-[1280px] w-full m-auto space-y-20">
    {#if headerType === "simple"}
      <div class="w-full text-left">
        <h3 class="text-6xl font-bold text-slate-800">
          {data.Header}
        </h3>
      </div>
    {:else if headerType === "extra"}
      <div
        class="w-full max-w-[1366px] px-10 m-auto flex flex-col items-center"
      >
        <span class="font-bold text-[#9B4AFF] text-lg">Aktuellt</span>
        <h6
          class="font-bold text-5xl text-slate-800 leading-snug text-center mb-4"
        >
          Senaste inläggen
        </h6>
        <p class="text-center max-w-[450px] text-lg text-gray-500 mb-4">
          Vi gör moduler av det tekniker vi skapar för att sedan implementera
          det i olika koncept. Besök vår Dokusaurus för att lära dig mer om hur
          vi har byggt våra moduler.
        </p>
      </div>
    {/if}
    <div class="grid grid-cols-3 gap-6">
      {#each data.Projects as card}
        <NewsCard data={card} />
      {/each}
    </div>
  </div>
</Container>
