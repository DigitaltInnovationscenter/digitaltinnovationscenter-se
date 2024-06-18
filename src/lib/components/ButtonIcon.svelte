<script lang="ts">
  import { ArrowUp, Icon } from "svelte-hero-icons";

  export let href = "";
  let className = "";
  export { className as class };
</script>

<a
  {href}
  class={`${className} left py-3 px-8 bg-white rounded-full text-[#9B4AFF] flex flex-row items-center hover:bg-[#F3E5FF]`}
>
  <slot />
  <span class="rotate-90 ml-4 transform-gpu">
    <Icon src={ArrowUp} class="w-6 animate-bounce" />
  </span>
</a>
