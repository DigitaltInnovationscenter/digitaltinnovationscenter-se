import { PUBLIC_CMS_URL } from "$env/static/public";
import type { ApiAboutData, ApiTeamData } from "$lib/interfaces/index.js";

export const load = async ({ fetch }) => {
  const heroResponse: Response = await fetch(
    `${PUBLIC_CMS_URL}/api/pages/1?populate=deep`,
    {
      method: "GET",
    }
  );

  let hero: ApiAboutData = {
    content: [],
    header: "",
  };

  if (heroResponse.ok) {
    const result = await heroResponse.json();
    hero.content = [...result.data.attributes.DynamicPage];
    hero.header = result.data.attributes.Header;
  }

  const teamResponse: Response = await fetch(
    `${PUBLIC_CMS_URL}/api/pages/3?populate=deep`,
    {
      method: "GET",
    }
  );

  let team: ApiTeamData = {
    content: [],
    header: "",
  };

  if (teamResponse.ok) {
    const result = await teamResponse.json();
    team.content = [...result.data.attributes.DynamicPage];
    team.header = result.data.attributes.Header;
  }

  return { hero, team };
};

export const prerender = true;
