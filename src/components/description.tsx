import { motion } from "framer-motion";

/*
 * Description Component
 *
 * @param {string} text - Description text
 * @returns {JSX.Element}
 */
function Description({ text }: { text: string }): JSX.Element {
  const words = text.split(" ");

  return (
    <div className="text-lg md:text-xl w-11/12 h-auto mb-8">
      {words.map((word, index) => (
        <span key={index}>
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: (index + charIndex) * 0.025,
              }}
            >
              {char}
            </motion.span>
          ))}{" "}
        </span>
      ))}
    </div>
  );
}

export default Description;
