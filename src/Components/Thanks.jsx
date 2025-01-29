import React from "react";

const Thanks = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
        <h1 className="text-3xl font-semibold text-blue-600">Thank You!</h1>
        <p className="mt-4 text-gray-600 text-lg">
          Your query has been successfully submitted. I will get back to you as
          soon as possible.
        </p>
        <p className="mt-2 text-gray-500">
          In the meantime, feel free to explore my portfolio or contact me for
          any further assistance.
        </p>
        <a
          href="https://manishcodes.netlify.app/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          Go back to Homepage
        </a>
      </div>
    </div>
  );
};

export default Thanks;
