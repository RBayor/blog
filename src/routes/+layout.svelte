<script lang="ts">
	import { dev } from "$app/environment";
	import { inject } from "@vercel/analytics";
	import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
	import { Code, CodeXml } from "lucide-svelte";

	import "../app.css";

	inject({ mode: dev ? "development" : "production", debug: false });
	injectSpeedInsights();

	const { children } = $props();
</script>

<div class="dark flex min-h-screen w-full flex-col items-center p-3">
	<div class="flex w-full max-w-2xl flex-grow flex-col items-center justify-start">
		<nav class="flex w-full flex-row items-center justify-between">
			<a class="flex items-center" href="/">
				<Code class="h-4" />
				<div class="text-lg font-bold">Dev Logs</div>
				<CodeXml class="h-4" />
			</a>
			<img src="/me.webp" alt="RB Dev" height="45" width="45" class="rounded-full" />
		</nav>

		<div class="h-14"></div>

		{@render children()}

		<footer class="mt-10 w-full text-xs">
			<p>Copyright &copy;{new Date().getFullYear()} Roland Bayor</p>
		</footer>
	</div>
</div>
