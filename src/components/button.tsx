import { NavLink } from "react-router-dom";

function Button({ title, path }: { title: string; path: string }): JSX.Element {
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
