import Image from 'next/image';

import HomePageImage from '@/public/images/gallery-20_l.webp';


export default function Home() {
  return (
    <div className="m-auto flex min-h-[76vh] items-center justify-center">
    <article className="grid grid-cols-1 lg:grid-cols-2">
      <section className="m-auto flex items-center justify-center">
        <figure className="m-[4vh]">
          <Image
            src={HomePageImage}
            alt="A photo by Melissa J Kipp of a scenery viewpoint of Arizona landscape."
            width={255}
            height={255}
            placeholder="blur"
            className="rounded-lg shadow-md"
          />
        </figure>
      </section>
      <section className="flex flex-col items-center justify-center">
        <h1 className="border-b-4 text-3xl font-extrabold lg:mx-5 lg:text-5xl">Melissa J Kipp</h1>
        <p className="my-[2vh] text-xl text-gray-900">Full Stack Developer</p>
        <h2 className='font-bold'>Current Technologies:</h2>
        <ul>
          <li className="my-[2vh] text-center text-md text-gray-900">Next.js&nbsp;&nbsp;&nbsp;Santiy.io&nbsp;&nbsp;&nbsp;Shopify</li>
          <li className="my-[2vh] text-center text-md text-gray-900">Wordpress&nbsp;&nbsp;&nbsp;Python&nbsp;&nbsp;&nbsp;PHP</li>
          <li className="my-[2vh] text-center text-md text-gray-900">AWS&nbsp;&nbsp;&nbsp;Vercel</li>
        </ul>
      </section>
    </article>
  </div>
  );
}
