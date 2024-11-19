import React, { useRef } from "react";
// import { FaArrowUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiSeoLine } from "react-icons/ri";
import { GrVmMaintenance } from "react-icons/gr";
import { RiCustomerService2Line } from "react-icons/ri";
import { motion, useInView } from "framer-motion";
const Services = () => {
  const services = [
    {
      id: 0,
      icon: <FaLaptopCode />,
      title: "Web Development",
      description:
        "I create clean, minimalist websites with intuitive navigation, responsive layouts, high-quality visuals, fast loading, seamless interactions, and subtle animations.",
    },
    {
      id: 1,
      icon: <AiOutlineDeploymentUnit />,
      title: "Web Deployment",
      description:
        "I deploy websites with secure, optimized solutions, managing server setup, domain configuration, and SSL integration for fast, scalable performance.",
    },
    {
      id: 2,
      icon: <MdOutlineDesignServices />,
      title: "Web Designing",
      description:
        "I design visually engaging, user-friendly websites with responsive layouts, intuitive navigation, and seamless experiences to captivate and retain visitors across all devices",
    },
    {
      id: 3,
      icon: <RiSeoLine />,
      title: "Search Engine Optimization",
      description:
        "Boost your site's visibility with keyword research, on-page optimization, and technical SEO strategies to drive organic traffic and improve rankings.",
    },
    {
      id: 4,
      icon: <GrVmMaintenance />,
      title: "Website Maintenance",
      description:
        "Keep your site updated, secure, and bug-free with ongoing maintenance, performance checks, and prompt issue resolution.",
    },
    {
      id: 5,
      icon: <RiCustomerService2Line />,
      title: "Web Consultancy",
      description:
        "Receive expert guidance on strategy, design, and development for impactful, scalable web solutions.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const serviceRef = useRef(null);
  const isServiceInView = useInView(serviceRef, { once: true });

  return (
    <section
      id="work"
      className="relative min-h-screen bg-[#ffffff]  dark:bg-[#020617]  sm:pt-20"
    >
      <div className="custom-shape-divider-top-1731476873">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill fill-[#fff] dark:fill-[#030d2b]"
          ></path>
        </svg>
      </div>
      <div className="container max-w-[1200px] mx-auto py-10 px-5 pt-24 sm:pt-20">
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

        <div className="headLine my-5 mb-5 sm:mb-20 ">
          <h2 className="text-lg sm:text-2xl md:text-2xl  dark:text-white text-center px-2 sm:px-5 md:px-10">
            I specialize in developing bespoke, user-centric websites.
          </h2>
        </div>
        <motion.div
          ref={serviceRef}
          style={{
            left: isServiceInView ? 0 : "-100%",
            opacity: isServiceInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="my-10 relative grid grid-cols-6 sm:grid-cols-12 gap-10 px-1 sm:px-5 duration-150"
        >
          {services.map((item, i) => {
            return (
              <div className="w-full col-span-6 sm:col-span-6 lg:col-span-4 rounded-xl py-3 px-5 border-2 border-blue-700 hover:scale-[1.05] relative">
                <div className="w-full sm:my-2">
                  <div className="w-max p-2 rounded-full text-blue-700 dark:text-[#fff] text-5xl sm:text-4xl md:text-5xl lg:text-6xl">
                    {item.icon}
                  </div>
                </div>
                <div className="w-full mt-5 text-lg sm:text-xl md:text-2xl font-bold text-[#32b2ed] dark:text-[#fff]">
                  {item.title}
                </div>
                <div className="w-full mt-5 mb-20 dark:text-[#cccccc] ">
                  {item.description}
                </div>
                <div className="w-full absolute bottom-5 py-2">
                  <Link
                    to={"/contact-form"}
                    className="px-4 py-2 text-[#fff] bg-[#1f1f1f] hover:bg-[#000] dark:bg-[#3f3f3f]  dark:hover:bg-[#282828] rounded-full"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
