import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { SiWhatsapp } from "react-icons/si";

const ContactForm = () => {
  const [checked, setChecked] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChecked = (e) => {
    setChecked(e.target.value);
  };

  const countryCodes = [
    { code: "+1", label: "USA" },
    { code: "+91", label: "IN" },
    { code: "+44", label: "UK" },
    { code: "+61", label: "AUS" },
  ];

  // Combine country code and phone number as a hidden input on form submit
  const [fullPhone, setFullPhone] = useState("");

  // Update fullPhone on change of selectedCountryCode or phoneNumber
  React.useEffect(() => {
    setFullPhone(`${selectedCountryCode}${phoneNumber}`);
  }, [selectedCountryCode, phoneNumber]);

  return (
    <div className="form-container w-full min-h-screen bg-black text-white transition-colors duration-500">
      <div className="w-full sm:w-[80%] mx-auto py-10 px-5 lg:flex gap-10">
        {/* Left Sidebar */}
        <div className="lg:w-[40%] mb-10 lg:mb-0">
          <h1 className="text-3xl lg:text-4xl font-bold">Let's Work Together</h1>
          <h2 className="my-6 text-5xl font-extrabold text-[#36daff]">
            You Think, I Build!
          </h2>
          <p className="text-gray-300">
            Got a big idea or a project in mind? Let's connect! I'd love to hear
            what you're planning and how I can help.
          </p>
          <div className="my-10 flex gap-5">
            <a
              href="mailto:rj.yourmail@example.com"
              className="flex items-center gap-3 hover:text-blue-400 transition"
              aria-label="Send Email"
            >
              <span className="p-2 bg-blue-400 rounded-full">
                <CiMail className="text-2xl" />
              </span>
              Email
            </a>
            <a
              href="https://wa.me/917357723361?text=Hey%20Rj%2C%20I%20found%20your%20portfolio%20and%20would%20love%20to%20connect!"
              className="flex items-center gap-3 hover:text-green-400 transition"
              aria-label="WhatsApp chat"
            >
              <span className="p-2 bg-green-400 rounded-full">
                <SiWhatsapp className="text-2xl" />
              </span>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:w-[60%] bg-white dark:bg-[#090e16] rounded-xl p-5 border-t-[10px] border-blue-500 text-black dark:text-white transition-colors duration-500">
          <form action="https://formspree.io/f/xbljkjjo" method="POST">
            <h2 className="text-3xl font-semibold text-center mb-6">Contact Me</h2>

            <h3 className="mb-2">You need help with:</h3>
            <div className="flex gap-4 mb-4 flex-wrap">
              <label
                htmlFor="webDevelopment"
                className={`px-3 py-1 border-2 rounded-md cursor-pointer select-none ${
                  checked === "website-development"
                    ? "bg-[#c422f5] text-white border-[#c422f5]"
                    : "border-[#c422f5] text-black dark:text-white"
                }`}
              >
                <input
                  type="radio"
                  id="webDevelopment"
                  name="services"
                  value="website-development"
                  onChange={handleChecked}
                  className="hidden"
                  required
                />
                Website Development
              </label>

              <label
                htmlFor="webDesign"
                className={`px-3 py-1 border-2 rounded-md cursor-pointer select-none ${
                  checked === "website-design"
                    ? "bg-[#c422f5] text-white border-[#c422f5]"
                    : "border-[#c422f5] text-black dark:text-white"
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
              className="w-full px-3 py-2 mb-4 border-2 border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#222] dark:border-gray-600 dark:text-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-3 py-2 mb-4 border-2 border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#222] dark:border-gray-600 dark:text-white"
            />

            <div className="flex mb-4 gap-2">
              <select
                name="countryCode"
                value={selectedCountryCode}
                onChange={(e) => setSelectedCountryCode(e.target.value)}
                className="p-2 border-2 border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#222] dark:border-gray-600 dark:text-white"
                aria-label="Select country code"
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
                onChange={(e) =>
                  // Allow only digits
                  e.target.value === "" || /^\d+$/.test(e.target.value)
                    ? setPhoneNumber(e.target.value)
                    : null
                }
                placeholder="Phone number"
                className="flex-1 px-3 py-2 border-2 border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#222] dark:border-gray-600 dark:text-white"
                aria-label="Phone number"
              />
            </div>

            {/* Hidden input to send full phone number with country code */}
            <input type="hidden" name="fullPhone" value={fullPhone} />

            <textarea
              name="message"
              required
              placeholder="Briefly describe your project or idea..."
              className="w-full min-h-[120px] px-3 py-2 mb-4 border-2 border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#222] dark:border-gray-600 dark:text-white"
              aria-label="Message"
            />

            <button
              type="submit"
              className="w-full py-2 bg-[#a125c6] hover:bg-[#7b1a98] text-white rounded-xl transition-colors duration-300"
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
