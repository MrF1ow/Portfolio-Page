import { GoHomeFill } from "react-icons/go";
import { FaUser, FaFolderOpen } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Icon from "./icon";

interface NavOptionsProps {
  activeNav: string;
}

function NavOptions({ activeNav }: NavOptionsProps): JSX.Element {
  return (
    <div className="flex flex-col w-full gap-8 items-center">
      <NavLink to="/">
        <Icon
          icon={GoHomeFill}
          isActive={activeNav === "home"}
          title="home"
          size="3xl"
        />
      </NavLink>
      <NavLink to="/about">
        <Icon
          icon={FaUser}
          isActive={activeNav === "about"}
          title="about"
          size="3xl"
        />
      </NavLink>
      <NavLink to="/projects">
        <Icon
          icon={FaFolderOpen}
          isActive={activeNav === "projects"}
          title="projects"
          size="3xl"
        />
      </NavLink>
      <NavLink to="/contact">
        <Icon
          icon={MdEmail}
          isActive={activeNav === "contact"}
          title="contact"
          size="3xl"
        />
      </NavLink>
    </div>
  );
}

export default NavOptions;
