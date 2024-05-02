import { FaCode, FaMusic } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { FaImage } from "react-icons/fa6";


const project_data = [
    {
        "title": "Exercise Tracker",
        "description": "A full stack web application that allows users to create and track their daily exercises.",
        "icon": < CgGym />,
        "link": "https://github.com/MrF1ow/Exercise-Tracker"

    },
    {
        "title": "Image Viewer & Editor",
        "description": "A lightweight image viewer and editor that allows users to view and edit images seemlessly.",
        "icon": < FaImage />,
        "link": "https://github.com/MrF1ow/Image_Viewer_Editor"
    },
    {
        "title": "Small Shell",
        "description": "A small shell that provides a compact command-line interface for executing commands.",
        "icon": < FaCode />,
        "link": "https://github.com/MrF1ow/smallsh"
    },
    {
        "title": "Playlist Partner",
        "description": "Full Stack Web Application that allows users to generate filtered based playlists utilizing Spotify API.",
        "icon": <FaMusic />,
        "link": "https://playlist-partner.vercel.app/"
    }
]

export default project_data;