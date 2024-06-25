<script lang="ts">
  export let member: {
    Description: string;
    MemberImage: { data: { attributes: { url: string } } | null };
    Role: string;
    Name: string;
  } = {
    Name: "",
    Role: "",
    Description: "",
    MemberImage: { data: { attributes: { url: "" } } },
  };
</script>

<div class="flex flex-col space-y-2">
  <div
    style="aspect-ratio: 1.2/1;"
    class="w-full bg-gray-100 border border-gray-300 rounded-xl"
  >
    <!-- Build image logic as soon as profile images are available and uploaded -->
  </div>
  <div class="pt-4">
    <h3 class="font-bold text-lg text-gray-700">{member.Name}</h3>
    <span class="mb-2 block text-gray-500">{member.Role}</span>
    <p class="text-base text-gray-700">{member.Description}</p>
  </div>
</div>
