import ExperienceSlot from "./experience-slot";
import { ExperiencePanelProps } from "../../../types";

function Experience({ data }: ExperiencePanelProps): JSX.Element {
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
