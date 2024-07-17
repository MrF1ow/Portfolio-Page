import { useRef } from "react";
import emailjs from "@emailjs/browser";
import FormSection from "./form-section";

/*
 * ContactForm component is a form that sends an email to the owner of the website.
 *
 * @returns {JSX.Element}
 */
function ContactForm(): JSX.Element {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }
    emailjs
      .sendForm(
        "service_vvmo2po",
        "template_ydxmazn",
        form.current,
        "xh9jTb0gwoALgWkey"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-y-4">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 lg:justify-between">
          <FormSection
            descriptor="name"
            type="text"
            width="w-full lg:w-[48%]"
          />
          <FormSection
            descriptor="email"
            type="email"
            width="w-full lg:w-[48%]"
          />
        </div>
        <FormSection descriptor="message" type="message" width="w-full" />
        <button
          type="submit"
          value="send"
          className="xl:w-[10%] md:w-[50%] w-full text-lg md:text-xl lg:text-2xl bg-darkgray border border-darkgray py-2 hover:text-darkgray hover:bg-transparent transition-all duration-150 ease-in-out"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
