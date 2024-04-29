import { getPosts } from "$lib/server/service-handler";

export const load = async () => {
  const posts = await getPosts();
  console.log("incoming posts", posts);
  return {
    title: "hello",
    posts,
  };
};

export const prerender = true;
