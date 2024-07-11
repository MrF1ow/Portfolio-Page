import ExperienceSlot from "../../../components/experience-slot";
import { langauegeExperience } from "../../../data/experience";

function ExperiencePanel({}): JSX.Element {
  return (
    <div className="py-6 flex flex-col gap-3">
      {langauegeExperience.map((experience, index) => (
        <ExperienceSlot
          key={index}
          title={experience.title}
          percent={experience.percent}
          years={experience.years}
          color={experience.color}
        />
      ))}
    </div>
  );
}

export default ExperiencePanel;
