
import { Canvas, useLoader, useFrame} from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import React, { useRef } from 'react'

const Globe = () => {

    const [color, normal, aoMap] = useLoader(TextureLoader, [

        '/assets/color.jpg',
    
        '/assets/2.png',
    
        '/assets/occlusion.jpg'
    
    ])

 const globe = useRef();

useFrame((state, delta) => {
  globe.current.rotation.y += 0.0025;
})

  return (
    <>
    <ambientLight  intensity={0.1}/>
    <directionalLight intensity={3.5} position={[1, 0, -.25]} />
    <mesh scale={2.5} ref={globe}> 
      <sphereGeometry args={[1,64,64]}/>
      <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap}/>
    </mesh>
    </>
  )
}

export default Globe