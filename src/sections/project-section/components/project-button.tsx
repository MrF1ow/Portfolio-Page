/*
 * ProjectButton Component
 *
 * Button that redirects to the project's link.
 *
 * @param {string} linkSrc - The link to the project
 * @returns {JSX.Element}
 */
function ProjectButton({ linkSrc }: StringObject): JSX.Element {
  return (
    <a
      className="border-slate-50 border-2 px-2 py-1 rounded-md hover:text-darkgray hover:bg-slate-50 transition duration-300 w-1/4 text-center"
      href={linkSrc}
    >
      View
    </a>
  );
}

export default ProjectButton;
