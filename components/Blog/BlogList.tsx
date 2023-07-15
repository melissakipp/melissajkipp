import { getPosts } from '@/sanity/sanity-utils';

export default async function BlogList() {
  const posts = await getPosts();

  return <div>BlogList</div>;
}
