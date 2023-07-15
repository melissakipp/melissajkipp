import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import styled from 'styled-components';



export default function StudioNavbar(props: any) {
  return (
    <>
      <div className='flex flex-row items-center justify-between p-5'>
        <Link href='/' className='text-primary text-bold'>
          <ArrowUturnLeftIcon className='h-6 w-6 text-primary inline-block mr-3' aria-hidden='true' />
          Go To Website
        </Link>

        <div className='hidden md:flex p-2 rounded-lg justify-center border-2 border-purple-500'>
          <h1 className='font-[600]'>Studio Dashboard — Explore, Create and Share</h1>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </>
  );
}
