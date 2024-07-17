/* Package Imports */
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

/*
 * MobileMenu Component
 *
 * This component is used to manage the mobile menu.
 *
 * @param {function} toggleMenu - The function to toggle the menu.
 *
 * @returns {JSX.Element} - The MobileMenu component.
 *
 */
function MobileMenu({ toggleMenu }: { toggleMenu: () => void }): JSX.Element {
  return (
    <motion.div
      className="bg-darkgray fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ type: "ease", duration: 0.3 }}
    >
      <IoMdClose
        className="text-white text-4xl absolute top-6 right-4"
        onClick={toggleMenu}
      />
      <div className="flex flex-col gap-10 items-center text-white text-4xl">
        <NavLink to="/" onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={toggleMenu}>
          About
        </NavLink>
        <NavLink to="/projects" onClick={toggleMenu}>
          Projects
        </NavLink>
        <NavLink to="/contact" onClick={toggleMenu}>
          Contact
        </NavLink>
      </div>
    </motion.div>
  );
}
export default MobileMenu;
