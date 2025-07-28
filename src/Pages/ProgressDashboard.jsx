import React from "react";
import { Link } from "react-router-dom";

const ProgressDashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      <Link to="/" className="text-5xl sm:text-6xl font-bold mb-8 text-blue-400">
        rj
      </Link>

      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
          Portfolio Progress
        </h1>
        <p className="text-gray-400 max-w-xl">
          This page will soon display insights about my portfolio journey and career growth.
        </p>
      </div>
    </div>
  );
};

export default ProgressDashboard;
