import { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Edges, Html, Decal } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import BoxLogo from "./box-logo";
import cppLogo from "../assets/language-logos/cpp.png";

interface BoxProps {
  position: [number, number, number];
}

const Box: React.FC<BoxProps> = (props) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  const cppTexture = useLoader(THREE.TextureLoader, cppLogo);

  useFrame(() => {
    meshRef.current.rotation.x += 0.004;
    meshRef.current.rotation.y += 0.004;
  });

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh {...props} ref={meshRef} scale={1}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial transparent opacity={0.5} />
      <Edges scale={1} threshold={15} color="white" />

      {/* Left */}
      <mesh position={[-1.5, 0, 0]}>
        <boxGeometry args={[0.1, 3, 3]} />
        <meshStandardMaterial transparent opacity={0.5} />
        <Decal
          debug
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={[1, 1, 1]}
        >
          <meshBasicMaterial
            map={cppTexture}
            polygonOffset
            polygonOffsetFactor={-1}
          />
        </Decal>
      </mesh>
    </mesh>
  );
};

function Cube({}): JSX.Element {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={1}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[0, 0, 0]} />
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.3}
          luminanceSmoothing={0.75}
          height={300}
        />
      </EffectComposer>
    </Canvas>
  );
}

export default Cube;
