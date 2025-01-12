import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { PiReadCvLogo } from "react-icons/pi";
import { IoRocketOutline } from "react-icons/io5";

const Hero = () => {
  const opacity = 0.06;
  return (
    <section
      id="hero"
      className="w-full h-max min-[1025px]:min-h-screen bg-white dark:bg-gradient-to-b from-[#101010] to-[#030303] overflow-hidden py-10"
    >
      <div className="Container max-w-[1200px] mx-auto ">
        <div className=" flex justify-center my-20 sm:mt-36 ">
          <motion.div
            initial="initial"
            whileHover="hovered"
            className="dark:text-white bg-white dark:bg-[#171717] border-2 border-black dark:border-white w-max px-6 py-2 rounded-full  text-[12px] sm:text-lg relative overflow-hidden"
          >
            <motion.div
              variants={{ initial: { y: 0 }, hovered: { y: "-100px" } }}
            >
              Web Developer
            </motion.div>
            <motion.div
              className="absolute flex items-center justify-center text-center inset-0"
              variants={{ initial: { y: "100px" }, hovered: { y: 0 } }}
            >
              Open to work
            </motion.div>
          </motion.div>
        </div>
        <div className="flex justify-center text-3xl sm:text-5xl dark:text-white font-bold ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ scale: [1, 1, 1.5], opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center space-x-2"
          >
            Manish Meena
          </motion.div>
        </div>
        <div className="w-[90%] sm:w-[70%] mx-auto flex justify-center text-xl sm:text-2xl dark:text-white leading-8 sm:leading-10 text-center mt-10">
          I'm Web Developer, building websites and helping individuals to grow
          their businesses and personal branding. <br /> Now it's your turn to
          take your business to the next level.
        </div>

        <div className="flex justify-center gap-10 mt-10">
          <Link
            to={"/contact-form"}
            className="group relative inline-flex gap-2 h-12 items-center justify-center overflow-hidden rounded-md  bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f6f7ff] to-[#f5f6ff] dark:border-[rgb(76_100_255)] border-2 border-[#263381]  bg-transparent px-6 font-medium dark:text-white text-black transition-all duration-100 hover:[box-shadow:5px_5px_rgb(38_51_129)] translate-x-[3px] hover:translate-x-[0px] translate-y-[3px] hover:translate-y-[0px]   [box-shadow:0px_0px_rgb(38_51_129)] dark:hover:[box-shadow:5px_5px_rgb(76_100_255)]dark:active:[box-shadow:0px_0px_rgb(76_100_255)] active:[box-shadow:0px_0px_rgb(38_51_129)] active:translate-y-[3px] active:translate-x-[3px]"
          >
            <div className="group-hover:block hidden text-xl">
              <IoRocketOutline />
            </div>
            Let's Work
          </Link>
          <a
            href="https://drive.google.com/file/d/1kRLlbynmn0Ip0Lh-yKfkgW7j4jcMIuid/view?usp=drive_link"
            className="group relative inline-flex gap-1 h-12 items-center justify-center overflow-hidden rounded-md  bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f6f7ff] to-[#f5f6ff] dark:border-[rgb(76_100_255)] border-2 border-[#263381]  bg-transparent px-6 font-medium dark:text-white text-black transition-all duration-100 hover:[box-shadow:5px_5px_rgb(38_51_129)] translate-x-[3px] hover:translate-x-[0px] translate-y-[3px] hover:translate-y-[0px]   [box-shadow:0px_0px_rgb(38_51_129)] dark:hover:[box-shadow:5px_5px_rgb(76_100_255)]dark:active:[box-shadow:0px_0px_rgb(76_100_255)] active:[box-shadow:0px_0px_rgb(38_51_129)] active:translate-y-[3px] active:translate-x-[3px]"
          >
            <div className="group-hover:block hidden text-2xl">
              <PiReadCvLogo />
            </div>
            My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
