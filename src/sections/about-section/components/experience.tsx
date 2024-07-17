/* Local Imports */
import { ExperienceData } from "../../../types";
import ExperienceSlot from "./experience-slot";

/*
 * Experience Component
 *
 * This component is used to manage the experience section.
 *
 * @param {ExperienceProps} data - The data to be displayed in the experience section.
 *
 * @returns {JSX.Element} - The Experience component.
 *
 * */
function Experience({ data }: ExperienceProps): JSX.Element {
  return (
    <div className="py-6 flex flex-col gap-3">
      {data.map((item, index) => (
        <ExperienceSlot
          key={index}
          title={item.title}
          percent={item.percent}
          years={item.years}
          color={item.color}
        />
      ))}
    </div>
  );
}

export default Experience;
