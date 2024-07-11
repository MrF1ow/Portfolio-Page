import { useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Edges, Decal, useTexture, OrbitControls, Svg } from "@react-three/drei";
import JsLogo from "../assets/language-logos/javascript.png";
interface BoxProps {
  position: [number, number, number];
}

const Box: React.FC<BoxProps> = (props) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  const jsLogo = useLoader(THREE.TextureLoader, JsLogo);

  // useFrame(() => {
  //   meshRef.current.rotation.x += 0.004;
  //   meshRef.current.rotation.y += 0.004;
  // });

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <>
      <OrbitControls />
      <mesh {...props} ref={meshRef} scale={1}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial transparent opacity={0.5} />
        <Edges scale={1} threshold={15} color="white" />

        {/* Left */}
        <mesh rotation={[0, -Math.PI / 2, 0]} position={[-1.5, 0, 0]}>
          <planeGeometry args={[1, 1, 1]} />
          <meshStandardMaterial transparent opacity={0.5} />
          <Decal
            debug
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={[1, 1, 1]}
          >
            <meshBasicMaterial
              map={jsLogo}
              polygonOffset
              polygonOffsetFactor={-1}
            />
          </Decal>
        </mesh>

        {/* Right */}
        <mesh rotation={[0, Math.PI / 2, 0]} position={[1.5, 0, 0]}>
          <planeGeometry args={[2, 2, 3]} />
          <meshStandardMaterial transparent opacity={0.5} />
          {/* <Decal
            debug
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={[3, 2, 2]}
          >
            <meshBasicMaterial
              map={CppLogo}
              polygonOffset
              polygonOffsetFactor={-1}
            />
          </Decal> */}
        </mesh>
      </mesh>
    </>
  );
};

export default Box;
