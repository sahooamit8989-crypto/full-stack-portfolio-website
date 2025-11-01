import React, { useState } from "react";
import axios from "axios";

const Technologies = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_URI}/api/portfolio/technologie`,
        formData
      );
      setMessage(res.data.message || "Technology added successfully!");
      setFormData({
        title: "",
        description: "",
        image: "",
        link: "",
      });
    } catch (error) {
      console.error("Error adding technology:", error);
      setMessage("Error adding technology. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-6 mt-10">
      <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
        Add Technology
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          placeholder="Technology Title (e.g. React, Node.js)"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />

        <textarea
          name="description"
          placeholder="Short Description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>

        <input
          type="text"
          name="image"
          placeholder="Image URL (Logo or Icon link)"
          value={formData.image}
          onChange={handleChange}
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="link"
          placeholder="Official Website or Docs URL"
          value={formData.link}
          onChange={handleChange}
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition disabled:bg-gray-400"
        >
          {loading ? "Adding..." : "Add Technology"}
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

export default Technologies;
