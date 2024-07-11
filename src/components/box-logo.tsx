function BoxLogo({ imageSrc }: { imageSrc: string }): JSX.Element {
  return (
    <div>
      <img src={imageSrc} alt="Language Logo" className="w-12 h-12" />
    </div>
  );
}

export default BoxLogo;
