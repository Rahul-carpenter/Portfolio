import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, Send } from "lucide-react";

const serviceOptions = [
  { value: "web-dev", label: "Web Development (Flask/Django)" },
  { value: "devops", label: "DevOps / Cloud Projects (Docker, K8s, AWS)" },
  { value: "automation", label: "Automation Scripts / Dashboards" },
];

const budgetOptions = [
  { value: "less-10K", label: "Less than ₹10,000" },
  { value: "10K-20K", label: "₹10,000 - ₹20,000" },
  { value: "20K-50K", label: "₹20,000 - ₹50,000" },
  { value: "50K-more", label: "More than ₹50,000" },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    // Form will be handled by FormSubmit
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Working on a project? I'd love to help. Fill out the form and I'll get back to you soon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-1"
          >
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <motion.div variants={itemVariants} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-gray-800 dark:text-white font-medium">rahulcarpenter486@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="text-gray-800 dark:text-white font-medium">Available on request</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-gray-800 dark:text-white font-medium">India</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Follow me on</p>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/Rahul-carpenter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-indigo-600 hover:to-pink-600 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm font-bold">GH</span>
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/rahul-carpenter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-indigo-600 hover:to-pink-600 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm font-bold">LI</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2"
          >
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <form
                action="https://formsubmit.co/rahulcarpenter486@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Hidden inputs for FormSubmit */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="/thanks" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      className="w-full p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="service" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Service Needed <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Budget Estimate <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    className="w-full p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose a range
                    </option>
                    {budgetOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="description" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Project Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    required
                    placeholder="Tell me about your goals or project idea..."
                    className="w-full p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-3 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
