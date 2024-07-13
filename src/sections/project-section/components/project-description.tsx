function ProjectDescription({
  description,
}: {
  description: string;
}): JSX.Element {
  return <p className="w-full flex flex-wrap">{description}</p>;
}

export default ProjectDescription;
