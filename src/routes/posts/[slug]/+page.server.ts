import { getPost, getPosts, getPostSlug } from "$lib/server/service-handler";
import { error } from "@sveltejs/kit";

export const load = async ({ params }: any) => {
  try {
    const { slug } = params;
    let postObject: any = null;

    postObject = await getPostSlug(slug);

    if (!postObject) {
      postObject = await getPost(slug);
    }

    const posts: any = await getPosts();

    if (!postObject.post) {
      error(404, {
        message: `Post with slug not found: ${slug}.`,
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
