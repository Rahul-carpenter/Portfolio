import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { FaArrowRight } from "react-icons/fa6";
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";

const Hero = () => {
  // dark mode / light mode implementations

  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage for theme preference
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme === "dark"; // Return true if 'dark', false otherwise
    }
    // If no theme is set, default to light mode
    localStorage.setItem("theme", "dark");
    return false; // Default is light mode
  });

  // Apply the theme on initial load
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Toggle the dark mode and save to localStorage
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };
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

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section
      id="hero"
      className="w-full h-screen sm:h-max min-[1025px]:min-h-screen bg-white dark:bg-[#020617] pb-20 overflow-hidden"
    >
      <div className="Container max-w-[1200px] mx-auto ">
        <div className="Navbar w-full h-[80px] flex justify-between items-center px-10 relative z-[999]">
          <div className="Logo text-5xl sm:text-6xl flex items-center dark:text-white pb-4">
            manish
          </div>
          <div className="navLinks md:flex items-center gap-5 lg:gap-10 hidden  lg:text-lg dark:text-white mt-5">
            <a href="#about" className="hover:text-[#4e43ca]">
              About me
            </a>
            <a href="#project" className="hover:text-[#4e43ca]">
              Work
            </a>
            <Link to={"/contact-form"} className="hover:text-[#4e43ca]">
              Contact
            </Link>
          </div>
          <div className="mode md:flex items-center gap-5 hidden px-4 py-2 rounded-full mt-5">
            <div
              onClick={toggleDarkMode}
              className="chageMode hover:bg-[#a5a5a5] hover:dark:bg-[#41410b] p-2 rounded-full cursor-pointer"
            >
              <CgDarkMode className="text-black dark:text-white text-lg sm:text-xl md:text-2xl " />
            </div>
            <div className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 dark:bg-[#4e43ca] dark:hover:bg-[#1f1777] px-2 py-1 rounded-xl text-white">
              <Link to={"/contact-form"} className=" ">
                Let's Work
              </Link>
              <FaArrowRight className={``} />
            </div>
          </div>
          <div className="hamburger md:hidden text-2xl dark:text-white flex items-center gap-5">
            <div className="chageMode hover:bg-[#a5a5a5] hover:dark:bg-[#4b4b4b] p-2 rounded-full">
              <CgDarkMode onClick={toggleDarkMode} />
            </div>
            <MdOutlineMenu onClick={toggleMenu} />
          </div>
          <div
            className={`menu w-full h-screen  ${
              menuOpen === true ? "scale-y-[1]" : " scale-y-0"
            } flex items-center flex-col gap-5 absolute left-0 top-[0] bg-[#ffffffec] dark:bg-[#000000ee] ease-in duration-150 `}
          >
            <div className="closeMenu w-full px-10 dark:text-white h-[80px] text-2xl text-left  flex items-center pb-5 justify-end gap-10">
              <MdMenuOpen onClick={toggleMenu} />
            </div>
            <div className="menuItems flex flex-col gap-5 text-center dark:text-white">
              <a
                href="#about"
                className="hover:text-[#4e43ca]"
                onClick={toggleMenu}
              >
                About me
              </a>
              <a
                href="#project"
                className="hover:text-[#4e43ca]"
                onClick={toggleMenu}
              >
                Work
              </a>

              <Link
                to={"/contact-form"}
                href="#contact"
                className="hover:text-[#4e43ca]"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
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
          <button className="py-2 px-4 bg-gray-800 dark:bg-[#4e43ca] dark:hover:bg-[#1f1777] rounded-full text-white">
            My Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
