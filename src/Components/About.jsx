import React from "react";

import { Globe2, PenTool } from "lucide-react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const About = () => {
  //   const ref = useRef(null);
  //   const isInView = useInView(ref, { once: true });

  // days counter

  //   const [days, setDays] = useState(0);

  //   useEffect(() => {
  //     // Define the start date
  //     const startDate = new Date("2022-09-01");
  //     const today = new Date();

  //     // Calculate the difference in time
  //     const differenceInTime = today - startDate;

  //     // Convert time difference to days
  //     const differenceInDays = Math.floor(
  //       differenceInTime / (1000 * 60 * 60 * 24)
  //     );
  //     setDays(differenceInDays);
  //   }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <section
      id="about"
      className="max-w-[1200px] mx-auto h-max px-4 sm:px-10 py-5 sm:py-10  bg-[#fff] my-5 rounded-3xl relative"
    >
      <div className="bg-white text-black rounded-3xl p-4 sm:p-8">
        <h2 className="text-5xl font-bold text-gray-300 mb-8 text-center">
          ABOUT ME
        </h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          I'm all about developing websites— Helping businesses to grow online,
          Individuals to build personal branding, and always open to listen new
          ideas from you.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black text-white rounded-2xl p-6">
            <h3 className="text-xl mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/manishdev20"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 hover:text-blue-500 cursor-pointer"
              >
                <span>
                  <FaGithub />
                </span>
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/ManishDev21"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 hover:text-blue-500 cursor-pointer"
              >
                <span>
                  <FaLinkedin />
                </span>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/manishdev21"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex items-center gap-2 hover:text-blue-500 cursor-pointer"
              >
                <span>
                  <FaTwitter />
                </span>
                <span>Twitter</span>
              </a>
            </div>
          </div>
          <div className="bg-black text-white rounded-2xl p-6 flex flex-col items-center justify-center">
            <h3 className="text-xl mb-4">1 Million Journey</h3>
            <div className="flex gap-2 mb-4">
              <div className="w-4 h-4 rounded-full bg-purple-500"></div>
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
              <div className="w-4 h-4 rounded-full bg-pink-500"></div>
            </div>
            <Link
              to={"/progress-dashbord"}
              className="bg-white text-black px-4 py-1 rounded-full text-sm"
            >
              Check Progress ➚
            </Link>
          </div>
          <div className="bg-black text-white rounded-2xl p-6">
            <h3 className="text-xl mb-4">Skills</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Globe2 size={18} />
                <span>Web development</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 size={18} />
                <span>Web Design</span>
              </div>
              <div className="flex items-center gap-2">
                <PenTool size={18} />
                <span>Logo Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
