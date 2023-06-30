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
      <div className='max-w-5xl mx-auto p-5'>
        <article>
          <section className='my-10 text-xl'>
            <Link href='/'>Home</Link>
          </section>
          <section>
            <h2 className='my-10 font-bold text-gray-700 text-3xl'>
              Current Work
            </h2>
            <div className='mt-5 grid px-5 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {projects.map((project) => {
                return (
                  <Link
                    key={project._id}
                    className='border border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition duration-500 ease-in-out'
                    href={`/projects/${project.slug}`}
                  >
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={350}
                        height={100}
                        className='object-cover rounded-lg border border-gray-500 rounded-t-lg mb-5'
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
