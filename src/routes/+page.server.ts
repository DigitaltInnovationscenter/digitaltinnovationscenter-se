import { PUBLIC_CMS_URL } from "$env/static/public";

export const load = async () => {
  const landingPageResponse: Response = await fetch(
    `${PUBLIC_CMS_URL}/api/pages?filters[slug][$eq]=start&pLevel`,
  );

  let pages;

  if (landingPageResponse.ok) {
    const result = await landingPageResponse.json();
    pages = [...result.data[0].DynamicPage];
  }

  let sectionPost = pages?.find(
    ({ __component }) => __component === "block.section-post",
  );

  /**
   * The purpose of having an empty section-post array is to tell the system to retrieve the latest
   */

  if (sectionPost && sectionPost.posts.length === 0) {
    const latestPostsResponse = await fetch(
      `${PUBLIC_CMS_URL}/api/posts?pLevel`,
      {
        method: "GET",
      },
    );

    if (latestPostsResponse.ok) {
      const result = await latestPostsResponse.json();
      sectionPost.posts = result.data.reverse().slice(0, 3);
    }
  }

  return { pages, cms_url: PUBLIC_CMS_URL };
};

export const prerender = true;
