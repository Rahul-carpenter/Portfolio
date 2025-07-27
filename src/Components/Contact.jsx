import React from "react";
import { ArrowUpRight } from "lucide-react";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    form.reset();

    // Add analytics later if needed
    setTimeout(() => {
      window.location.href = "/thanks"; // Change if you have a thank you page
    }, 1000);
  };

  return (
    <div id="contact" className="max-w-[1200px] mx-auto bg-[#090e16] text-white rounded-3xl p-8 transition-colors duration-500">
      <h2 className="text-4xl font-bold text-center mb-6 text-white">
        Let's Connect
      </h2>
      <p className="text-center text-gray-300 mb-8">
        Working on a project? I'd love to help. Fill out the form and I’ll get back to you soon.
      </p>

      <form
        onSubmit={handleSubmit}
        action="https://formsubmit.co/rahulcarpenter09@gmail.com" // Replace with your email or backend handler
        method="POST"
        className="space-y-6"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="/thanks" />

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gradientStart transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gradientStart transition"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone (optional)
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="+91 98765 43210"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gradientStart transition"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium mb-1">
              Service Needed <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              name="service"
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gradientStart transition"
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
          </div>
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium mb-1">
            Budget Estimate <span className="text-red-500">*</span>
          </label>
          <select
            id="budget"
            name="budget"
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gradientStart transition"
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
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Project Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={5}
            required
            placeholder="Tell me about your goals or project idea..."
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white resize-none focus:outline-none focus:ring-2 focus:ring-gradientStart transition"
          />
        </div>

        <button
          type="submit"
          className="w-full button-gradient py-4 flex items-center justify-center gap-2"
        >
          Send Message <ArrowUpRight size={20} />
        </button>
      </form>
    </div>
  );
};

export default Contact;
