import NavOptions from "./components/nav-options";
import SocialOptions from "./components/social-options";
import Logo from "./components/logo";

function NavigationSection({ activeNav }: NavProps): JSX.Element {
  return (
    <nav className="top-0 left-0 fixed bg-darkgray h-screen w-[4%] px-4 py-2 flex flex-col justify-between">
      <Logo />
      <NavOptions activeNav={activeNav} />
      <SocialOptions />
    </nav>
  );
}

export default NavigationSection;
