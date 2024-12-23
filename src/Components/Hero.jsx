import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

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
      className="w-full h-screen sm:h-max min-[1025px]:min-h-screen bg-white dark:bg-[#020617] pb-20 overflow-hidden"
    >
      <div className="Container max-w-[1200px] mx-auto ">
        <div className=" flex justify-center my-10 sm:mt-32 ">
          <motion.div
            initial="initial"
            whileHover="hovered"
            className="dark:text-white bg-white dark:bg-[#202020] border-2 border-black dark:border-white w-max px-6 py-2 rounded-full  text-[12px] sm:text-lg relative overflow-hidden"
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
            className="py-2 px-4 bg-gray-800 dark:bg-[#4e43ca] dark:hover:bg-[#1f1777] rounded-full text-white"
          >
            Let's Work
          </Link>
          <a
            href="https://drive.google.com/file/d/1YknPO_Kx4kLX_FpbqOb7Pl_cxez9brtU/view?usp=drive_link"
            className="py-2 px-4 bg-gray-800 dark:bg-[#4e43ca] dark:hover:bg-[#1f1777] rounded-full text-white"
          >
            My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
