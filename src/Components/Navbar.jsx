import React, { useContext } from "react";
import { MainContext } from "../Context/AppContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(MainContext);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      {/* Logo */}
      <a
        href="#hero"
        className="text-xl md:text-3xl font-extrabold text-indigo-600 dark:text-white"
      >
        Rahul
      </a>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-6 text-sm md:text-base font-medium">
        <li>
          <a
            href="#about"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Menu (optional) */}
      <div className="md:hidden">
        <button className="text-2xl focus:outline-none">☰</button>
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        className="ml-4 px-3 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
