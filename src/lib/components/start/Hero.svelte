<script lang="ts">
  import { Icon, ArrowRight, ArrowUp } from "svelte-hero-icons";
</script>

<div
  class="h-full max-h-[800px] bg-slate-800 w-full gradient-animation relative"
>
  <div class="h-full w-full flex items-center pb-24 absolute top-0 left-0 z-50">
    <div
      class="w-full max-w-[1366px] px-10 m-auto flex flex-col items-start space-y-8"
    >
      <h6 class="font-bold text-7xl text-white pr-64 leading-snug font-serif">
        Vi jobbar utforskande med innovation för att forma framtidens lösningar.
      </h6>
      <a
        href="/about"
        class="left py-3 px-8 bg-white rounded-full text-[#9B4AFF] flex flex-row items-center"
        >Läs mer om hur vi jobbar
        <span class="rotate-90 ml-4">
          <Icon src={ArrowUp} class="w-6 animate-bounce" />
        </span>
      </a>
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
    class="w-full h-24 rounded-t-[50px] absolute bottom-0 bg-[#eeeeee]"
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
