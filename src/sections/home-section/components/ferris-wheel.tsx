import { motion } from "framer-motion";

interface FerrisWheelProps {
  imageData: ImageProperties[];
}

function FerrisWheel({ imageData }: FerrisWheelProps): JSX.Element {
  return (
    <>
      {imageData.map((image, index: number) => (
        <motion.div
          className="h-5/6 absolute overflow-hidden"
          key={index}
          initial="initial"
          animate={["animate", "initialHide"]}
          variants={{
            initial: {
              opacity: 0,
            },
            initialHide: {
              opacity: 1,
              transition: {
                delay: index * 2.5,
              },
            },
            animate: {
              rotate: -360,
              transition: {
                duration: imageData.length * 2.5,
                repeat: Infinity,
                delay: index * 2.5,
                ease: "linear",
              },
            },
          }}
        >
          <img className={image.style} src={image.src} alt={image.alt} />
        </motion.div>
      ))}
    </>
  );
}

export default FerrisWheel;
