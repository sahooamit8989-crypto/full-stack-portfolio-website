
import React, { useEffect, useState } from "react";
import axios from "axios";
import SectionTitle from "../componentes/SectionTitle";

const Certification = () => {
  const [certifications, setCertifications] = useState([]);
  const [selectItem, setSelectItem] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch certifications from backend
  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_URI}/api/portfolio/certification`);
        if (res.data && res.data.data && res.data.data.length > 0) {
          setCertifications(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching certifications:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCertifications();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400 text-xl">
        Loading Certifications...
      </div>
    );
  }

  if (!certifications || certifications.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400 text-xl">
        No Certifications Found
      </div>
    );
  }

  return (
    <div className="px-6 md:px-16 lg:px-32 py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Section Title */}
      <SectionTitle title="Certifications" />

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-10 mt-10">
        {/* Sidebar / Certification Titles */}
        <div
          className="
            flex 
            md:flex-col 
            gap-4 md:gap-6 
            border-l-0 md:border-l-2 
            border-indigo-500 
            md:pl-4 
            overflow-x-auto md:overflow-visible 
            scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-transparent
            pb-2 md:pb-0
          "
        >
          {certifications.map((cert, index) => (
            <div
              key={cert._id || index}
              onClick={() => setSelectItem(index)}
              className={`flex-shrink-0 cursor-pointer transition-all duration-300 rounded-md px-4 py-2 ${
                selectItem === index
                  ? "bg-indigo-500/20 border-b-4 md:border-b-0 md:border-l-4 border-indigo-400 text-indigo-400 translate-x-1"
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-400"
              }`}
            >
              <h1 className="text-base md:text-lg font-medium whitespace-nowrap">
                {cert.title}
              </h1>
            </div>
          ))}
        </div>

        {/* Certification Content (Like Projects) */}
        <div className="flex flex-col lg:flex-row gap-8 items-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-300 w-full">
          {/* Image */}
          <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-md">
            <img
              src={certifications[selectItem].image}
              alt={certifications[selectItem].title}
              className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text */}
          <div className="flex-1 text-gray-700 dark:text-gray-300 leading-relaxed">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-2">
              {certifications[selectItem].title}
            </h1>

            {certifications[selectItem].issuer && (
              <p className="text-indigo-500 font-medium mb-2">
                Issued By: {certifications[selectItem].issuer}
              </p>
            )}

            <p className="mb-4 text-base md:text-lg">
              {certifications[selectItem].description}
            </p>

            {certifications[selectItem].link && (
              <a
                href={certifications[selectItem].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 mt-4 rounded-full transition-all"
              >
                View Certificate
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;



