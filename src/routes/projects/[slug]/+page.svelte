<script lang="ts">
  import { PUBLIC_CMS_URL } from "$env/static/public";
  import { parseMarkdown } from "$lib/utils/helperFunctions";
  import Container from "$lib/components/shared/Container.svelte";
  import { ArrowRight, ArrowTopRightOnSquare, Icon } from "svelte-hero-icons";
  import linkedin from "$lib/images/linkedin.svg";
  import facebook from "$lib/images/facebook.svg";
  import x from "$lib/images/x.svg";
  import youtube from "$lib/images/youtube.svg";
  import { browser } from "$app/environment";
  import type { ProjectData } from "$lib/interfaces";

  export let data: ProjectData;

  $: ({ project } = data);
  $: ({ attributes } = project);

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
</script>

{#if browser}
  <Container paddingTop="0">
    <div class="space-y-12">
      <div
        class="h-screen overflow-hidden flex lg:items-center lg:justify-center relative"
      >
        <img
          src={PUBLIC_CMS_URL + attributes.Banner.data[0].attributes.url}
          class="w-full h-full object-cover absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
          alt="Bild som representerar {attributes.MainHeader}"
        />
        <div
          class="w-full h-24 rounded-t-[50px] absolute -bottom-1 bg-white flex items-center"
        >
          <div
            class="w-full max-w-[1362px] m-auto flex flex-row items-center justify-center lg:justify-between"
          >
            <div
              class="flex flex-row items-center justify-center lg:justify-start space-x-6 w-full px-10"
            >
              <a href="/" class="hover:underline">Start</a>
              <div><Icon src={ArrowRight} class="w-4 h-4" /></div>
              <a href="/projects" class="hover:underline">Projekt</a>
              <div><Icon src={ArrowRight} class="w-4 h-4" /></div>
              <div class="font-medium text-secondary-purple-100 truncate">
                {attributes.MainHeader}
              </div>
            </div>

            <div
              class="lg:flex lg:flex-row items-center space-x-3 hidden lg:visible"
            >
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
      <div class="max-w-[1362px] w-full m-auto lg:space-y-24">
        <div
          class="w-full max-w-[1366px] px-10 m-auto flex flex-col items-center space-y-10"
        >
          <div class="text-center w-full">
            {#if attributes.SubHeader}
              <span
                class="font-bold text-secondary-purple-100 text-lg hyphens-auto"
                lang="sv">{attributes.SubHeader}</span
              >
            {/if}
            <h6
              class="font-bold text-4xl lg:text-5xl text-slate-800 leading-snug text-center mb-8 hyphens-auto"
              lang="sv"
            >
              {attributes.MainHeader}
            </h6>

            {#if attributes.Horisont}
              <div class="text-center space-y-2">
                <span class="font-bold text-gray-800"
                  >{attributes.Progress}</span
                >
                <div
                  class="w-full lg:w-[570px] m-auto h-3 bg-default-gray-100 rounded-full"
                >
                  <div
                    style="width: {handleProgress(attributes.Progress)}%;"
                    class=" bg-secondary-purple-100 h-full rounded-full"
                  ></div>
                </div>
              </div>
            {/if}
          </div>
        </div>

        <div
          class="w-full max-w-[1114px] m-auto flex flex-col lg:flex-row lg:space-x-16"
        >
          <div
            class="w-full max-w-[680px] space-y-6 order-2 lg:order-1 px-10 lg:px-0"
          >
            {#each attributes.RepeatableRichText as { Content }}
              {@html parseMarkdown(Content)}
            {/each}
          </div>
          <div
            class="lg:grow lg:space-y-12 order-1 lg:order-2 flex justify-center lg:block px-6 lg:px-0 my-10 lg:my-0 space-x-8 lg:space-x-0"
          >
            {#if attributes.CTACard.length > 0}
              {#each attributes.CTACard as CTACard}
                <div
                  class="w-[370px] h-[264px] rounded-xl border border-gray-300 flex flex-col items-center justify-center relative p-4"
                >
                  <h6
                    class="font-medium text-xl lg:text-2xl mb-2 text-slate-800 text-center"
                  >
                    {CTACard.header}
                  </h6>
                  <p
                    class="text-center mb-8 text-flex justify-betweew gray-500 hidden lg:visible"
                  >
                    {CTACard.description}
                  </p>
                  <a
                    href={CTACard.url}
                    class="text-center flex items-center rounded-full bg-secondary-purple-100 py-2 lg:py-3 px-4 lg:px-8 text-white hover:bg-secondary-purple-100/75 transition-all text-sm lg:text-base mt-2 lg:mt-0"
                    target={CTACard.external ? "_blank" : ""}
                    >{CTACard.buttonText}
                    <Icon
                      src={ArrowTopRightOnSquare}
                      class="w-6 h-6 inline ml-2"
                    /></a
                  >
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
                    attributes.Horisont
                  )}"
                >
                  {attributes.Horisont.split(" ")[1]}
                </div>
                <h6 class="font-medium text-xl lg:text-2xl">
                  {attributes.Horisont}
                </h6>
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
{/if}
