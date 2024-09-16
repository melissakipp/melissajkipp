import Image from 'next/image';

import HomePageImage from '@/public/images/desert-rabbit_3721_by-melissajkipp.jpg';


export default function Home() {
  return (
    <div className="m-auto flex min-h-[80vh] items-center justify-center">
      <article className="grid grid-cols-1 lg:grid-cols-2">
        <section className="m-auto flex items-center justify-center">
          <figure>
            <Image
              src={HomePageImage}
              alt="A photo by Melissa J Kipp of a scenery viewpoint of Arizona landscape."
              width={255}
              height={355}
              placeholder="blur"
              className="my-8 object-cover border border-gray-300 rounded-3xl shadow-lg"
            />
          </figure>
          <figcaption></figcaption>
        </section>
        <section className="flex flex-col items-center justify-center">
          <h1 className="border-b-4 text-3xl font-extrabold lg:mx-6 lg:text-5xl">Melissa J Kipp</h1>
          <p className="my-[2vh] text-xl text-gray-900">Full Stack Developer</p>
          <h2 className='font-bold'>Current Technologies:</h2>
          <ul>
            <li className="my-[2vh] text-center text-md text-gray-900">Next.js&nbsp;&nbsp;&nbsp;Sanity.io&nbsp;&nbsp;&nbsp;Shopify</li>
            <li className="my-[2vh] text-center text-md text-gray-900">Wordpress&nbsp;&nbsp;&nbsp;Python&nbsp;&nbsp;&nbsp;PHP</li>
            <li className="my-[2vh] text-center text-md text-gray-900">AWS&nbsp;&nbsp;&nbsp;Vercel</li>
          </ul>
        </section>
      </article>
    </div>
  );
}
