<script lang="ts">
  import type { TeamMember } from "$lib/interfaces";
  import { PUBLIC_CMS_URL } from "$env/static/public";

  export let member: TeamMember = {
    Name: "",
    Role: "",
    Description: "",
    MemberImage: { data: { attributes: { url: "" } } },
  };
</script>

<div
  class="flex flex-col space-y-2 min-w-[234px] grayscale hover:grayscale-0 transition-all"
>
  <div
    style="aspect-ratio: 1.2/1;"
    class="w-full bg-gray-100 border border-gray-300 rounded-xl relative overflow-hidden transition-all"
  >
    {#if member.MemberImage.data}
      <img
        src={PUBLIC_CMS_URL + member.MemberImage.data?.attributes.url}
        alt="Bild som representerar rubriken medlem"
        class="w-full h-full object-cover absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
      />
    {:else}
      <!-- Placeholder image -->
    {/if}
  </div>
  <div class="pt-4">
    <h3 class="font-bold text-lg text-gray-700">{member.Name}</h3>
    <span class="mb-2 block text-gray-500">{member.Role}</span>
    <p class="text-base text-gray-700 grayscale-0">
      {member.Description}
    </p>
  </div>
</div>

<style>
  .truncate-lines {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3; /* Default to 3 lines */
  }
</style>
