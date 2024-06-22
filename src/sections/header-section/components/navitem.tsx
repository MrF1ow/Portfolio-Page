import { motion } from "framer-motion";
import { RefObject } from "react";

interface NavItemProps {
  text: string;
  sectionRef: RefObject<HTMLDivElement>;
  scrollToSection: (ref: RefObject<HTMLDivElement>) => void;
  setHoveredItem: (index: number | null) => void;
  hoveredItem: number | null;
}

function NavItem({
  text,
  sectionRef,
  scrollToSection,
  setHoveredItem,
  hoveredItem,
}: NavItemProps): JSX.Element {
  return (
    <motion.li
      className="cursor-pointer"
      onClick={() => scrollToSection(sectionRef)}
      onMouseEnter={() => {
        setHoveredItem(hoveredItem);
        console.log("hoveredItem", hoveredItem);
      } }
      onMouseLeave={() => setHoveredItem(null)}
    >
      {text}
    </motion.li>
  );
}

export default NavItem;
