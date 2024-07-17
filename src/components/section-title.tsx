/* Package Imports */
import { motion } from "framer-motion";

/*
 * Section Title Component
 *
 * @param {string} title - Title of the section
 * @param {number} delay - Delay between each letter
 * @param {string} color - Color of the title
 *
 * @returns {JSX.Element}
 */
function SectionTitle({ title, delay, color }: SectionTitleProps): JSX.Element {
  const letterVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const titleClass = `text-4xl font-bold md:text-5xl lg:text-5xl xl:text-6xl lg:pb-8 md:pb-6 pb-4 ${color}`;

  return (
    <h1 className={titleClass}>
      {title.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate="visible"
          variants={letterVariants}
          transition={{ duration: 1, delay: index * delay }}
        >
          {letter}
        </motion.span>
      ))}
    </h1>
  );
}

export default SectionTitle;
