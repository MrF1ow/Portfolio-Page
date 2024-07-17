/* Package Imports */
import { useState } from "react";


/*
 * Icon Component
 *
 * This component is used to manage the icon.
 *
 * @param {IconProps} icon - The icon to be displayed.
 * @param {boolean} isActive - The active state of the icon.
 * @param {string} title - The title of the icon.
 * @param {string} size - The size of the icon.
 *
 * @returns {JSX.Element} - The Icon component.
 *
 */
function Icon({ icon, isActive, title, size }: NavIconProps): JSX.Element {
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
