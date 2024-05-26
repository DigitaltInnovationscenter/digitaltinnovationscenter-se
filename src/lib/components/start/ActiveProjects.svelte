<script lang="ts">
  import ActiveProjectCard from "./ActiveProjectCard.svelte";

  let data = [
    {
      img: "",
      date: "2024-05-01",
      header: "Meet AutoManage, the best AI management tools",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      href: "/",
      author: "Fredric Färholt",
      timeToRead: 6,
    },
    {
      img: "",
      date: "2024-05-01",
      header: "Meet AutoManage, the best AI management tools",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      href: "/",
      author: "Fredric Färholt",
      timeToRead: 6,
    },
    {
      img: "",
      date: "2024-05-01",
      header: "Meet AutoManage, the best AI management tools",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      href: "/",
      author: "Fredric Färholt",
      timeToRead: 6,
    },
  ];
</script>

<div class="w-full bg-[#eeeeee]">
  <div class="w-full bg-white py-24 rounded-t-[50px]">
    <div class="max-w-[1280px] w-full m-auto py-24 space-y-20">
      <div class="w-full text-left">
        <h3 class="text-6xl font-bold text-slate-800">
          Det här gör vi just nu
        </h3>
      </div>
      <div class="grid grid-cols-3 gap-10">
        {#each data as card}
          <ActiveProjectCard data={card} />
        {/each}
      </div>
    </div>
  </div>
</div>
