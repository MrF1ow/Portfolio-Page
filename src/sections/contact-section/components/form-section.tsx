/*
 * This component is used to create the form fields for the contact form.
 *
 * @param {string} descriptor - The descriptor for the form field
 * @param {string} type - The type of the form field
 * @param {string} width - The width of the form field
 *
 * @returns {JSX.Element}
 * */
function FormSection({ descriptor, type, width }: FormProps): JSX.Element {
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let inputClass = `p-2 bg-darkgray ${width} text-lg md:text-xl lg:text-2xl`;

  return (
    <>
      {type === "message" ? (
        <textarea
          id={descriptor}
          name={descriptor}
          placeholder={capitalizeFirstLetter(descriptor)}
          className={inputClass}
          required={true}
        />
      ) : (
        <input
          type={type}
          id={descriptor}
          name={descriptor}
          placeholder={capitalizeFirstLetter(descriptor)}
          className={inputClass}
          required={true}
        />
      )}
    </>
  );
}

export default FormSection;
