import { TypeAnimation } from "react-type-animation";
import pfp from "../../assets/images/pfp.jpg";
import typing from "../../data/typing";

function HomeSection({ sectionRef }: SectionProps): JSX.Element {
  {/*Make the home part be the Hi in the middle, and images floating around it*/}
  return (
    <div ref={sectionRef} className="py-20 w-full">
      <div className="flex flex-col items-center justify-center md:flex-row md:gap-5 lg:gap-10">
        <div className="">
          <img
            src={pfp}
            alt="Profile"
            className="w-72 h-72 rounded-full mb-4 md:mb-0"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="text-4xl font-bold md:text-left lg:text-5xl">Hi, I'm Ethan Flow</h1>
          <p className="text-xl md:text-left lg:text-2xl">
            <TypeAnimation sequence={typing} speed={10} repeat={Infinity} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
