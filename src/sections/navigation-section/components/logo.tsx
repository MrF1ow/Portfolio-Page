import { NavLink } from "react-router-dom";

function logo(): JSX.Element {
  return (
    <NavLink to="/" className="flex flex-col items-center gap-2">
      <div className="flex flex-col items-center gap-0">
        <h1 className="text-white text-2xl font-bold">Ethan</h1>
        <h2 className="text-white text-lg font-bold">Flow</h2>
      </div>
    </NavLink>
  );
}

export default logo;
