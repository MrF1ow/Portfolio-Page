import { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { AsciiRenderer } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Box from "./box";


function Cube(): JSX.Element {
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
      {/* <EffectComposer>
        <Bloom
          luminanceThreshold={0.3}
          luminanceSmoothing={0.75}
          height={300}
        />
      </EffectComposer> */}

    </Canvas>
  );
}

export default Cube;
