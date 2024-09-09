import { getProject, getProjectSlug } from "$lib/server/service-handler.js";
import { error } from "@sveltejs/kit";
import type { RouteParams } from "./$types";

export const load = async ({ params }: { params: RouteParams }) => {
  try {
    const { slug } = params;
    const id = parseInt(slug);
    let projectObject: any;
    if (!id) {
      projectObject = await getProjectSlug(slug);
    } else {
      projectObject = await getProject(id);
    }

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
