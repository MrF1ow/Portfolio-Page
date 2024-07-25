/* Package Imports */
import * as THREE from "three";
import { useRef, useState, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Edges } from "@react-three/drei";

/* Local Imports */
import BoxSide from "./box-side";
import { languageLogos, frameworkLogos, toolLogos } from "../data/experience";

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
function Box({ activeItem, position, rotation }: FullBoxProps): JSX.Element {
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

  const language1 = useLoader(THREE.TextureLoader, languageLogos[0]);
  const language2 = useLoader(THREE.TextureLoader, languageLogos[1]);
  const language3 = useLoader(THREE.TextureLoader, languageLogos[2]);
  const language4 = useLoader(THREE.TextureLoader, languageLogos[3]);
  const language5 = useLoader(THREE.TextureLoader, languageLogos[4]);
  const language6 = useLoader(THREE.TextureLoader, languageLogos[5]);

  const framework1 = useLoader(THREE.TextureLoader, frameworkLogos[0]);
  const framework2 = useLoader(THREE.TextureLoader, frameworkLogos[1]);
  const framework3 = useLoader(THREE.TextureLoader, frameworkLogos[2]);
  const framework4 = useLoader(THREE.TextureLoader, frameworkLogos[3]);
  const framework5 = useLoader(THREE.TextureLoader, frameworkLogos[4]);
  const framework6 = useLoader(THREE.TextureLoader, frameworkLogos[5]);

  const tool1 = useLoader(THREE.TextureLoader, toolLogos[0]);
  const tool2 = useLoader(THREE.TextureLoader, toolLogos[1]);
  const tool3 = useLoader(THREE.TextureLoader, toolLogos[2]);
  const tool4 = useLoader(THREE.TextureLoader, toolLogos[3]);
  const tool5 = useLoader(THREE.TextureLoader, toolLogos[4]);
  const tool6 = useLoader(THREE.TextureLoader, toolLogos[5]);

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

        {activeItem === "languages" && (
          <>
            {/* Left */}
            <BoxSide
              texture={language1}
              rotation={[0, -Math.PI / 2, 0]}
              position={[-1.5, 0, 0]}
            />

            {/* Front */}
            <BoxSide
              texture={language2}
              rotation={[0, 0, 0]}
              position={[0, 0, 1.5]}
            />

            {/* Back */}
            <BoxSide
              texture={language3}
              rotation={[0, -Math.PI, 0]}
              position={[0, 0, -1.5]}
            />

            {/* Top */}
            <BoxSide
              texture={language4}
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, 1.5, 0]}
            />

            {/* Bottom */}
            <BoxSide
              texture={language5}
              rotation={[Math.PI / 2, 0, 0]}
              position={[0, -1.5, 0]}
            />

            {/* Right */}
            <BoxSide
              texture={language6}
              rotation={[0, Math.PI / 2, 0]}
              position={[1.5, 0, 0]}
            />
          </>
        )}
        {activeItem === "frameworks" && (
          <>
            {/* Left */}
            <BoxSide
              texture={framework1}
              rotation={[0, -Math.PI / 2, 0]}
              position={[-1.5, 0, 0]}
            />

            {/* Front */}
            <BoxSide
              texture={framework2}
              rotation={[0, 0, 0]}
              position={[0, 0, 1.5]}
            />

            {/* Back */}
            <BoxSide
              texture={framework3}
              rotation={[0, -Math.PI, 0]}
              position={[0, 0, -1.5]}
            />

            {/* Top */}
            <BoxSide
              texture={framework4}
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, 1.5, 0]}
            />

            {/* Bottom */}
            <BoxSide
              texture={framework5}
              rotation={[Math.PI / 2, 0, 0]}
              position={[0, -1.5, 0]}
            />

            {/* Right */}
            <BoxSide
              texture={framework6}
              rotation={[0, Math.PI / 2, 0]}
              position={[1.5, 0, 0]}
            />
          </>
        )}
        {activeItem === "tools" && (
          <>
            {/* Left */}
            <BoxSide
              texture={tool1}
              rotation={[0, -Math.PI / 2, 0]}
              position={[-1.5, 0, 0]}
            />

            {/* Front */}
            <BoxSide
              texture={tool2}
              rotation={[0, 0, 0]}
              position={[0, 0, 1.5]}
            />

            {/* Back */}
            <BoxSide
              texture={tool3}
              rotation={[0, -Math.PI, 0]}
              position={[0, 0, -1.5]}
            />

            {/* Top */}
            <BoxSide
              texture={tool4}
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, 1.5, 0]}
            />

            {/* Bottom */}
            <BoxSide
              texture={tool5}
              rotation={[Math.PI / 2, 0, 0]}
              position={[0, -1.5, 0]}
            />

            {/* Right */}
            <BoxSide
              texture={tool6}
              rotation={[0, Math.PI / 2, 0]}
              position={[1.5, 0, 0]}
            />
          </>
        )}
      </mesh>
    </>
  );
}

export default Box;
