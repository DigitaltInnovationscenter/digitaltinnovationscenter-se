<script lang="ts">
  import { ArrowLeft, ArrowRight, Icon } from "svelte-hero-icons";
  import { register } from "swiper/element/bundle";
  import { PUBLIC_CMS_URL } from "$env/static/public";
  import ButtonIcon from "../ButtonIcon.svelte";
  import { onMount } from "svelte";
  import type { SwiperProjectsData } from "$lib/interfaces/ui/SwiperData";

  export let swiperData: SwiperProjectsData;

  register();

  let swiperContainer: any;

  let screenX: number;

  const initiateSwiper = () => {
    try {
      if (swiperContainer) {
        const swiper = swiperContainer.swiper;
        const swiperButtonNextEl = document.querySelector(
          ".swiper-button-next"
        );
        if (swiperButtonNextEl) {
          swiperButtonNextEl.addEventListener("click", () => {
            swiper.slideNext();
          });
        }
        const swiperButtonPrevEl = document.querySelector(
          ".swiper-button-prev"
        );
        if (swiperButtonPrevEl) {
          swiperButtonPrevEl.addEventListener("click", () => {
            swiper.slidePrev();
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  $: swiperContainer && initiateSwiper();

  onMount(() => {
    // Check the initial screen width
    screenX = window.innerWidth;
    console.log("Screen width on mount:", screenX);

    // Add an event listener to update screenX when the window is resized
    const handleResize = () => {
      screenX = window.innerWidth;
      console.log("Screen width after resize:", screenX);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is destroyed
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
</script>

<div class="relative">
  <swiper-container
    bind:this={swiperContainer}
    loop="true"
    class="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all bg-white"
    pagination={screenX < 1024 ? true : false}
  >
    {#each swiperData.projects.data as project}
      <swiper-slide class="cursor-pointer swiper-slide-card bg-white">
        <a href={`projects/${project.id}`}>
          <div
            class="w-full h-full lg:aspect-[3.1/1] grid grid-cols-1 lg:grid-cols-2 lg:gap-4 overflow-hidden"
          >
            <!-- pb-0 on this element handles a swiper padding issue -->
            <div
              class="flex flex-col items-start justify-center p-10 lg:p-16 space-y-6 order-2 lg:order-1"
            >
              <h4
                class="text-xl md:text-3xl lg:text-5xl font-bold text-left text-slate-800"
              >
                {project.attributes.MainHeader}
              </h4>
              <p class="text-gray-600 text-left text-md lg:text-lg lg:pr-12">
                {project.attributes.RepeatableRichText[0].Content}
              </p>

              <ButtonIcon
                hover={false}
                class="!p-0 w-full overflow-hidden text-wrap visible lg:invisible text-md"
                href={`projects/${project.id}`}
              >
                Läs mer
              </ButtonIcon>
            </div>
            <div
              class="relative order-1 lg:order-2 aspect-[1.68/1] lg:aspect-auto overflow-hidden"
            >
              <img
                src={PUBLIC_CMS_URL +
                  project.attributes.Banner.data[0].attributes.url}
                alt="Bild som representerar {project.attributes.MainHeader}"
                class="absolute lg:right-0 lg:top-0 h-full w-full object-cover"
              />
              <div
                class="absolute flex items-center justify-center right-0 top-0 h-full w-0 backdrop-blur-sm transition-all figure-block-effect opacity-0 lg:opacity-100"
              >
                <ButtonIcon
                  class="figure-block-button min-w-[260px] max-h-[48px] overflow-hidden text-wrap opacity-0 lg:opacity-100"
                  href={`projects/${project.id}`}
                >
                  Läs mer om projektet
                </ButtonIcon>
              </div>
            </div>
          </div>
        </a>
      </swiper-slide>
    {/each}
  </swiper-container>
  <!-- Custom navigation buttons -->
  <div
    class="invisible lg:visible swiper-button-prev absolute top-1/2 -left-[13px] transform -translate-x-[13px] -translate-y-1/2 z-50 cursor-pointer"
  >
    <Icon
      src={ArrowLeft}
      class="w-6 h-6 bg-secondary-purple-100 box-content p-3 rounded-full text-white"
    />
  </div>
  <div
    class="invisible lg:visible swiper-button-next absolute top-1/2 -right-[44px] transform -translate-x-[20px] -translate-y-1/2 z-50 cursor-pointer"
  >
    <Icon
      src={ArrowRight}
      class="w-6 h-6 bg-secondary-purple-100 box-content p-3 rounded-full text-white"
    />
  </div>
</div>

<style>
  :global(.figure-block-button) {
    visibility: hidden;
  }

  .swiper-slide-card:hover .figure-block-effect {
    width: 100%;
  }

  :global(.swiper-slide-card:hover .figure-block-button) {
    visibility: visible;
  }
</style>
