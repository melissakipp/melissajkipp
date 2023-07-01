import { getPage } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);
  return (
    <>
      <div className='max-w-5xl mx-auto p-5'>
        <article className=''>
          <h1 className='font-extrabold text-5xl'>{page.title}</h1>
          <section className='text-lg my-10'>
            <PortableText value={page.content} />
          </section>
        </article>
      </div>
    </>
  );
}
