import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const head1ref = useRef(null);
  const head2ref = useRef(null);
  const htmlref = useRef(null);
  const cssref = useRef(null);
  const javascriptref = useRef(null);
  const bootstrapref = useRef(null);
  const tailwindref = useRef(null);
  const reactref = useRef(null);
  const noderef = useRef(null);
  const expressref = useRef(null);
  const mongoref = useRef(null);
  const gitref = useRef(null);
  const githubref = useRef(null);
  const vercelref = useRef(null);
  const netlifyref = useRef(null);
  const webref = useRef(null);
  const depref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isHead1InView = useInView(head1ref, { once: true });
  const isHead2InView = useInView(head2ref, { once: true });
  const isHtmlInView = useInView(htmlref, { once: true });
  const isCssInView = useInView(cssref, { once: true });
  const isJavascriptInView = useInView(javascriptref, { once: true });
  const isBootstrapInView = useInView(bootstrapref, { once: true });
  const isTailwindInView = useInView(tailwindref, { once: true });
  const isReactInView = useInView(reactref, { once: true });
  const isNodeInView = useInView(noderef, { once: true });
  const isExpressInView = useInView(expressref, { once: true });
  const isMongoInView = useInView(mongoref, { once: true });
  const gitInView = useInView(gitref, { once: true });
  const isGithubInView = useInView(githubref, { once: true });
  const isVercelInView = useInView(vercelref, { once: true });
  const isNetlifyInView = useInView(vercelref, { once: true });
  const isWebInView = useInView(webref, { once: true });
  const isDepInView = useInView(depref, { once: true });
  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-white dark:bg-[#000] pt-20 sm:pt-32 lg:pt-40 relative"
    >
      <div className="w-full md:w-[90%] mx-auto md:p-5 ">
        <motion.div
          ref={ref}
          style={{
            translateY: isInView ? "-100%" : 0,
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          className="secHead flex justify-center px-3 sm:my-5 relative"
        >
          <div
            id="workH"
            className="z-10 w-max uppercase text-2xl sm:text-4xl md:text-5xl font-extrabold  dark:text-[#fff] "
          >
            Tech Stack
          </div>
          <div className="z-0 uppercase  text-[#5e5e5e25] dark:text-[#5e5e5e67]  -top-6 sm:-top-10 md:-top-12 lg:-top-16 absolute text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold ">
            Tech Stack
          </div>
        </motion.div>

        <motion.div
          initial="initial"
          whileHover="hovered"
          ref={head1ref}
          style={{
            scale: isHead1InView ? 1 : 0,
            opacity: isHead1InView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          className="dark:text-white dark:bg-[#202020] border-2 border-black dark:border-white w-max px-10 py-2 rounded-full text-[12px] sm:text-lg relative overflow-hidden mt-0 sm:mt-10 mx-auto duration-75"
        >
          <motion.div
            variants={{ initial: { y: 0 }, hovered: { y: "-100px" } }}
          >
            Web Development
          </motion.div>
          <motion.div
            className="absolute flex items-center justify-center text-center inset-0"
            variants={{ initial: { y: "100px" }, hovered: { y: 0 } }}
          >
            Full Stack Development
          </motion.div>
        </motion.div>
        <motion.div
          ref={webref}
          style={{
            left: isWebInView ? 0 : "-100%",
            opacity: isWebInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="w-full py-5 sm:py-10 duration-150 relative"
        >
          <div className="w-[80%] sm:w-[90%] md:w-[80%] mx-auto text-white grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-2 sm:gap-4 md:gap-6">
            <motion.div
              ref={htmlref}
              style={{
                rotateY: isHtmlInView ? "360deg" : 0,
                opacity: isHtmlInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
              className="col-span-1 cursor-pointer  sm:col-span-2 flex flex-col gap-2 justify-center items-center text-sm sm:text-[16px] font-semibold border rounded-lg bg-[#3e3e3e] dark:bg-slate-900 p-3 duration-500"
            >
              <img src="./img/iconhtml.svg" alt="" />
              <span>HTML</span>
            </motion.div>
            <motion.div
              ref={cssref}
              style={{
                rotateY: isCssInView ? "360deg" : 0,
                opacity: isCssInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
              className="col-span-1 cursor-pointer sm:col-span-2 flex flex-col gap-2 justify-center items-center text-sm sm:text-[16px] font-semibold border rounded-lg bg-[#3e3e3e] dark:bg-slate-900 p-3"
            >
              <img src="./img/iconcss.svg" alt="" />
              <span>CSS</span>
            </motion.div>
            <motion.div
              ref={javascriptref}
              style={{
                rotateY: isJavascriptInView ? "360deg" : 0,
                opacity: isJavascriptInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
              className="col-span-1 cursor-pointer sm:col-span-2 flex flex-col gap-2 justify-center items-center text-sm sm:text-[16px] font-semibold border rounded-lg bg-[#3e3e3e] dark:bg-slate-900 p-3"
            >
              <img src="./img/iconjavascript.svg" alt="" />
              <span>JAVASCRIPT</span>
            </motion.div>
            <motion.div
              ref={bootstrapref}
              style={{
                rotateY: isBootstrapInView ? "360deg" : 0,
                opacity: isBootstrapInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
              className="col-span-1 cursor-pointer sm:col-span-2 flex flex-col gap-2 justify-center items-center text-sm sm:text-[16px] font-semibold border rounded-lg bg-[#3e3e3e] dark:bg-slate-900 p-3"
            >
              <img src="./img/iconbootstrap.svg" alt="" />
              <span>BOOTSTRAP</span>
            </motion.div>
            <motion.div
              ref={tailwindref}
              style={{
                rotateY: isTailwindInView ? "360deg" : 0,
                opacity: isTailwindInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
              className="col-span-1 cursor-pointer sm:col-span-2 flex flex-col gap-2 justify-center items-center text-sm sm:text-[16px] font-semibold border rounded-lg bg-[#3e3e3e] dark:bg-slate-900 p-3"
            >
              <img src="./img/icontailwind.svg" alt="" />
              <span>TAILWIND CSS</span>
            </motion.div>
            <motion.div
              ref={reactref}
              style={{
                rotateY: isReactInView ? "360deg" : 0,
                opacity: isReactInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
              className="col-span-1 cursor-pointer sm:col-span-2 flex flex-col gap-2 justify-center items-center text-sm sm:text-[16px] font-semibold border rounded-lg bg-[#3e3e3e] dark:bg-slate-900 p-3"
            >
              <img src="./img/iconreactjs.svg" alt="" />
              <span>REACT JS</span>
            </motion.div>
            <motion.div
              ref={noderef}
              style={{
                rotateY: isNodeInView ? "360deg" : 0,
                opacity: isNodeInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
              className="col-span-1 cursor-pointer sm:col-span-2  lg:col-start-4 flex flex-col gap-2 justify-center items-center text-sm sm:text-[16px] font-semibold border rounded-lg bg-[#3e3e3e] dark:bg-slate-900 p-3"
            >
              <img src="./img/iconnodejs.svg" alt="" width={90} height={90} />
              <span>NODE JS</span>
            </motion.div>
            <motion.div
              ref={expressref}
              style={{
                rotateY: isExpressInView ? "360deg" : 0,
                opacity: isExpressInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
              className="col-span-1 cursor-pointer sm:col-span-2 flex flex-col gap-2 justify-center items-center text-sm sm:text-[16px] font-semibold border rounded-lg bg-[#3e3e3e] dark:bg-slate-900 p-3"
            >
              <img
                src="./img/iconexpressjs.svg"
                alt=""
                width={90}
                height={90}
              />
              <span>EXPRESS JS</span>
            </motion.div>
            <motion.div
              ref={mongoref}
              style={{
                rotateY: isMongoInView ? "360deg" : 0,
                opacity: isMongoInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
              className="col-span-2 sm:col-span-2  sm:col-start-2 md:col-start-4 lg:col-start-auto flex flex-col gap-2 justify-center items-center text-sm sm:text-[16px] font-semibold border rounded-lg bg-[#3e3e3e] dark:bg-slate-900 p-3  "
            >
              <img src="./img/iconmongodb.svg" alt="" width={90} height={90} />
              <span>MongoDB</span>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial="initial"
          whileHover="hovered"
          ref={head2ref}
          style={{
            translateY: isHead2InView ? 1 : 0,
            opacity: isHead2InView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          className="text-black dark:text-white  dark:bg-[#202020] border-2 border-black dark:border-white w-max px-10 py-2 rounded-full text-[12px] sm:text-lg relative overflow-hidden mt-10 mx-auto duration-75 "
        >
          <motion.div
            variants={{ initial: { y: 0 }, hovered: { y: "-100px" } }}
          >
            Web Deployment
          </motion.div>
          <motion.div
            className="absolute flex items-center justify-center text-center inset-0 "
            variants={{ initial: { y: "100px" }, hovered: { y: 0 } }}
          >
            Code Management
          </motion.div>
        </motion.div>
        <motion.div
          ref={depref}
          style={{
            right: isDepInView ? 0 : "-100%",
            opacity: isDepInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="w-full py-5 sm:py-10 duration-150 relative"
        >
          <div className="w-[80%] sm:w-[60%] md:w-[50%] mx-auto  text-white grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-4 md:gap-6">
            <motion.div
              ref={gitref}
              style={{
                rotateX: gitInView ? "360deg" : 0,
                opacity: gitInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
              className="col-span-1 cursor-pointer sm:col-span-2 flex flex-col gap-2 justify-center items-center text-sm sm:text-[16px] font-semibold border rounded-lg bg-[#3e3e3e] dark:bg-slate-900 p-3"
            >
              <img src="./img/icongit.svg" alt="" />
              <span>GIT</span>
            </motion.div>
            <motion.div
              ref={githubref}
              style={{
                rotateX: isGithubInView ? "360deg" : 0,
                opacity: isGithubInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
              className="col-span-1 cursor-pointer sm:col-span-2 flex flex-col gap-2 justify-center items-center text-sm sm:text-[16px] font-semibold border rounded-lg bg-[#3e3e3e] dark:bg-slate-900 p-3"
            >
              <img src="./img/icongithub.svg" alt="" />
              <span>GITHUB</span>
            </motion.div>
            <motion.div
              ref={vercelref}
              style={{
                rotateX: isVercelInView ? "360deg" : 0,
                opacity: isVercelInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
              className="col-span-1 cursor-pointer sm:col-span-2 flex flex-col gap-2 justify-center items-center text-sm sm:text-[16px] font-semibold border rounded-lg bg-[#3e3e3e] dark:bg-slate-900 p-3"
            >
              <img
                src="./img/iconvercel.svg"
                alt=""
                className="w-full h-full"
              />
              <span>VERCEL</span>
            </motion.div>
            <motion.div
              ref={netlifyref}
              style={{
                rotateX: isNetlifyInView ? "360deg" : 0,
                opacity: isNetlifyInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
              className="col-span-1 cursor-pointer col-start-2 sm:col-start-3  sm:col-span-2 flex flex-col gap-2 justify-center items-center text-sm sm:text-[16px] font-semibold border rounded-lg bg-[#3e3e3e] dark:bg-slate-900 p-3"
            >
              <img
                src="./img/iconnetlify.svg"
                alt=""
                className="w-[100px] h-[100px]"
              />
              <span>Netlify</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
