import Link from 'next/link';
import Image from 'next/image';
import { getProjects } from '@/sanity/sanity-utils';

export const metadata = {
  title: 'Melissa J Kipp | Projects',
};

export default async function Projects() {
  const projects = await getProjects();

  return (
    <>
      <div className='mx-auto max-w-5xl p-5'>
        <article>
          <section className='my-10 text-xl'>
            <Link href='/'>Home</Link>
          </section>
          <section>
            <h2 className='my-10 text-3xl font-bold text-gray-700'>
              Current Work
            </h2>
            <div className='mt-5 grid gap-8 px-5 md:grid-cols-2 lg:grid-cols-3'>
              {projects.map((project) => {
                return (
                  <Link
                    key={project._id}
                    className='rounded-lg border border-gray-500 p-1 transition duration-500 ease-in-out hover:scale-105 hover:border-blue-500'
                    href={`/projects/${project.slug}`}
                  >
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={350}
                        height={100}
                        className='mb-5 rounded-lg rounded-t-lg border border-gray-500 object-cover'
                      />
                    )}
                    <div className='font-extrabold'>{project.name}</div>
                  </Link>
                );
              })}
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
