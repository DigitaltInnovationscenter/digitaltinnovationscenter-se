<script lang="ts">
  import type { TechCardData } from "$lib/interfaces";

  export let exploreCard: TechCardData;
</script>

<a
  href="/"
  class="p-8 bg-white flex flex-col rounded-2xl shadow-lg hover:shadow-xl transition"
>
  <div class="grow">
    <a
      href="/"
      class="hover:underline text-2xl font-semibold mb-4 text-secondary-purple-100"
      >{exploreCard.Header}</a
    >
    <p class="mb-16 mt-4 text-gray-600">
      {exploreCard.Content}
    </p>
    <a
      href="/"
      class="rounded-full bg-secondary-purple-100 text-white py-3 px-6 transition hover:opacity-75"
      >Läs mer</a
    >
  </div>
</a>
