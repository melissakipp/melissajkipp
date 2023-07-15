import { getProject } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

type Props = {
  params: { project: string };
};

export const metadata = {
  title: 'Melissa J Kipp | Projects',
  description: 'Full Stack Engineer, DevOps (AWS), and Design Ops',
};

// title: 'Melissa J Kipp |' + {project.name},

export default async function Project({ params }: Props) {
  const slug = params.project;

  const project = await getProject(slug);

  return (
    <>
      <div className="max-w-5xl mx-auto p-5">
        <article className="my-10 text-xl mx-auto py-10">
          <header className="">
            <h1 className="text-5xl font-bold text-center">{project.name}</h1>
            <a
              href={project.url}
              title="View Project"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-left bg-gray-200 p-3 my-10 round-lg whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
            >
              View Project
            </a>
          </header>
          <section className="flex justify-center">
            <figure className="my-10">
              <Image
                src={project.image}
                alt={project.name}
                width={600}
                height={400}
                className="object-cover rounded-lg"
              />
            </figure>
          </section>
          <section className="my-10 flex justify-center">
            <div className="max-w-prose">
              <PortableText value={project.content} />
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
