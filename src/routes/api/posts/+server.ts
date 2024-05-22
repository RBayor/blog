import type { Posts } from "@/types";
import { json } from "@sveltejs/kit";

const getPosts = () => {
	const posts: Posts[] = [];

	const paths = import.meta.glob("/src/posts/*.md", { eager: true });

	for (const path in paths) {
		const file = paths[path] as { metadata?: { [key: string]: any } };
		const slug = path.split("/").at(-1)?.replace(".md", "");

		const isValidFile = typeof file === "object" && "metadata" in file;

		if (isValidFile && slug) {
			const metadata = file.metadata;
			const post = { ...metadata, slug } as Posts;

			if (post.published) {
				posts.push(post);
			}
		}
	}

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return posts;
};

export function GET() {
	const posts = getPosts();

	return json({ posts });
}
