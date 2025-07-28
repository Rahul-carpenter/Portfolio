import React, { useContext, useState } from "react";
import { MainContext } from "../Context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(MainContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="text-xl sm:text-2xl md:text-3xl font-extrabold gradient-text Logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={closeMobileMenu}
        >
          Rahul
        </motion.a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-8 text-sm lg:text-base font-medium">
          {navItems.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={item.href}
                className="relative hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Right side buttons */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white text-sm font-medium hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === "light" ? "🌙" : "☀️"}
            <span className="hidden lg:inline">
              {theme === "light" ? "Dark" : "Light"}
            </span>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle mobile menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
              className="w-6 h-6 flex flex-col justify-center items-center"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 }
                }}
                className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 block transition-all duration-300"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 block mt-1.5 transition-all duration-300"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 }
                }}
                className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 block mt-1.5 transition-all duration-300"
              />
            </motion.div>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 z-50 shadow-2xl md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-xl font-bold gradient-text">Menu</span>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    ✕
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex-1 px-6 py-8">
                  <ul className="space-y-6">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <a
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 py-2"
                        >
                          {item.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Mobile Theme Toggle */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                  <motion.button
                    onClick={() => {
                      toggleTheme();
                      closeMobileMenu();
                    }}
                    className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-medium hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {theme === "light" ? "🌙" : "☀️"}
                    {theme === "light" ? "Dark Mode" : "Light Mode"}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
