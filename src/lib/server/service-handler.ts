import { CMS_URL } from "$env/static/private";

export const getPosts = async () => {
  try {
    const response = await fetch(`${CMS_URL}/api/posts?populate=deep`, {
      method: "GET",
    });

    let posts;

    if (response.ok) {
      const result: any = await response.json();
      posts = [...result.data];
    }

    return posts;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getPost = async (id: number) => {
  try {
    const response: Response = await fetch(
      `${CMS_URL}/api/posts/${id}?populate=deep`,
      {
        method: "GET",
      },
    );

    let page;

    if (response.ok) {
      const result = await response.json();
      page = { ...result.data };
    }

    return { post: page };
  } catch (error) {
    console.error(error);
  }
};

export const getPostSlug = async (slug: string) => {
  try {
    const response: Response = await fetch(
      `${CMS_URL}/api/posts?filters[slug][$eq]=${slug}&populate=deep`,
      {
        method: "GET",
      },
    );

    let page;

    if (response.ok) {
      const result = await response.json();

      if (result.data.length === 0) {
        return null;
      }

      page = { ...result.data[0] };
    }

    return { post: page };
  } catch (error) {
    console.error(error);
  }
};

export const getProjectSlug = async (slug: string) => {
  try {
    const response: Response = await fetch(
      `${CMS_URL}/api/projects?filters[slug][$eq]=${slug}&populate=deep`,
      {
        method: "GET",
      },
    );

    let page;

    if (response.ok) {
      const result = await response.json();

      if (result.data.length === 0) {
        return null;
      }

      page = { ...result.data[0] };
    }

    return { project: page };
  } catch (error) {
    console.error(error);
  }
};

export const getProject = async (id: number) => {
  try {
    const response: Response = await fetch(
      `${CMS_URL}/api/projects/${id}?populate=deep`,
      {
        method: "GET",
      },
    );

    let page;

    if (response.ok) {
      const result = await response.json();
      page = { ...result.data };
    }

    return { project: page };
  } catch (error) {
    console.error(error);
  }
};
