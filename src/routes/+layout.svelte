<script lang="ts">
	import { Code, Code2 } from "lucide-svelte";
	import { dev } from "$app/environment";
	import { inject } from "@vercel/analytics";
	import "../app.css";

	inject({ mode: dev ? "development" : "production" });

	const { children } = $props();
</script>

<div class="dark flex min-h-screen w-full flex-col items-center p-3">
	<div class="flex w-full max-w-3xl flex-grow flex-col items-center justify-start">
		<nav class="flex w-full flex-row items-center justify-between">
			<a class="flex items-center" href="/">
				<Code class="h-5" />
				<h1 class="text-lg font-bold">Dev Logs</h1>
				<Code2 class="h-5" />
			</a>
			<img src="/me.webp" alt="RB Dev" height="45" width="45" class="rounded-full" />
		</nav>

		<div class="h-16"></div>

		{@render children()}

		<footer class="mt-10 w-full text-xs">
			<p>Copyright &copy;{new Date().getFullYear()} Roland Bayor</p>
		</footer>
	</div>
</div>
