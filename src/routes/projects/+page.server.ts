import { CMS_URL } from "$env/static/private";
export const load = async ({ fetch }) => {
  const response: Response = await fetch(
    `${CMS_URL}/api/pages/4?populate=deep`,
    {
      method: "GET",
    },
  );

  let pages;

  if (response.ok) {
    const result: any = await response.json();
    pages = [...result.data.attributes.DynamicPage];
  }

  let sectionProject = pages?.filter(
    ({ __component, projects }) =>
      __component === "block.section-project" && projects.data.length === 0
  )[0];

  if (sectionProject) {
    const projectResponse = await fetch(
      `${CMS_URL}/api/projects?populate=deep`,
      {
        method: "GET",
      },
    );

    if (projectResponse.ok) {
      const result = await projectResponse.json();
      sectionProject.projects.data = result.data.slice(1).sort((a, b) => {
        return b.id - a.id;
      });
    }
  }

  return { pages };
};

export const prerender = true;
