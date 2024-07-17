/* Local Imports */
import LinePercent from "./line-percent";

/*
 * ExperienceSlot component
 *
 * This component is used to manage the experience slot.
 *
 * @param {string} title - The title of the experience slot.
 * @param {number} years - The years of experience.
 * @param {number} percent - The percentage of experience.
 * @param {string} color - The color of the experience slot.
 *
 * @returns {JSX.Element} - The ExperienceSlot component.
 *
 * */
function ExperienceSlot({
  title,
  years,
  percent,
  color,
}: ExperienceData ): JSX.Element {
  const yearText = years === 1 ? "year" : "years";
  return (
    <div>
      <p className="flex text-xl md:text-2xl text-white items-center gap-2">
        {title}
        <span className="text-lg md:text-xl font-normal text-gray-400">
          {" "}
          - {years} {yearText}
        </span>
      </p>
      <LinePercent percent={percent} color={color} />
    </div>
  );
}

export default ExperienceSlot;
