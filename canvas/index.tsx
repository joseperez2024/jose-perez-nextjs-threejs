'use client'

import { Canvas } from '@react-three/fiber'
import { Center, Environment } from '@react-three/drei'

import { BackDrop, CameraRig, Shirt } from '@/components'

const CanvasClient = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className='w-full h-full max-w-full transittion-all ease-in'
    >
      <ambientLight intensity={0.5} />
      <Environment preset='city' />
      <CameraRig>
        <BackDrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasClient
