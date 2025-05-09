<script lang="ts">
  import bulbTopLeft from "$lib/images/bulbTopLeft.svg";
  import bulbTopRight from "$lib/images/bulbTopRight.svg";
  import bulbBottomLeft from "$lib/images/bulbBottomLeft.svg";
  import bulbBottomRight from "$lib/images/bulbBottomRight.svg";
  import bulbBottom from "$lib/images/bulbBottom.svg";
  import logotypeSvg from "$lib/images/af-logotype.svg";
  import Container from "../shared/Container.svelte";
  import Hero from "../shared/Hero.svelte";
  import logo from "$lib/images/innovationscenter-logo-small.svg";

  let bulbSection: null | string = null;

  let horizonContent = [
    {
      hex: "#2F2FEA",
      header: "Horisont 0",
      subHeader: "Verksamhetsförvaltning",
      text: "Upprätthålla tjänster och se till att allt fungerar. Vi rättar fel genom att behandla symptom och inte orsaken.",
      relevant: false,
    },
    {
      hex: "#C6E4AA",
      header: "Horisont 1",
      subHeader: "Välkänd",
      text: "Löser användarnas direkta och tydliga behov genom att justera och utveckla befintliga tjänster. Fokus ligger på att uppnå våra kundlöften och utföra vårt regeringsuppdrag.",
      relevant: false,
    },
    {
      hex: "#060693",
      header: "Horisont 2",
      subHeader: "Ny för oss",
      text: "Angriper redan kända ellernya problem på nya sätt. Det kan handla om att automatisera, skapa möjligheter, använda ny teknik eller på annat sätt kraftigt öka värde eller riva hinder.",
      relevant: true,
    },
    {
      hex: "#7EC13D",
      header: "Horisont 3",
      subHeader: 'Ny på "marknaden"',
      text: "Ta sig an utmaningar som inte kan lösas genom att optimera eller förbättra. Genom att utforska, experimentera och testa kan man visa på möjligheter och inspirera.",
      relevant: true,
    },
  ];
</script>

