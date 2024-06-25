<script lang="ts">
  import { PUBLIC_CMS_URL } from "$env/static/public";
  import { formatDate, parseMarkdown } from "$lib/assets/helperFunctions";
  import Container from "$lib/components/shared/Container.svelte";
  import { ArrowRight, Icon } from "svelte-hero-icons";
  import linkedin from "$lib/images/linkedin.svg";
  import facebook from "$lib/images/facebook.svg";
  import x from "$lib/images/x.svg";
  import youtube from "$lib/images/youtube.svg";
  import NewsOverview from "$lib/components/shared/NewsOverview.svelte";
  import { browser } from "$app/environment";
  import { writable, type Writable } from "svelte/store";

  export let data: any;

  let progress: Writable<number> = writable(0);

  $: ({ post, latestPosts } = data);
  $: ({ id, attributes } = post);

  const socialMediaLinks = [
    {
      name: "linkedin",
      img: linkedin,
    },
    {
      name: "x",
      img: x,
    },
    {
      name: "youtube",
      img: youtube,
    },
    {
      name: "facebook",
      img: facebook,
    },
  ];

  const handleProgress = (progress: string) => {
    try {
      const lowerCasedProgress = progress.toLowerCase();

      switch (lowerCasedProgress) {
        case "labb":
          return 25;
        case "konceptualiserad/prototyp":
          return 50;
        case "skalas upp":
          return 75;
        case "realiserad":
          return 100;
      }
    } catch (error) {
      console.error(error);
      return 0;
    }
  };

  const handleHorizonColor = (horizon: string) => {
    try {
      switch (horizon) {
        case "Horisont 0":
          return "#2F2FEA";
        case "Horisont 1":
          return "#C6E4AA";
        case "Horisont 2":
          return "#060693";
        case "Horisont 3":
          return "#7EC13D";
      }
    } catch (error) {
      console.error(error);
    }
  };

  // $: attributes && handleProgress(attributes.Progress);
</script>

{#if browser}
  <Container paddingTop="0">
    <div class="space-y-12">
      <div
        class="h-screen overflow-hidden flex items-center justify-center relative"
      >
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          src={PUBLIC_CMS_URL + attributes.Banner.data[0].attributes.url}
          class="w-full"
          alt="image"
        />
        <div
          class="w-full h-24 rounded-t-[50px] absolute bottom-0 bg-white flex items-center"
        >
          <div
            class="w-full max-w-[1362px] m-auto flex flex-row items-center justify-between"
          >
            <div class="flex flex-row items-center space-x-6">
              <a href="/" class="hover:underline">Start</a>
              <div><Icon src={ArrowRight} class="w-4 h-4" /></div>
              <a href="/projects" class="hover:underline">Projekt</a>
              <div><Icon src={ArrowRight} class="w-4 h-4" /></div>
              <div class="font-medium text-[#9B4AFF]">
                {attributes.MainHeader}
              </div>
            </div>

            <div class="flex flex-row items-center space-x-3">
              <span class="text-gray-500 text-sm">Dela det här projektet</span>
              <ul class="flex flex-row gap-2">
                {#each socialMediaLinks as link}
                  <li><img src={link.img} alt={link.name} class="w-8" /></li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-[1362px] w-full m-auto space-y-24">
        <div
          class="w-full max-w-[1366px] px-10 m-auto flex flex-col items-center space-y-10"
        >
          <div class="text-center">
            {#if attributes.SubHeader}
              <span class="font-bold text-[#9B4AFF] text-lg"
                >{attributes.SubHeader}</span
              >
            {/if}
            <h6
              class="font-bold text-5xl text-slate-800 leading-snug text-center mb-8"
            >
              {attributes.MainHeader}
            </h6>

            {#if attributes.Horisont}
              <div class="text-center space-y-2">
                <span class="font-bold text-black">{attributes.Progress}</span>
                <div class="w-[570px] m-auto h-3 bg-[#DFE4EA] rounded-full">
                  <div
                    style="width: {handleProgress(attributes.Progress)}%;"
                    class="bg-[#9B4AFF] h-full rounded-full"
                  ></div>
                </div>
              </div>
            {/if}
          </div>
        </div>

        <div class="w-full max-w-[1114px] m-auto flex flex-row space-x-16">
          <div class="w-full max-w-[680px] space-y-6">
            {#each attributes.RepeatableRichText as { Content }}
              {@html parseMarkdown(Content)}
            {/each}
          </div>
          <div class="grow space-y-12">
            {#if attributes.CTACard.length > 0}
              {#each attributes.CTACard as CTACard}
                <div
                  class="w-[370px] h-[264px] rounded-xl border border-gray-300 flex flex-col items-center justify-center relative"
                >
                  <h6 class="font-medium text-2xl mb-2">{CTACard.header}</h6>
                  <p class="text-center mb-8 text-gray-500">
                    {CTACard.description}
                  </p>
                  <a
                    href={CTACard.url}
                    class="text-center rounded-full bg-[#9B4AFF] py-3 px-8 text-white hover:bg-[#9B4AFF]/75 transition-all"
                    target={CTACard.external ? "_blank" : ""}
                    >{CTACard.buttonText}</a
                  >
                  <!-- {JSON.stringify(attributes.CTACard)} -->
                </div>
              {/each}
            {/if}
            {#if attributes.Horisont}
              <div
                class="w-[370px] h-[264px] rounded-xl border border-gray-300 flex flex-col items-center justify-center relative"
              >
                <div
                  class="rounded-full aspect-square mb-3 flex items-center justify-center text-white text-4xl p-2"
                  style="background-color: {handleHorizonColor(
                    attributes.Horisont,
                  )}"
                >
                  {attributes.Horisont.split(" ")[1]}
                </div>
                <h6 class="font-medium text-2xl">{attributes.Horisont}</h6>
                <a
                  href="/about#horizon"
                  class="absolute bottom-4 right-6 text-gray-400 text-sm underline hover:no-underline flex flex-row items-center font-thin underline-offset-4"
                  >Läs mer <Icon src={ArrowRight} class="w-4 ml-2" />
                </a>
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </Container>
{/if}}
