import { CMS_URL } from "$env/static/private";
import { getStartPage } from "$lib/server/service-handler";

export const load = async ({ params }) => {
  const startPage = await getStartPage(1);
  console.log("startPage", startPage);
  return {
    header: startPage.data.attributes.page[0].Header,
    imageUrl: `${CMS_URL}${startPage.data.attributes.page[0].Image.data.attributes.url}`,
    ctaText: startPage.data.attributes.page[0].CTA.text,
    ctaUrl: startPage.data.attributes.page[0].CTA.url,
  };
};

export const prerender = true;
