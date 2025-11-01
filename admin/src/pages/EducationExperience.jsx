import React, { useState } from "react";
import axios from "axios";

const EducationExperience = () => {
  const [formData, setFormData] = useState({
    title: "",
    period: "",
    company: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_URI}/api/portfolio/experience`,
        formData
      );

      setMessage(res.data.message || "Experience added successfully!");
      setFormData({
        title: "",
        period: "",
        company: "",
        description: "",
      });
    } catch (error) {
      console.error("Error adding experience:", error);
      setMessage("Error adding experience. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-6 mt-10">
      <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
        Add Education / Experience
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          placeholder="Job Title / Education Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="company"
          placeholder="Company / Institution Name"
          value={formData.company}
          onChange={handleChange}
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="period"
          placeholder="Duration (e.g., 2022 - 2024)"
          value={formData.period}
          onChange={handleChange}
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />

        <textarea
          name="description"
          placeholder="Brief Description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition disabled:bg-gray-400"
        >
          {loading ? "Adding..." : "Add Experience"}
        </button>
      </form>

      {message && (
        <p
          className={`mt-4 text-center font-medium ${
            message.includes("Error") ? "text-red-500" : "text-green-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default EducationExperience;
