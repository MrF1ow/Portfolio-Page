/* Package Imports */
import { NavLink } from "react-router-dom";

/*
 * Logo Component
 *
 * This component is used to manage the logo.
 *
 * @returns {JSX.Element} - The Logo component.
 *
 */
function Logo(): JSX.Element {
  return (
    <NavLink to="/" className="flex flex-row items-center gap-2 lg:flex-col lg:gap-0">
        <h1 className="text-white text-2xl lg:text-xl font-bold">Ethan</h1>
        <h2 className="text-white text-2xl lg:text-lg font-bold">Flow</h2>
    </NavLink>
  );
}

export default Logo;
