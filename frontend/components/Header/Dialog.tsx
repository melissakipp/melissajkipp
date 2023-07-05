import Link from 'next/link';

import { getPages } from '@/sanity/sanity-utils';

export default async function Dialog() {
  // get all pages
  const pages = await getPages();
  return (
    <>
      <dialog open aria-modal='true'>
        <nav className='hidden max-w-full text-xl lg:flex'>
          <ul className='flex items-center justify-between space-x-10'>
            <li>
              <Link className='hover:underline' href='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='hover:underline' href='/projects'>
                Projects
              </Link>
            </li>
            {pages.map((page) => (
              <li key={page._id}>
                <Link className='hover:underline' href={`/${page.slug}`}>
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </dialog>
    </>
  );
}
