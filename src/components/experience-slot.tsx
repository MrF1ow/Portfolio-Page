import LinePercent from './line-percent'

function ExperienceSlot({ title, years, percent, color }: ExSlotProps & LinePercentProps): JSX.Element {
  return (
    <div>
      <p className="flex text-2xl text-white items-center gap-2">
        {title}
        <span className="text-xl font-normal text-gray-400"> - {years} years</span>
      </p>
      <LinePercent percent={percent} color={color} />
    </div>
  )
}

export default ExperienceSlot