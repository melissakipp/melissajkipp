import Link from 'next/link';
import { getProjects } from '@/sanity/sanity-utils';

export const metadata = {
  title: 'Melissa J Kipp | Projects',
};

export default async function Projects() {
  const projects = await getProjects();

  return (
    <main>
      <section>
        <Link href='/'>Home</Link>
      </section>
      <section>
        {projects.map((project) => (
          <div key={project._id}>{project.name}</div>
        ))}
      </section>
    </main>
  );
}
