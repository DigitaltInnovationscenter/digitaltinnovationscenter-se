<script lang="ts">
  import { ArrowLeft, ArrowRight, ArrowUp, Icon } from "svelte-hero-icons";
  import { register } from "swiper/element/bundle";

  export let projects: any = [];

  register();

  let swiperContainer: any;

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
</script>

<div class="relative">
  <swiper-container
    bind:this={swiperContainer}
    loop="true"
    class="rounded-3xl overflow-hidden shadow-lg"
  >
    {#each projects as project}
      <swiper-slide class="cursor-pointer swiper-slide-card">
        <div
          class="w-full aspect-[3.1/1] bg-white grid grid-cols-2 gap-4 overflow-hidden"
        >
          <div class="flex flex-col items-start justify-center p-16 space-y-4">
            <h4 class="text-5xl font-bold text-left text-slate-800">
              {project.header}
            </h4>
            <p class="text-slate-800 text-left text-lg pr-12">
              {project.content}
            </p>
          </div>
          <div class="relative">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img
              src={project.img}
              alt="project-image"
              class="absolute right-0 top-0 h-full"
            />
            <div
              class="absolute flex items-center justify-center right-0 top-0 h-full w-0 backdrop-blur-sm transition-all figure-block-effect"
            >
              <button
                class="w-[260px] figure-block-button left py-3 px-8 bg-white rounded-full text-[#9B4AFF] flex flex-row items-center"
                >Läs mer om projektet
                <span class="rotate-90 ml-4 transform-gpu">
                  <Icon src={ArrowUp} class="w-6 animate-bounce" />
                </span></button
              >
            </div>
          </div>
        </div>
      </swiper-slide>
    {/each}
  </swiper-container>
  <!-- Custom navigation buttons -->
  <div
    class="swiper-button-prev absolute top-1/2 -left-[13px] transform -translate-x-[13px] -translate-y-1/2 z-50 cursor-pointer"
  >
    <Icon
      src={ArrowLeft}
      class="w-6 h-6 bg-[#9B4AFF] box-content p-3 rounded-full text-white"
    />
  </div>
  <div
    class="swiper-button-next absolute top-1/2 -right-[44px] transform -translate-x-[20px] -translate-y-1/2 z-50 cursor-pointer"
  >
    <Icon
      src={ArrowRight}
      class="w-6 h-6 bg-[#9B4AFF] box-content p-3 rounded-full text-white"
    />
  </div>
</div>

<style>
  .figure-block-button {
    visibility: hidden;
  }

  .swiper-slide-card:hover .figure-block-effect {
    width: 100%;
  }

  .swiper-slide-card:hover .figure-block-button {
    visibility: visible;
  }
</style>
