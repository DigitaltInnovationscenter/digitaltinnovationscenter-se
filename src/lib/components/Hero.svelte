<script lang="ts">
  import Button from "./Button.svelte";

  export let data: any;
</script>

<div class="bg-gray-50">
  <div class="container mx-auto flex items-center">
    <div
      class="flex-1 w-full justify-center flex flex-col gap-10 ml-10 items-start"
    >
      <h1 class="text-left text-6xl">{data.header}</h1>
      <Button text={data.ctaText} href={data.ctaUrl} />
    </div>
    <img
      class="object-contain flex-1 basis-0 w-full min-w-0"
      src={data.imageUrl}
    />
  </div>
</div>
