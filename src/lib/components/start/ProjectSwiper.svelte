<script lang="ts">
  import { onMount } from "svelte";
  import Container from "../shared/Container.svelte";
  import type { SwiperProjectsData } from "$lib/interfaces/ui/SwiperData";

  export let data: SwiperProjectsData;

  let Swiper: any;

  onMount(async () => {
    const module = await import("./Swiper.svelte");
    Swiper = module.default;
  });
</script>

<Container backgroundColor="bg-default-gray-100" rounded={false}>
  <div class="max-w-[1362px] w-full m-auto space-y-12 lg:space-y-20 px-10">
    <div class="w-full max-w-[900px]">
      <h3 class="text-3xl leading-snug lg:text-6xl font-bold text-slate-800">
        {data.Header}
      </h3>
    </div>
    <div class="relative">
      <svelte:component this={Swiper} {data} />
    </div>
  </div>
</Container>

<style>
  swiper-container {
    width: 100%;
    height: 100%;
  }

  swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
