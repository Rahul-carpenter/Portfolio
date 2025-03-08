import React from "react";
const Hero = () => {
  const handleHireMeClick = () => {
    window.gtag("event", "hire_me_click", {
      event_category: "Button Click",
      event_label: "Hire Me Button",
    });
  };
  return (
    <section
      id="hero"
      className="max-w-[1200px] mx-auto rounded-xl h-max  bg-white my-5 overflow-hidden py-10"
    >
      <div className="bg-white text-black rounded-3xl p-4  sm:p-8 text-center">
        <div className="flex justify-center mb-6">
          <img
            src="./img/profile.png
            "
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">Manish Meena</h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          I'm a full stack web developer, Helping businesses to grow online or
          build personal branding.
        </p>
        <div className="flex justify-center gap-4">
          <a
            onClick={handleHireMeClick}
            href="#contact"
            className="bg-black text-white px-6 py-2 rounded-full hover:opacity-90"
          >
            Let's Work
          </a>
          <a
            href="https://drive.google.com/file/d/1kRLlbynmn0Ip0Lh-yKfkgW7j4jcMIuid/view?usp=sharing"
            className="bg-black text-white px-6 py-2 rounded-full hover:opacity-90"
          >
            My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
