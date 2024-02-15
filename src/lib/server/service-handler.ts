import { CMS_URL, AUTH_TOKEN } from "$env/static/private";

export const getPosts = async () => {
  const res = await fetch(`${CMS_URL}/api/blogs`, {
    headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
  });

  if (!res.ok) {
    return [];
  }

  const data = await res.json();
  return data.data.map((p) => {
    return { id: p.id, title: p.attributes.title, text: p.attributes.text };
  });
};

export const getPost = async (id: number) => {
  const res = await fetch(`${CMS_URL}/api/blogs/${id}`, {
    headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
  });

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  console.log("fetching post for id ", id);
  return data;
};
