import React, { useState } from "react";
import axios from "axios";

const Certifications = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_URI}/api/portfolio/certification`,
        formData
      );

      setMessage(res.data.message || "Certification added successfully!");
      setFormData({ title: "", description: "", image: "", link: "" });
    } catch (error) {
      console.error("Error adding certification:", error);
      setMessage("Error adding certification. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-xl rounded-xl p-6 mt-10">
      <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
        Add Certification
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Certification Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>

        {/* Image URL */}
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Certification Link */}
        <input
          type="text"
          name="link"
          placeholder="Certification Link"
          value={formData.link}
          onChange={handleChange}
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {loading ? "Adding..." : "Add Certification"}
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

export default Certifications;
