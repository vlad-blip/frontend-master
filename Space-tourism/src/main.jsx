import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <MainPage />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/Destination/:planetId",
    element: <Destination />,
  },
  {
    path: "/Crew/:crewId",
    element: <Crew />,
  },
  {
    path: "/Technology/:technologyId",
    element: <Technology />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
