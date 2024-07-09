

function SectionTitle({ title }: { title: string }): JSX.Element {
  return (
    <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl text-white">
      {title}
    </h1>
  );
}

export default SectionTitle;