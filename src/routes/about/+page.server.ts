import { PUBLIC_CMS_URL } from "$env/static/public";

export const load = async ({ fetch }) => {
  const heroResponse: Response = await fetch(
    `${PUBLIC_CMS_URL}/api/pages/1?populate=deep`,
    {
      method: "GET",
    }
  );

  let hero: {
    header: string;
    content: {
      Header: string;
      TextBlock: string;
      id: number;
      position: "right" | "bottom" | "top";
      smallLogo: { data: { attributes: { url: string } } };
      svg: { data: { attributes: { url: string } } };
    }[];
  } = {
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

  let team: {
    header: string;
    content: {
      Description: string;
      Name: string;
      MemberImage: { data: { attributes: { url: string } } | null };
      Role: string;
    }[];
  } = {
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
