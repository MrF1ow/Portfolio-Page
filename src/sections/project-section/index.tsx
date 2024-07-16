import SectionTitle from "../../components/section-title";
import ProjectCard from "./components/project-card";
import { projectInformation } from "../../data/projects";

/**
 * Content of the Project Section
 *
 * @returns {JSX.Element}
 */
function ProjectSection(): JSX.Element {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="mb-8">
        <SectionTitle title="Projects" />
      </div>
      <div className="flex flex-row flex-wrap gap-x-4 h-full">
        {projectInformation.map((project, index) => (
          <ProjectCard
            key={index}
            backgroundSrc={project.image}
            title={project.title}
            description={project.description}
            comprises={project.comprisedOf}
            size={project.size}
            src={project.src}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
