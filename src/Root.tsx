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
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);

  const { children } = props;
  return (
    <main className="w-screen h-screen text-slate-50 font-league py-16 px-4 xl:max-w-screen-xl lg:max-w-screen-lg">
      <div className="mb-6 lg:mb-0">
        <NavigationSection activeNav={activeNav} isMobile={isMobile} />
      </div>
      <div className="absolute left-0 top-[14%] flex items-center lg:left-[10%] xl:left-[4%] lg:w-[90%] xl:w-[96%] px-6">
        {children || <Outlet context={[isMobile]} />}
      </div>
    </main>
  );
}

export default Root;
