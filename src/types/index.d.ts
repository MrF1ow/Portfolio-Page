import { Line } from "@react-three/drei";

interface HamburgerIconProps {
  toggleMenu: () => void;
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

interface LinePercentProps {
  percent: number;
  color?: string;
}

interface ExSlotProps {
  title: string;
  years: string;
}

interface NavProps {
  activeNav: string;
}

type ExperienceData = {
  title: string;
  years: number;
  color: string;
  percent: number;
}

interface ExperiencePanelProps {
  data: ExperienceData[];
}
