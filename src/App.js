import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./Components/Layout";
import Landing from "./Pages/Landing";
import ProgressDashboard from "./Pages/ProgressDashboard";
import ContactForm from "./Pages/ContactForm";
import TermsAndPolicies from "./Pages/TermsAndPolicies";
import Thanks from "./Components/Thanks";
// import Maintenance from "./Components/Maintenance";

const routes = createBrowserRouter([
  {
    path: "",
    // element: <Maintenance />,
    element: <Layout />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/contact-form", element: <ContactForm /> },
      { path: "/progress-dashbord", element: <ProgressDashboard /> },
      { path: "/privacy", element: <TermsAndPolicies /> },
      { path: "/thanks", element: <Thanks /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
