<script lang="ts">
  import { ArrowTopRightOnSquare, Icon } from "svelte-hero-icons";
  import TechCard from "./TechCard.svelte";
  import type { TechCardData } from "$lib/interfaces";
  export let techCardData: TechCardData[];
</script>

<div class="w-full bg-white">
  <div class="w-full bg-gray-50 py-10 rounded-t-[50px]">
    <div class="max-w-[1362px] w-full m-auto py-48 space-y-20">
      <div
        class="w-full max-w-[1366px] m-auto flex flex-col items-start lg:items-center px-10"
      >
        <span class="font-bold text-secondary-purple-100 text-lg"
          >Tekniksamling</span
        >
        <h6
          class="font-bold text-5xl text-slate-800 leading-snug text-left lg:text-center mb-4"
        >
          Våra tekniker
        </h6>
        <p
          class="text-left lg:text-center max-w-[450px] text-lg text-gray-500 mb-4"
        >
          Vi gör moduler av det tekniker vi skapar för att sedan implementera
          det i olika koncept. Besök vår Dokusaurus för att lära dig mer om hur
          vi har byggt våra moduler.
        </p>
        <a
          href="https://docs.digitaltinnovationscenter.se"
          target="_blank"
          class="flex items-center justify-center transition hover:opacity-50 font-semibold text-secondary-purple-100"
        >
          Dokumentation av utveckling <Icon
            src={ArrowTopRightOnSquare}
            class="w-6 h-6 inline ml-2"
          />
        </a>
      </div>
      <div
        class="px-10 flex overflow-x-auto xl:overflow-hidden xl:grid xl:grid-cols-3 gap-10 pb-12 xl:pb-0"
      >
        {#each techCardData as card}
          <TechCard techCardData={card} />
        {/each}
      </div>
    </div>
  </div>
</div>
