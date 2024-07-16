import LinePercent from "./line-percent";

function ExperienceSlot({
  title,
  years,
  percent,
  color,
}: ExSlotProps & LinePercentProps): JSX.Element {
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
