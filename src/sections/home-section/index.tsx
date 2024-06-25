import { TypeAnimation } from "react-type-animation";
import typing from "../../data/typing";
import imageData from "../../data/image";
import Card from "./components/card";
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect } from "react";
import useMeasure from "react-use-measure";

// figure this out, you need to get it to not jump back for the first image when it "loops"
function HomeSection({ sectionRef }: SectionProps): JSX.Element {
  const images = Object.values(imageData) as ImageProperties[];

  // gives width of the container
  let [containerRef, { width }] = useMeasure();

  // xTranslation is the motion value that will be animated
  const xTranslation = useMotionValue(0);

  useEffect(() => {

    let controls;
    let finalPosition = -width / 2 - 8;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div ref={sectionRef} className="py-20 w-full">
      <motion.div
        ref={containerRef}
        className="absolute left-0 flex gap-4"
        style={{ x: xTranslation }}
      >
        {[...images].map((image, index) => (
          <Card
            src={image.src}
            alt={image.alt}
            style={image.style}
            key={index}
          />
        ))}
      </motion.div>
      {/* <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Hi, I'm Ethan Flow</h1>
        <p className="text-xl lg:text-2xl">
          <TypeAnimation sequence={typing} speed={10} repeat={Infinity} />
        </p>
      </div> */}
    </div>
  );
}

export default HomeSection;
