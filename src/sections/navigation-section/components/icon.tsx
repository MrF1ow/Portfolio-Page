import { IconType } from "react-icons";
import { useState } from "react";

interface IconProps {
  icon: IconType;
  isActive?: boolean;
  title?: string;
  size: string;
}

function Icon({ icon, isActive, title, size }: IconProps): JSX.Element {
  const [active, setActive] = useState<boolean>(false);

  const IconComponent = icon;

  const activeClass = isActive
    ? `text-softyellow ${size} transition duration-300 ease-in-out`
    : `text-slate-50 ${size} hover:text-softyellow transition duration-300 ease-in-out`;

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {active && (
        <div className="h-10">
          <h2 className="text-softyellow text-lg">{title}</h2>
        </div>
      )}
      {!active && (
        <div className="h-10">
          <IconComponent className={activeClass} />
        </div>
      )}
    </div>
  );
}

export default Icon;
