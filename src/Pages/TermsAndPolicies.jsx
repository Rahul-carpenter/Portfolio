import React from "react";

const TermsAndPolicies = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="max-w-4xl px-4 py-8 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Terms and Policies
        </h1>
        <p className="text-sm sm:text-base text-gray-300 mb-4 text-center">
          Effective Date: January 19, 2025
        </p>
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">
              1. Purpose of the Website
            </h2>
            <p className="text-gray-300 leading-relaxed">
              This website is designed to showcase my work as a freelance web
              developer and provide a way for potential clients to contact me.
              You may browse the content and use the contact form to inquire
              about my services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              2. Information Collection and Use
            </h2>
            <p className="text-gray-300 leading-relaxed">
              When you submit the contact form, I collect the following details:
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Any additional information included in your message</li>
            </ul>
            <p className="text-gray-300 mt-2 leading-relaxed">
              This information is used solely to respond to your inquiries,
              discuss potential projects or collaborations, and maintain
              communication for future requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Data Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Your personal information will not be shared, sold, or rented to
              any third parties. I take reasonable steps to protect your data
              from unauthorized access or misuse. However, no method of data
              transmission over the internet is entirely secure.
            </p>
            <p className="text-gray-300 mt-2 leading-relaxed">
              You can request access, correction, or deletion of your personal
              data by contacting me at a{" "}
              <a
                href="mailto:potentweb25official@gmail.com"
                className="text-blue-700 hover:underline"
              >
                potentweb25official@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              4. Prohibited Activities
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Misuse of the contact form, including sending spam or
              inappropriate inquiries, is strictly prohibited. Any unauthorized
              use of this website for malicious purposes is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Disclaimer</h2>
            <p className="text-gray-300 leading-relaxed">
              The content on this website is provided for informational purposes
              only. While I strive to keep it accurate and up-to-date, I make no
              guarantees about its completeness or accuracy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              6. Changes to Terms and Policies
            </h2>
            <p className="text-gray-300 leading-relaxed">
              I reserve the right to update these Terms and Policies at any time
              without prior notice. Continued use of the website after updates
              are made constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions or concerns about these Terms and
              Policies, feel free to reach out to me at
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
