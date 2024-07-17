/*
 * BoxLogo Component
 *
 * This component is used to display the logo on the box.
 *
 * @param {string} imageSrc - The source of the image to be displayed.
 *
 * @returns {JSX.Element} - The BoxLogo component.
 *
 */
function BoxLogo({ imageSrc }: { imageSrc: string }): JSX.Element {
  return (
    <div>
      <img src={imageSrc} alt="Language Logo" className="w-12 h-12" />
    </div>
  );
}

export default BoxLogo;
