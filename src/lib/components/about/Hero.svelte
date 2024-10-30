<!-- src/lib/components/MyComponent.svelte -->
<script lang="ts">
  import { fly, fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { PUBLIC_CMS_URL } from "$env/static/public";
  import { onMount } from "svelte";
  import type { HeroFigureData } from "$lib/interfaces";

  export let heroData: HeroFigureData;

  let activeHover: { bool: boolean; id: "right" | "bottom" | "top" | null } = {
    bool: false,
    id: null,
  };

  let showSvg = false;
  let showCards = false;
  let showHeader = false;

  let figureStyling: Record<
    "right" | "bottom" | "top",
    { wrapper: string; child: string }
  > = {
    right: {
      wrapper:
        "absolute bottom-0 -right-[88.3%] move-right transition-all h-[137%]",
      child: "absolute left-[70%] bottom-[75%] w-full max-w-96 pr-6",
    },
    bottom: {
      wrapper:
        "absolute -bottom-[83.7%] w-[102%] transition-all diagonal-move-bottom-left",
      child: "absolute left-[90%] top-[85%] w-full max-w-96",
    },
    top: {
      wrapper:
        "absolute -top-[5%] -left-[79.4%] w-[154%] diagonal-move-top-left",
      child: "absolute -left-64 top-[60%] w-full max-w-96",
    },
  };

  const initWindow = () => {
    setTimeout(() => {
      showHeader = true;
    }, 500);
  };

  $: heroData.content &&
    heroData.header &&
    setTimeout(() => {
      showSvg = true;
    }, 250) &&
    setTimeout(() => {
      showCards = true;
    }, 500);

  $: showCards && initWindow();

  const headerBreakpoints = "text-md xl:text-lg 2xl:text-xl";
  const paragraphBreakpoints = "text-sm 2xl:text-lg";

  let screenX: number;

  onMount(() => {
    // Check the initial screen width
    screenX = window.innerWidth;

    // Add an event listener to update screenX when the window is resized
    const handleResize = () => {
      screenX = window.innerWidth;
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is destroyed
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
</script>

<div
  class="hidden h-[1000px] w-full m-auto xl:flex flex-col items-center justify-center relative mt-12 mb-24"
>
  {#if showHeader}
    <div
      class="absolute top-[18%] text-6xl font-bold w-full max-w-[1362px] m-auto text-left text-slate-800"
    >
      <span transition:fade={{ delay: 0, duration: 150 }}
        >{heroData.header}</span
      >
    </div>
  {/if}
  <!-- Aspect + width controls svg placing -->
  <div class="relative aspect-[1.15] w-full max-w-[300px]">
    {#each heroData.content as figureContent, i}
      <div
        role="contentinfo"
        class="{activeHover.id !== figureContent.position && activeHover.bool
          ? 'pointer-events-none'
          : ''} {figureStyling[figureContent.position].wrapper}"
        on:mouseenter={() => {
          activeHover.bool = true;
          activeHover.id = figureContent.position;
        }}
        on:mouseleave={() => {
          activeHover.bool = false;
          activeHover.id = null;
        }}
      >
        {#if showSvg}
          <img
            transition:fade={{ delay: i * 50, duration: 200 }}
            src="{PUBLIC_CMS_URL}{figureContent.svg.url}"
            class="h-full"
            alt="logotype"
          />
        {/if}
        {#if showCards}
          <div
            class={figureStyling[figureContent.position].child}
            transition:fly={{
              delay: i * 50,
              duration: 600,
              y: 40,
              opacity: 0,
              easing: quintOut,
            }}
          >
            <img
              src="{PUBLIC_CMS_URL}{figureContent.smallLogo.url}"
              class="w-4 h-4 xl:w-6 xl:h-6"
              alt="mini-logo"
            />
            <h3
              class="{headerBreakpoints} text-primary-dark-300 font-semibold mb-2"
            >
              {figureContent.Header}
            </h3>
            <p class="{paragraphBreakpoints} text-primary-dark-300 mb-4">
              {figureContent.TextBlock}
            </p>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>
<div
  class="visible min-h-[700px] xl:hidden flex flex-col mt-32 mb-24 items-center justify-center px-6 space-y-12"
>
  {#if showCards}
    <div
      class="text-4xl max-w-[480px] font-bold w-full m-auto text-left text-slate-800"
    >
      <span transition:fade={{ delay: 0, duration: 500 }}
        >{heroData.header}</span
      >
    </div>
  {/if}
  {#each heroData.content as figureContent, i}
    <div class="max-w-[480px]">
      {#if showCards}
        <div
          transition:fly={{
            delay: 0,
            duration: 500,
            y: 40,
            opacity: 0,
            easing: quintOut,
          }}
        >
          <img
            src="{PUBLIC_CMS_URL}{figureContent.smallLogo.url}"
            class="w-5 h-5"
            alt="mini-logo"
          />
          <h3 class="text-xl text-primary-dark-300 font-semibold mb-3">
            {figureContent.Header}
          </h3>
          <p class="text-lg text-primary-dark-300 mb-4">
            {figureContent.TextBlock}
          </p>
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  .move-right {
    transition: transform 0.15s ease; /* Adjust the transition timing as needed */
    transform-origin: center;
  }

  .move-right:hover {
    transform: translate(16px);
  }

  .diagonal-move-top-left {
    transition: transform 0.15s ease; /* Adjust the transition timing as needed */
    transform-origin: center;
  }

  .diagonal-move-top-left:hover {
    transform: translate(-16px, -16px);
  }

  .diagonal-move-bottom-left {
    transition: transform 0.15s ease; /* Adjust the transition timing as needed */
    transform-origin: center;
  }

  .diagonal-move-bottom-left:hover {
    transform: translate(-16px, 16px);
  }

  /* Transition timing for returning to default state after hover */
  .diagonal-move-top-left:not(:hover),
  .diagonal-move-bottom-left:not(:hover),
  .move-right:not(:hover) {
    transition: transform 0.3s ease 0.5s; /* Adjust the delay timing as needed */
  }
</style>
