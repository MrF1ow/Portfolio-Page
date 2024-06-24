import Navigation from "./components/navigation";
import HamburgerOpenIcon from "./components/hambuger-open";
import HamburgerMenu from "./components/hamburger-menu";
import { useState, useEffect } from "react";

/*
  HeaderSection component
  - Contains the navigation bar
  - Changes the style of the navigation bar based on the screen size
  - Prevents scrolling when the menu is open for mobile

  @param scrollToSection: function
  @param sectionRefs: SectionRefs

  @returns JSX.Element
*/
function HeaderSection({
  scrollToSection,
  sectionRefs,
}: NavigationProps): JSX.Element {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [isOpen, setIsOpen] = useState(false);
  const [headerStyle, setHeaderStyle] = useState(
    "container fixed z-10 flex justify-center"
  );

  // set header style based on screen size
  useEffect(() => {
    const handResize = () => {
      setIsDesktop(window.innerWidth > 768);
      if (window.innerWidth > 768) {
        setHeaderStyle("container fixed z-10 flex justify-center");
        setIsOpen(false);
      } else {
        setHeaderStyle("container fixed z-10 flex justify-start");
      }
    };

    window.addEventListener("resize", handResize);

    return () => {
      window.removeEventListener("resize", handResize);
    };
  }, []);

  // prevent scrolling when the menu is open for mobile
  useEffect(() => {
    const handleBodyScroll = () => {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("scroll", handleBodyScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleBodyScroll);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  return (
    <header className={headerStyle}>
      {isDesktop ? (
        <Navigation
          scrollToSection={scrollToSection}
          sectionRefs={sectionRefs}
        />
      ) : (
        <>
          {!isOpen && <HamburgerOpenIcon toggleMenu={toggleMenu} />}
          {isOpen && (
            <HamburgerMenu
              toggleMenu={toggleMenu}
              scrollToSection={scrollToSection}
              sectionRefs={sectionRefs}
            />
          )}
        </>
      )}
    </header>
  );
}

export default HeaderSection;
