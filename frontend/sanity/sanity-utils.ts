import { groq } from 'next-sanity';
import { clientConfig } from './config/client-config';

import { Project } from '@/types/Project';
import { Page } from '@/types/Page';

import { cache } from 'react';

// Wrap the cache function in a way that reuses the TypeScript definitions
const clientFetch = cache(clientConfig.fetch.bind(clientConfig));

export async function getProjects(): Promise<Project[]> {
  return clientFetch(
    groq`*[_type == "project"]{s
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

export async function getProject(slug: string): Promise<Project> {
  return clientFetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return clientFetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return clientFetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  );
}
