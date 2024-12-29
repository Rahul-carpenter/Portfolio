import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { RxTwitterLogo } from "react-icons/rx";
import { SiBuymeacoffee } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="about"
      className="w-screen h-max min-[1025px]:min-h-screen py-10  bg-[#fff] dark:bg-[#000] relative"
    >
      <div className="Container max-w-[1200px] mx-auto  px-5 ">
        <motion.div
          ref={ref}
          style={{
            scaleX: isInView ? 1 : 0,
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          className="secHead w-full  my-5 flex justify-center sm:justify-start"
        >
          <div
            id="aboutH"
            className=" w-max  text-2xl sm:text-3xl md:text-4xl bg-black dark:bg-white  px-3 text-white dark:text-black font-bold"
          >
            About me
          </div>
        </motion.div>
        <div className="py-5 sm:pr-10 w-full lg:w-[80%] dark:text-white ">
          <h1 className="text-lg sm:text-2xl font-bold ">Hey there! 👋</h1>
          <p className="my-5 sm:my-10 sm:text-lg md:text-xl leadingP">
            Welcome to my corner of the Internet.
          </p>
          <p className="my-5 sm:my-10 sm:text-lg md:text-xl leadingP ">
            I'm all about creating websites—whether it's for businesses,
            portfolio, or landing pages. If it's on the web, I'm probably
            building it.
          </p>
          <p className=" gap-1  sm:text-lg md:text-xl leadingP">
            I like to{" "}
            <Link
              to={"/blog"}
              className="hover:text-blue-600 border-b-2 border-blue-500  "
            >
              <TfiWrite className="inline mx-1 " />
              write things
            </Link>
            , read Books , love learning, and share my thoughts and learnings on
            <a
              href="https://x.com/Manishdev21"
              className="hover:text-blue-600 border-b-2  border-blue-500 mx-2"
            >
              <RxTwitterLogo className="inline mx-1 " />
              twitter(X).
            </a>
          </p>
          <p className="my-5 sm:my-10 sm:text-lg md:text-xl leadingP">
            I Dream to start my own venture, so that I can help organizations,
            students and individuals with technology.
          </p>
          <p className="my-5 sm:my-10 sm:text-lg md:text-xl leadingP">
            Big Dreams, right? but I'm not stopping here, I'm on a journey of
            making ₹10,00,000, and any support, whether it's
            <a
              href="https://buymeacoffee.com/manishcodes
              "
              className="byCoffee text-sm md:text-lg border-b text-blue-500 dark:text-yellow-400 font-semibold  border-blue-500 dark:border-yellow-400 mx-1   dark:hover:text-blue-500 dark:hover:border-blue-500  sm:mx-2 italic"
            >
              <SiBuymeacoffee className="inline -rotate-12 " /> buying me a
              coffee
            </a>
            or
            <Link
              to={"/contact-form"}
              className="hireMe text-sm md:text-lg border-b text-blue-500 dark:text-yellow-400  font-semibold border-blue-500 dark:border-yellow-400 mx-1  dark:hover:text-blue-500 dark:hover:border-blue-500 sm:mx-2 italic "
            >
              Work with me,
            </Link>
            would be awesome! <br /> Check out the{" "}
            <Link
              to={"/progress-dashbord"}
              className="border-b-2 border-blue-500 hover:text-blue-600"
            >
              progress here.
            </Link>
          </p>
          <p className="my-5 sm:my-10  sm:text-lg md:text-xl leadingP">
            Want to connect or know more about me? Let's connect.
          </p>

          <div className="flex gap-5 text-xl sm:text-2xl md:text-3xl">
            <a href="https://x.com/Manishdev21" className="hover:text-blue-500">
              <FaSquareXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/manishdev21/"
              className="hover:text-blue-500"
            >
              <BsLinkedin />
            </a>
            <a
              href="mailto:manishdev2k02@gmail.com"
              className="hover:text-blue-500"
            >
              <IoMdMail />
            </a>
            <a
              href="https://github.com/manishdev20"
              className="hover:text-blue-500"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
