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

  const iconClass = "text-6xl md:text-7xl lg:text-8xl";
  return (
    <div className="flex flex-col w-full">
      <SectionTitle title="Contact Me" delay={0.15} />
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
        <div className="w-full lg:w-1/2 flex items-center h-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