<Container backgroundColor="bg-default-gray-100" foreGroundColor="bg-white">
  <div class="max-w-[1362px] m-auto space-y-20 flex flex-col" id="horizon">
    <div>
      <Hero
        suffix="*"
        bgColor="bg-white"
        heroData={{
          SubHeader: "Vår innovationsmodell",
          MainHeader: "Hur Arbetsförmedlingen jobbar med innovation",
          Description:
            "Arbetsförmedlingen har tagit fram en modell för att visualisera hur man kan jobba med innovation på olika nivåer. Man kan både utveckla våra nuvarande arbetssätt och tjänster, samtidigt som man kan skapa nytt. Innovationscenter jobbar främst i horisont 2 och 3.",
        }}
      />
    </div>
    <div class="hidden xl:grid xl:grid-cols-6 xl:gap-2">
      <div class="grid grid-rows-2 grid-flow-col gap-48">
        <div
          role="contentinfo"
          class="space-y-3 transition-all duration-300 {bulbSection ===
            'topLeft' || !bulbSection
            ? ''
            : 'opacity-25'}"
          on:mouseenter={() => (bulbSection = "topLeft")}
          on:mouseleave={() => {
            if (bulbSection === "topLeft") {
              bulbSection = null;
            }
          }}
        >
          <h3
            class="text-3xl text-center flex flex-row items-center justify-center"
          >
            Horisont <span
              class="bg-horizon-primary-blue text-white w-12 h-12 flex items-center justify-center ml-3 text-3xl rounded-full font-semibold"
              >0</span
            >
          </h3>
          <p class="text-center text-sm text-gray-500">
            Upprätthålla tjänster och se till att allt fungerar. Vi rättar fel
            genom att behandla symptom och inte orsaken.
          </p>
        </div>
        <div
          role="contentinfo"
          class="space-y-3 transition-all duration-300 {bulbSection ===
            'bottomLeft' || !bulbSection
            ? ''
            : 'opacity-25'}"
          on:mouseenter={() => (bulbSection = "bottomLeft")}
          on:mouseleave={() => {
            if (bulbSection === "bottomLeft") {
              bulbSection = null;
            }
          }}
        >
          <h3
            class="text-3xl text-center flex flex-row items-center justify-center"
          >
            Horisont <span
              class="bg-horizon-primary-green text-white w-12 h-12 flex items-center justify-center ml-3 text-3xl rounded-full font-semibold"
              >3<span class="relative"
                ><span
                  class="absolute -top-11 -right-8 text-6xl text-horizon-purple"
                  >*</span
                ></span
              ></span
            >
          </h3>
          <p class="text-center text-sm text-gray-500">
            Ta sig an utmaningar som inte kan lösas genom att optimera eller
            förbättra. Genom att utforska, experimentera och testa kan man visa
            på möjligheter och inspirera.
          </p>
        </div>
      </div>
      <div class="grid grid-rows-2 grid-flow-col gap-48">
        <div
          role="contentinfo"
          class="transition-all duration-300 {bulbSection === 'topLeft' ||
          !bulbSection
            ? ''
            : 'opacity-25'}"
          on:mouseenter={() => (bulbSection = "topLeft")}
          on:mouseleave={() => {
            if (bulbSection === "topLeft") {
              bulbSection = null;
            }
          }}
        >
          <h3
            class="text-2xl text-horizon-secondary-green font-extralight italic top-6 -left-2 text-center block w-full border-dotted border-b-2 pb-2 border-gray-300 relative"
          >
            Verksamhets-<br />förvaltning

            <span
              class="-bottom-[48px] -right-[25px] absolute block h-14 -rotate-[48deg] border-l-2 border-gray-300 border-dotted w-1 z-1"
            ></span>
          </h3>
        </div>
        <div
          role="contentinfo"
          class="transition-all duration-300 {bulbSection === 'bottomLeft' ||
          !bulbSection
            ? ''
            : 'opacity-25'}"
          on:mouseenter={() => (bulbSection = "bottomLeft")}
          on:mouseleave={() => {
            if (bulbSection === "bottomLeft") {
              bulbSection = null;
            }
          }}
        >
          <h3
            class="text-2xl text-horizon-secondary-green font-extralight italic top-12 -left-2 text-center block w-full border-dotted border-b-2 pb-2 border-gray-300 relative"
          >
            Ny för <br />"marknaden"
            <span
              class="-top-[64px] -right-[35px] absolute block h-36 rotate-[24deg] border-l-2 border-gray-300 border-dotted w-1 z-1"
            ></span>
          </h3>
        </div>
      </div>
      <div
        class="col-span-2 grid grid-rows-1 grid-flow-col relative items-center justify-center"
      >
        <div class="grid grid-cols-2 relative top-8 z-50">
          <div
            class="absolute left-1/2 transform -translate-x-1/2 top-[27%] -translate-y-1/2 z-50 pointer-events-none"
          >
            <h3 class="text-center text-[22px]">
              <img src={logotypeSvg} alt="img" class="w-24 m-auto" />
              <span class="text-gray-600">Innovation på</span> <br />
              <span class="font-bold text-horizon-secondary-blue"
                >Arbetsförmedlingen</span
              >
            </h3>
          </div>
          <div
            role="contentinfo"
            class="flex items-end justify-end relative transition-all duration-300 {bulbSection ===
              'topLeft' || !bulbSection
              ? ''
              : 'opacity-25'}"
            on:mouseenter={() => (bulbSection = "topLeft")}
            on:mouseleave={() => {
              if (bulbSection === "topLeft") {
                bulbSection = null;
              }
            }}
          >
            <img
              src={bulbTopLeft}
              class="w-full pointer-events-none"
              alt="bulb"
            />
            <span class="absolute left-[16.5%] top-[45%] flex h-4 w-4">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-50 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-4 w-4 bg-neutral-50"
              ></span>
            </span>
          </div>
          <div
            role="contentinfo"
            class="relative transition-all duration-300 {bulbSection ===
              'topRight' || !bulbSection
              ? ''
              : 'opacity-25'}"
            on:mouseenter={() => (bulbSection = "topRight")}
            on:mouseleave={() => {
              if (bulbSection === "topRight") {
                bulbSection = null;
              }
            }}
          >
            <img
              src={bulbTopRight}
              class="w-full pointer-events-none"
              alt="bulb"
            />
            <span class="absolute right-[16.5%] top-[45%] flex h-4 w-4">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-50 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-4 w-4 bg-neutral-50"
              ></span>
            </span>
          </div>
          <div
            role="contentinfo"
            class="relative -top-2 transition-all duration-300 {bulbSection ===
              'bottomLeft' || !bulbSection
              ? ''
              : 'opacity-25'}"
            on:mouseenter={() => (bulbSection = "bottomLeft")}
            on:mouseleave={() => {
              if (bulbSection === "bottomLeft") {
                bulbSection = null;
              }
            }}
          >
            <img
              src={bulbBottomLeft}
              class="w-full pointer-events-none"
              alt="bulb"
            />
            <span class="absolute left-[30%] bottom-[50%] flex h-4 w-4">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-50 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-4 w-4 bg-neutral-50"
              ></span>
            </span>
          </div>
          <div
            role="contentinfo"
            class="relative -top-[12px] transition-all duration-300 {bulbSection ===
              'bottomRight' || !bulbSection
              ? ''
              : 'opacity-25'}"
            on:mouseenter={() => (bulbSection = "bottomRight")}
            on:mouseleave={() => {
              if (bulbSection === "bottomRight") {
                bulbSection = null;
              }
            }}
          >
            <img src={bulbBottomRight} class="w-full" alt="bulb" />
            <span class="absolute right-[30%] bottom-[50%] flex h-4 w-4">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-50 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-4 w-4 bg-neutral-50"
              ></span>
            </span>
          </div>
          <div class="col-span-2 pt-2">
            <img src={bulbBottom} class="w-[58%] m-auto" alt="bulb" />
          </div>
        </div>
      </div>
      <div class="grid grid-rows-2 grid-flow-col gap-48">
        <div
          role="contentinfo"
          class="transition-all duration-300 {bulbSection === 'topRight' ||
          !bulbSection
            ? ''
            : 'opacity-25'}"
          on:mouseenter={() => (bulbSection = "topRight")}
          on:mouseleave={() => {
            if (bulbSection === "topRight") {
              bulbSection = null;
            }
          }}
        >
          <h3
            class="text-2xl text-horizon-secondary-green font-extralight italic relative top-12 -left-6 text-center block w-full border-dotted border-b-2 pb-2 border-gray-300"
          >
            Välkänd
            <span
              class="top-[37px] -left-[17px] absolute block h-14 rotate-[30deg] border-l-2 border-gray-300 border-dotted w-1 z-1"
            ></span>
          </h3>
        </div>
        <div
          role="contentinfo"
          class="relative transition-all duration-300 {bulbSection ===
            'bottomRight' || !bulbSection
            ? ''
            : 'opacity-25'}"
          on:mouseenter={() => (bulbSection = "bottomRight")}
          on:mouseleave={() => {
            if (bulbSection === "bottomRight") {
              bulbSection = null;
            }
          }}
        >
          <h3
            class="text-2xl text-horizon-secondary-green font-extralight italic relative top-12 -left-6 text-center block w-full border-dotted border-b-2 pb-2 border-gray-300"
          >
            Ny för oss
            <span
              class="-bottom-[6px] -left-[27px] absolute block h-28 -rotate-[24deg] border-l-2 border-gray-300 border-dotted w-1 z-1"
            ></span>
          </h3>
        </div>
      </div>
      <div class="grid grid-rows-2 grid-flow-col gap-48">
        <div
          role="contentinfo"
          class="space-y-3 grow transition-all duration-300 {bulbSection ===
            'topRight' || !bulbSection
            ? ''
            : 'opacity-25'}"
          on:mouseenter={() => (bulbSection = "topRight")}
          on:mouseleave={() => {
            if (bulbSection === "topRight") {
              bulbSection = null;
            }
          }}
        >
          <h3
            class="text-3xl text-center flex flex-row items-center justify-center"
          >
            Horisont <span
              class="bg-horizon-alternative-green text-white w-12 h-12 items-center justify-center ml-3 text-3xl rounded-full flex font-semibold"
              >1</span
            >
          </h3>
          <p class="text-center text-sm text-gray-500">
            Löser användarnas direkta och tydliga behov genom att justera och
            utveckla befintliga tjänster. Fokus ligger på att uppnå våra
            kundlöften och utföra vårt regeringsuppdrag.
          </p>
        </div>

        <div
          role="contentinfo"
          class="space-y-3 grow transition-all duration-300 {bulbSection ===
            'bottomRight' || !bulbSection
            ? ''
            : 'opacity-25'}"
          on:mouseenter={() => (bulbSection = "bottomRight")}
          on:mouseleave={() => {
            if (bulbSection === "bottomRight") {
              bulbSection = null;
            }
          }}
        >
          <h3
            class="text-3xl text-center flex flex-row items-center justify-center"
          >
            Horisont <span
              class="bg-horizon-secondary-blue text-white w-12 h-12 flex items-center justify-center ml-3 text-3xl rounded-full font-semibold"
              >2<span class="relative"
                ><span
                  class="absolute -top-11 -right-8 text-6xl text-horizon-purple"
                  >*</span
                ></span
              ></span
            >
          </h3>
          <p class="text-center text-sm text-gray-500">
            Angriper redan kända eller nya problem på nya sätt. Det kan handla
            om att automatisera, skapa möjligheter, använda ny teknik eller på
            annat sätt kraftigt öka värde eller riva hinder.
          </p>
        </div>
      </div>
      <div
        class="col-span-6 pt-12 text-center text-lg w-[400px] m-auto space-y-4"
      >
        <div>
          <span class="text-horizon-primary-green">*</span><span
            class="text-gray-500 font-light"
            >Värdeskapande utveckling för att framtidssäkra och problemlösa
            effektivt och långsiktigt</span
          >
        </div>
        <div>
          <span class="text-horizon-purple">*</span><span
            class="text-gray-500 font-light"
            >Vi jobbar i den här horisonten.</span
          >
        </div>
      </div>
    </div>
    <div class="xl:hidden">
      <div
        class="flex overflow-x-auto sm:overflow-hidden sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pb-12 sm:pb-0 px-10"
      >
        {#each horizonContent as item}
          <div
            class="flex flex-col min-w-[340px] max-w-[400px] rounded-xl overflow-hidden shadow-md mb-4 pb-6"
          >
            <div
              style="background-color: {item.hex};"
              class="p-4 bg-[{item.hex}] text-white"
            >
              {item.header}
            </div>
            <div class="p-4 space-y-6">
              <div class="font-semibold my-4 text-lg">
                {item.subHeader}
              </div>
              <div class="font-light text-gray-500">{item.text}</div>
              <div class="flex flex-row items-center">
                {#if item.relevant}
                  <img src={logo} alt="logotype" class="w-11 mr-3" />
                  <div class="font-bold leading-4">
                    Vi jobbar i den <br /> här horisonten!
                  </div>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
      <div class="mt-6 block text-gray-500 px-10">
        <div>
          <span class="text-horizon-primary-green">*</span>Värdeskapande
          utveckling för att framtiddssäkra och problemlösa effektivt och
          långsiktigt
        </div>
      </div>
    </div>
  </div>
</Container>
