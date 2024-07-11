<script lang="ts">
  import { onMount } from "svelte";
  import Container from "../shared/Container.svelte";

  export let data;

  let Swiper: any;

  onMount(async () => {
    const module = await import("./Swiper.svelte");
    Swiper = module.default;
  });
</script>

<Container backgroundColor="bg-[#eeeeee]" rounded={false}>
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
  html,
  body {
    position: relative;
    height: 100%;
  }

  body {
    background: #eee;
    font-family:
      Helvetica Neue,
      Helvetica,
      Arial,
      sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
  }

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
