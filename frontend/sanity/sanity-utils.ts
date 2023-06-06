import { createClient, groq } from 'next-sanity';

export async function getProjects() {
  const client = createClient({
    projectId: 'e318ytoo',
    dataset: 'production',
    apiVersion: '2023-06-06',
  });

  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
    }`
  );
}

