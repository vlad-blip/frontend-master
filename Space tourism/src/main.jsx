import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import MainPage from "./pages/MainPage";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <MainPage />
      </Layout>
    ),
  },
  {
    path: "/Destination/:planet",
    element: (
      <Layout>
        <Destination />
      </Layout>
    ),
  },
  {
    path: "/Crew",
    element: (
      <Layout>
        <Crew />
      </Layout>
    ),
  },
  {
    path: "/Technology",
    element: (
      <Layout>
        <Technology />
      </Layout>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
