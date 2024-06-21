import HamburgerCloseIcon from "./hambuger-close";

function HamburgerMenu({ toggleMenu }: HamburgerIconProps): JSX.Element {
  return (
    <div className="w-full h-auto translate-x-6 bg-brightyellow text-black">
        <HamburgerCloseIcon toggleMenu={toggleMenu} />
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
  );
}

export default HamburgerMenu;
