import { Decal } from "@react-three/drei";
import { Texture } from "three";
import { BoxProps } from "../types";

function BoxSide({
  logo,
  position,
  rotation,
}: { logo: Texture} & BoxProps): JSX.Element {
  return (
    <mesh rotation={rotation} position={position}>
      <planeGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial transparent opacity={0.5} />
      <Decal position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[1.5, 1.5, 1.5]}>
        <meshBasicMaterial
          map={logo}
          transparent
          polygonOffset
          polygonOffsetFactor={-1}
        />
      </Decal>
    </mesh>
  );
}

export default BoxSide;
