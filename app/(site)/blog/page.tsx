import { draftMode } from 'next/headers';
import { getPosts } from '@/sanity/sanity-utils';
import { PreviewSuspense } from 'next-sanity/preview';

type Props = {
  params: { post: string };
};

export const metadata = {
  title: 'Melissa J Kipp | Blog Article',
  description: 'Full Stack Engineer, DevOps (AWS), and Design Ops',
};

export default async function Blog({ params }: Props) {
  const preview = draftMode().isEnabled ? { token: process.env.SANITY_API_READ_TOKEN } : undefined;

  if (preview) {
    return (
      <PreviewProvider token={preview.token}>
        <h1>PREVIEW MODE</h1>
        {/* <PreviewDocumentsCount data={data} /> */}
      </PreviewProvider>
    );
  }

  // if (draftMode) {

  //   return (
  //     <h1>PREVIEW MODE</h1>
  //     // <PreviewSuspense
  //     //   fallback={
  //     //     <div className="h-[100vh]" role="status">
  //     //       <p className="text-center text-lg animate-pulse">Loading Preview Data...</p>
  //     //     </div>
  //     //   }
  //     // >
  //     //   <div>
  //     //     <PreviewBlogList query={query} />
  //     //   </div>
  //     // </PreviewSuspense>
  //   );
  // }

  const slug = params.project;

  const posts = await getPosts();

  // return (
  //   <div className="h-[100vh]">
  //     <h1>Not in Preview mode</h1>
  //   </div>
  // );

  return <DocumentsCount data={data} />;
}
