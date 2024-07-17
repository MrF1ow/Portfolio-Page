
/* Package Imports */
import { Decal } from "@react-three/drei";

/*
 * BoxSide Component
 *
 * This component is used to manage the side of the box.
 *
 * @param {Texture} texture - The logo to be displayed on the side of the box.
 * @param {BoxProps} position - The position of the side of the box.
 * @param {BoxProps} rotation - The rotation of the side of the box.
 *
 * @returns {JSX.Element} - The BoxSide component.
 *
 * */
function BoxSide({
  texture,
  position,
  rotation,
}: BoxSideProps): JSX.Element {
  return (
    <mesh rotation={rotation} position={position}>
      <planeGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial transparent opacity={0.5} />
      <Decal position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[1.5, 1.5, 1.5]}>
        <meshBasicMaterial
          map={texture}
          transparent
          polygonOffset
          polygonOffsetFactor={-1}
        />
      </Decal>
    </mesh>
  );
}

export default BoxSide;
