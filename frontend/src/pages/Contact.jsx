import React, { useState } from "react";
import SectionTitle from "../componentes/SectionTitle";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "877deb3a-6500-43c7-8789-24a26ae9bf87");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("✅ Message sent successfully!");
      event.target.reset();
    } else {
      setResult("❌ Failed to send. Try again.");
    }
  };

  return (
    <div className="px-6 md:px-16 lg:px-32 py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <SectionTitle title="Contact" />

      <div className="flex flex-col md:flex-row gap-12 mt-10">
        {/* Left Column - Contact Info */}
        <div className="flex-1 space-y-6 text-gray-700 dark:text-gray-300">
          <h3 className="text-2xl font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
            Get in Touch <Send className="w-6 h-6 text-indigo-500" />
          </h3>

          <p className="leading-relaxed text-base md:text-lg">
            Feel free to reach out through this form or using the contact
            details below. Your feedback, questions, and suggestions are always
            welcome!
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-indigo-500" />
              <span className="hover:text-indigo-500 transition duration-200">
                sahooamit8989@gmail.com
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-indigo-500" />
              <span className="hover:text-indigo-500 transition duration-200">
                +91-6371965076
              </span>
            </li>

            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-indigo-500" />
              <span className="hover:text-indigo-500 transition duration-200">
                Bhadrak, Odisha
              </span>
            </li>
          </ul>
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex-1 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 space-y-6 transition-all duration-300">
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-800 dark:text-gray-200 font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-gray-800 dark:text-gray-200 font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                required
                className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-gray-800 dark:text-gray-200 font-medium mb-1">
                Write your message here
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Enter your message..."
                required
                className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-md transition duration-300 w-full md:w-auto"
            >
              Submit Now <Send className="w-4 h-4" />
            </button>
          </form>

          {result && (
            <span
              className={`block text-sm font-medium ${
                result.includes("✅")
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-500 dark:text-red-400"
              }`}
            >
              {result}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
