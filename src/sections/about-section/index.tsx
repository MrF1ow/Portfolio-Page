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
      <Description text="Lorem dafsdf asdf asdf asdf asdf asdf asdf asdfnwef uiewrgiuwebgksjkdgbn ieruj gsniugj nsriulgj nrliugjnslifdugj nsleriuj hgqepruilgj hsndlifjkgneurlijg nslieujkgnliurgjkn lrieujgksndfliujnerliujg knslidugjknwelri u jgknlifjkgnlierujkgn liujgknwleiurjkgn wlireg" />
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
