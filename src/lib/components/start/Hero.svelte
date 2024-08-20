<script lang="ts">
  import ButtonIcon from "../ButtonIcon.svelte";
  import type { StartHeroData } from "$lib/interfaces";
  export let heroData: StartHeroData;
</script>

<div
  class="h-full min-h-[800px] max-h-screen bg-slate-800 w-full gradient-animation relative"
>
  <div
    class="h-full w-full flex items-center pb-24 absolute top-0 left-0 z-10 pt-[45px]"
  >
    <div class="w-full max-w-[1366px] px-10 m-auto flex flex-col items-start">
      <h6
        class="font-bold text-4xl lg:text-7xl text-white leading-snug mb-12 lg:pr-64 font-serif lg:leading-snug"
      >
        {heroData.MainHeader}
      </h6>
      {#if heroData.CTA && heroData.CTA.length > 0}
        {#each heroData.CTA as btn}
          <ButtonIcon href={btn.url} class="shadow-lg">
            {btn.text}
          </ButtonIcon>
        {/each}
      {/if}
    </div>
  </div>
  <div
    class="w-full h-24 rounded-t-[50px] absolute -bottom-1 bg-default-gray-100"
  ></div>
</div>

<style>
  .gradient-animation {
    background: linear-gradient(-45deg, #0173bf, #cc96fc, #d700b3, #a75fff);
    background-size: 400% 600%;
    animation: gradient 8s ease infinite;
    height: 100vh;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
