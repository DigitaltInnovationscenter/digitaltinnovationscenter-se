<script lang="ts">
	export let data;
</script>

<div class="my-4">
	<h1 class="text-center text-3xl font-bold">My wonderful blog</h1>

	<div class="container flex flex-col">
		{#each data.posts as post}
			<div class="m-2">
				<h2 class="text-3xl">{post.title}</h2>
				<p class="text-xl">{post.text}</p>
			</div>
		{/each}
	</div>
</div>
