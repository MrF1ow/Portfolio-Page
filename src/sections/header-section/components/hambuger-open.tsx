function HamburgerOpenIcon({ toggleMenu }: HamburgerIconProps): JSX.Element {
  return (
    <div onClick={toggleMenu}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
        />
      </svg>
    </div>
  );
}

export default HamburgerOpenIcon;
