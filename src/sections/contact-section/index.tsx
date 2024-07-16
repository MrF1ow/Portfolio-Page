import SectionTitle from "../../components/section-title";
import ContactForm from "./components/contact-form";
import Description from "../../components/description";
import { contactDescription } from "../../data/section-descriptions";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

/**
 * Content of the Contact Section
 *
 * @returns {JSX.Element}
 */
function ContactSection(): JSX.Element {
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
  return (
    <>
      <SectionTitle title="Contact Me" />
      <div className="w-full flex flex-row">
        <div className="w-1/2 flex flex-col h-5/6">
          <Description text={contactDescription} />
          <div className="flex flex-row justify-evenly">
            <a href="https://www.linkedin.com/in/ethanflow/">
              <FaLinkedin className="text-8xl" />
            </a>
            <a onClick={handleEmailClick}>
              <MdEmail className="text-8xl" />
            </a>
          </div>
        </div>
        <div className="w-1/2 flex items-center h-full">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default ContactSection;
