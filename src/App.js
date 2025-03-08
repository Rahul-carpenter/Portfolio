import React, { useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import Layout from "./Components/Layout";
import Blogs from "./Pages/Blogs";
import Landing from "./Pages/Landing";
import ProgressDashboard from "./Pages/ProgressDashboard";
import ContactForm from "./Pages/ContactForm";
import TermsAndPolicies from "./Pages/TermsAndPolicies";
import Thanks from "./Components/Thanks";
// import Maintenance from "./Components/Maintenance";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-5ZCBR4Q3ZY";
    script.async = true;
    document.body.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-5ZCBR4Q3ZY");
  }, []);

  useEffect(() => {
    window.gtag("config", "G-5ZCBR4Q3ZY", {
      page_path: location.pathname,
    });
  }, [location]);

  const routes = createBrowserRouter([
    {
      path: "",
      //   element: <Maintenance />,
      element: <Layout />,
      children: [
        { path: "/", element: <Landing /> },
        { path: "/blog", element: <Blogs /> },
        { path: "/contact-form", element: <ContactForm /> },
        { path: "/progress-dashbord", element: <ProgressDashboard /> },
        { path: "/privacy", element: <TermsAndPolicies /> },
        { path: "/thanks", element: <Thanks /> },
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
