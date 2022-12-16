
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useState } from "react";
import {Model} from './Final'
import { Office } from "./Office";
import { PerspectiveCamera } from '@react-three/drei'
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import './ModelContainer.css';



export default function ModelContainer() {
  const [action, setAction] = useState("saluer");

  return (
    <>
          
          <Canvas onClick={()=>{setAction('talk')}} position={[0, 0, 0]} style={{ width: '100%', height: '100%' }}> 
      <mesh > 
      <OrbitControls minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 3} minDistance={10} maxDistance={25} minAzimuthAngle={-Math.PI / 2} maxAzimuthAngle={Math.PI / 2}/>
      <directionalLight intensity={0.5} />
      <ambientLight intensity={0.3} />
      <Suspense fallback={null}>
      <group scale={[2, 2, 2]} position={[0, 0.25, 3]}>
      <Model action={action}/>
</group>

<Office/>
      </Suspense>
      <Environment preset="sunset" />
      </mesh>
    </Canvas>
    
    </>
  );
}
