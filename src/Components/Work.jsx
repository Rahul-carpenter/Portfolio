import React from "react";

import { SiGithub } from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";

const Work = () => {
  const Projects = [
    {
      title: "Portfolio Website",
      github: "https://github.com/ManishDev20/Portfolio",
      link: "https://manishcodes.netlify.app",
      img: "./img/portfolioweb.png",
    },
    {
      title: "The Growth Letter",
      github: "https://github.com/ManishDev20/The-Growth-Letter",
      link: "https://thegrowthletter.netlify.app",
      img: "./img/thegrowthletter.png",
    },
    {
      title: "My FFC Cafe",
      github: "https://github.com/ManishDev20/ffc-cafe",
      link: "https://myffccafe.netlify.app",
      img: "./img/ffccafe.png",
    },
    {
      title: "CN Films Photography",
      github: "https://github.com/ManishDev20/CN-FILMS",
      link: "https://cnfilms.in",
      img: "./img/cnfp.png",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-[1200px] mx-auto h-max rounded-xl my-5 bg-white py-10 "
    >
      <div className=" mx-auto md:p-5 overflow-hidden ">
        <h2 className="text-5xl font-bold text-gray-300  uppercase px-2 text-center">
          My Projects
        </h2>

        <div className="w-full text-center dark:text-white text-lg  my-5 px-4 sm:px-10 ">
          Explore a collection of my projects, showcasing skills in development,
          design, and problem-solving through personal projects and creativity.
        </div>
        <div className="w-full h-max sm:w-[90%] mx-auto p-5 grid gap-5 grid-cols-2 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 relative duration-75 ">
          {Projects.map((project, i) => {
            return (
              <div
                key={i}
                className={`w-full h-max  col-span-2 sm:cols-span-2 md:col-span-4 lg:col-span-6  relative border-2 rounded-lg`}
              >
                <div
                  className="
                   w-full h-full absolute z-10 bg-black hover:opacity-[90%] opacity-0 p-4 rounded-lg flex flex-col gap-5 md:gap-10 items-center justify-center "
                >
                  <h1 className=" w-full text-yellow-500  font-bold text-[16px] sm:text-lg md:text-xl lg:text-2xl break-words text-center">
                    {project.title}
                  </h1>
                  <div className="w-full flex gap-2 sm:gap-4 md:gap-10 justify-center px-2">
                    <div className="">
                      <a href={project.github}>
                        <button className="w-full h-full text-white hover:text-blue-500">
                          <SiGithub className="w-full h-full text-[16px] sm:text-lg md:text-xl" />
                        </button>
                      </a>
                    </div>
                    <div className="">
                      <a href={project.link}>
                        <button className="w-full h-full text-white hover:text-blue-500">
                          <HiExternalLink className="w-full h-full text-[16px] sm:text-lg md:text-xl" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <img
                  src={project.img}
                  alt=""
                  className="w-[600px] h-[300px] rounded-lg z-0"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
