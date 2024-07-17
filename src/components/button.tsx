/* Package Imports */
import { NavLink } from "react-router-dom";

/*
 * Button Component
 *
 * This component is used to manage the button.
 *
 * @param {string} title - The title of the button.
 * @param {string} path - The path of the button.
 *
 * @returns {JSX.Element} - The Button component.
 *
 */
function Button({ title, path }: StringObject & StringObject): JSX.Element {
  return (
    <NavLink
      to={path}
      className="border-2 w-auto text-center text-2xl border-softyellow text-softyellow hover:text-darkgray hover:bg-softyellow px-4 py-2 rounded-md transition duration-300 ease-in-out font-bold"
    >
      {title}
    </NavLink>
  );
}

export default Button;
