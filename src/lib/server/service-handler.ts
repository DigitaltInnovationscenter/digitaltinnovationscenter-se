const AUTH_TOKEN =
  "aea0295be6d45c44e7cd16ba47fce6fa3c1d8184bb136a13539a59e58968bef32b866eda733465c8981de2d4223d6992821b976cb390895e3ebc07691a6bf0228a4be4168c237a366cd8767f78fe105688cb6e9867736ac920f0634e2a5cd321252e28c82e65fb9365eb055e0ec95628fa90c127f845634fdc14eec87fc20bbc";

export const getPosts = async () => {
  return [];

  const res = await fetch("http://localhost:1337/api/blogs", {
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
  return null;

  const res = await fetch(`http://localhost:1337/api/blogs/${id}`, {
    headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
  });

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  console.log("fetching post for id ", id);
  return data;
};
