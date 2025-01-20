import React from "react";

import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Work from "../Components/Work";
import Footer from "../Components/Footer";
import Services from "../Components/Services";
import Navbar from "../Components/Navbar";
import Contact from "../Components/Contact";

const Landing = () => {
  return (
    <div className="w-full h-max  relative overflow-x-hidden bg-black p-5">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;
