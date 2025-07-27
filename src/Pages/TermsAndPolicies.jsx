import React from "react";

const TermsAndPolicies = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="max-w-4xl px-4 py-8 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Terms and Policies
        </h1>
        <p className="text-sm sm:text-base text-gray-300 mb-4 text-center">
          Effective Date: July 26, 2025
        </p>
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">
              1. Purpose of the Website
            </h2>
            <p className="text-gray-300 leading-relaxed">
              This portfolio website showcases my real-world DevOps and Python-based projects. It's intended to present my work, technical skills, and personal tools. Visitors may explore project details and contact me for collaboration or inquiries.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              2. Information Collection and Use
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If you submit the contact form (if available), I may collect:
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Message content</li>
            </ul>
            <p className="text-gray-300 mt-2 leading-relaxed">
              This information is only used to respond to inquiries about projects, tools, or collaboration ideas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Data Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              I respect your privacy. Any information you submit will not be shared or used for marketing. No cookies or tracking tools are intentionally embedded.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Project Disclaimer</h2>
            <p className="text-gray-300 leading-relaxed">
              All showcased projects are built for learning, exploration, or real-world case studies. Code or ideas may be reused under open-source conditions where applicable. However, no commercial warranty is provided.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              5. Policy Updates
            </h2>
            <p className="text-gray-300 leading-relaxed">
              This page may be updated periodically. Check back here for any changes to data handling or contact usage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Contact</h2>
            <p className="text-gray-300 leading-relaxed">
              For any questions related to this site or my projects, email me at
              <a
                href="mailto:potentweb25official@gmail.com"
                className="text-blue-700 hover:underline mx-1"
              >
                potentweb25official@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndPolicies;
