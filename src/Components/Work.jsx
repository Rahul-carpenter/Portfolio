import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-12 px-4 md:px-12 bg-white dark:bg-[#090e16] transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
          My Projects
        </h2>

        {/* EduCall Manager */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md mb-8 transition-colors duration-500">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            📞 EduCall Manager
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            A lead management platform for educational agencies with role-based
            dashboards, lead uploads, and agent interactions.
          </p>
          <p className="text-sm text-red-500 mb-2">
            🔒 Private GitHub Repository
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://educall-manager.onrender.com/"
              className="text-blue-600 dark:text-indigo-400 hover:underline transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 View Live
            </a>
          </div>
        </div>

        {/* Blinkit Power BI */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md mb-8 transition-colors duration-500">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            🚀 Power BI Project: Blinkit Sales Analysis 📊
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            I built a Power BI dashboard to analyze Blinkit sales trends!
          </p>
          <ul className="list-disc ml-6 text-gray-600 dark:text-gray-400">
            <li>Sales patterns & revenue insights</li>
            <li>Outlet-wise performance analysis</li>
            <li>Actionable data-driven decisions</li>
          </ul>
          <a
            href="https://github.com/Rahul-carpenter/Blinkit-Sales-Analysis"
            className="text-blue-600 dark:text-indigo-400 hover:underline mt-2 inline-block transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 GitHub Repo
          </a>
        </div>

        {/* Lottery Probability Calculator */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md mb-8 transition-colors duration-500">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            🎲 Lottery Probability Calculator
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            Developed using Python and Streamlit, this project simulates real-world
            lottery odds, ticket value analysis, and return simulations.
          </p>
          <ul className="list-disc ml-6 text-gray-600 dark:text-gray-400 text-sm">
            <li>Single & Multi-ticket win probability</li>
            <li>Historical draw checker</li>
            <li>Cost vs. returns simulator</li>
          </ul>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
            Built with: Python, Streamlit, Pandas, NumPy, Matplotlib
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="https://github.com/Rahul-carpenter/lottery-game"
              className="text-blue-600 dark:text-indigo-400 hover:underline transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 GitHub Repo
            </a>
            <a
              href="https://lottery-game-9mkkhteuxunjjgzp8sdyrt.streamlit.app/"
              className="text-blue-600 dark:text-indigo-400 hover:underline transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 View Live
            </a>
          </div>
        </div>

        {/* Feature-Controlled Assistant */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md transition-colors duration-500">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            🤖 Feature-Controlled Assistant
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            AI-powered assistant built using Python and AWS to control applications via
            voice, automate social tasks, and manage cloud resources.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
            Tech Stack: Python, AWS, OpenCV, Instabot
          </p>
          <a
            href="https://github.com/Rahul-carpenter/aws-assistant"
            className="text-blue-600 dark:text-indigo-400 hover:underline transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 GitHub Repo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
