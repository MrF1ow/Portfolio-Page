import Button from "../../components/button";
import pfp from "../../assets/images/pfp.jpg";
import SectionTitle from "../../components/section-title";
/*
  HomeSection component

  @returns JSX.Element
*/
function HomeSection(): JSX.Element {
  return (
    <div className="w-full h-full flex items-center justify-start">
      <div className="flex flex-col w-1/2">
        <SectionTitle title="Hi" delay={0.05} />
        <SectionTitle title="I'm Ethan Flow," delay={0.05} />
        <SectionTitle title="software engineer." delay={0.05} />
        <h2 className="text-2xl font-light mb-8">
          Computer Science @ Oregon State University
        </h2>
        <div>
          <Button title="Contact Me" path="/contact" />
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img src={pfp} alt="profile" className="rounded-full w-80 h-80" />
      </div>
    </div>
  );
}

export default HomeSection;
