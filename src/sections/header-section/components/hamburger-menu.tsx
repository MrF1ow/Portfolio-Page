import HamburgerCloseIcon from "./hambuger-close";
import { motion } from "framer-motion";

function HamburgerMenu({ toggleMenu }: HamburgerIconProps): JSX.Element {
  return (
    <motion.div
      className="fixed w-11/12 h-screen flex flex-col py-2 gap-3 bg-slate-100 text-black inset-y-0 left-0 px-4"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "ease", duration: 0.3 }}
    >
      <div className="pt-6">
        <HamburgerCloseIcon toggleMenu={toggleMenu} />
      </div>
      <ul className="flex flex-col gap-6 pt-6 pb-4 font-league font-semibold text-2xl">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <p className="font-mont text-base">
        &copy; 2024 Made by Ethan Flow.
        <br />
        All rights reserved.
      </p>
    </motion.div>
  );
}

export default HamburgerMenu;
