import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomeSection from "./sections/home-section";
import AboutSection from "./sections/about-section";
import ProjectSection from "./sections/project-section";
import ContactSection from "./sections/contact-section";
import ExperiencePanel from "./sections/about-section/components/experience-panel";
import {
  languageExperience,
  frameworkExperience,
  toolsExperience,
} from "./data/experience";
import Root from "./Root";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomeSection /> },
      {
        path: "about",
        element: <AboutSection />,
        children: [
          {
            index: true,
            element: (
              <ExperiencePanel title="Languages" data={languageExperience} />
            ),
          },
          {
            path: "languages",
            element: (
              <ExperiencePanel title="Languages" data={languageExperience} />
            ),
          },
          {
            path: "frameworks",
            element: (
              <ExperiencePanel title="Frameworks" data={frameworkExperience} />
            ),
          },
          {
            path: "tools",
            element: <ExperiencePanel title="Tools" data={toolsExperience} />,
          },
        ],
      },
      { path: "projects", element: <ProjectSection /> },
      { path: "contact", element: <ContactSection /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>
);
