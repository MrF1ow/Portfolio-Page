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
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 976);
    };

    if (window.innerWidth <= 976) {
      setIsMobile(true);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeNav]);

  const { children } = props;
  return (
    <main className="w-screen h-screen text-slate-50 font-league py-16 md:py-18 lg:py-16 xl:py-14 px-4 xl:max-w-screen-xl lg:max-w-screen-lg overflow-y-auto">
      <div className="mb-6 lg:mb-0">
        <NavigationSection activeNav={activeNav} isMobile={isMobile} />
      </div>
      <div className="h-[92%] w-full md:lg:h-full lg:translate-y-0 lg:w-[90%] xl:w-[96%] lg:translate-x-[10%] xl:translate-x-[4%] translate-x-0 py-0 md:py-4 lg:py-0">
        {children || <Outlet context={[isMobile]} />}
      </div>
    </main>
  );
}

export default Root;
