import playlistPartnerImg from "../assets/images/project-images/playlist_partner.png";
import smallShellImg from "../assets/images/project-images/small_shell.png";
import exerciseTrackerImg from "../assets/images/project-images/exercise_tracker.png";
import imageEditorImg from "../assets/images/project-images/image_editor.png";
import portfolioImg from "../assets/images/project-images/portfolio.png";
import flashcardAi from "../assets/images/project-images/flashcard_ai.png";

/*
 * Project Information
 *
 * This data is used to display the projects of the user.
 * Order of the data is important.
 *
 * Format:
 * {
 *  title: string ( Name of the project ),
 *  description: string ( Description of the project ),
 *  comprisedOf: string[] ( Languages/Tools used in the project ),
 *  src: string ( Source code link of the project ),
 *  size: string ( Size of the project ),
 *  image: string ( Image of the project ),
 * }
 */
export const projectInformation = [
  {
    title: "Flashcard AI",
    description:
      "A flashcard application that utilizes AI to generate flashcards from text.",
    comprisedOf: ["React", "Clerk", "Stripe", "OpenAI", "NextJS", "Tailwind"],
    src: "https://github.com/MrF1ow/ai-flashcards-stripe",
    size: "large",
    image: flashcardAi,
  },
  {
    title: "Small Shell",
    description:
      "A small shell that can execute commands and pipe commands together.",
    comprisedOf: ["C"],
    src: "https://github.com/MrF1ow/smallsh",
    size: "small",
    image: smallShellImg,
  },
  {
    title: "Playlist Partner",
    description:
      "Full Stack Application that allows users to generate filtered playlists utilizing the Spotify API.",
    comprisedOf: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Vite",
    ],
    src: "https://playlist-partner.vercel.app/",
    size: "large",
    image: playlistPartnerImg,
  },
  {
    title: "Image Viewer & Editor",
    description:
      "A Lightweight image viewer and editor that allows users to view and edit images seamlessly.",
    comprisedOf: ["Python", "OpenCV"],
    src: "https://github.com/MrF1ow/Image_Viewer_Editor",
    size: "large",
    image: imageEditorImg,
  },
  {
    title: "Exercise Tracker",
    description:
      "A MERN stack web application that allows user to create and track their workouts.",
    comprisedOf: ["React", "JavaScript", "Node.js", "Express", "MongoDB"],
    src: "https://github.com/MrF1ow/Exercise-Tracker",
    size: "medium",
    image: exerciseTrackerImg,
  },
  {
    title: "Portfolio",
    description: "A portfolio website that showcases my projects and skills.",
    comprisedOf: ["React", "TypeScript", "Tailwind", "Vite", "ThreeJS"],
    src: "https://github.com/MrF1ow/Portfolio_Page2.0",
    size: "medium",
    image: portfolioImg,
  },
];
