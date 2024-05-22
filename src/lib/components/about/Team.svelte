<script lang="ts">
  import MemberCard from "./MemberCard.svelte";

  export let data: {
    header: string;
    content: {
      Description: string;
      Name: string;
      MemberImage: { data: { attributes: { url: string } } | null };
      Role: string;
    }[];
  };
</script>

<div class="w-full bg-white">
  <div class="w-full bg-[#eeeeee] rounded-t-[80px] p-12">
    <div class="max-w-[1280px] m-auto py-24 space-y-12">
      <h3 class="text-6xl font-bold">{data.header}</h3>
      <div class="grid grid-cols-5 gap-10">
        {#each data.content as member}
          <MemberCard {member} />
        {/each}
      </div>
    </div>
  </div>
</div>
