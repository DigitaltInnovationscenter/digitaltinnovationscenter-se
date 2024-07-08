import { getProject } from "$lib/server/service-handler.js";

export const load = async ({ params }) => {
  try {
    const id = parseInt(params.slug);
    const project = await getProject(id);
    return project;
  } catch (error) {
    console.error(error);
    return { project: {} };
  }
};

export const prerender = true;
