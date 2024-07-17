import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavigationSection from "./sections/navigation-section";

function Root(props: any): JSX.Element {
  const [activeNav, setActiveNav] = useState<string>("home");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    setActiveNav(path || "home");
  }, [location.pathname, setActiveNav]);

  useEffect(() => {
    if (window.innerWidth <= 912) {
      setIsMobile(true);
    }
  }, []);

  const { children } = props;
  return (
    <main className="w-screen h-screen text-slate-50 font-league py-16 px-4 xl:max-w-screen-xl lg:max-w-screen-lg">
      <div className="mb-6 lg:mb-0">
        <NavigationSection activeNav={activeNav} isMobile={isMobile} />
      </div>
      <div className="h-[90%] md:lg:h-full lg:translate-y-0 flex lg:w-[90%] xl:w-[96%] px-4 md:px-2 lg:px-0 py-4 lg:translate-x-[10%] xl:translate-x-[4%] translate-x-0">
        {children || <Outlet context={[isMobile]} />}
      </div>
    </main>
  );
}

export default Root;
