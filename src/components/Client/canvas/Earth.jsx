import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../templates/Loader";

const Earth = () => {
  const earth = useGLTF("./macbook_pro_open/scene.gltf");

  return (
    <primitive
      object={earth.scene}
      scale={30} // Adjust scale for appropriate size
      position-y={-1.5} // Lower the position if needed
      rotation={[0, Math.PI / 9, 0]} // Rotate 45° on the Y-axis Slight rotation for better perspective
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fav: 45, // Adjust the field of view
        near: 0.1,
        far: 500,
        position: [0, 2, 12], // Adjust camera position for better framing
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} /> {/* General light */}
      <directionalLight
        position={[10, 10, 5]} // Position for directional light
        intensity={1.5}
        castShadow
      />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        // autoRotate={false}
          autoRotate
          enableZoom={false}
          // enableZoom={true} // Allow zooming
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3} // Adjust to limit rotation
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
