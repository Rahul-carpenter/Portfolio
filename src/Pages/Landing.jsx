import React from "react";

import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Work from "../Components/Work";
import Footer from "../Components/Footer";
import Services from "../Components/Services";
import Thanks from "../Components/Thanks";
import Navbar from "../Components/Navbar";

const Landing = () => {
  //   const [menuOpen, setMenuOpen] = useState(false);
  //   const toggleMenu = () => {
  //     setMenuOpen(!menuOpen);
  //   };

  return (
    <div className="w-full h-max  relative overflow-x-hidden bg-white dark:bg-black p-5">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Work />
      <Thanks />
      <Footer />
    </div>
  );
};

export default Landing;
