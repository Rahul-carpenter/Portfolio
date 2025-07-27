import React from "react";

const Hero = () => {
  const handleHireMeClick = () => {
    window.gtag?.("event", "hire_me_click", {
      event_category: "Button Click",
      event_label: "Hire Me Button",
    });
  };

  return (
    <section
      id="hero"
      className="max-w-[1200px] mx-auto rounded-xl h-max 
                 bg-white dark:bg-[#090e16] my-5 overflow-hidden py-10"
    >
      <div className="bg-white dark:bg-transparent text-black dark:text-white rounded-3xl p-4 sm:p-8 text-center">
        <div className="flex justify-center mb-6">
          <img
            src="./img/profile.png"
            alt="Rahul Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-gradient-to-r from-gradientStart to-gradientEnd"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 gradient-text">Rahul</h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          I’m a DevOps & Cloud enthusiast who loves building real-world solutions using tools like Docker, Kubernetes, Jenkins, and AWS. Passionate about turning tech into impact.
        </p>
        <div className="flex justify-center gap-4">
          <a
            onClick={handleHireMeClick}
            href="#contact"
            className="button-gradient"
          >
            Let's Work
          </a>
          <a
            href="https://drive.google.com/file/d/1yLvnlrRbmLRpBL-kVKtcu0yGLJRB6VtB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button-gradient"
          >
            My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
