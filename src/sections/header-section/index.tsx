import Navigation from "./components/navigation";
import HamburgerOpenIcon from "./components/hambuger-open";
import HamburgerMenu from "./components/hamburger-menu";
import { useState, useEffect } from "react";

function HeaderSection(): JSX.Element {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [isOpen, setIsOpen] = useState(false);
  const [headerStyle, setHeaderStyle] = useState("flex justify-center");

  useEffect(() => {
    const handResize = () => {
      setIsDesktop(window.innerWidth > 768);
      if (window.innerWidth > 768) {
        setHeaderStyle("w-full flex justify-center");
        setIsOpen(false);
      }else{
        setHeaderStyle("w-full flex justify-start");
      }
    };

    window.addEventListener("resize", handResize);

    return () => {
      window.removeEventListener("resize", handResize);
    };
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className={headerStyle}>
      {isDesktop ? (
        <Navigation />
      ) : (
        <>
          {!isOpen && <HamburgerOpenIcon toggleMenu={toggleMenu} />}
          {isOpen && <HamburgerMenu toggleMenu={toggleMenu} />}
        </>
      )}
    </header>
  );
}

export default HeaderSection;
