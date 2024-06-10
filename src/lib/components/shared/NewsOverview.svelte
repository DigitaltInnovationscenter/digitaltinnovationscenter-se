<script lang="ts">
  import Container from "./Container.svelte";
  import NewsCard from "./NewsCard.svelte";

  export let headerType: "simple" | "extra" | null = "simple";
  export let data: any = [];

  export let bgColor = "bg-[#eeeeee]";
  export let fgColor = "bg-white";
</script>

<Container backgroundColor={bgColor} foreGroundColor={fgColor}>
  <div class="max-w-[1362px] w-full m-auto space-y-20">
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
    {:else if headerType === null}
      <!-- No Header -->
    {/if}
    <div class="grid grid-cols-3 gap-8">
      {#if data.posts.data && data.posts.data.length > 0}
        {#each data.posts.data as card}
          <NewsCard data={card} />
        {/each}
      {/if}
    </div>
  </div>
</Container>
