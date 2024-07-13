import { motion } from "framer-motion";
import ProjectTitle from "./project-title";
import ProjectDescription from "./project-description";

function ProjectCard({
  backgroundSrc,
  title,
  description,
  size,
}: {
  backgroundSrc: string;
  title: string;
  description: string;
  size?: string;
}): JSX.Element {
  const sizeClass = size === "small" ? "w-[250px]" : "w-[400px]";
  const cardClass = `relative flex flex-col h-[300px] ${sizeClass} bg-cover bg-center rounded-xl overflow-hidden shadow-lg`;
  const textContainerClass =
    "absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 p-4";

  return (
    <div
      className={cardClass}
      style={{ backgroundImage: `url(${backgroundSrc})` }}
    >
      <motion.div
        className={textContainerClass}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.div
          variants={{
            rest: { y: 0, opacity: 1 },
            hover: { y: -20, opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
        >
          <ProjectTitle title={title} />
        </motion.div>
        <motion.div
          variants={{
            rest: { opacity: 0, height: 0 },
            hover: { opacity: 1, height: "auto" },
          }}
          transition={{ duration: 0.3 }}
        >
          <ProjectDescription description={description} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ProjectCard;
