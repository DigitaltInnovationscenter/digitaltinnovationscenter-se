import { CMS_URL } from "$env/static/private";
import { getStartPage } from "$lib/server/service-handler";

export const load = async ({ params }) => {
  // const startPage = await getStartPage(1);
  // console.log("startPage", startPage);

  // const pages = startPage.data.attributes.page;

  // return { pages, cms_url: CMS_URL };
  return { cms_url: CMS_URL };
};

export const prerender = true;
