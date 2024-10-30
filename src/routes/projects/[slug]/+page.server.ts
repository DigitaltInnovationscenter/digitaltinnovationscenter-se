import { getProject, getProjectSlug } from "$lib/server/service-handler.js";
import { error } from "@sveltejs/kit";
import type { RouteParams } from "./$types";

export const load = async ({ params }: { params: RouteParams }) => {
  try {
    const { slug } = params;
    let projectObject: any = null;

    projectObject = await getProjectSlug(slug);

    if (!projectObject) {
      projectObject = await getProject(slug);
    }

    if (!projectObject.project) {
      error(404, {
        message: `Something went wrong trying to retrieve project: ${slug}`,
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
