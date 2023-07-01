import Link from 'next/link';
import Image from 'next/image';

import WindowAz from '../../images/josefina-di-battista-sym1nRsVkAY-unsplash.jpg';

export const metadata = {
  title: 'Melissa J Kipp | Home',
};

export default function Home() {
  return (
    <article className='min-h-[72vh] lg:max-w-7xl m-auto p-5 flex flex-col justify-center items-center'>
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
          className='rounded-lg shadow-md my-10'
        />
      </figure>
      <h1 className='text-3xl lg:text-7xl font-extrabold border-b-4 p-2'>
        Melissa J Kipp
      </h1>
      <p className='my-3 text-xl text-gray-600'>Full Stack Developer</p>
    </article>
  );
}
