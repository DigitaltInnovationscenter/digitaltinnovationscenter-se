import { getPost, getPosts } from "$lib/server/service-handler";
import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
  try {
    const id = parseInt(params.slug);
    const postObject: any = await getPost(id);
    const posts: any = await getPosts();

    if (!postObject.post) {
      error(404, {
        message: `Post with id not found: ${id}.`,
      });
    }

    let latestPosts = [];

    if (posts) {
      latestPosts = posts
        .filter((elem: any) => elem.id.toString() !== params.slug)
        .reverse()
        .slice(0, 3);
    }

    return { ...postObject, latestPosts: [...latestPosts] };
  } catch (err) {
    error(404, {
      message: `Something went wrong trying to retrieve post.`,
    });
  }
};

export const prerender = true;
