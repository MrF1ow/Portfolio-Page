import SectionTitle from "../../components/section-title";

/**
 * Content of the About Section
 *
 * @returns {JSX.Element}
 */
function AboutSection({ sectionRef }: SectionProps): JSX.Element {
  return (
    <div ref={sectionRef} className="py-20 w-full h-screen">
      <SectionTitle title="About" />
    </div>
  );
}

export default AboutSection;
