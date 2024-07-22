<script lang="ts">
  import { Icon, ArrowUp } from "svelte-hero-icons";
  import ButtonIcon from "../ButtonIcon.svelte";
  import { onMount } from "svelte";
  export let data;
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
        {data.MainHeader}
      </h6>
      {#if data.CTA && data.CTA.length > 0}
        {#each data.CTA as btn}
          <ButtonIcon href={btn.url} class="shadow-lg">
            {btn.text}
          </ButtonIcon>
        {/each}
      {/if}
    </div>
  </div>
  <div class="w-full h-full opacity-50 backdrop-blur-sm">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
    >
      <filter id="n" x="0" y="0">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.75"
          stitchTiles="stitch"
        />
      </filter>

      <rect width="100%" height="100%" fill="#000" />
      <rect width="100%" height="100%" filter="url(#n)" opacity="0.80" />
    </svg>
  </div>
  <div
    class="w-full h-24 rounded-t-[50px] absolute -bottom-1 bg-default-gray-100"
  ></div>
</div>

<style>
  .gradient-animation {
    background: linear-gradient(-45deg, #0099ff, #cc96fc, #ff00d4, #a75fff);
    /* background: linear-gradient(-45deg, #000, #3d3d3d, #6b6b6b, #adadad); */
    background-size: 400% 600%;
    animation: gradient 15s ease infinite;
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
