import { getProject } from "$lib/server/service-handler.js";
import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
  try {
    const id = parseInt(params.slug);
    const projectObject: any = await getProject(id);

    if (!projectObject.project) {
      error(404, {
        message: `Something went wrong trying to retrieve project: ${id}`,
      });
    }

    return projectObject;
  } catch (err) {
    console.log(err);
    error(404, {
      message: `Something went wrong trying to retrieve project.`,
    });
  }
};

export const prerender = true;
