import { FaGithub, FaLinkedin } from "react-icons/fa";

function SocialOptions(): JSX.Element {
  const iconStyles =
    "text-slate-50 text-3xl xl:text-2xl hover:text-regyellow transition duration-300 ease-in-out";
  return (
    <div className="flex flex-col items-center gap-3">
      <a href="https://github.com/MrF1ow">
        <FaGithub className={iconStyles} />
      </a>
      <a href="https://www.linkedin.com/in/ethanflow/">
        <FaLinkedin className={iconStyles} />
      </a>
    </div>
  );
}

export default SocialOptions;
