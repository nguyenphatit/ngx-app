"use client"

import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  return (
    <div className="hero min-h-screen h-[calc(100vh+300px)] lg:min-h-auto flex items-center justify-center">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }} gl={{ antialias: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[5, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <Sphere color="#8AE600" position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  )
}

function Sphere({ color, position }: { color: string, position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Group>(null);
  const sphereLineRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!sphereRef.current || !sphereLineRef.current) return;

    gsap.to(sphereRef.current.scale, {
      x: 0.3,
      y: 0.3,
      z: 0.3,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=500",
        scrub: true,
      },
      ease: "power2.out"
    });

    gsap.to(sphereLineRef.current.scale, {
      x: 0.33,
      y: 0.33,
      z: 0.33,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=500",
        scrub: true,
      },
      ease: "power2.out"
    })
  }, [])

  return (
    <group position={position} ref={groupRef}>
      <mesh scale={[4.03, 4.03, 4.03]} ref={sphereLineRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial color="black" side={THREE.BackSide} />
      </mesh>
      <mesh scale={[4, 4, 4]} castShadow ref={sphereRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  )
}