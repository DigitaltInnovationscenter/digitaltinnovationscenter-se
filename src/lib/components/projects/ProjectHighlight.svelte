<script lang="ts">
  import { ArrowTopRightOnSquare, Icon, ArrowRight } from "svelte-hero-icons";
  import { PUBLIC_CMS_URL } from "$env/static/public";

  export let data: any;
</script>

<div class="w-full bg-[#F9FAFB]">
  <div class="w-full bg-[#eeeeee] py-32 rounded-t-[50px]">
    <div class="max-w-[1280px] w-full m-auto py-18 space-y-14">
      <div
        class="w-full max-w-[1366px] px-10 m-auto flex flex-col items-center space-y-10"
      >
        <div class="text-center">
          <span class="font-bold text-[#DF683B] text-lg">{data.SubHeader}</span>
          <h6
            class="font-bold text-5xl text-[#4A2477] leading-snug text-center mb-8"
          >
            {data.MainHeader}
          </h6>
          <div class="text-center space-y-2">
            <span class="font-bold text-black">{data.Progress}</span>
            <div class="w-[570px] h-3 bg-[#DFE4EA] rounded-full">
              <div class="w-[100%] bg-[#DF683B] h-full rounded-full"></div>
            </div>
          </div>
        </div>
        <div>
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img
            src={PUBLIC_CMS_URL + data.Banner.data[0].attributes.url}
            class="w-full max-w-[1000px] rounded-xl"
            alt="image"
          />
        </div>
      </div>

      <div
        class="w-full text-center text-[#DF683B] flex flex-row items-center justify-center space-x-8"
      >
        <a
          href="/"
          class="flex items-center justify-center transition hover:opacity-50 text-lg"
        >
          Besök prototypen <Icon
            src={ArrowTopRightOnSquare}
            class="w-6 h-6 inline ml-2"
          />
        </a>
        <a
          href="/"
          class="flex items-center justify-center transition hover:opacity-50 text-lg"
        >
          Läs mer om projektet <Icon
            src={ArrowRight}
            class="w-6 h-6 inline ml-2"
          />
        </a>
      </div>
      <div class="grid grid-cols-2 gap-14 w-full max-w-[1080px] m-auto">
        <div class="space-y-8">
          <!-- data.RRT -->
          <div class="space-y-4">
            <h4 class="font-semibold text-xl">Vad?</h4>
            <p class="text-lg text-gray-500">
              Experiment 2033 var en utställning som utforskade hur framtidens
              arbetsförmedling kan se ut. Vi använde metoden spekulativ design
              för att utforska och skapa en önskvärd framtid för den svenska
              arbetsmarknaden. Vi involverade en bred grupp av aktörer,
              inklusive experter, anställda på Arbetsförmedlingen och externa
              partners, för att ta fram en gemensam vision och ett narrativ för
              framtiden. Vi skapade sedan en fysisk upplevelse som illustrerade
              denna framtid och inspirerade till handling.
            </p>
          </div>
          <div class="space-y-4">
            <h4 class="font-semibold text-xl">Varför?</h4>
            <ul class=" text-gray-500 list-disc pl-5">
              <li>
                Utforska hur framsyn och spekulativ design kan användas för att
                planera för det okända.
              </li>
              <li>
                Undersöka hur AI kan användas för att förbättra
                arbetsförmedlingens tjänster.
              </li>
              <li>
                Skapa en dialog om framtidens arbetsmarknad och de utmaningar vi
                står inför.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div class="space-y-4">
            <h4 class="font-semibold text-xl">Hur?</h4>
            <p class="text-lg text-gray-500">
              Vi använde en process som kallas spekulativ design, den involverar
              följande:
            </p>
            <ul class=" text-gray-500 list-disc pl-5">
              <li>
                <b>Omvärldsbevakning:</b> Vi lyssnade på svaga och starka signaler
                från olika perspektiv och sektorer i samhället för att identifiera
                trender och utmaningar.
              </li>
              <li>
                <b>Scenarioplanering:</b> Vi skapade scenarier som beskrev hur olika
                framtida trender kan påverka den svenska arbetsmarknaden.
              </li>
              <li>
                <b>Framtidsprototyp:</b> Vi valde ut och skrev ett scenario av en
                önskvärd framtid. Vi skapade en utställning som illustrerade scenariot
                och inkluderade besökarna i dialogen.
              </li>
            </ul>
            <p class="text-lg text-gray-500">
              Vi involverade en bred grupp av aktörer i denna process, inklusive
              experter, anställda på Arbetsförmedlingen och externa partners.
              Det gjorde vi för att få in flera relevanta perspektiv i våra
              scenarion.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
