import { PUBLIC_CMS_URL } from "$env/static/public";
export const load = async ({ fetch }) => {
  const response: Response = await fetch(
    `${PUBLIC_CMS_URL}/api/pages/7?populate=deep`,
    {
      method: "GET",
    }
  );

  let pages;

  if (response.ok) {
    const result: any = await response.json();
    pages = [...result.data.attributes.DynamicPage];
  }

  let sectionPost = pages?.find(
    ({ __component }) => __component === "block.section-post"
  );

  /**
   * The purpose of having an empty section-post array is to tell the system to retrieve the latest
   */
  if (sectionPost && sectionPost.posts.data.length === 0) {
    const latestPostsResponse = await fetch(
      `${PUBLIC_CMS_URL}/api/posts?populate=deep`,
      {
        method: "GET",
      }
    );

    if (latestPostsResponse.ok) {
      const result = await latestPostsResponse.json();
      sectionPost.posts.data = result.data.reverse();
    }
  }

  return { pages };
};

export const prerender = true;
