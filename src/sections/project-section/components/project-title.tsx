function ProjectTitle({ title }: { title: string }): JSX.Element {
  return (
    <div className="flex flex-row w-full">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
    </div>
  );
}

export default ProjectTitle;
