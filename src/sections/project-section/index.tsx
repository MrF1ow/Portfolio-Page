import SectionTitle from "../../components/section-title";
import ProjectCard from "./components/project-card";
import { projectInformation } from "../../data/projects";
import { motion } from "framer-motion";

/**
 * Content of the Project Section
 *
 * @returns {JSX.Element}
 */
function ProjectSection(): JSX.Element {
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
    <>
      <SectionTitle title="Portfolio" />
      <div className="flex flex-col w-full">
        <motion.div
          className="flex flex-row flex-wrap gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectInformation.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ProjectCard
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
      </div>
    </>
  );
}

export default ProjectSection;
