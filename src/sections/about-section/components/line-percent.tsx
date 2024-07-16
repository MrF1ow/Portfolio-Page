import { motion } from "framer-motion";

function LinePercent({ percent, color }: LinePercentProps): JSX.Element {
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
