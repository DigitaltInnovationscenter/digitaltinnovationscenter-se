import { CMS_URL } from "$env/static/private";
export const load = async ({ fetch }) => {
  const response: Response = await fetch(
    `${CMS_URL}/api/projects/1?populate=deep`,
    {
      method: "GET",
    }
  );

  let pages: any = [];

  if (response.ok) {
    const result = await response.json();
    pages = [...result.data.attributes.Sections];
  }

  return { pages };
};

export const prerender = true;
