import React, { useState } from "react";
import axios from "axios";

const AddAbout = () => {
  const [formData, setFormData] = useState({
    lootteURI: "",
    description1: "",
    description2: "",
    skills: [],
  });

  const [skillInput, setSkillInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add skill to the list
  const addSkill = () => {
    if (skillInput.trim()) {
      setFormData({
        ...formData,
        skills: [...formData.skills, skillInput.trim()],
      });
      setSkillInput("");
    }
  };

  // Remove a skill
  const removeSkill = (skill) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skill),
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_URI}/api/portfolio/about`,
        formData
      );
      setMessage(res.data.message || "About section added successfully!");
      setFormData({
        lootteURI: "",
        description1: "",
        description2: "",
        skills: [],
      });
    } catch (error) {
      console.error("Error adding about section:", error);
      setMessage("Error adding data. Check the console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-6 mt-10">
      <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
        Add About Section
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Lottie URI */}
        <input
          type="text"
          name="lootteURI"
          placeholder="Lottie Animation URL"
          value={formData.lootteURI}
          onChange={handleChange}
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Description 1 */}
        <textarea
          name="description1"
          placeholder="Description 1"
          value={formData.description1}
          onChange={handleChange}
          rows="3"
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>

        {/* Description 2 */}
        <textarea
          name="description2"
          placeholder="Description 2"
          value={formData.description2}
          onChange={handleChange}
          rows="3"
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>

        {/* Skills input */}
        <div>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Add a skill"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              className="border p-2 rounded-md w-full focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={addSkill}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Add
            </button>
          </div>

          {/* Skill chips */}
          <div className="flex flex-wrap gap-2">
            {formData.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => removeSkill(skill)}
                  className="text-red-500 font-bold hover:text-red-700"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition disabled:bg-gray-400"
        >
          {loading ? "Adding..." : "Add About Section"}
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

export default AddAbout;
