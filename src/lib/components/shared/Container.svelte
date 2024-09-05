<script lang="ts">
  export let backgroundColor = "";
  export let foreGroundColor = "";
  export let rounded = true;
  export let paddingTop = "pt-36";
  export let paddingBottom = "pb-48";
</script>

<div class="w-full {backgroundColor} m-auto">
  <div
    class="w-full {foreGroundColor} {paddingTop !== '0' &&
      'lg:pt-36'} {paddingBottom} {rounded
      ? 'rounded-t-[40px] lg:rounded-t-[80px]'
      : ''}"
  >
    <slot />
  </div>
</div>
