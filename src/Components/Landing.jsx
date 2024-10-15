import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
// import Project from "./Project";
// import Blog from "./Blog";
// import Contact from "./Hero";

const Landing = () => {
  return (
    <div className="w-full h-screen  relative overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
    </div>
  );
};

export default Landing;
