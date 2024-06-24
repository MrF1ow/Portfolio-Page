import { useState, useEffect } from "react";
import NavItem from "./nav-item";

/*
  Navigation component
  - Contains the navigation items
  - Changes the style of the navigation bar based on the scroll position

  @returns JSX.Element
*/
function Navigation({
  scrollToSection,
  sectionRefs,
}: NavigationProps): JSX.Element {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [navStyle, setNavStyle] = useState<string>(
    "py-2 px-4 rounded-xl transition duration-300 ease-in-out"
  );

  // set nav style based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setNavStyle(
          "bg-slate-100 bg-opacity-15 py-2 px-4 rounded-xl transition duration-300 ease-in-out"
        );
      } else {
        setNavStyle("py-2 px-4 rounded-xl transition duration-300 ease-in-out");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={navStyle}>
      <ul className="flex lg:gap-20 lg:text-2xl md:gap-16 md:text-2xl">
        <NavItem
          text="Home"
          sectionRef={sectionRefs.homeRef}
          scrollToSection={scrollToSection}
          setHoveredItem={setHoveredItem}
          index={0}
          currentHoveredItem={hoveredItem}
        />
        <NavItem
          text="About"
          sectionRef={sectionRefs.aboutRef}
          scrollToSection={scrollToSection}
          setHoveredItem={setHoveredItem}
          index={1}
          currentHoveredItem={hoveredItem}
        />
        <NavItem
          text="Projects"
          sectionRef={sectionRefs.projectsRef}
          scrollToSection={scrollToSection}
          setHoveredItem={setHoveredItem}
          index={2}
          currentHoveredItem={hoveredItem}
        />
        <NavItem
          text="Contact"
          sectionRef={sectionRefs.contactRef}
          scrollToSection={scrollToSection}
          setHoveredItem={setHoveredItem}
          index={3}
          currentHoveredItem={hoveredItem}
        />
      </ul>
    </nav>
  );
}

export default Navigation;
