/* Package Imports */
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";

/* Local Imports */
import SectionTitle from "../../components/section-title";
import {
  DeluxeProjectCard,
  RegularProjectCard,
} from "./components/project-card";
import { projectInformation } from "../../data/projects";

/**
 * ProjectSection Component
 *
 * This component is used to manage the project section.
 *
 * @returns {JSX.Element}
 */
function ProjectSection(): JSX.Element {
  const [isMobile]: [boolean] = useOutletContext();

  // Framer Motion Variants for the container
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Framer Motion Variants for the card
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col h-full w-full">
      <SectionTitle title="Portfolio" delay={0.15} color="text-softyellow" />
      <div className="flex flex-col pb-6">
        {/* Check if the user is on a mobile device */}
        {isMobile ? (
          <motion.div
            className="flex flex-col gap-4"
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
            className="flex flex-row flex-wrap gap-4 pb-6"
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
