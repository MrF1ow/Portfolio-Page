import { motion } from "framer-motion";
import ProjectTitle from "./project-title";
import ProjectDescription from "./project-description";
import ProjectButton from "./project-button";
import ProjectComposition from "./project-composition";

/*
 * This component is used to display a project card.
 *
 * @param {string} backgroundSrc - The background image of the card
 * @param {string} title - The title of the project
 * @param {string} description - The description of the project
 * @param {string[]} comprises - The technologies used in the project
 * @param {string} [size] - The size of the card
 * @param {string} src - The link to the project
 * @returns {JSX.Element}
 */
export function DeluxeProjectCard({
  backgroundSrc,
  title,
  description,
  comprises,
  size,
  src,
}: {
  backgroundSrc: string;
  title: string;
  description: string;
  comprises: string[];
  size?: string;
  src: string;
}): JSX.Element {
  let sizeClass;
  if (size === "small") {
    sizeClass = "w-[250px]";
  } else if (size === "medium") {
    sizeClass = "w-[325px]";
  } else if (size === "large") {
    sizeClass = "w-[400px]";
  }
  const cardClass = `relative flex flex-col h-[300px] ${sizeClass} bg-cover bg-center rounded-xl overflow-hidden shadow-lg`;
  const textContainerClass =
    "absolute inset-0 flex flex-col w-full justify-end bg-black bg-opacity-80 p-4";

  return (
    <div
      className={cardClass}
      style={{ backgroundImage: `url(${backgroundSrc})` }}
    >
      <motion.a
        className={textContainerClass}
        initial="rest"
        whileHover="hover"
        animate="rest"
        href={src}
      >
        <motion.div
          variants={{
            rest: { y: 0, opacity: 1 },
            hover: { y: -20, opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
        >
          <ProjectTitle title={title} />
        </motion.div>
        <motion.div
          className="w-full"
          variants={{
            rest: { opacity: 0, height: 0, width: "100%" },
            hover: { opacity: 1, height: "auto", width: "100%" },
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col justify-center gap-3">
            <ProjectComposition comprises={comprises} />
            <ProjectDescription description={description} />
            <ProjectButton linkSrc={src} />
          </div>
        </motion.div>
      </motion.a>
    </div>
  );
}

export function RegularProjectCard({
  backgroundSrc,
  title,
  src,
}: {
  backgroundSrc: string;
  title: string;
  src: string;
}): JSX.Element {
  return (
    <div
      className="relative h-[100px] w-full bg-cover bg-center rounded-xl overflow-hidden shadow-lg"
      style={{ backgroundImage: `url(${backgroundSrc})` }}
    >
      <a
        className="absolute inset-0 flex flex-col w-full justify-end bg-black bg-opacity-80 p-4"
        href={src}
      >
        <ProjectTitle title={title} />
      </a>
    </div>
  );
}
