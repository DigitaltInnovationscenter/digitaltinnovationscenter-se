import { PUBLIC_CMS_URL } from "$env/static/public";
import { getPost } from "$lib/server/service-handler";

export const load = async ({ params }) => {
  const response: Response = await fetch(
    `${PUBLIC_CMS_URL}/api/projects/${params.slug}?populate=deep`,
    {
      method: "GET",
    }
  );

  let page;

  if (response.ok) {
    const result = await response.json();
    page = { ...result.data };
  }

  return { post: page };
};

export const prerender = true;
