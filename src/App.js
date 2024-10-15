import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Blog from "./Components/Blog";
import Landing from "./Components/Landing";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "/", element: <Landing /> },
        { path: "/blog", element: <Blog /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
