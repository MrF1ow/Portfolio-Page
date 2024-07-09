import { useRef, useState } from "react";
import * as THREE from "three";
import { useSpring, a } from "@react-spring/three";
import { Canvas } from "@react-three/fiber";
import { Edges, Html } from "@react-three/drei";
import SectionTitle from "../../components/section-title";

interface BoxProps {
  position: [number, number, number];
}

const Box: React.FC<BoxProps> = (props) => {

  const meshRef = useRef<THREE.Mesh>(null!);

  const [active, setActive] = useState(false);


  // React spring animations
  const { scale } = useSpring({
    scale: active ? [1.1, 1.1, 1.1] : [1, 1, 1],
    config: { mass: 1, tension: 500, friction: 100, precision: 0.001 },
  });

  const { rotation } = useSpring({
    rotation: active ? [0, Math.PI / 1.5, 0] : [0, Math.PI / 3, 0],
    config: { mass: 1, tension: 500, friction: 100, precision: 0.001 },
    onRest: () => {
      if (!active) {
        setActive(true);
      }
    },
  });

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <a.mesh
      {...props}
      ref={meshRef}
      scale={scale}
      rotation={rotation}
      onPointerOver={() => setActive(true)}
    >
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial transparent opacity={0.5} />
      <Edges scale={1} threshold={15} color="white" />

      {/* Left */}
      <mesh position={[-1.5, 0, 0]}>
        <boxGeometry args={[0.1, 3, 3]} />
        <meshStandardMaterial transparent opacity={0} />
        {active && (
          <Html position={props.position}>
            <SectionTitle title="hello" />
          </Html>
        )}
      </mesh>
    </a.mesh>
  );
};

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
    </Canvas>
  );
}

export default Cube;
