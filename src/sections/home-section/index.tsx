import { TypeAnimation } from "react-type-animation";
import typing from "../../data/typing";
import pfp from "../../assets/images/pfp.jpg";

/*
  HomeSection component
  - Contains the home section
  - Contains the images that move horizontally
  - Contains the text that is animated using TypeAnimation

  @param sectionRef: React.RefObject<HTMLDivElement>
  @returns JSX.Element
*/
function HomeSection({ sectionRef }: SectionProps): JSX.Element {
  return (
    <div ref={sectionRef} className="py-20 w-full h-screen">
      <div className="flex flex-col items-center justify-center md:flex-row md:gap-5 lg:gap-10 h-5/6">
        <img
          src={pfp}
          alt="Profile"
          className="w-72 h-72 rounded-full mb-4 md:mb-0"
        />
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="text-4xl font-bold md:text-left lg:text-5xl">
            Hi, I'm Ethan Flow
          </h1>
          <p className="text-xl md:text-left lg:text-2xl">
            <TypeAnimation sequence={typing} speed={10} repeat={Infinity} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
