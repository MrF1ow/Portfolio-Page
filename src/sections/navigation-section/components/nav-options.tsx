/* Package Imports */
import { GoHomeFill } from "react-icons/go";
import { FaUser, FaFolderOpen } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

/* Local Imports */
import Icon from "./icon";

/*
 * NavOptions Component
 *
 * This component is used to manage the navigation options.
 *
 * @param {string} activeNav - The active navigation option.
 *
 * @returns {JSX.Element} - The NavOptions component.
 *
 */
function NavOptions({ activeNav }: NavOptionsProps): JSX.Element {
  return (
    <div className="flex flex-col w-full gap-y-14 xl:gap-8 items-center">
      <NavLink to="/">
        <Icon
          icon={GoHomeFill}
          isActive={activeNav === "home"}
          title="home"
          size="text-4xl xl:text-3xl"
        />
      </NavLink>
      <NavLink to="/about">
        <Icon
          icon={FaUser}
          isActive={activeNav === "about"}
          title="about"
          size="text-4xl xl:text-3xl"
        />
      </NavLink>
      <NavLink to="/projects">
        <Icon
          icon={FaFolderOpen}
          isActive={activeNav === "projects"}
          title="portfolio"
          size="text-4xl xl:text-3xl"
        />
      </NavLink>
      <NavLink to="/contact">
        <Icon
          icon={MdEmail}
          isActive={activeNav === "contact"}
          title="contact"
          size="text-4xl xl:text-3xl"
        />
      </NavLink>
    </div>
  );
}

export default NavOptions;
