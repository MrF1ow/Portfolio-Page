/* Package Imports */
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

/* Local Imports */
import NavOptions from "./components/nav-options";
import SocialOptions from "./components/social-options";
import Logo from "./components/logo";
import MobileMenu from "./components/mobile-menu";

/*
 * NavigationSection Component
 *
 * This component is used to manage the navigation section (nav bar).
 *
 * @param {string} activeNav - The active navigation option.
 * @param {boolean} isMobile - The boolean to check if the device is mobile.
 *
 * @returns {JSX.Element} - The NavigationSection component.
 *
 */
function NavigationSection({
  activeNav,
  isMobile,
}: NavSectionProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="top-0 left-0 fixed z-10 flex bg-darkgray lg:h-screen lg:w-[6%] xl:w-[4%] h-[8%] md:h-[6%] lg:px-4 lg:py-2 lg:flex-col w-screen px-4 flex-row justify-between">
      <Logo />
      {!isMobile && (
        <>
          <NavOptions activeNav={activeNav} />
          <SocialOptions />
        </>
      )}
      {isMobile && (
        <div className="flex flex-row items-center">
          <GiHamburgerMenu
            className="text-white text-3xl"
            onClick={handleMenuToggle}
          />
        </div>
      )}
      {isMenuOpen && isMobile && <MobileMenu toggleMenu={handleMenuToggle} />}
    </nav>
  );
}

export default NavigationSection;
