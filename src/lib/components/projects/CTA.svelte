<script lang="ts">
  import { ArrowTopRightOnSquare, Icon, ArrowRight } from "svelte-hero-icons";
  import type { ProjectHighlightData } from "$lib/interfaces";

  export let ctas: ProjectHighlightData["attributes"]["CTA"];
</script>

{#if ctas && ctas.length > 0}
  {#each ctas as cta}
    <a
      href={cta.url}
      class="flex items-center justify-center transition hover:opacity-50 text-md lg:text-lg"
    >
      {cta.text}
      <Icon
        src={cta.external ? ArrowTopRightOnSquare : ArrowRight}
        class="w-6 h-6 inline ml-2"
      />
    </a>
  {/each}
{/if}
