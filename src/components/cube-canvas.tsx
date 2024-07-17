/* Package Imports */
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

/* Local Imports */
import Box from "./box";
import { languageLogos, frameworkLogos, toolLogos } from "../data/experience";

/*
 * CubeCanvas Component
 *
 * This component is used to manage the cube canvas.
 *
 * @param {string} activeItem - The active items to be displayed on the cube.
 *
 * @returns {JSX.Element} - The CubeCanvas component.
 *
 */
function CubeCanvas({ activeItem }: StringObject ): JSX.Element {
  // State to manage the photos to be displayed on the cube
  const [photos, setPhotos] = useState(languageLogos);

  // Update the photos based on the active item
  useEffect(() => {
    if (activeItem === "languages") {
      setPhotos(languageLogos);
    } else if (activeItem === "frameworks") {
      setPhotos(frameworkLogos);
    } else if (activeItem === "tools") {
      setPhotos(toolLogos);
    }
  }, [activeItem]);

  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <Box photos={photos} position={[0, 0.5, 0]} rotation={[0, 0, 0]} />
      <EffectComposer>
        <Bloom
          intensity={0.5}
          luminanceThreshold={0.3}
          luminanceSmoothing={0.5}
          height={300}
        />
      </EffectComposer>
    </Canvas>
  );
}

export default CubeCanvas;
