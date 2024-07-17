
/*
 * ProjectComposistion Component
 *
 * This component is used to display the composition of a project.
 *
 * @param {string[]} comprises - The technologies used in the project
 *
 * @returns {JSX.Element}
 */
function ProjectComposition({ comprises }: ProjectComposition): JSX.Element {
  return (
    <div className="flex gap-2 w-full flex-wrap">
      {comprises.map((item, index) => (
        <div key={index} className="font-bold text-slate-100">
          {item}
        </div>
      ))}
    </div>
  );
}

export default ProjectComposition;
