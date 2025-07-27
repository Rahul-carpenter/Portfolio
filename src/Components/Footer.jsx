import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="max-w-[1200px] mx-auto bg-white text-black rounded-3xl p-8 my-5">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Rj</h3>
          <p className="text-gray-600 text-sm">
            DevOps & Cloud enthusiast building real-world tools and platforms with modern tech.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Rahul-carpenter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:opacity-80"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/rahul-carpenter124"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-80"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="text-gray-600 hover:text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-600 hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-600 hover:text-black">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 hover:text-black">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Services</h3>
          <ul className="space-y-2">
            <li className="text-gray-600">DevOps Projects</li>
            <li className="text-gray-600">Cloud Deployment</li>
            <li className="text-gray-600">CI/CD Pipelines</li>
            <li className="text-gray-600">System Automation</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Contact Info</h3>
          <div className="space-y-2">
            <a
              href="mailto:rj@example.com"
              className="flex items-center gap-2 text-gray-600 hover:text-black"
            >
              <IoMdMail /> rahulcarpenter09.com
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-8 mt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Rahul. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link to="/privacy" className="text-gray-600 hover:text-black">
              Terms & Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
