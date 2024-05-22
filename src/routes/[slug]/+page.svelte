<script lang="ts">
	import { formatDate } from "@/utils";
	const { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:tile" content={data.meta.title} />
	<meta property="og:type" content="article" />
</svelte:head>

<article class="flex w-full flex-grow flex-col">
	<hgroup>
		<h1 class="text-2xl font-bold tracking-tight md:text-3xl">{data.meta.title}</h1>
		<p class="text-sm text-muted-foreground">Published on {formatDate(data.meta.date)}</p>
	</hgroup>
	<div class="flex flex-row flex-wrap gap-2">
		{#each data.meta.tags as tag}
			<span class="rounded bg-slate-800 px-2 pb-1 text-sm text-muted-foreground">{tag}</span>
		{/each}
	</div>

	<div class="h-10"></div>

	<svelte:component this={data.content} />
</article>
