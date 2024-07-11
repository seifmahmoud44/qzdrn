import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Services from "./pages/Services.jsx";
import Buffet from "./pages/Buffet.jsx";
import Events from "./pages/Events.jsx";

import Home from "./pages/Home.jsx";
import ContactUs from "./pages/ContactUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "buffet",
        element: <Buffet />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
