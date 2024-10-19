import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Project from "../Components/Project";
import Blog from "../Components/Blog";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Landing = () => {
  return (
    <div className="w-full h-screen  relative overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;
