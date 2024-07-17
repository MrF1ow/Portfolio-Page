import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Box from "./box";

import { languageLogos, frameworkLogos, toolLogos } from "../data/experience";

function CubeCanvas({ activeItem }: { activeItem: string }): JSX.Element {
  const [photos, setPhotos] = useState(languageLogos);

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
