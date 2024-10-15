import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
// import { MdMenu } from "react-icons/md";
// import { MdMenuOpen } from "react-icons/md";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="hero" className="">
      <div className="w-full h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="Nav w-[100%] md:w-[90%] lg:w-[80%] h-[80px] mx-auto flex justify-start  items-center px-5 relative">
          <div className=" text-xl sm:text-2xl md:text-4xl font-bold flex items-center  text-white">
            Manish
            <motion.span
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateY(-100%)",
                opacity: isInView ? 1 : 0,
                transition:
                  "all 0.5    s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
              }}
              className="Logo text-green-500  relative"
            >
              .dev
            </motion.span>
          </div>
        </div>
        <div className="w-full h-[80%] flex md:block items-center">
          <div className="w-full flex justify-center pt-[50px] sm:pt-10 md:pt-20  py-5">
            <div className="w-[90%] md:w-[80%] lg:w-[60%]  flex flex-col  items-center gap-5 ">
              <motion.div
                initial="initial"
                whileHover="hovered"
                className="text-white bg-[#202020] border-2 w-max px-6 py-2 rounded-full text-[12px] sm:text-lg relative overflow-hidden"
              >
                <motion.div
                  variants={{ initial: { y: 0 }, hovered: { y: "-100px" } }}
                >
                  Web Developer
                </motion.div>
                <motion.div
                  className="absolute flex items-center justify-center text-center inset-0"
                  variants={{ initial: { y: "100px" }, hovered: { y: 0 } }}
                >
                  Programmer
                </motion.div>
              </motion.div>
              <div className="pt-3 sm:pt-5 text-white">
                <div className="text-4xl min-[400px]:text-5xl sm:text-6xl md:text-7xl min-[1075px]:text-8xl ">
                  <div className="font-extrabold ">
                    <motion.span
                      ref={ref}
                      className="duration-[0.3s] relative"
                      initial={{ left: "-300px" }}
                      animate={{ left: isInView ? "-5px" : "-300px" }}
                    >
                      Manish
                    </motion.span>
                    <motion.span
                      ref={ref}
                      className="duration-[0.3s] relative"
                      initial={{ right: "-300px" }}
                      animate={{ right: isInView ? "-5px" : "-300px" }}
                    >
                      Meena
                    </motion.span>
                  </div>
                </div>
              </div>

              <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: isInView ? 1 : 0,
                }}
                className="w-[90%] sm:w-full text-sm sm:text-lg pt-3 sm:pt-5 text-center text-[#c7bbbb] "
              >
                <Typewriter
                  loop={1}
                  typeSpeed={30}
                  cursorStyle="_"
                  words={[
                    "Hello, Im Manish from India. I am a full-stack web developer, I create simple, responsive, fast and user-friendly Websites, Portfolio, and Web Apps. ",
                  ]}
                />
              </motion.div>
              <div className="text-sm sm:text-lg lg:text-xl pt-5">
                <a
                  href="mailto:manishdev2k02@gmail.com"
                  className=" bg-green-600 hover:bg-green-700 z-[2] shadow-lg px-5 py-2 rounded-full text-white "
                >
                  Reach out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
