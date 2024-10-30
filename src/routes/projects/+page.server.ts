import { CMS_URL } from "$env/static/private";

export const load = async ({
  fetch,
}: {
  fetch: {
    (input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
    (
      input: string | URL | globalThis.Request,
      init?: RequestInit,
    ): Promise<Response>;
  };
}) => {
  const response: Response = await fetch(
    `${CMS_URL}/api/pages?filters[slug][$eq]=projects&pLevel`,
    {
      method: "GET",
    },
  );

  let pages;

  if (response.ok) {
    const result: any = await response.json();
    pages = [...result.data[0].DynamicPage];
  }

  let sectionProject = pages?.filter(
    ({ __component, projects }) =>
      __component === "block.section-project" && projects.length === 0,
  )[0];

  if (sectionProject) {
    const projectResponse = await fetch(`${CMS_URL}/api/projects?pLevel`, {
      method: "GET",
    });

    if (projectResponse.ok) {
      const result = await projectResponse.json();
      sectionProject.projects = result.data
        .slice(1)
        .sort((a: { id: number }, b: { id: number }) => {
          return b.id - a.id;
        });
    }
  }

  return { pages };
};

export const prerender = true;
