
import React, { useEffect, useState } from "react";
import SectionTitle from "../componentes/SectionTitle";
import axios from "axios";

const About = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_URI}/api/portfolio/about`);
        if (response.data.success) {
          setAbout(response.data.data[0]); // assuming your API returns an array
        }
      } catch (error) {
        console.error("Error fetching about data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAbout();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-600 dark:text-gray-300">
        Loading About Section...
      </div>
    );
  }

  if (!about) {
    return (
      <div className="text-center py-20 text-gray-600 dark:text-gray-300">
        No About data found.
      </div>
    );
  }

  return (
    <div className="px-6 md:px-16 lg:px-32 py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Section Title */}
      <SectionTitle title="About Me" />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-10 mt-10">
        {/* Profile Image */}
        <div className="w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-indigo-500/20 hover:scale-105 transition-transform duration-500">
          <img
            src={about.lootteURI}
            alt="Profile"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
            }}
          />
        </div>

        {/* Description and Skills */}
        <div className="flex flex-col gap-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-2xl">
          <div>
            <p className="mb-4">
              <span className="font-semibold text-indigo-600 dark:text-orange-400">
                {about.description1}
              </span>
            </p>
            <p>{about.description2}</p>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Here are a few technologies I’ve been working with recently:
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {about.skills.map((skill, index) => (
                <li
                  key={index}
                  className="px-4 py-2 bg-indigo-100 dark:bg-gray-800 rounded-lg text-center font-medium text-indigo-700 dark:text-orange-400 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
