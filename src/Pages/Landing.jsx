import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Work from "../Components/Work";
import Footer from "../Components/Footer";
import Services from "../Components/Services";
import Thanks from "../Components/Thanks";

const Landing = () => {
  return (
    <div className="w-full h-screen  relative overflow-x-hidden">
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
