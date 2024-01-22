export const load = () => {
  console.log('running load');
  return {
    title: 'hello'
  };
};

//import type { EndpointOutput } from '@sveltejs/kit';
//export async function get(): Promise<EndpointOutput> {
//  const res = await fetch('http://localhost:1337/api/blogs');
//  const data = await res.json();
//  return { body: data };
//}
