<script lang="ts">
	import { formatDate } from "@/utils";

	const { data } = $props();

	const isLastIndex = (i: number) => i === data.posts.length - 1;
</script>

<main class="flex w-full flex-grow flex-col">
	<section class="flex w-full">
		<ul class="flex w-full flex-col gap-10">
			{#each data.posts as post, i}
				<li>
					<a class="text-2xl font-bold tracking-tight md:text-3xl" href={post.slug}>{post.title}</a>
					<p class="text-sm text-muted-foreground">{formatDate(post.date)}</p>
					<p class="text-sm text-muted-foreground">{post.description}</p>
				</li>

				{#if !isLastIndex(i)}
					<hr />
				{/if}
			{/each}
		</ul>
	</section>
</main>

<footer class="w-full text-xs">
	<p>Copyright &copy;{new Date().getFullYear()} Roland Bayor</p>
</footer>
