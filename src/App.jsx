import { useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  ScrollControls,
  useGLTF,
  useScroll,
} from "@react-three/drei";
import gsap from "gsap";
import { Office } from "./components/Office";
import Overlay from "./components/Overlay";

function App() {
  return (
    <Canvas
      camera={{
        fov: 64,
        position: [2.3, 1.5, 2.3],
      }}
      style={{ height: "100vh", width: "100vw" }}
    >
      <RotatingCube />
    </Canvas>
  );
}

export default App;

function RotatingCube() {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} enableRotate={false}/>
      <ScrollControls pages={1}>
        <Overlay />

      </ScrollControls>
      <ScrollControls pages={3} damping={0.25}>
        <Office />
      </ScrollControls>
    </>
  );
}



