import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import { SiGithub } from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";

const Work = () => {
  const ref = useRef(null);
  const projectref = useRef(null);
  const isProjectInView = useInView(projectref, { once: true });
  const isInView = useInView(ref, { once: true });
  const [hoverIndex, sethoverIndex] = useState(null);

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
      title: "DS Network Solutions",
      github: "https://github.com/ManishDev20/DS-Network-Solution",
      link: "https://dsnetworksolution.netlify.app",
      img: "./img/dsns.png",
    },
  ];
  return (
    <section
      id="project"
      className="w-full min-h-screen dark:bg-[#000] to-slate-900 py-20 sm:pt-40"
    >
      <div className="w-[90%] sm:w-[80%] md:w-[90%] mx-auto md:p-5 ">
        <motion.div
          ref={ref}
          style={{
            translateY: isInView ? "-100%" : 0,
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          className="secHead flex justify-center px-3 my-5 relative"
        >
          <div
            id="workH"
            className="z-10 w-max text-2xl sm:text-4xl md:text-5xl  font-extrabold dark:text-white "
          >
            WORK
          </div>
          <div className="z-0 text-[#9a9a9a25] -top-6 sm:-top-10 md:-top-16 absolute text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold ">
            PROJECTS
          </div>
        </motion.div>
        <div className="w-full text-center dark:text-white text-lg sm:text-xl md:text-2xl">
          Explore a collection of my projects, showcasing skills in development,
          design, and problem-solving through personal projects and creativity.
        </div>
        <motion.div
          ref={projectref}
          style={{
            left: isProjectInView ? 0 : "-100%",
            opacity: isProjectInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          className="w-full h-max sm:w-[90%] mx-auto p-5 mt-5 sm:mt-20 grid gap-5 grid-cols-2 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 relative duration-75 "
        >
          {Projects.map((project, i) => {
            return (
              <motion.div
                key={i}
                // set hover-index to the current project (Current item of Projects) index.
                onMouseEnter={() => sethoverIndex(i)}
                // Reset it to null on mouseleave.
                onMouseLeave={() => sethoverIndex(null)}
                className={`w-full h-max  col-span-2 sm:cols-span-2 md:col-span-4 lg:col-span-6  relative border-2 rounded-lg`}
              >
                <div
                  className={` ${
                    hoverIndex === i ? "block" : "hidden" //  hovered item with its own index will only show.
                  } w-full h-full absolute z-10 bg-black p-4 rounded-lg flex flex-col gap-5 md:gap-10 items-center justify-center `}
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
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
