import { PUBLIC_CMS_URL } from "$env/static/public";
import { getPost } from "$lib/server/service-handler";

export const load = async ({ params }) => {
  const response: Response = await fetch(
    `${PUBLIC_CMS_URL}/api/posts/${params.slug}?populate=deep`,
    {
      method: "GET",
    }
  );

  let page;

  if (response.ok) {
    const result = await response.json();

    page = { ...result.data };
  }

  const latestPostsResponse = await fetch(
    `${PUBLIC_CMS_URL}/api/posts?populate=deep`,
    {
      method: "GET",
    }
  );

  let latestPosts;

  if (latestPostsResponse.ok) {
    const result: any = await latestPostsResponse.json();
    latestPosts = result.data
      .filter((elem: any) => elem.id.toString() !== params.slug)
      .reverse()
      .slice(0, 3);
  }

  return { post: page, latestPosts };
};

export const prerender = true;
