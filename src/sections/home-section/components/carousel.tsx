import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import useMeasure from "react-use-measure";
import Card from "./card";
import imageData from "../../../data/image";

interface CarouselProps {
  dir: string;
  images: ImageProperties[];
}

function Carousel({ dir, images }: CarouselProps): JSX.Element {
  // gives width of the container
  let [containerRef, { width: containerWidth }] = useMeasure();

  // xTranslation is the motion value that will be animated
  const xTranslation = useMotionValue(0);

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [totalWidth, setTotalWidth] = useState(0);

  useEffect(() => {
    const widths = cardsRef.current.map((card) => card?.offsetWidth || 0);
    const totalCardsWidth = widths.reduce((acc, width) => acc + width, 0);

    const gapWidth = 16; // 16px for gap-4 in Tailwind CSS
    const totalGapWidth = gapWidth * (images.length * 2);

    // calculate the total width including gaps
    const totalWidth = totalCardsWidth + totalGapWidth;
    setTotalWidth(totalWidth);
  }, [images, containerWidth]);

  useEffect(() => {
    let controls;
    let finalPosition = -totalWidth / 2;

    let aniDir = [];
    if (dir === "left") {
      aniDir = [0, finalPosition];
    } else {
      aniDir = [finalPosition, 0];
    }

    controls = animate(xTranslation, aniDir, {
      ease: "linear",
      duration: 30,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
      onUpdate: (latest) => {
        if (latest <= finalPosition) {
          xTranslation.set(0);
        }
      },
    });

    return controls.stop;
  }, [xTranslation, totalWidth]);

  const imagesV2 = Object.values(imageData) as ImageProperties[];

  const loopedImages = [...imagesV2, ...imagesV2];

  return (
    <motion.div
      ref={containerRef}
      className="relative left-0 flex gap-4"
      style={{ x: xTranslation  }}
    >
      {loopedImages.map((image, index) => (
        <Card
          src={image.src}
          alt={image.alt}
          key={index}
          ref={el => (cardsRef.current[index] = el)}
        />
      ))}
    </motion.div>
  );
}

export default Carousel;