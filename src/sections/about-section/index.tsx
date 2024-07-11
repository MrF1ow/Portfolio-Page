import SectionTitle from "../../components/section-title";
import SubSectionTitle from "../../components/sub-section-title";
import Description from "../../components/description";
import ExperiencePanel from "./components/experience-panel";
import Cube from "../../components/cube";

/**
 * Content of the About Section
 *
 * @returns {JSX.Element}
 */
function AboutSection({ sectionRef }: SectionProps): JSX.Element {
  return (
    <div ref={sectionRef} className="flex flex-row w-full h-full">
      <div className="w-1/2">
      <SectionTitle title="About" />
      <Description text="I am a full-stack developer with a passion for creating web applications. I have experience with JavaScript, TypeScript, React, Node.js, Express, and MongoDB. I am always looking to learn new technologies and improve my skills." />
      <SubSectionTitle title="Languages" />
      <ExperiencePanel />
      </div>
      <div className="w-1/2">
        <Cube />
      </div>
    </div>
  );
}

export default AboutSection;
