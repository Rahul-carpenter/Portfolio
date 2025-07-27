import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { SiWhatsapp } from "react-icons/si";

const ContactForm = () => {
  const [checked, setChecked] = useState("");
  const handleChecked = (e) => {
    setChecked(e.target.value);
  };

  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");

  const countryCodes = [
    { code: "+1", label: "USA" },
    { code: "+91", label: "IN" },
    { code: "+44", label: "UK" },
    { code: "+61", label: "AUS" },
  ];

  return (
    <div className="form-container w-full min-h-screen bg-black">
      <div className="w-full sm:w-[80%] mx-auto py-10 px-5 lg:flex gap-10 text-white">
        {/* Left Sidebar */}
        <div className="lg:w-[40%]">
          <h1 className="text-3xl lg:text-4xl font-bold">Let's Work Together</h1>
          <h2 className="my-6 text-5xl font-extrabold text-[#36daff]">You Think, I Build!</h2>
          <p className="text-gray-300">
            Got a big idea or a project in mind? Let's connect! I'd love to hear
            what you're planning and how I can help.
          </p>
          <div className="my-10 flex gap-5">
            <a
              href="mailto:rj.yourmail@example.com"
              className="flex items-center gap-3 hover:text-blue-400"
            >
              <span className="p-2 bg-blue-400 rounded-full">
                <CiMail className="text-2xl" />
              </span>
            </a>
            <a
              href="https://wa.me/917357723361?text=Hey%20Rj%2C%20I%20found%20your%20portfolio%20and%20would%20love%20to%20connect!"
              className="flex items-center gap-3 hover:text-green-400"
            >
              <span className="p-2 bg-green-400 rounded-full">
                <SiWhatsapp className="text-2xl" />
              </span>
            </a>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:w-[60%] bg-white rounded-xl p-5 border-t-[10px] border-blue-500 text-black">
          <form action="https://formspree.io/f/xbljkjjo" method="POST">
            <h2 className="text-3xl font-semibold text-center mb-6">Contact Me</h2>

            <h3 className="mb-2">You need help with:</h3>
            <div className="flex gap-4 mb-4 flex-wrap">
              <label
                htmlFor="webDevelopment"
                className={`px-3 py-1 border-2 rounded-md cursor-pointer ${
                  checked === "website-development"
                    ? "bg-[#c422f5] text-white border-[#c422f5]"
                    : "border-[#c422f5]"
                }`}
              >
                <input
                  type="radio"
                  id="webDevelopment"
                  name="services"
                  value="website-development"
                  onChange={handleChecked}
                  className="hidden"
                />
                Website Development
              </label>

              <label
                htmlFor="webDesign"
                className={`px-3 py-1 border-2 rounded-md cursor-pointer ${
                  checked === "website-design"
                    ? "bg-[#c422f5] text-white border-[#c422f5]"
                    : "border-[#c422f5]"
                }`}
              >
                <input
                  type="radio"
                  id="webDesign"
                  name="services"
                  value="website-design"
                  onChange={handleChecked}
                  className="hidden"
                />
                Website Design
              </label>
            </div>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full px-3 py-2 mb-4 border-2 border-gray-400 rounded focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-3 py-2 mb-4 border-2 border-gray-400 rounded focus:outline-none"
            />

            <div className="flex mb-4 gap-2">
              <select
                value={selectedCountryCode}
                onChange={(e) => setSelectedCountryCode(e.target.value)}
                className="p-2 border-2 border-gray-400 rounded focus:outline-none"
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.label} ({c.code})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="Mobile"
                maxLength="10"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone number"
                className="flex-1 px-3 py-2 border-2 border-gray-400 rounded focus:outline-none"
              />
            </div>

            <textarea
              name="message"
              required
              placeholder="Briefly describe your project or idea..."
              className="w-full min-h-[120px] px-3 py-2 mb-4 border-2 border-gray-400 rounded focus:outline-none"
            />

            <button
              type="submit"
              className="w-full py-2 bg-[#a125c6] hover:bg-[#7b1a98] text-white rounded-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
