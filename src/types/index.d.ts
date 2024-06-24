interface HamburgerIconProps {
  toggleMenu: () => void;
}

interface SectionRefs {
  homeRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

interface NavigationProps {
  scrollToSection: (ref: RefObject<HTMLDivElement>) => void;
  sectionRefs: SectionRefs;
}
interface SectionProps {
  sectionRef: RefObject<HTMLDivElement>;
}

type AnimatedTextProps = {
  text: string;
};
