import NavOptions from "./components/nav-options";
import SocialOptions from "./components/social-options";
import Logo from "./components/logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import MobileMenu from "./components/mobile-menu";

function NavigationSection({ activeNav, isMobile }: NavProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="top-0 left-0 fixed z-10 flex bg-darkgray lg:h-screen lg:w-[6%] xl:w-[4%] h-[10%] md:h-[6%] lg:px-4 lg:py-2 lg:flex-col w-screen px-2 py-4 flex-row justify-between">
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
