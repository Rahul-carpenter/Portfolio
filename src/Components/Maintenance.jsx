import React from "react";

const Maintenance = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-4 text-center">
          Oops! 🚧
        </h1>
        <p className="text-lg md:text-xl text-gray-300 text-center mb-6">
          My portfolio is getting a makeover! <br />
          (Even websites need a spa day.)
        </p>
        <img
          src="https://i.giphy.com/media/3o6ZsYZga7hQ8pZcOY/giphy.gif"
          alt="Funny maintenance gif"
          className="rounded-lg shadow-lg mb-6 w-64 md:w-80"
        />
        <p className="text-sm md:text-base text-gray-400 text-center">
          Don't worry, I'll be back soon, probably with a fresh cup of coffee ☕
          and a new design!
        </p>
        <p className="text-sm md:text-base text-gray-500 mt-2">
          Meanwhile, you can reach me at{" "}
          <a
            href="mailto:your-email@example.com"
            className="text-yellow-500 hover:underline"
          >
            manishdev2k02@gmail.com
          </a>
        </p>
        <div className="text-lg my-10">
          {/*  WhatsApp me */}
          <a
            href="https://wa.me/+917357723361"
            className="bg-green-700 hover:bg-green-900 text-white px-4 py-2 rounded-3xl"
          >
            WhatsApp me{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
