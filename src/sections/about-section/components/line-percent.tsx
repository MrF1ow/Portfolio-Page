/* Package Import */
import { motion } from "framer-motion";

/*
 * LinePercent Component
 *
 * This component is used to manage the line for experience percent.
 *
 * @param {number} percent - The percentage of experience.
 * @param {string} color - The color of the experience slot.
 *
 * @returns {JSX.Element} - The LinePercent component.
 *
 * */
function LinePercent({ percent, color }: LineProps): JSX.Element {

  // Set the style for the line.
  const style = {
    width: `${percent}%`,
    height: "20px",
    backgroundColor: color,
    borderRadius: "3px",
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${percent}%` }}
      transition={{ duration: 1 }}
      style={style}
    ></motion.div>
  );
}

export default LinePercent;
