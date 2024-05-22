import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load:PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../posts/${params.slug}.md`);

		return {
			meta: post.metadata,
			content: post.default
		};
	} catch (e) {
		return  error(404, "Not found");
	}
};
