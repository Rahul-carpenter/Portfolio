import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      id="blogs"
      className="min-h-screen w-full bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950"
    >
      <div className="w-full md:w-[90%] mx-auto md:p-5 ">
        <div className="flex justify-center lg:justify-normal ">
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
            Blogs
          </motion.div>
        </div>
        <div className="border w-[90%] lg:w-[80%] mx-auto py-5 sm:py-10">
          <div className="w-full grid grid-cols-12">
            <div className="col-span-6 md:col-span-12 border">
              <img src="" alt="" className="w-[40%]" />
              <div className="flex flex-col gap-2 sm:gap-4">
                <h1 className="sm:text-lg md:text-xl lg:text-2xl"></h1>
              </div>
            </div>
            <div className="col-span-6 md:col-span-12 border"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
