<script lang="ts">
  export let data: any = { header: "", content: "", href: "" };
</script>

<div class="p-6 bg-white flex flex-col rounded-2xl shadow-lg">
  <div class="grow">
    <h3 class="text-2xl font-semibold mb-4 text-[#9B4AFF]">{data.header}</h3>
    <p class="mb-8">
      {data.content}
    </p>
  </div>
  <div>
    <button
      class="rounded-full bg-[#9B4AFF] text-white py-3 px-6 transition hover:opacity-75"
      >Läs mer</button
    >
  </div>
</div>
