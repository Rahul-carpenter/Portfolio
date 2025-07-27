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
    <div id="contact" className="max-w-[1200px] mx-auto bg-white text-black rounded-3xl p-8">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Let's Connect</h2>
      <p className="text-center text-gray-600 mb-8">
        Working on a project? I'd love to help. Fill out the form and I’ll get back to you soon.
      </p>

      <form
        onSubmit={handleSubmit}
        action="https://formsubmit.co/rahulcarpenter09@gmail.com" // 🔁 Replace with your actual email or handler
        method="POST"
        className="space-y-6"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="/thanks" />

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium">Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium">Phone (optional)</label>
            <input
              type="tel"
              name="phone"
              className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300"
              placeholder="+91 98765 43210"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Service Needed <span className="text-red-500">*</span></label>
            <select
              name="service"
              required
              className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300"
            >
              <option value="">Select</option>
              {serviceOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Budget Estimate <span className="text-red-500">*</span></label>
          <select
            name="budget"
            required
            className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300"
          >
            <option value="">Choose a range</option>
            {budgetOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Project Description <span className="text-red-500">*</span></label>
          <textarea
            name="description"
            rows={5}
            required
            className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 resize-none"
            placeholder="Tell me about your goals or project idea..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition"
        >
          Send Message <ArrowUpRight size={20} />
        </button>
      </form>
    </div>
  );
};

export default Contact;
