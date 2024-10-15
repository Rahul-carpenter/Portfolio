import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      id="skills"
      className="w-full h-screen bg-gradient-to-b from-slate-900 via-slate-950 bg-slate-950 pt-10"
    >
      <div className="w-full md:w-[90%]  mx-auto md:p-5 ">
        <div className="flex justify-center lg:justify-normal ">
          <motion.div
            ref={ref}
            style={{
              transform: isInView ? "Scale(1)" : "Scale(0)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
            className=" w-max text-xl sm:text-3xl md:text-4xl text-blue-500 font-semibold py-2 px-8 border-l-[3px] border-r-[3px] lg:border-r-0 bg-slate-800 "
          >
            Tech Stack
          </motion.div>
        </div>
        <div className="w-full  pt-5 sm:pt-10">
          <div className="w-full sm:w-[90%] md:w-[80%] mx-auto text-white grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-2 sm:gap-4 md:gap-6">
            <div className="col-span-2 flex flex-col gap-2 justify-center items-center font-semibold border rounded-lg bg-slate-900 p-3">
              <img src="./img/iconhtml.svg" alt="" />
              <span>HTML</span>
            </div>
            <div className="col-span-2 flex flex-col gap-2 justify-center items-center font-semibold border rounded-lg bg-slate-900 p-3">
              <img src="./img/iconcss.svg" alt="" />
              <span>CSS</span>
            </div>
            <div className="col-span-2 flex flex-col gap-2 justify-center items-center font-semibold border rounded-lg bg-slate-900 p-3">
              <img src="./img/iconjavascript.svg" alt="" />
              <span>JAVASCRIPT</span>
            </div>
            <div className="col-span-2 flex flex-col gap-2 justify-center items-center font-semibold border rounded-lg bg-slate-900 p-3">
              <img src="./img/iconbootstrap.svg" alt="" />
              <span>REACT JS</span>
            </div>
            <div className="col-span-2 flex flex-col gap-2 justify-center items-center font-semibold border rounded-lg bg-slate-900 p-3">
              <img src="./img/icontailwind.svg" alt="" />
              <span>TAILWIND CSS</span>
            </div>
            <div className="col-span-2 flex flex-col gap-2 justify-center items-center font-semibold border rounded-lg bg-slate-900 p-3">
              <img src="./img/iconreactjs.svg" alt="" />
              <span>REACT JS</span>
            </div>
            <div className="col-span-2 flex flex-col gap-2 justify-center items-center font-semibold border rounded-lg bg-slate-900 p-3">
              <img src="./img/iconnodejs.svg" alt="" />
              <span>REACT JS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
