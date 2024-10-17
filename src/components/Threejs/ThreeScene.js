'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

function RotatingBox({ color }) {
  const meshRef = useRef()
  useFrame((state, delta) => {
    if (meshRef.current) {
      // meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
    }
  })
  return (
    <Box ref={meshRef} args={[2, 2, 2]}>
      <meshStandardMaterial color={color} />
    </Box>
  )
}

export default function ThreeScene() {
  return (
    <div className='h-[400px]'>
      <Canvas camera={{ position: [5, 5, 5] }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingBox color={'rgba(129,73,138,.5)'}/>
        {/* <gridHelper args={[10, 10]} /> */}
      </Canvas>
    </div>
  );
}
