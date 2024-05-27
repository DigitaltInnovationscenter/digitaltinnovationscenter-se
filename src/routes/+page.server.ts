import { getStartPage } from "$lib/server/service-handler";
import { PUBLIC_CMS_URL } from "$env/static/public";

export const load = async ({ params }) => {
  const landingPageResponse: Response = await fetch(
    `${PUBLIC_CMS_URL}/api/landing-pages/1?populate=deep`
  );

  let pages;

  if (landingPageResponse.ok) {
    const result: any = await landingPageResponse.json();

    pages = result.data.attributes.page;
  }

  return { pages, cms_url: PUBLIC_CMS_URL };
};

export const prerender = true;
