

function SectionTitle({ title }: { title: string }): JSX.Element {
  return (
    <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-white">
      {title}
    </h1>
  );
}

export default SectionTitle;