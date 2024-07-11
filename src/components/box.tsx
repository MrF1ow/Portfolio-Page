import { useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Edges, Decal, useTexture, OrbitControls } from "@react-three/drei";
import CppLogo from "../assets/language-logos/javascript.png";

interface BoxProps {
  position: [number, number, number];
}

const Box: React.FC<BoxProps> = ({ position }) => {
  const groupRef = useRef<THREE.Group>(null!);

  const cppTexture = useTexture(CppLogo);

  useFrame(() => {
    groupRef.current.rotation.x += 0.004;
    groupRef.current.rotation.y += 0.004;
  });

  const sides = [
    { position: [0, 0, 0.5], rotation: [0, 0, 0] }, // Front
    { position: [0, 0, -0.5], rotation: [0, Math.PI, 0] }, // Back
    { position: [0.5, 0, 0], rotation: [0, Math.PI / 2, 0] }, // Right
    { position: [-0.5, 0, 0], rotation: [0, -Math.PI / 2, 0] }, // Left
    { position: [0, 0.5, 0], rotation: [Math.PI / 2, 0, 0] }, // Top
    { position: [0, -0.5, 0], rotation: [-Math.PI / 2, 0, 0] }, // Bottom
  ];

  // Return view, these are regular three.js elements expressed in JSX
  const adjustTexture = (texture: any) => {
    texture.repeat.set(0.9, 0.9); // Scales down the image
    texture.offset.set(0.05, 0.05); // Centers the image
    return texture;
  };

  // Adjust the cppTexture before using it
  const adjustedCppTexture = adjustTexture(cppTexture);

  // Then use adjustedCppTexture in the meshBasicMaterial
  return (
    <group ref={groupRef} position={position}>
      {sides.map((side, index) => (
        <mesh
          key={index}
          position={new THREE.Vector3(...side.position)}
          rotation={new THREE.Euler(...side.rotation)}
        >
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial map={adjustedCppTexture} />
        </mesh>
      ))}
    </group>
  );
};

export default Box;
