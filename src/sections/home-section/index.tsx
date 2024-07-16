import Button from "../../components/button";
/*
  HomeSection component

  @returns JSX.Element
*/
function HomeSection(): JSX.Element {
  return (
    <div className="w-full h-full flex items-center justify-start">
      <div className="flex flex-col w-1/2">
        <h1 className="text-6xl font-bold">Hi</h1>
        <h1 className="text-6xl font-bold">I'm Ethan Flow,</h1>
        <h1 className="text-6xl font-bold">software Engineer.</h1>
        <h2 className="text-2xl font-light py-8">
          Computer Science @ Oregon State University
        </h2>
        <div>
          <Button title="Contact Me" path="/contact" />
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
