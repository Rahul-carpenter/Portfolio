import React from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <section
      id="footer"
      className="w-full min-h-[200px] py-5 bg-gradient-to-b from-slate-950 to-black"
    >
      <div className="flex justify-center text-white ">
        <a href="#hero" className="flex flex-col items-center gap-2">
          <span>
            <MdKeyboardDoubleArrowUp />
          </span>
          <span>Back to Top</span>
        </a>
      </div>
      <div className="flex gap-4 justify-center text-white my-5 text-4xl ">
        <a
          href="https://www.linkedin.com/in/manishdev21/"
          className="flex flex-col items-center gap-2 hover:text-blue-500"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/manishdev20"
          className="flex flex-col items-center gap-2 hover:text-blue-500"
        >
          <FaSquareGithub />
        </a>
        <a
          href="https://x.com/Manishdev21"
          className="flex flex-col items-center gap-2 hover:text-blue-500"
        >
          <FaSquareXTwitter />
        </a>

        <a
          href="mailto:manishdev21@gmail.com"
          className="flex flex-col items-center gap-2 hover:text-blue-500"
        >
          <IoMdMail />
        </a>
      </div>
      <div className="flex gap-4 justify-center text-gray-400 my-5  ">
        © 2024 | Manish.Dev
      </div>
    </section>
  );
};

export default Footer;
