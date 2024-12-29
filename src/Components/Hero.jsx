import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { PiReadCvLogo } from "react-icons/pi";
import { IoRocketOutline } from "react-icons/io5";

const Hero = () => {
  // days counter

  const [days, setDays] = useState(0);

  useEffect(() => {
    // Define the start date
    const startDate = new Date("2022-09-01");
    const today = new Date();

    // Calculate the difference in time
    const differenceInTime = today - startDate;

    // Convert time difference to days
    const differenceInDays = Math.floor(
      differenceInTime / (1000 * 60 * 60 * 24)
    );
    setDays(differenceInDays);
  }, []); // Empty dependency array ensures this runs only once on mount

  // Menu toggle handling

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
            animate={{ opacity: 1 }}
            transition={{ duration: 0 }}
            className="flex items-center space-x-2"
          >
            Hello World!
            <motion.span
              animate={{
                rotate: [0, 20, -20, 20, -20, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="text-3xl sm:text-5xl pb-2"
            >
              👋
            </motion.span>
          </motion.div>
        </div>
        <div className="w-[90%] sm:w-[70%] mx-auto flex justify-center text-xl sm:text-2xl dark:text-white leading-8 sm:leading-10 text-center mt-10">
          I'm Manish. A Developer, Programmer, Future Founder, Freelancer and a
          Techie who build beautiful websites and talk about tech.
        </div>
        <div className="w-[90%] sm:w-[70%]  mx-auto sm:text-xl dark:text-white  text-center mt-10">
          It's been
          <span className=" mx-2 rounded-lg  font-bold underline text-yellow-500 hover:text-black dark:hover:text-white">
            {days}
          </span>
          days since I started coding.
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
