<script lang="ts">
  import { ArrowUp, Icon } from "svelte-hero-icons";

  export let href: string = "";
  export let hover: boolean = true;
  let className = "";
  export { className as class };
</script>

<a
  {href}
  class="py-3 px-8 {className} left bg-white rounded-full text-secondary-purple-100 flex flex-row items-center {hover
    ? 'hover:bg-alternative-purple-800'
    : ''} duration-300 transition-colors"
>
  <slot />
  <span class="rotate-90 ml-4 transform-gpu">
    <Icon src={ArrowUp} class="w-6 animate-bounce" />
  </span>
</a>
