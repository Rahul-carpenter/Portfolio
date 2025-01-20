import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // / dark mode / light mode implementations

  //   const [isDarkMode, setIsDarkMode] = useState(() => {
  //     // Check local storage for theme preference
  //     const storedTheme = localStorage.getItem("theme");
  //     if (storedTheme) {
  //       return storedTheme === "dark"; // Return true if 'dark', false otherwise
  //     }
  //     // If no theme is set, default to dark mode
  //     localStorage.setItem("theme", "dark");
  //     return true; // Default to dark mode
  //   });

  //   // Apply the theme on initial load
  //   useEffect(() => {
  //     const root = document.documentElement;
  //     if (isDarkMode) {
  //       root.classList.add("dark");
  //     } else {
  //       root.classList.remove("dark");
  //     }
  //   }, [isDarkMode]);

  //   // Toggle the dark mode and save to localStorage
  //   const toggleDarkMode = () => {
  //     setIsDarkMode((prev) => {
  //       const newMode = !prev;
  //       localStorage.setItem("theme", newMode ? "dark" : "light");
  //       return newMode;
  //     });
  //   };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <nav className=" max-w-[1200px] mx-auto relative ">
        <div className="flex items-center justify-between bg-white my-5 rounded-full px-6 py-3">
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:opacity-80">
              About me
            </a>
            <a href="#projects" className="hover:opacity-80">
              Projects
            </a>
          </div>
          <Link to={"/"} className="text-xl font-bold">
            Manish
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/blog" className="hover:opacity-80">
              Blogs
            </Link>
            <a
              href="#contact"
              className="bg-black text-white px-4 py-2 rounded-full hover:opacity-90"
            >
              Let's work
            </a>
          </div>
          <button
            className="md:hidden p-2 hover:opacity-80"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MObile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white text-black rounded-3xl p-4 shadow-lg md:hidden">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                className="hover:opacity-80 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About me
              </a>
              <a
                href="#projects"
                className="hover:opacity-80 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <Link
                to="/blog"
                className="hover:opacity-80 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
              <a
                href="#contact"
                className="bg-black text-white px-4 py-2 rounded-full hover:opacity-90 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Let's work
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
