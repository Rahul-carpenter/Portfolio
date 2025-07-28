import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="max-w-[1200px] mx-auto bg-white dark:bg-[#090e16] text-black dark:text-gray-300 rounded-3xl p-8 my-5 transition-colors duration-500">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Rj</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            DevOps & Cloud enthusiast building real-world tools and platforms with modern tech.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Rahul-carpenter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:opacity-80 text-gray-800 dark:text-gray-300 transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/rahul-carpenter124"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-80 text-gray-800 dark:text-gray-300 transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Services</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>DevOps Projects</li>
            <li>Cloud Deployment</li>
            <li>CI/CD Pipelines</li>
            <li>System Automation</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Contact Info</h3>
          <div className="space-y-2">
            <a
              href="mailto:rj@example.com"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
            >
              <IoMdMail /> rahulcarpenter09.com
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-8 mt-8 border-t border-gray-300 dark:border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Rahul. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link
              to="/privacy"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
            >
              Terms &amp; Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
