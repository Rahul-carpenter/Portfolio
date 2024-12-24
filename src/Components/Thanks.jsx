import React from "react";

const Thanks = () => {
  return (
    <div className="bg-gray-600 dark:bg-[#000] text-white">
      <div className="max-w-[1000px]  py-5 sm:py-10 mx-auto">
        <div className="text-center text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold my-5">
          " Thanks for Scrolling! "
        </div>
        <div className="text-center sm:text-lg  md:text-xl px-2">
          I hope you found my work interesting. If you have any more questions
          or have a project in mind.
        </div>
        <div className="w-max mx-auto rounded-2xl text-white text-center my-5 font-bold px-4 py-1 bg-purple-700 ">
          Contact me
        </div>
        <a
          href="mailto:manishdev2k02@gmail.com"
          className="text-center  w-max mx-auto block  hover:text-yellow-500"
        >
          manishdev2k02@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Thanks;
