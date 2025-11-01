
import React, { useEffect, useState } from "react";
import axios from "axios";
import SectionTitle from "../componentes/SectionTitle";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [selectItem, setSelectItem] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch data from backend
  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_URI}/api/portfolio/experience`);
        console.log("Experience Data:", res.data);

        if (res.data && res.data.data && res.data.data.length > 0) {
          setExperiences(res.data.data);
        } else {
          console.warn("No experience data found");
        }
      } catch (error) {
        console.error("Error fetching experience data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400 text-xl">
        Loading Experiences...
      </div>
    );
  }

  if (!experiences || experiences.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400 text-xl">
        No Experience Data Found
      </div>
    );
  }

  return (
    <div className="px-6 md:px-16 lg:px-32 py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Section Title */}
      <SectionTitle title="Education & Experience" />

      <div className="flex flex-col md:flex-row gap-10 mt-10">
        {/* Timeline List */}
        <div className="relative flex flex-row md:flex-col gap-6 border-l-2 border-indigo-500 md:pl-6 overflow-x-auto md:overflow-visible scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-transparent pb-2 md:pb-0">
          {experiences.map((exp, index) => (
            <div
              key={exp._id || index}
              onClick={() => setSelectItem(index)}
              className={`relative cursor-pointer group transition-all duration-300 rounded-md pl-6 md:pl-0 md:pr-4`}
            >
              {/* Dot Indicator */}
              <div
                className={`absolute left-[-9px] top-2 w-4 h-4 rounded-full border-2 ${
                  selectItem === index
                    ? "bg-indigo-500 border-indigo-400"
                    : "bg-gray-300 dark:bg-gray-600"
                } transition-all duration-300 group-hover:bg-indigo-400`}
              ></div>

              {/* Period */}
              <div
                className={`px-3 py-2 md:py-1 rounded-md text-sm md:text-base font-medium transition-all duration-300 ${
                  selectItem === index
                    ? "text-indigo-400 translate-x-1"
                    : "text-gray-700 dark:text-gray-300 hover:text-indigo-400"
                }`}
              >
                {exp.period}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Details */}
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-300">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-2">
            {experiences[selectItem].title}
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-indigo-600 dark:text-orange-400 mb-4">
            {experiences[selectItem].company}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {experiences[selectItem].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
