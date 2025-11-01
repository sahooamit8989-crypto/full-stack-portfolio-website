import React, { useState } from "react";
import axios from "axios";

const AddProjects = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
    technologes: [],
  });

  const [techInput, setTechInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // add technology
  const addTech = () => {
    if (techInput.trim()) {
      setFormData({
        ...formData,
        technologes: [...formData.technologes, techInput.trim()],
      });
      setTechInput("");
    }
  };

  // remove technology
  const removeTech = (tech) => {
    setFormData({
      ...formData,
      technologes: formData.technologes.filter((t) => t !== tech),
    });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_URI}/api/portfolio/project`,
        formData
      );

      setMessage(res.data.message || "Project added successfully!");
      setFormData({
        title: "",
        description: "",
        image: "",
        link: "",
        technologes: [],
      });
    } catch (error) {
      console.error("Error adding project:", error);
      setMessage("Error adding project. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-6 mt-10">
      <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
        Add Project
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />

        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>

        <input
          type="text"
          name="image"
          placeholder="Project Image URL"
          value={formData.image}
          onChange={handleChange}
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="link"
          placeholder="Project Link (e.g. GitHub or Live Site)"
          value={formData.link}
          onChange={handleChange}
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Technologies */}
        <div>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Add a Technology"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              className="border p-2 rounded-md w-full focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={addTech}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Add
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {formData.technologes.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                {tech}
                <button
                  type="button"
                  onClick={() => removeTech(tech)}
                  className="text-red-500 font-bold hover:text-red-700"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition disabled:bg-gray-400"
        >
          {loading ? "Adding..." : "Add Project"}
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

export default AddProjects;

