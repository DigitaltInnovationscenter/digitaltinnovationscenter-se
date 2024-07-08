import { getPost, getPosts } from "$lib/server/service-handler";

export const load = async ({ params }) => {
  const id = parseInt(params.slug);
  const post = await getPost(id);
  const posts: any = await getPosts();

  let latestPosts = [];

  if (posts) {
    latestPosts = posts
      .filter((elem: any) => elem.id.toString() !== params.slug)
      .reverse()
      .slice(0, 3);
  }

  return { ...post, latestPosts: [...latestPosts] };
};

export const prerender = true;
