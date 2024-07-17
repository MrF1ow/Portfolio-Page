import SectionTitle from "../../components/section-title";
import {
  DeluxeProjectCard,
  RegularProjectCard,
} from "./components/project-card";
import { projectInformation } from "../../data/projects";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";

/**
 * Content of the Project Section
 *
 * @returns {JSX.Element}
 */
function ProjectSection(): JSX.Element {
  const [ isMobile ] = useOutletContext();

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col w-full">
      <SectionTitle title="Portfolio" delay={0.15} />
      <div className="flex flex-col w-full">
        {isMobile ? (
          <motion.div
            className="flex flex-col gap-4 w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projectInformation.map((project, index) => (
              <motion.div key={index} variants={cardVariants}>
                <RegularProjectCard
                  key={index}
                  backgroundSrc={project.image}
                  title={project.title}
                  src={project.src}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="flex flex-row flex-wrap gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projectInformation.map((project, index) => (
              <motion.div key={index} variants={cardVariants}>
                <DeluxeProjectCard
                  key={index}
                  backgroundSrc={project.image}
                  title={project.title}
                  description={project.description}
                  comprises={project.comprisedOf}
                  size={project.size}
                  src={project.src}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default ProjectSection;
