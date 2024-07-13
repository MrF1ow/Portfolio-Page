import React from "react";
import SectionTitle from "../../components/section-title";
import ProjectCard from "./components/project-card";
import ppTest from "../../assets/images/ppTest.png";
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
      <ProjectCard backgroundSrc={ppTest} title="Project Title" description="asdfadfasdfasfasdfasfasdfadfasdfasfasdfasdfasdfasdfas" size="small"/>
    </div>
  );
}

export default ProjectSection;
