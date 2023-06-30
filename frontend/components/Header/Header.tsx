import Link from 'next/link';
import { getPages } from '@/sanity/sanity-utils';

export default async function Header() {
  // get all pages
  const pages = await getPages();
  console.log(pages);
  return (
    <>
      <header className='flex justify-between items-center max-w-5xl mx-auto p-5'>
        <h1 className='text-3xl font-extrabold my-20'>
          <span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
            Melissa Kipp
          </span>
        </h1>
        <nav className='text-xl'>
          <ul className='flex justify-between'>
            <li className='mx-5'>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/projects'>Projects</Link>
            </li>
            {pages.map((page) => (
              <li className='mx-5' key={page._id}>
                <Link className='hover:underline' href={`/${page.slug}`}>
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
