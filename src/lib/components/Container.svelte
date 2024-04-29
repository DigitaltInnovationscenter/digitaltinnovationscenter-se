<script lang="ts">
  export let bgColor = "white";
</script>

<div class={`${bgColor} rounded-t-[50px] p-10 mt-[-40px] pb-[160px]`}>
  <div class={`container flex flex-col `}>
    <slot />
  </div>
</div>
