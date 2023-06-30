import Link from 'next/link';

export const metadata = {
  title: 'Melissa J Kipp | Home',
};

export default function Home() {
  return (
    <>
      {/*  flex justify-center */}
      <div className='max-w-5xl mx-auto p-5'>
        <article>
          <h1 className='text-7xl font-extrabold my-20'>
            Hello, I&apos;m{' '}
            <span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
              Melissa Kipp
            </span>
          </h1>
          <p className='my-3 text-xl text-gray-600'>Check out my projects!</p>
          <Link href='/projects'>Projects</Link>
        </article>
      </div>
    </>
  );
}
