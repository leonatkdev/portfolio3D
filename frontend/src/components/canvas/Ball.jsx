import React , {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture} from '@react-three/drei'
import CanvasLoader from '../templates/Loader'


const Ball = ({imgUrl}) => {
  const [decal]  =  useTexture([imgUrl])
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 1]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
        color="#fefefe"
        polygonOffset
        polygonOffsetFactor={-50}
        flatShading
        />
        <Decal
          position={[0, 0, -1]}
          rotation={[2 * Math.PI, 0 , 6.25]}
          map={decal}
        />
         <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0 , 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) => {
  return (
    <Canvas
    frameloop="demand"
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}
      />
      <Ball imgUrl={icon} />
    </Suspense>

    <Preload all />
  </Canvas>
  )
}

export default BallCanvas