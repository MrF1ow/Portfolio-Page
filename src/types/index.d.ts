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

interface ImageProperties {
  src: string;
  alt: string;
}

type AnimatedTextProps = {
  text: string;
};

interface AnimationValues {
  xTranslation: MotionValue<number>;
  totalWidth: React.MutableRefObject<number>;
  direction: React.MutableRefObject<"left" | "right">;
}
