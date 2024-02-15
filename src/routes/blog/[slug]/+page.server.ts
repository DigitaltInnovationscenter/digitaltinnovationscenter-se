import { getPost } from "$lib/server/service-handler";

export const load = async ({ params }) => {
  const post = await getPost(params.slug);
  console.log(post);
  return {
    id: post.data.id,
    text: post.data.attributes.text,
    title: post.data.attributes.title,
  };
};

export const prerender = true;
