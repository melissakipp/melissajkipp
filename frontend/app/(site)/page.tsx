import Link from 'next/link';
import Image from 'next/image';

import WindowAz from '../../images/josefina-di-battista-sym1nRsVkAY-unsplash.jpg';

export const metadata = {
  title: 'Melissa J Kipp | Home',
};

export default function Home() {
  return (
    <article className='m-auto flex min-h-[72vh] flex-col items-center justify-center p-5 lg:max-w-7xl'>
      <figure className='relative'>
        <Image
          src={WindowAz}
          alt='A photo by Melissa J Kipp of a scenery viewpoint of Arizona landscape.'
          width={300}
          height={300}
          placeholder='blur'
          style={{
            maxWidth: '50vw',
            height: 'auto',
          }}
          className='my-10 rounded-lg shadow-md'
        />
      </figure>
      <h1 className='border-b-4 p-2 text-3xl font-extrabold lg:text-7xl'>
        Melissa J Kipp
      </h1>
      <p className='my-3 text-xl text-gray-600'>Full Stack Developer</p>
    </article>
  );
}
