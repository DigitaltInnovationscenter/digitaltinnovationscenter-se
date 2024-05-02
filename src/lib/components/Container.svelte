<script lang="ts">
  export let bgColor = "white";
</script>

<div
  class={`${bgColor} rounded-t-[50px] p-10 mt-[-40px] md:pb-[160px] pb-[40px]`}
>
  <div class={`container flex flex-col mx-auto`}>
    <slot />
  </div>
</div>
