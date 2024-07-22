<script lang="ts">
  import { ArrowTopRightOnSquare, Icon, ArrowRight } from "svelte-hero-icons";
  import { PUBLIC_CMS_URL } from "$env/static/public";
  import { writable, type Writable } from "svelte/store";
  import { browser } from "$app/environment";
  import { parseMarkdown } from "$lib/utils/helperFunctions";
  import type { ProjectHighlightData } from "$lib/interfaces";

  export let data: ProjectHighlightData[] | ProjectHighlightData;
  let projectId: string;
  let project: ProjectHighlightData["attributes"];

  if (Array.isArray(data)) {
    projectId = data[0].id;
    project = data[0].attributes;
  } else {
    projectId = data.id;
    project = data.attributes;
  }

  let progress: Writable<number> = writable(0);

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

  $: data && handleProgress(project.Progress);
</script>

<!-- Parse markdown does not work without checking if client document is loaded properly, since we're accidentally creating a dom before the document is loaded. -->
<div class="w-full bg-primary-gray-100]">
  <div class="w-full bg-default-gray-100 py-32 rounded-t-[50px]">
    <div class="max-w-[1362px] w-full m-auto py-18 space-y-14">
      <div
        class="w-full max-w-[1366px] px-10 m-auto flex flex-col items-center space-y-10"
      >
        <div class="text-center">
          <span class="font-bold text-secondary-purple-100 text-lg"
            >{project.SubHeader}</span
          >
          <a
            href={`/projects/${projectId}/`}
            class="font-bold text-5xl text-slate-800 leading-snug text-center mb-8 block hover:underline transition-all"
          >
            {project.MainHeader}
          </a>
          <div class="text-center space-y-2">
            <span class="font-bold text-gray-800">{project.Progress}</span>
            <div class="w-[570px] h-3 bg-misc-colors-progress-bg rounded-full">
              <div
                style="width: {$progress}%;"
                class="bg-secondary-purple-100 h-full rounded-full"
              ></div>
            </div>
          </div>
        </div>
        <div>
          <img
            src={PUBLIC_CMS_URL + project.Banner.data[0].attributes.url}
            class="w-full max-w-[1000px] rounded-xl"
            alt="Bild som representerar {project.MainHeader}"
          />
        </div>
      </div>

      <div
        class="w-full text-center text-secondary-purple-100 flex flex-row items-center justify-center space-x-8"
      >
        {#if project.CTA && project.CTA[0]}
          <a
            href={project.CTA[0].url}
            class="flex items-center justify-center transition hover:opacity-50 text-lg"
          >
            {project.CTA[0].text}
            <Icon
              src={project.CTA[0].external ? ArrowTopRightOnSquare : ArrowRight}
              class="w-6 h-6 inline ml-2"
            />
          </a>
          <a
            href={project.CTA[1].url}
            class="flex items-center justify-center transition hover:opacity-50 text-lg"
          >
            {project.CTA[1].text}
            <Icon
              src={project.CTA[1].external ? ArrowTopRightOnSquare : ArrowRight}
              class="w-6 h-6 inline ml-2"
            />
          </a>
        {/if}
      </div>
      <div class="grid grid-cols-2 gap-14 w-full max-w-[1080px] m-auto">
        {#if project.RepeatableRichText && browser}
          {#each project.RepeatableRichText as text}
            {@html parseMarkdown(text.Content)}
          {/each}
        {/if}
      </div>
    </div>
  </div>
</div>
