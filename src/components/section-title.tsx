import { motion } from "framer-motion";

const letterVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

/*
 * Section Title Component
 *
 * @param {string} title - Title of the section
 * @returns {JSX.Element}
 */
function SectionTitle({ title }: { title: string }): JSX.Element {
  return (
    <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-white pb-8">
      {title.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate="visible"
          variants={letterVariants}
          transition={{ duration: 1, delay: index * 0.15 }}
        >
          {letter}
        </motion.span>
      ))}
    </h1>
  );
}

export default SectionTitle;
