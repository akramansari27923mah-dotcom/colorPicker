import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function PortalRing() {
  const ringRef = useRef();

  useFrame(() => {
    ringRef.current.rotation.z += 0.01;
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[2, 0.4, 16, 100]} />
      <meshStandardMaterial
        color="#6366f1"
        emissive="#4f46e5"
        emissiveIntensity={1.5}
      />
    </mesh>
  );
}

export default function CosmicPortal() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={1} />
        <pointLight position={[5, 5, 5]} />
        <PortalRing />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
