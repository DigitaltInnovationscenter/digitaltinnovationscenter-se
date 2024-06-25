<script lang="ts">
  import Container from "../shared/Container.svelte";
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

<Container backgroundColor="bg-white" foreGroundColor="bg-[#eeeeee]">
  <div class="max-w-[1362px] m-auto space-y-12">
    <h3 class="text-6xl font-bold text-slate-800">{data.header}</h3>
    <div class="grid grid-cols-5 gap-10">
      {#each data.content as member}
        <MemberCard {member} />
      {/each}
    </div>
  </div>
</Container>
