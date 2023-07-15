'use client';

import { usePreview } from '@/sanity/sanity-preivew';
import BlogList from '@/components/Blog/BlogList';

type Props = {
  query: string;
};

export default function PreviewBlogList({ query }: Props) {
  const posts = usePreview(null, query);
  // console.log('LOADING posts...', posts);
  return <BlogList posts={posts} />;
}
