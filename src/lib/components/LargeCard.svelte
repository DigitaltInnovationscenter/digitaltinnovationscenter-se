<script>
  import { getContext } from "svelte";
  import Heading from "./Heading.svelte";

  export let data;

  const cms_url = getContext("cms_url");
</script>

<div class="bg-white rounded flex justify-between gap-10 items-center">
  <div class="flex flex-col gap-5 items-center grow shrink basis-0">
    <div class="flex items-start gap-5 flex-col">
      <Heading>{data.Header}</Heading>
      <p>
        {@html data.Description}
      </p>
    </div>
  </div>
  <img
    src={`${cms_url}${data.Image.data.attributes.url}`}
    alt="Placeholder"
    class="rounded-l w-0 grow shrink basis-0"
  />
</div>
