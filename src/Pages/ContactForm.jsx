import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { SiWhatsapp } from "react-icons/si";

const ContactForm = () => {
  const [checked, setChecked] = useState("");
  const handleChecked = (e) => {
    if (e.target.checked) {
      setChecked(e.target.value);
    } else {
      setChecked("");
    }
  };

  // Mobile number input handling

  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");

  const countryCodes = [
    { code: "+1", label: "USA" },
    { code: "+91", label: "IN" },
    { code: "+44", label: "UK" },
    { code: "+61", label: "AUS" },
  ];

  const handleCountryCodeChange = (e) => {
    setSelectedCountryCode(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  // Form submission handling

  return (
    <div className="form-container w-full min-h-screen bg-[#2e0249]">
      <div className="w-full h-full sm:w-[80%]  py-5 sm:py-10 md:py-10  mx-auto lg:flex gap-10 px-5  ">
        <div className="sidebar w-full  lg:w-[40%] py-5 md:py-10  text-white sm:text-lg">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Let's Work Together
          </h1>
          <h1 className="my-5 md:my-10 text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#36daff]">
            You Think, I Build!
          </h1>
          <p className="my-5 sm:my-10">
            Have some big idea or brand website to develop and need help? Then
            reach out I'd love to hear about your project and provide help as
            soon as possible.
          </p>
          <div className="my-5 flex  gap-5  md:my-20 w-max">
            <a
              href="mailto:manishdev2k02@gmail.com"
              className="flex items-center gap-2 sm:gap-5 hover:text-[blue] italic"
            >
              <span className=" p-2 bg-blue-400 rounded-full">
                <CiMail className="text-xl sm:text-2xl md:text-3xl " />
              </span>
            </a>
            <a
              href={`
              https://wa.me/7357723361?text=Hello_Manish`}
              className="flex items-center gap-2 sm:gap-5 hover:text-[green] italic"
            >
              <span className=" p-2 bg-green-400 rounded-full">
                <SiWhatsapp className="text-xl sm:text-2xl md:text-3xl " />
              </span>
            </a>
          </div>
        </div>
        <div className="formContainer w-full lg:w-[60%]  rounded-xl bg-[#f3f4f6] py-5 border-t-[10px] border-blue-500 p-5">
          {/* Contact form */}
          <form action="https://formspree.io/f/xbljkjjo" method="POST">
            <header className="text-3xl font-semibold text-center my-5">
              Contact me
            </header>
            <h3 className="">You need help with: </h3>
            <div className="sm:flex gap-2 py-2">
              <div className="my-5 sm:my-0">
                <label
                  htmlFor="webDevelopment"
                  className={`service-btn ${
                    checked === "website-development"
                      ? "bg-[#c422f5] text-white"
                      : ""
                  } px-2 py-1 border-2 rounded-md border-[#c422f5] cursor-pointer `}
                >
                  Website Development
                </label>
                <input
                  onClick={(e) => handleChecked(e)}
                  type="radio"
                  name="services"
                  id="webDevelopment"
                  value={"website-development"}
                  hidden
                  required
                />
              </div>
              <div className="my-5 sm:my-0">
                <label
                  htmlFor="webDesign"
                  className={`service-btn ${
                    checked === "website-design"
                      ? "bg-[#c422f5] text-white"
                      : ""
                  } px-2 py-1 border-2 rounded-md border-[#c422f5] cursor-pointer `}
                >
                  Website Design
                </label>
                <input
                  onClick={(e) => handleChecked(e)}
                  type="radio"
                  name="services"
                  id="webDesign"
                  value={"website-design"}
                  hidden
                  required
                />
              </div>
            </div>
            <div className="my-4 flex flex-col gap-2">
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="px-2 py-1 rounded  focus:outline-none border-2 border-gray-500"
              />
            </div>
            <div className="my-4 flex flex-col gap-2">
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="px-2 py-1 rounded  focus:outline-none border-2 border-gray-500"
              />
            </div>

            <div className="flex items-center my-4 bg-white rounded border-2 border-gray-500">
              <select
                value={selectedCountryCode}
                onChange={handleCountryCodeChange}
                className="w-max focus:outline-none outline-none rounded appearance-none p-2 "
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.label} ({country.code})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                value={phoneNumber}
                name="Mobile"
                onChange={handlePhoneNumberChange}
                maxLength={10}
                placeholder="Enter phone number"
                className="w-full focus:outline-none outline-none px-2 "
              />
            </div>
            <div className="my-5 flex flex-col gap-2">
              <textarea
                required
                placeholder="briefly describe your project, idea and requirements..."
                name="message"
                id="message"
                className="w-full min-h-32 px-2 py-1 rounded focus:outline-none border-2 border-gray-500"
              />
            </div>
            <button
              type="submit"
              className="px-3 py-1 rounded-xl bg-[#a125c6] hover:bg-[#7b1a98] text-white"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
