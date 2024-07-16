import playlistPartnerImg from "../assets/images/project-images/playlist_partner.png";
import smallShellImg from "../assets/images/project-images/small_shell.png";
import exerciseTrackerImg from "../assets/images/project-images/exercise_tracker.png";
import imageEditorImg from "../assets/images/project-images/image_editor.png";

export const projectInformation = [
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
    title: "Small Shell",
    description:
      "A small shell that can execute commands and pipe commands together.",
    comprisedOf: ["C"],
    src: "https://github.com/MrF1ow/smallsh",
    size: "small",
    image: smallShellImg,
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
];
