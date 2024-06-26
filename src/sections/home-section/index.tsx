import { TypeAnimation } from "react-type-animation";
import typing from "../../data/typing";
import imageData from "../../data/image";
import Carousel from "./components/carousel";

/*
  HomeSection component
  - Contains the home section
  - Contains the images that move horizontally
  - Contains the text that is animated using TypeAnimation

  @param sectionRef: React.RefObject<HTMLDivElement>
  @returns JSX.Element
*/
function HomeSection({ sectionRef }: SectionProps): JSX.Element {
  const images = Object.values(imageData) as ImageProperties[];

  return (
    <div ref={sectionRef} className="py-20 w-full">
        <div className="flex flex-col gap-2">
          <Carousel dir="right" images={images} />
          <Carousel dir="left" images={images} />
          {/* Add more Carousel components here if needed */}
        </div>
      {/* <div className="flex flex-col items-center justify-center w-full h-screen fixed">
        <h1 className="text-4xl font-bold">Hi, I'm Ethan Flow</h1>
        <p className="text-xl lg:text-2xl">
          <TypeAnimation sequence={typing} speed={10} repeat={Infinity} />
        </p>
      </div> */}
    </div>
  );
}

export default HomeSection;
