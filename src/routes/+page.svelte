<script lang="ts">
	import { formatDate } from "@/utils";

	const { data } = $props();

	const isLastIndex = (i: number) => i === data.posts.length - 1;
</script>

<main class="flex w-full flex-grow flex-col">
	<section class="flex w-full">
		<ul class="flex w-full flex-col gap-5">
			{#each data.posts as post, i}
				<li class="rounded-lg p-3 hover:bg-slate-800">
					<a href={post.slug}>
						<h1 class="m-0 p-0 text-2xl font-bold tracking-tight md:text-3xl">
							{post.title}
						</h1>
						<p class="text-sm text-muted-foreground">{formatDate(post.date)}</p>
						<p class="text-sm text-muted-foreground">{post.description}</p>
					</a>
				</li>

				{#if !isLastIndex(i)}
					<hr />
				{/if}
			{/each}
		</ul>
	</section>
</main>
