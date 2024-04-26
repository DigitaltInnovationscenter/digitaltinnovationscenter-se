<script lang="ts">
  export let bgColor = "white";
</script>

<div class={`container ${bgColor} mx-auto flex rounded-t-[50px] p-10 flex-col`}>
  <slot />
</div>
