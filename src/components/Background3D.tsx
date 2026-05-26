"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

// All shape configs computed ONCE via useMemo — never inside render/frame
function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  const shapes = useMemo(() => {
    const types = ["torus", "icosahedron", "octahedron", "cone", "box", "tetrahedron"];
    return Array.from({ length: 22 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 25 - 8,
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ] as [number, number, number],
      scale: Math.random() * 0.6 + 0.3,
      type: types[Math.floor(Math.random() * types.length)],
      wireframe: Math.random() > 0.55,
      color: Math.random() > 0.5 ? "#f97316" : "#3b82f6",
      speed: Math.random() * 0.8 + 0.4,
      floatIntensity: Math.random() * 1.5 + 0.5,
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.04;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.04) * 0.08;

      const mouseX = (state.pointer.x * Math.PI) / 10;
      const mouseY = (state.pointer.y * Math.PI) / 10;
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, mouseX, 0.04);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, mouseY, 0.04);
    }
  });

  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => (
        <Float key={i} speed={shape.speed} rotationIntensity={0.6} floatIntensity={shape.floatIntensity}>
          <mesh position={shape.position} rotation={shape.rotation} scale={shape.scale}>
            {shape.type === "torus" && <torusGeometry args={[1, 0.28, 10, 22]} />}
            {shape.type === "icosahedron" && <icosahedronGeometry args={[1, 0]} />}
            {shape.type === "octahedron" && <octahedronGeometry args={[1, 0]} />}
            {shape.type === "cone" && <coneGeometry args={[0.7, 1.6, 6]} />}
            {shape.type === "box" && <boxGeometry args={[1, 1, 1]} />}
            {shape.type === "tetrahedron" && <tetrahedronGeometry args={[1, 0]} />}

            {/* Lightweight standard material — NO transmission/glass refraction */}
            <meshStandardMaterial
              color={shape.color}
              metalness={0.4}
              roughness={0.35}
              transparent
              opacity={shape.wireframe ? 0.55 : 0.28}
              wireframe={shape.wireframe}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-transparent">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
        eventSource={typeof window !== "undefined" ? document.body : undefined}
        eventPrefix="client"
      >
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={2.5} color="#f97316" />
        <pointLight position={[10, -10, -5]} intensity={2.5} color="#3b82f6" />
        <pointLight position={[0, 10, 5]} intensity={1} color="#a855f7" />

        <Stars radius={100} depth={50} count={3500} factor={4} saturation={0} fade speed={1} />

        <FloatingShapes />
      </Canvas>
    </div>
  );
}
