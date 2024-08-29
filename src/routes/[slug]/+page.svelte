<script lang="ts">
	import { formatDate } from "@/utils";
	const { meta, content } = $props();
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta property="og:tile" content={meta.title} />
	<meta property="og:type" content="article" />
</svelte:head>

<article class="flex w-full flex-grow flex-col">
	<hgroup>
		<h1 class="text-2xl font-bold tracking-tight md:text-3xl">{meta.title}</h1>
		<p class="text-sm text-muted-foreground">Published on {formatDate(meta.date)}</p>
	</hgroup>
	<div class="flex flex-row flex-wrap gap-2 pt-2">
		{#each meta.tags as tag}
			<div class="rounded-lg bg-slate-800 px-2 text-sm text-muted-foreground shadow-lg">@{tag}</div>
		{/each}
	</div>

	<div class="h-5"></div>

	{@render content()}
</article>
