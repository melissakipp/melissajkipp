import Link from 'next/link';
import Image from 'next/image';
import { getPages } from '@/sanity/sanity-utils';

export default async function Header() {
  // get all pages
  const pages = await getPages();
  return (
    <>
      <header className='min-h-[14vh] bg-blue-200 w-full p-3 flex items-center'>
        <div className='flex justify-between max-w-screen-xl mx-auto w-full'>
          <Image
            src='/images/full-logo_bk_version-1.svg'
            alt='Melissa Kipp'
            width={125}
            height={100}
          />
          <nav className='text-xl max-w-full'>
            <ul className='flex justify-between items-center p-5'>
              <li className='mx-5'>
                <Link className='hover:underline' href='/'>
                  Home
                </Link>
              </li>
              <li className='mx-5'>
                <Link className='hover:underline' href='/projects'>
                  Projects
                </Link>
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
        </div>
      </header>
    </>
  );
}
