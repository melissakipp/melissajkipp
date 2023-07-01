import { getPage } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);
  return (
    <>
      <div className='mx-auto max-w-5xl p-5'>
        <article className=''>
          <h1 className='text-5xl font-extrabold'>{page.title}</h1>
          <section className='my-10 text-lg'>
            <PortableText value={page.content} />
          </section>
        </article>
      </div>
    </>
  );
}
