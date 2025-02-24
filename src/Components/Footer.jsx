import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="max-w-[1200px] mx-auto bg-white text-black rounded-3xl p-8 my-5">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Manish</h3>
          <p className="text-gray-600 text-sm">
            Full Stack Developer specializing in creating beautiful and
            functional web applications.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/manishdev20"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/ManishDev21"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-80"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com/manishdev21"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:opacity-80"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com/dev.manish_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#h" alt="" className="text-gray-600 hover:text-black">
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                alt=""
                className="text-gray-600 hover:text-black"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                alt=""
                className="text-gray-600 hover:text-black"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                alt=""
                className="text-gray-600 hover:text-black"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Services</h3>
          <ul className="space-y-2">
            <li className="text-gray-600">Web Development</li>
            <li className="text-gray-600">Web Design</li>
            <li className="text-gray-600">Logo Design</li>
            <li className="text-gray-600">UI/UX Design</li>
          </ul>
        </div>
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Contact Info</h3>
          <div className="space-y-2">
            <a
              href="mailto:potentweb25official@gmail.com"
              className="flex items-center gap-2 text-gray-600 hover:text-black"
            >
              <IoMdMail /> potentweb25official@gmail.com
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="pt-8 mt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Manish. All rights reserved.
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
