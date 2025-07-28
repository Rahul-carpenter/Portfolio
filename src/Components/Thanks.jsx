import React from "react";

const Thanks = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-[#090e16] transition-colors duration-500">
      <div className="text-center bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-xl max-w-lg w-full transition-colors duration-500">
        <h1 className="text-3xl font-semibold text-gradientBlue dark:text-gradientBlue">
          Thank You!
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
          Your message has been successfully received. I'll get back to you as soon as possible.
        </p>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Meanwhile, feel free to explore more about my work in DevOps, backend engineering, and cloud projects.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-gradientStart to-gradientEnd text-white rounded-md hover:brightness-110 transition duration-200"
        >
          Go back to Homepage
        </a>
      </div>
    </div>
  );
};

export default Thanks;
