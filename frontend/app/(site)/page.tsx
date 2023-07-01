import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Melissa J Kipp | Home',
};

export default function Home() {
  return (
    <article className='min-h-[72vh] lg:max-w-7xl m-auto p-5'>
      <figure>
        <Image
          src='/images/josefina-di-battista-sym1nRsVkAY-unsplash.jpg'
          alt='Melissa J Kipp'
          width={300}
          height={167}
        />
      </figure>
      <h1 className='text-3xl lg:text-7xl font-extrabold'>Melissa J Kipp</h1>
      <p className='my-3 text-xl text-gray-600'>Check out my projects!</p>
      <Link href='/projects'>Projects</Link>
    </article>
  );
}
