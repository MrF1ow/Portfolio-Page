import { NavLink } from "react-router-dom";

function Button({ title, path }: { title: string, path: string }): JSX.Element {
  return (
    <NavLink to={path} className="border-2 border-yellow-500 text-yellow-500 hover:text-darkgray hover:bg-yellow-500 px-4 py-2 rounded-md transition duration-300 ease-in-out font-bold">
      {title}
    </NavLink>
  );
}

export default Button;
