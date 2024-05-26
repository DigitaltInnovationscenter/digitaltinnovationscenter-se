<script lang="ts">
  import { ArrowTopRightOnSquare, Icon } from "svelte-hero-icons";
  import ExploreCard from "./ExploreCard.svelte";

  let data = [
    {
      header: "Virtuella rum",
      content:
        "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. ",
      href: "/",
    },
    {
      header: "Sökbara Powerpointer och PDF:er",
      content:
        "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. ",
      href: "/",
    },
    {
      header: "Hantering av ostrukturerad data",
      content:
        "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. ",
      href: "/",
    },
  ];
</script>

<div class="w-full">
  <div class="w-full bg-[#eeeeee] py-10">
    <div class="max-w-[1280px] w-full m-auto py-24 space-y-20">
      <div class="w-full text-center">
        <h3 class="text-6xl font-bold text-slate-800">
          Vi testar tillämpningar av ny teknik
        </h3>
      </div>
      <div class="grid grid-cols-3 gap-10">
        {#each data as card}
          <ExploreCard data={card} />
        {/each}
      </div>
      <div class="w-full text-center text-[#9B4AFF]">
        <a
          href="/"
          class="flex items-center justify-center transition hover:opacity-50 font-semibold"
        >
          Dokumentation av utveckling <Icon
            src={ArrowTopRightOnSquare}
            class="w-6 h-6 inline ml-2"
          />
        </a>
      </div>
    </div>
  </div>
</div>
