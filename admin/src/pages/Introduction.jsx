import React, { useState } from "react";
import axios from "axios";

const AddIntroduction = () => {
  const [formData, setFormData] = useState({
    welcomeText: "",
    firstName: "",
    lastName: "",
    caption: "",
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
        `${import.meta.env.VITE_URI}/api/portfolio/intro`,
        formData
      );
      setMessage(res.data.message || "Data added successfully!");
      setFormData({
        welcomeText: "",
        firstName: "",
        lastName: "",
        caption: "",
        description: "",
      });
    } catch (error) {
      setMessage("Error adding data. Check the console for details.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-xl rounded-xl p-6 mt-10">
      <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
        Add Introduction Data
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="welcomeText"
          placeholder="Welcome Text"
          value={formData.welcomeText}
          onChange={handleChange}
          className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="caption"
          placeholder="Caption"
          value={formData.caption}
          onChange={handleChange}
          className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          required
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {loading ? "Adding..." : "Add Introduction"}
        </button>
      </form>

      {message && (
        <div
          className={`mt-4 p-3 rounded-md text-center ${
            message.includes("Error")
              ? "bg-red-100 text-red-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default AddIntroduction;

