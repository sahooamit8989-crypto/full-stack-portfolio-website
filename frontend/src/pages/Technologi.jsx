

import React, { useEffect, useState } from "react";
import axios from "axios";
import SectionTitle from "../componentes/SectionTitle";

const Technologies = () => {
  const [technologies, setTechnologies] = useState([]);
  const [selectItem, setSelectItem] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_URI}/api/portfolio/technologie`
        );
        if (res.data && res.data.data) {
          setTechnologies(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching technologies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-300 text-xl">
        Loading...
      </div>
    );
  }

  if (!technologies || technologies.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-300 text-xl">
        No Technologies Found
      </div>
    );
  }

  return (
    <div className="px-6 md:px-16 lg:px-32 py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300 min-h-screen">
      <SectionTitle title="Technologies" />

      <div className="flex flex-col md:flex-row gap-10 mt-12">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 flex md:flex-col overflow-x-auto md:overflow-y-auto gap-4 p-2 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
          {technologies.map((tech, index) => (
            <button
              key={tech._id || index}
              onClick={() => setSelectItem(index)}
              className={`flex-shrink-0 md:w-full text-left p-3 rounded-lg transition-all duration-300 ${
                selectItem === index
                  ? "bg-indigo-600 text-white shadow-md scale-[1.02]"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-600"
              }`}
            >
              <h1 className="text-base md:text-lg font-semibold">
                {tech.title}
              </h1>
            </button>
          ))}
        </div>

        {/* Details Section */}
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-all duration-500">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            {/* Image */}
            <div className="w-full lg:w-1/3 flex justify-center items-center">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 flex justify-center items-center shadow-md hover:scale-105 transition-transform duration-500">
                <img
                  src={technologies[selectItem].image}
                  alt={technologies[selectItem].title}
                  className="w-36 h-36 object-contain"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                {technologies[selectItem].title}
              </h1>

              <p className="mb-6 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {technologies[selectItem].description}
              </p>

              {technologies[selectItem].link && (
                <a
                  href={technologies[selectItem].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-indigo-700 transition-all duration-300"
                >
                  View More
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
