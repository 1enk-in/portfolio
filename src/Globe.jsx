import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function GlobeModel() {
  const gltf = useGLTF('/globe/scene.gltf');

  return (
    <primitive
      object={gltf.scene}
      scale={50}              // Uniform scale
      position={[0, -50, 0]} // Lower a bit if needed
      rotation={[0, 0, 0]}
    />
  );
}

export default function Globe() {
  return (
    <div className="globe-container">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 45 }}
        style={{ width: '100%', height: '100%' }} // ✅ Explicit canvas sizing
      >
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <GlobeModel />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.2}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
