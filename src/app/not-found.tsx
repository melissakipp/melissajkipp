import Link from 'next/link'
 
export default function NotFound() {
  return (
    <article  className='h-[85vh] flex flex-col justify-center items-center'>
      <h2 className='text-2xl font-bold'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className='my-4 py-2 px-4 bg-teal-500 rounded hover:bg-teal-400 transition duration-300' href="/">Return Home</Link>
    </article>
  )
}