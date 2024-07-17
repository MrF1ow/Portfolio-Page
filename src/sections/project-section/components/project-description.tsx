/*
 * ProjectDescription Component
 *
 * This component is used to display the description of the project.
 *
 * @param {string} description - The description of the project
 *
 * @returns {JSX.Element}
 */
function ProjectDescription({
  description,
}: {
  description: string;
}): JSX.Element {
  return <p className="w-full break-words">{description}</p>;
}

export default ProjectDescription;
