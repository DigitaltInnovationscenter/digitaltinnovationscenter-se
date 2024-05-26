<script lang="ts">
  import img from "$lib/images/0_3 34.png";
  import { onMount } from "svelte";

  const projects = [
    {
      header: "Experiment 2033",
      content:
        "En utställning där mening möter AI i ett experiment skapat med spekulativ design.",
      img: img,
    },
    {
      header: "Experiment 2033",
      content:
        "En utställning där mening möter AI i ett experiment skapat med spekulativ design.",
      img: img,
    },
    {
      header: "Experiment 2033",
      content:
        "En utställning där mening möter AI i ett experiment skapat med spekulativ design.",
      img: img,
    },
    {
      header: "Experiment 2033",
      content:
        "En utställning där mening möter AI i ett experiment skapat med spekulativ design.",
      img: img,
    },
  ];

  let Swiper: any;
  onMount(async () => {
    const module = await import("./Swiper.svelte");
    Swiper = module.default;
  });
</script>

<div class="w-full bg-white">
  <div class="w-full bg-[#eeeeee]">
    <div class="max-w-[1280px] w-full m-auto py-24 space-y-20">
      <div class="w-full max-w-[900px]">
        <h3 class="text-6xl font-bold text-slate-800">
          Vår output är till för att kunskapshöja på myndigheten.
        </h3>
      </div>
      <div class="relative">
        <svelte:component this={Swiper} {projects} />
      </div>
    </div>
  </div>
</div>

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
