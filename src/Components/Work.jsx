import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const projects = [
    {
      id: 1,
      title: "📞 EduCall Manager",
      description: "A lead management platform for educational agencies with role-based dashboards, lead uploads, and agent interactions.",
      techStack: ["Python", "Flask", "MySQL", "Bootstrap"],
      status: "🔒 Private Repository",
      links: [
        { type: "live", url: "https://educall-manager.onrender.com/", label: "🌐 View Live" }
      ],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "🚀 Power BI Project: Blinkit Sales Analysis 📊",
      description: "I built a Power BI dashboard to analyze Blinkit sales trends with comprehensive insights and actionable data-driven decisions.",
      features: [
        "Sales patterns & revenue insights",
        "Outlet-wise performance analysis", 
        "Actionable data-driven decisions"
      ],
      techStack: ["Power BI", "Data Analysis", "Excel"],
      links: [
        { type: "github", url: "https://github.com/Rahul-carpenter/Blinkit-Sales-Analysis", label: "🔗 GitHub Repo" }
      ],
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "🎲 Lottery Probability Calculator",
      description: "Developed using Python and Streamlit, this project simulates real-world lottery odds, ticket value analysis, and return simulations.",
      features: [
        "Single & Multi-ticket win probability",
        "Historical draw checker",
        "Cost vs. returns simulator"
      ],
      techStack: ["Python", "Streamlit", "Pandas", "NumPy", "Matplotlib"],
      links: [
        { type: "github", url: "https://github.com/Rahul-carpenter/lottery-game", label: "🔗 GitHub Repo" },
        { type: "live", url: "https://lottery-game-9mkkhteuxunjjgzp8sdyrt.streamlit.app/", label: "🌐 View Live" }
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      title: "🤖 Feature-Controlled Assistant",
      description: "AI-powered assistant built using Python and AWS to control applications via voice, automate social tasks, and manage cloud resources.",
      techStack: ["Python", "AWS", "OpenCV", "Instabot"],
      links: [
        { type: "github", url: "https://github.com/Rahul-carpenter/aws-assistant", label: "🔗 GitHub Repo" }
      ],
      gradient: "from-orange-500 to-red-600"
    }
  ];

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

  const projectVariants = {
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

  return (
    <section
      id="projects"
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {/* Gradient Background Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Project Content */}
              <div className="relative z-10">
                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-pink-600 transition-all duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features List */}
                {project.features && (
                  <ul className="space-y-2 mb-4">
                    {project.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.1 + idx * 0.1 }}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                )}

                {/* Status */}
                {project.status && (
                  <p className="text-sm text-red-500 dark:text-red-400 mb-4 font-medium">
                    {project.status}
                  </p>
                )}

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link, idx) => (
                    <motion.a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                        link.type === 'live' 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg hover:scale-105' 
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-indigo-600 group-hover:to-pink-600 transition-all duration-300 opacity-0 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              These are just a few highlights from my portfolio. I'm always working on new projects and exploring cutting-edge technologies.
            </p>
            <motion.a
              href="https://github.com/Rahul-carpenter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🔗 View All Projects on GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
