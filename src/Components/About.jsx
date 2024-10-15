import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const About = () => {
  const ref = useRef(null);
  const Eduref = useRef(null);
  const Expref = useRef(null);
  const Sumref = useRef(null);
  const Perref = useRef(null);
  const Lanref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isEduInView = useInView(Eduref, { once: true });
  const isExpInView = useInView(Expref, { once: true });
  const isSumInView = useInView(Sumref, { once: true });
  const isPerInView = useInView(Perref, { once: true });
  const isLanInView = useInView(Lanref, { once: true });

  return (
    <section
      id="about"
      className="w-screen h-max py-10 sm:py-20 md:min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 bg-slate-950"
    >
      <div className="w-full md:w-[90%]  mx-auto md:p-5">
        <div className="flex justify-center lg:justify-normal pb-0 sm:pb-10">
          <motion.div
            id="aboutH"
            ref={ref}
            style={{
              transform: isInView ? "Scale(1)" : "Scale(0)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
            className=" w-max text-xl sm:text-3xl md:text-4xl text-blue-500 font-semibold py-2 px-8 border-l-[3px] border-r-[3px] lg:border-r-0  bg-slate-800   "
          >
            About Me
          </motion.div>
        </div>
        <div className=" grid grid-cols-4 gap-6 sm:gap-3 px-5 py-10">
          <motion.div
            ref={Eduref}
            style={{
              transform: isEduInView ? "none" : "translateX(-100%)",
              opacity: isEduInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="col-span-4 lg:col-span-2 border-2 border-[#fff] rounded-lg flex flex-col gap-1 sm:gap-2 lg:gap-3 p-2 sm:p-5 duration-300"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#c1c1c1] pb-5 md:pb-4 text-center sm:text-left ">
              Education
            </h1>
            <h3 className=" text-sm sm:text-[16px] text-white text-center sm:text-left">
              July 2024 - Ongoing
            </h3>
            <h2 className="text-blue-400 text-lg sm:text-xl lg:text-xl font-semibold  text-center sm:text-left">
              Vivekananda Global University, Jaipur
            </h2>
            <h3 className="text-sm  sm:text-[16px] md:text-lg text-white text-center sm:text-left">
              Bachelor's of Computer Applicaitons, {"( AI )"}
            </h3>
          </motion.div>
          <motion.div
            ref={Expref}
            style={{
              transform: isExpInView ? "none" : "translateX(100%)",
              opacity: isExpInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="col-span-4 lg:col-span-2 border-2 border-[#fff] rounded-lg flex flex-col gap-2 sm:gap-3 lg:gap-4 p-2 sm:p-5 duration-75"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#c1c1c1] text-center sm:text-left pb-5 md:pb-0">
              Experience
            </h1>
            <div className=" flex flex-col md:flex-row justify-between gap-5 md:p-2">
              <div className="w-full md:w-[50%] flex flex-col gap-2 text-center sm:text-left mx-auto md:mx-0">
                <h3 className="text-sm md:text-[16px]  text-white">
                  July 2023 - April 2024
                </h3>
                <h2 className="text-blue-400 text-lg lg:text-[18px] font-semibold ">
                  Full Stack Web Development Course
                </h2>
                <h3 className="text-sm lg:text-lg text-white">
                  WsCube Tech, Jaipur
                </h3>
              </div>

              <hr className="w-[50%] mx-auto block md:hidden broder rounded-full border-[gray] " />

              <div className="w-full  md:w-[50%] flex flex-col gap-2 text-center sm:text-left mx-auto md:mx-0 ">
                <h3 className="text-sm md:text-[16px]  text-white ">
                  May 2023 - Ongoing
                </h3>
                <h2 className="text-lg  lg:text-[20px] font-semibold text-blue-400">
                  Personal Projects & Assignments
                </h2>
                <h3 className="text-sm lg:text-[16px] text-white">
                  Various projects and assignments completed in my spare time
                </h3>
              </div>
            </div>
          </motion.div>
          <motion.div
            ref={Sumref}
            style={{
              transform: isSumInView ? "none" : "translateX(-100%)",
              opacity: isSumInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="col-span-4 lg:col-span-2 border-2 border-[#fff] rounded-lg flex flex-col gap-2 sm:gap-3 lg:gap-4 p-2 sm:p-5 duration-300"
          >
            <h1 className="text-3xl lg:text-2xl font-bold text-[#c1c1c1]  text-center sm:text-left">
              Summary
            </h1>
            <p className="text-justify sm:text-left text-sm md:text-lg leading-6 lg:text-lg text-white px-2">
              I am a Full-Stack Web Developer based in Rajasthan,India. A
              self-motivated Full Stack Developer with a strong focus on
              frontend development and a solid foundation in backend
              technologies. Proficient in building responsive, user-friendly
              interfaces using React.js, HTML, CSS, and JavaScript, with
              additional experience in Node.js, Express.js, and MongoDB.
            </p>
          </motion.div>
          <motion.div
            ref={Perref}
            style={{
              transform: isPerInView ? "none" : "translateX(-100%)",
              opacity: isPerInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="col-span-4 sm:col-span-2 lg:col-span-1 border-2 border-[#fff] rounded-lg flex flex-col gap-2 sm:gap-3 lg:gap-4  py-2 px-5 sm:p-5 duration-300"
          >
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#c1c1c1] ">
              Persional Skills
            </h1>
            <div className=" sm:mx-0 flex flex-col gap-2 sm:gap-4 text-white  pt-2 t">
              <span>- Love Learning</span>
              <span>- Time Management</span>
              <span>- Problem Solving</span>
              <span>- Communication</span>
            </div>
          </motion.div>
          <motion.div
            ref={Lanref}
            style={{
              transform: isLanInView ? "none" : "translateX(100%)",
              opacity: isLanInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="col-span-4 sm:col-span-2 lg:col-span-1 border-2 border-[#fff] rounded-lg flex flex-col gap-2 sm:gap-3 lg:gap-4  py-2 px-5 sm:p-5 sm:duration-300"
          >
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#c1c1c1] ">
              Languages
            </h1>
            <div className=" sm:mx-0 flex flex-col gap-2 sm:gap-4 text-white pt-2  ">
              <span>
                Hindi <sup>( Native )</sup>
              </span>
              <span>
                English <sup>( Intermediate )</sup>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
