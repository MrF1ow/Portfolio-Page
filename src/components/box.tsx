import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import BoxSide from "./box-side";
import { useFrame, useLoader } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import { BoxProps } from "../types";

function Box({
  photos,
  ...props
}: BoxProps & { photos: string[] }): JSX.Element {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [scale, setScale] = useState<number>(1);

  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowSize[0] <= 976) {
      setScale(0.5);
    } else if (windowSize[0] <= 1440) {
      setScale(0.75);
    } else {
      setScale(1);
    }
  }, [windowSize]);

  const logo1 = useLoader(THREE.TextureLoader, photos[0]);
  const logo2 = useLoader(THREE.TextureLoader, photos[1]);
  const logo3 = useLoader(THREE.TextureLoader, photos[2]);
  const logo4 = useLoader(THREE.TextureLoader, photos[3]);
  const logo5 = useLoader(THREE.TextureLoader, photos[4]);
  const logo6 = useLoader(THREE.TextureLoader, photos[5]);

  useFrame(() => {
    meshRef.current.rotation.x += 0.004;
    meshRef.current.rotation.y += 0.004;
  });

  return (
    <>
      <mesh {...props} ref={meshRef} scale={scale}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial transparent opacity={0.5} />
        <Edges threshold={20} color="white" />

        {/* Left */}
        <BoxSide
          logo={logo1}
          rotation={[0, -Math.PI / 2, 0]}
          position={[-1.5, 0, 0]}
        />

        {/* Front */}
        <BoxSide logo={logo2} rotation={[0, 0, 0]} position={[0, 0, 1.5]} />

        {/* Back */}
        <BoxSide
          logo={logo3}
          rotation={[0, -Math.PI, 0]}
          position={[0, 0, -1.5]}
        />

        {/* Top */}
        <BoxSide
          logo={logo4}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 1.5, 0]}
        />

        {/* Bottom */}
        <BoxSide
          logo={logo5}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.5, 0]}
        />

        {/* Right */}
        <BoxSide
          logo={logo6}
          rotation={[0, Math.PI / 2, 0]}
          position={[1.5, 0, 0]}
        />
      </mesh>
    </>
  );
}

export default Box;
