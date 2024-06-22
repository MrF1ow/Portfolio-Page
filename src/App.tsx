import { useRef, RefObject } from "react";
import HeaderSection from "./sections/header-section";
import HomeSection from "./sections/home-section";

function App(): JSX.Element {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current){
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
  }

  const sectionRefs: SectionRefs = {
    homeRef,
    aboutRef,
    projectsRef,
    contactRef
  }

  return (
    <div className="w-screen h-total bg-custom-gradient text-slate-50 py-8 px-4 xl:max-w-screen-xl lg:max-w-screen-lg">
      <HeaderSection scrollToSection={scrollToSection} sectionRefs={sectionRefs}/>
      <HomeSection sectionRef={homeRef}/>
    </div>
  );
}

export default App;
