"use client"

import * as THREE from 'three';
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useRef, Suspense, useState } from "react";
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations("HomePage");
  return (
    <div className="min-h-screen h-screen lg:min-h-auto flex items-center justify-center">
      <Canvas className="absolute top-0 left-0 w-full h-full">
        <Suspense fallback={null}>
          <Box />
          <Text position={[0, 0, -1]} fontSize={2} color="hotpink" anchorX="center" anchorY="middle">{t("title")}</Text>
        </Suspense> 
      </Canvas>
    </div>
  )
}

function Box() {
  const meshRef = useRef<THREE.Mesh>(null!);

  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => (meshRef.current.rotation.x += delta))

  return (
    <mesh
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}
