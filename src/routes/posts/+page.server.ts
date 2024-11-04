import { PUBLIC_CMS_URL } from "$env/static/public";
export const load = async ({
  fetch,
}: {
  fetch: {
    (input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
    (
      input: string | URL | globalThis.Request,
      init?: RequestInit
    ): Promise<Response>;
  };
}) => {
  const response: Response = await fetch(
    `${PUBLIC_CMS_URL}/api/pages?filters[slug][$eq]=news&pLevel`,
    {
      method: "GET",
    }
  );

  let pages;

  if (response.ok) {
    const result = await response.json();

    if (result.data && result.data.length) {
      pages = [...result.data[0].DynamicPage];
    }
  }

  let sectionPost = pages?.find(
    ({ __component }) => __component === "block.section-post"
  );

  /**
   * The purpose of having an empty section-post array is to tell the system to retrieve the latest
   */
  if (sectionPost && sectionPost.posts.length === 0) {
    const latestPostsResponse = await fetch(
      `${PUBLIC_CMS_URL}/api/posts?pLevel`,
      {
        method: "GET",
      }
    );

    if (latestPostsResponse.ok) {
      const result = await latestPostsResponse.json();
      sectionPost.posts = result.data.reverse();
    }
  }

  return { pages };
};

export const prerender = true;
