import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import styled from 'styled-components';



export default function StudioNavbar(props: any) {
  return (
    <div>
      {/* flex flex-row items-center justify-between */}
      <div >
        
        <h1>Studio</h1>
      </div>
      {props.renderDefault(props)}
    </div>
  );
}
