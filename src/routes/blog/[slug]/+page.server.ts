import { getPost } from "$lib/server/service-handler";

export const load = async ({ params }) => {
  const post = await getPost(params.slug);
  console.log(post);
  return {
    id: post.data.id,
    text: post.data.attributes.text,
    header: post.data.attributes.header,
  };
};

export const prerender = true;
