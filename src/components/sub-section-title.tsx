import { StringObject } from "../types";

/*
 * SubSectionTitle Component
 *
 * This component is used to manage the sub section title.
 *
 * @param {string} title - The title of the sub section.
 *
 * @returns {JSX.Element} - The SubSectionTitle component.
 *
 * */
function SubSectionTitle({ title }: StringObject): JSX.Element {
  return <h2 className="text-2xl md:3xl font-bold text-softyellow">{title}</h2>;
}

export default SubSectionTitle;
