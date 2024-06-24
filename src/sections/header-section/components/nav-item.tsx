import { motion } from "framer-motion";
import { RefObject } from "react";

interface NavItemProps {
  text: string;
  sectionRef: RefObject<HTMLDivElement>;
  scrollToSection: (ref: RefObject<HTMLDivElement>) => void;
  setHoveredItem: (index: number | null) => void;
  index: number;
  currentHoveredItem: number | null;
}

/*
  NavItem component
  - Contains a navigation item

  @param text: string
  @param sectionRef: RefObject<HTMLDivElement>
  @param scrollToSection: function
  @param setHoveredItem: function
  @param index: number
  @param currentHoveredItem: number | null

  @returns JSX.Element
*/
function NavItem({
  text,
  sectionRef,
  scrollToSection,
  setHoveredItem,
  index,
  currentHoveredItem,
}: NavItemProps): JSX.Element {
  return (
    <motion.li
      className="cursor-pointer"
      onClick={() => scrollToSection(sectionRef)}
      onMouseEnter={() => setHoveredItem(index)}
      onMouseLeave={() => setHoveredItem(null)}
      animate={{ opacity: currentHoveredItem !== null && currentHoveredItem !== index ? 0.5 : 1 }}
      transition={{ duration: 0.3}}
    >
      {text}
    </motion.li>
  );
}

export default NavItem;
