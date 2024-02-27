'use client'
import { Canvas, useLoader, useFrame} from '@react-three/fiber'
import Globe from './globe'

const Earth = () => {
  return (
   <div className='mt-24 p-5 w-6/12'>
    <Canvas >
    <Globe/>
   </Canvas>
   </div>
  )
}

export default Earth