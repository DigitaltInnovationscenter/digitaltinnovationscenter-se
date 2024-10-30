<script lang="ts">
  import { PUBLIC_CMS_URL } from "$env/static/public";
  import { writable, type Writable } from "svelte/store";
  import { browser } from "$app/environment";
  import { parseMarkdown } from "$lib/utils/helperFunctions";
  import type { ProjectHighlightData } from "$lib/interfaces";
  import Cta from "./CTA.svelte";

  export let projectData: ProjectHighlightData[] | ProjectHighlightData;
  let projectId: string;
  let project: ProjectHighlightData;

  if (Array.isArray(projectData)) {
    projectId = projectData[0].documentId;
    project = projectData[0];
  } else {
    projectId = projectData.documentId;
    project = projectData;
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

  $: projectData && handleProgress(project.Progress);
</script>

<!-- Parse markdown does not work without checking if client document is loaded properly, since we're accidentally creating a dom before the document is loaded. -->
<div class="w-full bg-primary-gray-100]">
  <div class="w-full bg-default-gray-100 py-32 rounded-t-[50px]">
    <div class="max-w-[1362px] w-full m-auto py-18 space-y-14">
      <div
        class="w-full max-w-[1366px] px-10 m-auto flex flex-col items-start lg:items-center space-y-10"
      >
        <div class="text-left lg:text-center w-full">
          <span class="font-bold text-secondary-purple-100 text-lg"
            >{project.SubHeader}</span
          >
          <a
            href={`/projects/${project.slug ?? projectId}/`}
            class="font-bold text-4xl lg:text-5xl text-slate-800 leading-snug mb-8 block hover:underline transition-all hyphens-auto"
            lang="sv"
          >
            {project.MainHeader}
          </a>
          <div class="text-left lg:text-center space-y-2 w-full">
            <span class="font-bold text-gray-800">{project.Progress}</span>
            <div
              class="w-full max-w-[470px] lg:m-auto h-3 bg-misc-colors-progress-bg rounded-full"
            >
              <div
                style="width: {$progress}%;"
                class="bg-secondary-purple-100 h-full rounded-full"
              ></div>
            </div>
          </div>
        </div>
        <div>
          <img
            src={PUBLIC_CMS_URL + project.Banner[0].url}
            class="w-full max-w-[1000px] rounded-xl"
            alt="Bild som representerar {project.MainHeader}"
          />
        </div>
      </div>

      <div
        class="px-10 w-full text-left lg:text-center text-secondary-purple-100 flex flex-col lg:flex-row items-start lg:items-center justify-center space-y-2 lg:space-x-8 lg:space-y-0"
      >
        <Cta ctas={project.CTA} />
      </div>
      <div
        class="px-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 w-full max-w-[1080px] m-auto"
      >
        {#if project.RepeatableRichText && browser}
          {@html parseMarkdown(project.RepeatableRichText[0].Content)}
          {@html parseMarkdown(project.RepeatableRichText[1].Content)}
        {/if}
      </div>
    </div>
  </div>
</div>
