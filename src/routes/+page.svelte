<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Digitalt Innovationscenter" />
</svelte:head>

<section>
	<div class="my-4">
		<h1 class="text-center text-3xl font-bold">Digitalt Innovationscenter</h1>

		<div class="container flex flex-col">
			{#each data.posts as post}
				<div class="m-4 bg-slate-300 p-4">
					<h2 class="text-3xl">
						<a href={`/blog/${post.id}`}>{post.title}</a>
					</h2>
					<p class="text-xl">{post.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
