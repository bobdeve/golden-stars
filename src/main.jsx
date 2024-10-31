import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFound, Home, Contact } from "./components/pages";
import EventTab from "./components/pages/EventTab.jsx";
import FindYourPro from "./components/sub-pages/FindYourPro.jsx";
import Background from "./components/pages/Background.jsx";
import Mission from "./components/pages/Mission.jsx";
import Gallery from "./components/pages/Gallery.jsx";
import About from "./components/pages/About.jsx";
import Certification from "./components/pages/Certification.jsx";
import Service from "./components/pages/Service.jsx";
import ServiceDesc from "./components/pages/ServiceDesc.jsx";

const steps = [
  {
    id: "0",
    message: "Welcome to react chatbot!",
    trigger: "1",
  },
  {
    id: "1",
    message: "Bye!",
    end: true,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact-us",
    element: <Contact />,
  },
  {
    path: "events",
    element: <EventTab />,
  },
  {
    path: "find-programs",
    element: <FindYourPro />,
  },
  {
    path: "background",
    element: <Background />,
  },
  {
    path: "mission",
    element: <Mission />,
  },
  {
    path: "gallery",
    element: <Gallery />,
  },
  {
    path: "certification",
    element: <Certification />,
  },
  {
    path: "service",
    element: <Service />,
  },
  {
    path: "service-disc",
    element: <ServiceDesc />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
