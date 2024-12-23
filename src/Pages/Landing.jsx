import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Work from "../Components/Work";
import Footer from "../Components/Footer";
import Services from "../Components/Services";
import Thanks from "../Components/Thanks";

import { FaArrowRight } from "react-icons/fa6";
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";

const Landing = () => {
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

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full h-screen  relative overflow-x-hidden">
      <nav className="bg-white dark:bg-black sticky top-0 z-[9999]">
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
      </nav>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Work />
      <Thanks />
      <Footer />
    </div>
  );
};

export default Landing;
