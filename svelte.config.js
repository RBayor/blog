import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { escapeSvelte, mdsvex } from "mdsvex";
import { getSingletonHighlighter } from "shiki";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
	extensions: [".md"],
	highlight: {
		highlighter: async (code, lang = "text") => {
			const highlighter = await getSingletonHighlighter({
				themes: ["material-theme-darker"],
				langs: ["typescript"]
			});

			const html = escapeSvelte(
				highlighter.codeToHtml(code, {
					theme: "material-theme-darker",
					lang
				})
			);

			return `{@html \`${html}\`}`;
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".md"],
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter(),
		alias: {
			"@/*": "./src/lib"
		}
	}
};

export default config;
