import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavigationSection from "./sections/navigation-section";

function Root(props: any): JSX.Element {
  const [activeNav, setActiveNav] = useState<string>("home");
  const location = useLocation();

  const handleNavClick = (nav: string) => {
    setActiveNav(nav);
    console.log("Link clicked: ", nav);
  };

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    setActiveNav(path || "home");
  }, [location.pathname, setActiveNav]);

  const { children } = props;
  return (
    <main className="w-screen h-screen gap-20 text-slate-50 font-league py-16 px-4 xl:max-w-screen-xl lg:max-w-screen-lg">
      <NavigationSection activeNav={activeNav} />
      {children || <Outlet context={[handleNavClick]} />}
    </main>
  );
}

export default Root;
