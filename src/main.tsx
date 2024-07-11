import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import HomeSection from "./sections/home-section";
import AboutSection from "./sections/about-section";
import ProjectSection from "./sections/project-section";
import ContactSection from "./sections/contact-section";
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
            path: "languages",
            element: <div>Languages</div>,
          },
          {
            path: "frameworks",
            element: <div>Frameworks</div>,
          },
          {
            path: "tools",
            element: <div>Tools</div>,
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
