/* Package Imports */
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

/* Local Imports */
import SectionTitle from "../../components/section-title";
import ContactForm from "./components/contact-form";
import Description from "../../components/description";
import { contactDescription } from "../../data/section-descriptions";

/**
 * ContactSection Component
 *
 * This component is used to manage the content of the contact section.
 * It contains the description of the section and the contact form.
 * It also contains the links to the LinkedIn and email.
 *
 * @returns {JSX.Element} - The ContactSection component.
 */
function ContactSection(): JSX.Element {
  /*
   * This function is used to handle the click event of the email icon.
   * It copies the email address to the clipboard.
   *
   * @returns {void}
   * */
  const handleEmailClick = () => {
    const email = "eflow1280@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email address copied to clipboard");
      })
      .catch((err) => {
        console.log("Failed to copy email address to clipboard:", err);
      });
  };

  const iconClass = "text-6xl md:text-7xl lg:text-8xl text-softyellow";

  return (
    <div className="flex flex-col w-full h-full">
      <SectionTitle title="Contact Me" delay={0.15} color="text-softyellow" />
      <div className="w-full flex flex-col lg:flex-row gap-10 md:gap-8 lg:gap-0">
        <div className="w-full lg:w-1/2 flex flex-col h-5/6">
          <Description text={contactDescription} />
          <div className="flex flex-row justify-evenly">
            <a href="https://www.linkedin.com/in/ethanflow/">
              <FaLinkedin className={iconClass} />
            </a>
            <a onClick={handleEmailClick}>
              <MdEmail className={iconClass} />
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center h-full pb-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
