import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const ref = useRef(null);
  const imgRef = useRef(null);
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true });
  const isImgInView = useInView(imgRef, { once: true });
  const isInView = useInView(ref, { once: true });
  const notify = () => {
    console.log("notify called");
    toast("Thanks, will contact you soon!");
  };
  const handleFormSubmit = (e) => {
    e.target.reset();
    notify();
  };

  return (
    <section
      id="contact"
      className="w-full h-max lg:min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black py-10 relative"
    >
      <ToastContainer
        className={"z-[999] absolute top-4 right-4 text-xl font-semibold"}
      />
      <div className="w-full md:w-[90%] mx-auto md:p-5 ">
        <div className="flex justify-center lg:justify-normal py-5">
          <motion.div
            id="contactH"
            ref={ref}
            style={{
              translateX: isInView ? 0 : "-100%",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
            className=" w-max text-xl sm:text-3xl md:text-4xl text-white font-semibold py-2 px-8 border-l-[3px] border-r-[3px] lg:border-r-0 border-blue-500  bg-slate-800 duration-300"
          >
            Contact Me
          </motion.div>
        </div>
        <motion.div className="w-[90%] mx-auto  my-10 ">
          <div className=" w-full text-center text-lg sm:text-xl mb-10 text-[#989898]">
            Now let's talk about your project. How can we build magic together!
          </div>
          <div className="w-full flex flex-col md:flex-row gap-5 lg:gap-10 p-2 sm:p-5">
            <motion.img
              ref={imgRef}
              style={{
                translateX: isImgInView ? 0 : "-100%",
                opacity: isImgInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
              src="./img/contactimg.avif"
              alt=""
              className="w-full md:w-[40%] rounded-xl duration-75"
            />

            {/* Netlify form */}
            <motion.form
              ref={formRef}
              style={{
                translateX: isFormInView ? 0 : "100%",
                opacity: isFormInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
              onSubmit={handleFormSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              className="w-full  bg-slate-900 rounded-xl duration-200"
            >
              {/* hidden input for netlify form submission */}
              <input type="hidden" name="Client-Query" value="contact" />
              {/* other form inputs */}
              <header className="text-center text-lg sm:text-xl md:text-2xl font-semibold p-5 text-white">
                Let's Connect
              </header>
              <div className="px-5">
                <input
                  id="name"
                  required
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-transparent outline-none bg-slate-600 rounded-xl text-white focus:text-[#fff]"
                />
                <input
                  id="email"
                  required
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 mt-5 bg-transparent outline-none bg-slate-600 rounded-xl text-white focus:text-[#fff]"
                />
                <textarea
                  id="message"
                  required
                  maxLength={300}
                  placeholder="Your Message"
                  className="w-full p-3  mt-5 bg-transparent outline-none bg-slate-600 rounded-xl text-white focus:text-[#fff]"
                />
                <button
                  type="submit"
                  className="px-5 py-2 text-white bg-blue-500 rounded-full my-5"
                >
                  Send
                </button>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
