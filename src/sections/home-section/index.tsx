function HomeSection({ sectionRef }: SectionProps): JSX.Element {
  {/* Add Padding to all sections to make sure that when scrolling happens it will not go in the header */}
  return <div ref={sectionRef} className="translate-y-96 py-20 h-screen bg-black">Hello World</div>;
}

export default HomeSection;
