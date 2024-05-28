<script lang="ts">
  import { ArrowTopRightOnSquare, Icon, ArrowRight } from "svelte-hero-icons";
  import { PUBLIC_CMS_URL } from "$env/static/public";
  import MarkdownIt from "markdown-it";
  import DOMPurify from "dompurify";
  import { writable, type Writable } from "svelte/store";
  import { browser } from "$app/environment";

  export let data: any;

  let progress: Writable<number> = writable(0);

  const parseMarkdown = (messages: string) => {
    try {
      const md = new MarkdownIt({
        breaks: true,
        linkify: true,
        typographer: true,
      });

      let rawHtmlContent = md.render(messages);

      // Wrap the content in a div with the class 'assistant-elem'
      const wrapperDiv = document.createElement("div");
      wrapperDiv.className = "space-y-2";
      wrapperDiv.innerHTML = rawHtmlContent;

      const headings = wrapperDiv.querySelectorAll("h1, h2, h3, h4, h5, h6");
      headings.forEach(
        (elem) => (elem.className = "font-semibold text-xl pt-4")
      );

      // Select all <ul> and <ol> elements
      wrapperDiv.querySelectorAll("ul, ol").forEach((list) => {
        // Add Tailwind classes to <ul> and <ol>
        list.classList.add("px-4", "bg-transparent", "rounded-xl");

        // Select all <li> elements within these lists
        list.querySelectorAll("li").forEach((listItem) => {
          // Add Tailwind classes to <li>
          listItem.classList.add("pl-0", "pt-2", "list-disc");

          // Select nested <ul> elements within <li>
          listItem.querySelectorAll("ul").forEach((nestedList) => {
            // Add Tailwind classes to nested <ul>
            nestedList.classList.add("mt-0", "px-0");
          });
        });
      });

      // Serialize back to HTML
      rawHtmlContent = wrapperDiv.outerHTML;

      return DOMPurify.sanitize(rawHtmlContent);
    } catch (error) {
      console.error("parseMarkdown: ", error);
    }
  };

  const handleProgress = (_progress: string) => {
    try {
      const lowerCasedProgress = _progress.toLowerCase();

      switch (lowerCasedProgress) {
        case "labb":
          progress.set(25);
          break;
        case "konceptualiserad/prototyp":
          progress.set(50);
          break;
        case "skalas upp":
          progress.set(75);
          break;
        case "realiserad":
          progress.set(100);
          break;
      }
    } catch (error) {
      console.error(error);
      progress.set(0);
    }
  };

  $: data && handleProgress(data.Progress);
</script>

<!-- Parse markdown does not work without checking if client document is loaded properly, since we're accidentally creating a dom before the document is loaded. -->
{#if browser}
  <div class="w-full bg-[#F9FAFB]">
    <div class="w-full bg-[#eeeeee] py-32 rounded-t-[50px]">
      <div class="max-w-[1280px] w-full m-auto py-18 space-y-14">
        <div
          class="w-full max-w-[1366px] px-10 m-auto flex flex-col items-center space-y-10"
        >
          <div class="text-center">
            <span class="font-bold text-[#DF683B] text-lg"
              >{data.SubHeader}</span
            >
            <h6
              class="font-bold text-5xl text-[#4A2477] leading-snug text-center mb-8"
            >
              {data.MainHeader}
            </h6>
            <div class="text-center space-y-2">
              <span class="font-bold text-black">{data.Progress}</span>
              <div class="w-[570px] h-3 bg-[#DFE4EA] rounded-full">
                <div
                  style="width: {$progress}%;"
                  class="bg-[#DF683B] h-full rounded-full"
                ></div>
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
          {#if data.CTA && data.CTA[0]}
            <a
              href={data.CTA[0].url}
              class="flex items-center justify-center transition hover:opacity-50 text-lg"
            >
              {data.CTA[0].text}
              <Icon src={ArrowTopRightOnSquare} class="w-6 h-6 inline ml-2" />
            </a>
            <a
              href={data.CTA[1].url}
              class="flex items-center justify-center transition hover:opacity-50 text-lg"
            >
              {data.CTA[1].text}
              <Icon src={ArrowRight} class="w-6 h-6 inline ml-2" />
            </a>
          {/if}
        </div>
        <div class="grid grid-cols-2 gap-14 w-full max-w-[1080px] m-auto">
          {#if data.RRT}
            {#each data.RRT as text}
              {@html parseMarkdown(text.Content)}
            {/each}
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}
