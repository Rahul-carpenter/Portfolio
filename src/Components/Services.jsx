import React from "react";
import { motion } from "framer-motion";
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
      title: "Backend Development",
      description:
        "I build efficient and scalable backend systems using Python (Flask), with MySQL database integration and RESTful API development.",
    },
    {
      icon: <FaTools />,
      title: "DevOps & CI/CD",
      description:
        "I automate deployments and streamline pipelines using Jenkins, Docker, Kubernetes, and CI/CD practices for real-world scalability.",
    },
    {
      icon: <FaChartLine />,
      title: "Cloud Infrastructure",
      description:
        "I deploy and manage cloud solutions on AWS with EC2 and 3-tier architecture, and handle provisioning using Terraform and Ansible.",
    },
    {
      icon: <FaSearch />,
      title: "Monitoring & Automation",
      description:
        "I implement logging, monitoring, and automation workflows for high-availability systems using Shell scripts and infrastructure as code.",
    },
    {
      icon: <FaPalette />,
      title: "Dashboard & Visualization",
      description:
        "I design and build interactive dashboards using Streamlit to provide real-time data insights for business and lead tracking.",
    },
  ];

  return (
    <section
      className="max-w-[1200px] mx-auto rounded-3xl py-10 sm:py-20 px-4 sm:px-10 bg-[#090e16] dark:bg-[#090e16]"
      id="services"
    >
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-10 md:mb-20 uppercase gradient-text">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-900 dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="bg-gradient-to-r from-gradientStart to-gradientEnd text-white p-4 rounded-full text-4xl mb-4 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
