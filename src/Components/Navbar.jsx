import React, { useEffect, useState } from "react";
import { IoRocketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  // / dark mode / light mode implementations

  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage for theme preference
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme === "dark"; // Return true if 'dark', false otherwise
    }
    // If no theme is set, default to dark mode
    localStorage.setItem("theme", "dark");
    return true; // Default to dark mode
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
  return (
    <div>
      <nav className="max-w-[1000px] mx-auto bg-black dark:bg-white flex justify-between items-center rounded-full px-5 py-2">
        <div className="navLinks w-full px-5 flex gap-5 text-lg font-semibold  justify-between items-center">
          <a
            href="#about"
            className="text-white dark:text-[#000000b9]  dark:hover:text-[#000000] "
          >
            About Me
          </a>
          <a
            href="#projects"
            className="text-white dark:text-[#000000b9] dark:hover:text-[#000000] "
          >
            Projects
          </a>
        </div>
        <div className="logo w-full px-5 flex justify-center items-center text-xl sm:text-2xl md:text-3xl font-bold">
          MANISH
        </div>
        <div className="navLinks w-full flex justify-between items-center gap-5 px-5">
          <a
            href="#about"
            className="text-white text-xl font-semibold  dark:text-[#000000b9] dark:hover:text-[#000000]  "
          >
            Contact
          </a>
          <a
            href="#_"
            class="block py-2  text-white bg-gray-800 px-5 hover:bg-gray-900 rounded-full"
          >
            Let's Work
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
