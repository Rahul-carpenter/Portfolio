import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const handleHireMeClick = () => {
    window.gtag?.("event", "hire_me_click", {
      event_category: "Button Click",
      event_label: "Hire Me Button",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-12 text-center shadow-2xl border border-gray-200 dark:border-gray-700"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full blur-lg opacity-75 animate-pulse"></div>
              <img
                src="./img/profile.png"
                alt="Rahul Profile"
                className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
              />
            </motion.div>
          </motion.div>

          {/* Name with Typewriter Effect */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 gradient-text">
              Rahul
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-300 min-h-[2em]">
              <Typewriter
                words={[
                  'DevOps Engineer',
                  'Cloud Enthusiast',
                  'Python Developer',
                  'Problem Solver'
                ]}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl mb-10 max-w-4xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            I'm a DevOps & Cloud enthusiast who loves building real-world solutions using tools like{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">Docker</span>,{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">Kubernetes</span>,{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">Jenkins</span>, and{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">AWS</span>. 
            Passionate about turning tech into impact.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          >
            <motion.a
              onClick={handleHireMeClick}
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                💼 Let's Work Together
              </span>
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1yLvnlrRbmLRpBL-kVKtcu0yGLJRB6VtB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:border-indigo-500 dark:hover:border-indigo-400"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative flex items-center gap-2">
                📄 View Resume
              </span>
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-gray-500 dark:text-gray-400"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
