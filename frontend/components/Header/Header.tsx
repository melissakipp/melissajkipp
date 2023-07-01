import Link from 'next/link';
import Image from 'next/image';
import { getPages } from '@/sanity/sanity-utils';

export default async function Header() {
  // get all pages
  const pages = await getPages();
  return (
    <>
      {/* className='flex justify-between items-center max-w-5xl mx-auto p-5' */}
      <header className='bg-blue-200 w-full py-5'>
        <div className='max-w-screen-xl mx-auto'>
          <div className='flex justify-between'>
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
        </div>
      </header>
    </>
  );
}
