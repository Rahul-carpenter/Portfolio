import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaCode,
  FaTools,
  FaPalette,
  FaSearch,
  FaChartLine,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description:
        "I create clean, minimalist websites with intuitive navigation, responsive layouts, high-quality visuals, fast loading, seamless interactions, and subtle animations.",
    },

    {
      icon: <FaPalette />,
      title: "Web Designing",
      description:
        "I design visually engaging, user-friendly websites with responsive layouts, intuitive navigation, and seamless experiences to captivate and retain visitors across all devices",
    },
    {
      icon: <FaSearch />,
      title: "Search Engine Optimization",
      description:
        "Boost your site's visibility with keyword research, on-page optimization, and technical SEO strategies to drive organic traffic and improve rankings.",
    },
    {
      icon: <FaTools />,
      title: "Website Maintenance",
      description:
        "Keep your site updated, secure, and bug-free with ongoing maintenance, performance checks, and prompt issue resolution.",
    },
    {
      icon: <FaChartLine />,
      title: "Web Consultancy",
      description:
        "Receive expert guidance on strategy, design, and development for impactful, scalable web solutions.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      className="py-20 sm:pb-20 sm:pt-40 bg-gray-50 dark:bg-gray-900"
      id="services"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          style={{
            translateY: isInView ? "-100%" : 0,
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          className="secHead flex justify-center px-3 my-5 relative"
        >
          <div
            id="workH"
            className="z-10 w-max text-xl sm:text-3xl md:text-4xl  font-bold dark:text-white "
          >
            My Services
          </div>
          <div className="z-0 text-[#5e5e5e25] dark:text-[#5e5e5e67] -top-6 sm:-top-10 md:-top-16 absolute text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold ">
            SERVICES
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="text-blue-500 text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
