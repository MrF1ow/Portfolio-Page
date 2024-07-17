/* Local Imports */
import Button from "../../components/button";
import pfp from "../../assets/images/pfp.jpg";
import SectionTitle from "../../components/section-title";

/*
 * HomeSection component
 *
 * This component is used to manage the home section.
 *
 * @returns {JSX.Element} - The HomeSection component.
 */
function HomeSection(): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col-reverse lg:flex-row gap-y-8 lg:gap-y-0 lg:justify-between justify-end items-center">
      <div className="flex flex-col w-full items-center lg:items-start lg:w-1/2">
        <SectionTitle title="Hi" delay={0.05} color="text-slate-50" />
        <SectionTitle
          title="I'm Ethan Flow,"
          delay={0.05}
          color="text-slate-50"
        />
        <SectionTitle
          title="software engineer."
          delay={0.05}
          color="text-slate-50"
        />
        <h2 className="text-2xl font-light lg:mb-8 md:mb-6 mb-4 items-center sm:justify-center text-center md:text-start">
          Computer Science @ Oregon State University
        </h2>
        <Button title="Contact Me" path="/contact" />
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={pfp}
          alt="profile"
          className="rounded-full h-56 w-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 md:w-64 md:h-64"
        />
      </div>
    </div>
  );
}

export default HomeSection;
