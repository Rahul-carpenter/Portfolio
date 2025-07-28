import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaDocker, FaAws, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiKubernetes, SiJenkins, SiMysql, SiFlask, SiTerraform, SiAnsible, SiStreamlit, SiPython } from "react-icons/si";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const skillsData = [
    {
      category: "Languages & Frameworks",
      items: [
        { name: "Python", icon: <SiPython className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />, level: 90 },
        { name: "Flask", icon: <SiFlask className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />, level: 85 },
        { name: "Streamlit", icon: <SiStreamlit className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />, level: 80 },
        { name: "MySQL", icon: <SiMysql className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />, level: 75 },
      ],
    },
    {
      category: "DevOps & Cloud",
      items: [
        { name: "Docker", icon: <FaDocker className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />, level: 88 },
        { name: "Kubernetes", icon: <SiKubernetes className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />, level: 82 },
        { name: "Jenkins", icon: <SiJenkins className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />, level: 85 },
        { name: "AWS", icon: <FaAws className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />, level: 87 },
        { name: "Terraform", icon: <SiTerraform className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />, level: 78 },
        { name: "Ansible", icon: <SiAnsible className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />, level: 75 },
      ],
    },
    {
      category: "Tools & Collaboration",
      items: [
        { name: "Git", icon: <FaGitAlt className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />, level: 92 },
        { name: "GitHub", icon: <FaGithub className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />, level: 90 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            TECH STACK
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build amazing solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12 lg:space-y-16"
        >
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={categoryVariants}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    {/* Skill Icon and Name */}
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="mb-3 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <h4 className="font-semibold text-gray-800 dark:text-white text-sm sm:text-base">
                        {skill.name}
                      </h4>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-600 dark:text-gray-400">Proficiency</span>
                        <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="h-2 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-pink-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new tools, 
              frameworks, and best practices to stay at the forefront of modern development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
