import { error } from "@sveltejs/kit";
import type { Posts } from "@/types";
import type { PageLoad } from "./$types";
export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch("/api/posts");
	const data: { posts: Posts[] } = await res.json();

	if (data) {
		return data;
	}

	error(404, "Not found");
};
