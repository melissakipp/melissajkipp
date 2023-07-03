import Image from 'next/image';

import WindowAz from '../../images/josefina-di-battista-sym1nRsVkAY-unsplash.jpg';

export const metadata = {
  title: 'Melissa J Kipp | Home',
};

export default function Home() {
  return (
    // <article className='m-auto flex min-h-[66vh] flex-col items-center justify-center gap-4 p-[2%] text-center lg:max-w-7xl'>
    // m-auto min-h-[66vh] text-center sm:flex sm:flex-col sm:items-center sm:justify-center
    <div className='m-auto flex min-h-[76vh] items-center justify-center'>
      <article className='grid grid-cols-1 lg:grid-cols-2'>
        <section className='m-auto flex items-center justify-center'>
          {/* relative  */}
          <figure className='m-[4vh]'>
            <Image
              src={WindowAz}
              alt='A photo by Melissa J Kipp of a scenery viewpoint of Arizona landscape.'
              width={255}
              height={255}
              placeholder='blur'
              className='rounded-lg shadow-md'
            />
            {/*  
              style={{
                maxWidth: '55vw',
                height: 'auto',
              }} 
            */}
          </figure>
        </section>
        <section className='flex flex-col items-center justify-center'>
          {/*  p-[2vh] text-3xl  */}
          <h1 className='border-b-4 text-3xl font-extrabold lg:mx-5 lg:text-6xl'>
            Melissa J Kipp
          </h1>
          <p className='my-[2vh] text-xl text-gray-900'>Full Stack Developer</p>
        </section>
      </article>
    </div>
  );
}
