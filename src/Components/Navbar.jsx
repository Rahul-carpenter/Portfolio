import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      {/* Logo or Name */}
      <Link to={"/"} className="text-xl md:text-3xl font-extrabold text-indigo-600 dark:text-white Logo">
        Rahul
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-6 text-sm md:text-base font-medium">
        <li>
          <Link to="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
            About
          </Link>
        </li>
        <li>
          <Link to="/skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
            Skills
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu (optional) */}
      <div className="md:hidden">
        {/* Placeholder for hamburger menu icon */}
        <button className="text-2xl focus:outline-none">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
