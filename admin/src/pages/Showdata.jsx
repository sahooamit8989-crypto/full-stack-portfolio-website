import React, { useEffect, useState } from "react";
import axios from "axios";

const Showdata = () => {
  const [data, setData] = useState({
    intro: [],
    about: [],
    experience: [],
    project: [],
    technologie: [],
    certification: [],
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(""); // ✅ For success notification

  // ✅ Fetch all data from backend
  const fetchData = async () => {
    try {
      const [introRes, aboutRes, expRes, projRes, techRes, certRes] =
        await Promise.all([
          axios.get(`${import.meta.env.VITE_URI}/api/portfolio/intro`),
          axios.get(`${import.meta.env.VITE_URI}/api/portfolio/about`),
          axios.get(`${import.meta.env.VITE_URI}/api/portfolio/experience`),
          axios.get(`${import.meta.env.VITE_URI}/api/portfolio/project`),
          axios.get(`${import.meta.env.VITE_URI}/api/portfolio/technologie`),
          axios.get(`${import.meta.env.VITE_URI}/api/portfolio/certification`),
        ]);

      setData({
        intro: introRes.data.data || [],
        about: aboutRes.data.data || [],
        experience: expRes.data.data || [],
        project: projRes.data.data || [],
        technologie: techRes.data.data || [],
        certification: certRes.data.data || [],
      });
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ Delete item instantly
  const handleDelete = async (type, id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_URI}/api/portfolio/${type}/${id}`);
      setMessage(`${type} deleted successfully!`);

      // refresh data
      fetchData();

      // remove message after 3 seconds
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      console.error(`Error deleting ${type}:`, err);
      setMessage("Failed to delete item!");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  // ✅ Helper to render any array section
  const renderSection = (title, items, type) => (
    <div className="mb-12">
      <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6 border-b pb-2">
          {title}
        </h2>
        {items.length === 0 ? (
          <p className="text-gray-500">No data found</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item._id}
                className="p-4 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title || item.firstName || item.period || "Untitled"}
                </h3>

                {/* 🧠 Dynamic field rendering */}
                <div className="text-sm text-gray-700 space-y-1 flex-1">
                  {Object.entries(item).map(([key, value]) => {
                    if (
                      ["_id", "__v"].includes(key) ||
                      typeof value === "object"
                    )
                      return null;
                    return (
                      <p key={key}>
                        <span className="font-medium capitalize">{key}:</span>{" "}
                        {String(value).length > 100
                          ? String(value).substring(0, 100) + "..."
                          : String(value)}
                      </p>
                    );
                  })}
                </div>

                {/* 🖼 Optional Image */}
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title || "image"}
                    className="w-full h-36 object-cover mt-3 rounded-md border"
                  />
                )}

                <button
                  onClick={() => handleDelete(type, item._id)}
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600 text-xl">
        Loading...
      </div>
    );

  return (
    <div className="p-6 md:p-12 bg-gray-100 min-h-screen relative">
      {/* ✅ Floating success message */}
      {message && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-5 py-3 rounded-lg shadow-md animate-fade-in">
          {message}
        </div>
      )}

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Portfolio Data Dashboard
      </h1>

      <div className="space-y-10">
        {renderSection("Intro", data.intro, "intro")}
        {renderSection("About", data.about, "about")}
        {renderSection("Experience", data.experience, "experience")}
        {renderSection("Projects", data.project, "project")}
        {renderSection("Technologies", data.technologie, "technologie")}
        {renderSection("Certifications", data.certification, "certification")}
      </div>
    </div>
  );
};

export default Showdata;

