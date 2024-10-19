import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import { SiGithub } from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";

const Project = () => {
  const ref = useRef(null);
  const projectref = useRef(null);
  const isProjectInView = useInView(projectref, { once: true });
  const isInView = useInView(ref, { once: true });
  const [hoverIndex, sethoverIndex] = useState(null);

  const Projects = [
    {
      title: "Portfolio Website",
      github: "http://github.com",
      link: "http://github.com",
      img: "./img/portfolioweb.png",
    },
    {
      title: "My FFC Cafe",
      github: "http://github.com",
      link: "http://github.com",
      img: "./img/ffccafe.png",
    },
    {
      title: "IStore: Ecom Website",
      github: "http://github.com",
      link: "http://github.com",
      img: "./img/istore.png",
    },
    {
      title: "Weather Forecast Application",
      github: "http://github.com",
      link: "http://github.com",
      img: "./img/aajkamausam.png",
    },
  ];
  return (
    <section
      id="project"
      className="w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 py-20"
    >
      <div className="w-[90%] sm:w-[80%] md:w-[90%] mx-auto md:p-5 ">
        <div className="flex justify-center lg:justify-normal ">
          <motion.div
            id="projectH"
            ref={ref}
            style={{
              translateX: isInView ? 0 : "-100%",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
            className=" w-max text-xl sm:text-3xl md:text-4xl text-white font-semibold py-2 px-8 border-l-[3px] border-r-[3px] lg:border-r-0 border-blue-500  bg-slate-800 duration-300"
          >
            My Work
          </motion.div>
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
                className={`w-full h-max -skew-x-3 md:-skew-x-12 col-span-2 sm:cols-span-2 md:col-span-4 lg:col-span-6  relative border-2 rounded-lg`}
              >
                <div
                  className={` ${
                    hoverIndex === i ? "block" : "hidden" //  hovered item with its own index will only show.
                  } w-full h-full absolute z-10 bg-black opacity-[0.8] p-4 rounded-lg flex flex-col gap-5 md:gap-10 items-center justify-center `}
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

export default Project;
