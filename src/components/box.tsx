/* Package Imports */
import * as THREE from "three";
import { useRef, useState, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Edges } from "@react-three/drei";

/* Local Imports */
import BoxSide from "./box-side";

/*
 * Box Component
 *
 * This component is used to manage the box.
 *
 * @param {BoxProps} photos - The photos to be displayed on the box.
 *
 * @returns {JSX.Element} - The Box component.
 *
 */
function Box({ photos, position, rotation }: FullBoxProps): JSX.Element {
  // Reference to the mesh
  const meshRef = useRef<THREE.Mesh>(null!);

  // State to manage the scale of the box
  const [scale, setScale] = useState<number>(1);

  // State to record the window size
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  // Event listener to update the window size
  useEffect(() => {
    const handleResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update the scale of the box based on the window size
  useEffect(() => {
    if (windowSize[0] <= 976) {
      setScale(0.5);
    } else if (windowSize[0] <= 1440) {
      setScale(0.75);
    } else {
      setScale(1);
    }
  }, [windowSize]);

  // Load the photos to usable textures
  const logo1 = useLoader(THREE.TextureLoader, photos[0]);
  const logo2 = useLoader(THREE.TextureLoader, photos[1]);
  const logo3 = useLoader(THREE.TextureLoader, photos[2]);
  const logo4 = useLoader(THREE.TextureLoader, photos[3]);
  const logo5 = useLoader(THREE.TextureLoader, photos[4]);
  const logo6 = useLoader(THREE.TextureLoader, photos[5]);

  // Animate the rotation of the box
  useFrame(() => {
    meshRef.current.rotation.x += 0.004;
    meshRef.current.rotation.y += 0.004;
  });

  return (
    <>
      <mesh position={position} rotation={rotation} ref={meshRef} scale={scale}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial transparent opacity={0.5} />
        <Edges threshold={20} color="white" />

        {/* Left */}
        <BoxSide
          texture={logo1}
          rotation={[0, -Math.PI / 2, 0]}
          position={[-1.5, 0, 0]}
        />

        {/* Front */}
        <BoxSide texture={logo2} rotation={[0, 0, 0]} position={[0, 0, 1.5]} />

        {/* Back */}
        <BoxSide
          texture={logo3}
          rotation={[0, -Math.PI, 0]}
          position={[0, 0, -1.5]}
        />

        {/* Top */}
        <BoxSide
          texture={logo4}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 1.5, 0]}
        />

        {/* Bottom */}
        <BoxSide
          texture={logo5}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.5, 0]}
        />

        {/* Right */}
        <BoxSide
          texture={logo6}
          rotation={[0, Math.PI / 2, 0]}
          position={[1.5, 0, 0]}
        />
      </mesh>
    </>
  );
}

export default Box;
