import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { FaUserCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

const Blog = () => {
  const ref = useRef(null);
  const blog1ref = useRef(null);
  const blog2ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isBlog1InView = useInView(blog1ref, { once: true });
  const isBlog2InView = useInView(blog2ref, { once: true });
  return (
    <section
      id="blogs"
      className="min-h-screen w-full bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 py-10"
    >
      <div className="w-full md:w-[90%]  mx-auto  md:p-5 ">
        <div className="flex justify-center lg:justify-normal py-5">
          <motion.div
            id="blogH"
            ref={ref}
            style={{
              translateX: isInView ? 0 : "-100%",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
            className=" w-max text-xl sm:text-3xl md:text-4xl text-white font-semibold py-2 px-8 border-l-[3px] border-r-[3px] lg:border-r-0 border-blue-500  bg-slate-800 duration-300"
          >
            My Blogs
          </motion.div>
        </div>

        <div className="w-[90%] lg:w-[80%] mx-auto py-5 sm:py-10 ">
          <div className=" w-full text-center text-lg sm:text-xl mb-10 text-[#989898]">
            My thoughts on Technology and Personal Developement. I love to read
            and write in my idle hours.
          </div>
          <div className="w-full grid gap-5 sm:gap-y-10 sm:gap-x-5 grid-cols-12  rounded-xl">
            <motion.div
              ref={blog1ref}
              style={{
                scale: isBlog1InView ? 1 : 0,
                opacity: isBlog1InView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
              className="sm:flex gap-5 col-span-12 p-5 duration-100 bg-slate-800 bg-opacity-[0.2] rounded-xl"
            >
              <img
                src="./img/frontend.jpg"
                alt=""
                className="sm:w-[40%] rounded-lg"
              />
              <div className="flex flex-col gap-2 sm:gap-4 p-2 text-white">
                <div className=" flex gap-5 justify-between sm:justify-normal text-blue-200 py-2 sm:py-0 px-2">
                  <div className="flex items-center gap-2 text-sm sm:text-[16px]">
                    <FaUserCircle />
                    by Manish
                  </div>
                  <div className="flex items-center  gap-2 text-sm sm:text-[16px]">
                    <FaRegClock />
                    05 Oct 2024
                  </div>
                </div>
                <h1 className="text-xl md:text-xl lg:text-2xl font-bold ">
                  How to become a Frontend Developer in 2024.
                </h1>
                <p className="text-gray-400 text-justify sm:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  iure autem quo sint aspernatur. Assumenda vitae ullam labore
                  cum in. Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. In, corporis.
                </p>
                <div className="w-max bg-blue-600 hover:bg-blue-500 px-2 py-1 rounded-xl flex gap-2 items-center ">
                  <a href="https://github.com/" className=" ">
                    Read More
                  </a>
                  <IoMdArrowForward className="hidden sm:block text-xl -rotate-[30deg]" />
                </div>
              </div>
            </motion.div>
            <motion.div
              ref={blog2ref}
              style={{
                scale: isBlog2InView ? 1 : 0,
                opacity: isBlog2InView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
              className="sm:flex gap-5 col-span-12 p-5 duration-100 bg-slate-800 bg-opacity-[0.2] rounded-xl"
            >
              <img
                src="./img/backend.webp"
                alt=""
                className="sm:w-[40%] rounded-lg"
              />
              <div className="flex flex-col gap-2 sm:gap-4 p-2 text-white">
                <div className=" flex gap-5 justify-between sm:justify-normal text-blue-200 py-2 sm:py-0 px-2">
                  <div className="flex items-center gap-2 text-sm sm:text-[16px]">
                    <FaUserCircle />
                    by Manish
                  </div>
                  <div className="flex items-center  gap-2 text-sm sm:text-[16px]">
                    <FaRegClock />
                    17 Nov 2024
                  </div>
                </div>
                <h1 className="text-xl md:text-xl lg:text-2xl font-bold ">
                  Roadmap: How to become a Backend Developer in 2024.
                </h1>
                <p className="text-gray-400 text-justify sm:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  iure autem quo sint aspernatur. Assumenda vitae ullam labore
                  cum in. Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. In, corporis.
                </p>

                <div className="w-max text-center bg-blue-600 hover:bg-blue-500 px-2 py-1 rounded-xl flex gap-2 items-center ">
                  <a href="https://github.com/" className=" ">
                    Read More
                  </a>
                  <IoMdArrowForward className="hidden sm:block text-xl -rotate-[30deg]" />
                </div>
              </div>
            </motion.div>
          </div>
          <div className=" text-center  text-white my-10 p-5">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold bg-black hover:bg-[#101010] border-b-2 py-2 rounded-full px-5 hover:border-b-0 relative hover:top-[2px]"
            >
              See More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
