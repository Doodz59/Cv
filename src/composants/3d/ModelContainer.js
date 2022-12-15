
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useState } from "react";
import {Model} from './Final'
import { PerspectiveCamera } from '@react-three/drei'
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import './ModelContainer.css';
import Profil from "../profil/Profil";


export default function ModelContainer() {
  const [action, setAction] = useState("saluer");

  return (
    <>
          <Profil/>
    <Canvas onClick={()=>{setAction('talk')}}> 
      <mesh > 
      <OrbitControls />
      <directionalLight intensity={0.5} />
      <ambientLight intensity={0.3} />
      <Suspense fallback={null}>
        
      <Model action={action} />

      </Suspense>
      <Environment preset="sunset" />
      </mesh>
    </Canvas>
    <div className="controls">
      
    </div>
    </>
  );
}
