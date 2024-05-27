import { CMS_URL } from "$env/static/private";
export const load = async ({ fetch }) => {
  const response: Response = await fetch(
    `${CMS_URL}/api/pages/4?populate=deep`,
    {
      method: "GET",
    }
  );

  let pages: any = [];

  if (response.ok) {
    const result = await response.json();
    pages = [...result.data.attributes.DynamicPage];
  }

  console.log(pages);

  return { pages };
};

export const prerender = true;
