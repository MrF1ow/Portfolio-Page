function Navigation(): JSX.Element {
  return (
    <nav>
      <ul className="flex font-league lg:gap-20 lg:text-2xl md:gap-16 md:text-2xl">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
