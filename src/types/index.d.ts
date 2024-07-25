import { Line } from "@react-three/drei";
import { Texture } from "three";
import { IconType } from "react-icons";

/*
 * StringObject Interface
 *
 * General interface for objects with string keys and string values.
 * */
interface StringObject {
  [key: string]: string;
}
interface GeneralBoxProps {
  position: [number, number, number];
  rotation: [number, number, number];
}
interface FullBoxProps extends GeneralBoxProps {
  activeItem: string;
}
interface BoxSideProps extends GeneralBoxProps {
  texture: Texture;
}

interface CubeCanvasProps {
  activeItem: string;
}

interface SectionTitleProps {
  title: string;
  delay: number;
  color: string;
}

interface LineProps {
  percent: number;
  color: string;
}

interface PartExperienceData {
  title: string;
  years: number;
}

type ExperienceData = PartExperienceData & LineProps;

interface ExperienceProps {
  data: ExperienceData[];
}
interface ExperiencePanelProps {
  title: string;
  data: ExperienceData[];
}

interface FormProps {
  descriptor: string;
  type: string;
  width: string;
}

interface OutletProps {
  isMobile: boolean;
}

interface NavOptionsProps {
  activeNav: string;
}

type NavSectionProps = NavOptionsProps & OutletProps;

interface NavIconProps {
  icon: IconType;
  isActive?: boolean;
  title?: string;
  size: string;
}

interface RegularProjectCardProps {
  backgroundSrc: string;
  title: string;
  src: string;
}

type ProjectComposition = {
  comprises: string[];
};

interface DeluxeProjectCardProps extends RegularProjectCardProps {
  description: string;
  comprises: string[];
  size?: string;
}
