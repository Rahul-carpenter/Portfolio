import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Code2, Server, BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const startDate = new Date("2024-01-01"); // Update this to your actual journey start date
    const today = new Date();
    const diff = today - startDate;
    setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
  }, []);

  return (
    <section
      id="about"
      className="max-w-[1200px] mx-auto px-4 sm:px-10 py-10 rounded-3xl shadow-xl
                 bg-white dark:bg-[#111827] my-8"
    >
      <div className="rounded-3xl p-6 sm:p-10 text-gray-900 dark:text-gray-300">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          About Me
        </h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
          Hey, I’m Rahul — a self-driven developer with a deep curiosity for DevOps, automation, and cloud technologies. 
          I love turning real-world problems into working solutions. From building a voice assistant in Streamlit to 
          deploying apps with Docker and Kubernetes, I'm all about <strong>learning by doing</strong>.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Connect Section */}
          <div className="rounded-2xl p-6 bg-gray-900 dark:bg-black text-white">
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/Rahul-carpenter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/rahul-carpenter124"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Progress Section */}
          <div className="rounded-2xl p-6 bg-gray-900 dark:bg-black text-white flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold mb-2">Learning Journey</h3>
            <p className="mb-3 text-sm text-gray-300">
              {days}+ Days of Continuous Learning 🚀
            </p>
            <Link
              to="/progress-dashbord"
              className="bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition"
            >
              View Progress ➚
            </Link>
          </div>

          {/* Skills Section */}
          <div className="rounded-2xl p-6 bg-gray-900 dark:bg-black text-white">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Code2 size={18} />
                <span>Python, Flask, Streamlit</span>
              </div>
              <div className="flex items-center gap-2">
                <Server size={18} />
                <span>Docker, Kubernetes, Jenkins</span>
              </div>
              <div className="flex items-center gap-2">
                <BrainCircuit size={18} />
                <span>AWS, Terraform, Ansible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
