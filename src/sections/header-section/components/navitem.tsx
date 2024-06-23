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
      transition={{ duration: 0.2}}
    >
      {text}
    </motion.li>
  );
}

export default NavItem;
