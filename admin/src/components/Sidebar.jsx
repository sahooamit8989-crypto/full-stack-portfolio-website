


import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaLaptopCode,
  FaUserGraduate,
  FaCertificate,
  FaProjectDiagram,
  FaTools,
  FaInfoCircle,
  FaBars,
  FaTimes,
  FaUser,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: 1, name: "Introduction", path: "/", icon: <FaInfoCircle /> },
    { id: 2, name: "About", path: "/about", icon: <FaUser /> },
    { id: 3, name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
    { id: 4, name: "Education & Experience", path: "/education", icon: <FaUserGraduate /> },
    { id: 5, name: "Certifications", path: "/certifications", icon: <FaCertificate /> },
    { id: 6, name: "Technologies", path: "/technologies", icon: <FaTools /> },
    { id: 7, name: "ShowData", path: "/showdata", icon: <FaLaptopCode /> },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center cursor-pointer bg-gray-900 text-white px-4 py-3 shadow-lg fixed top-0 left-0 w-full z-50">
        <h1 className="text-xl font-bold text-blue-400">My Portfolio</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gray-900 text-white w-64 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        
        <h1 className="hidden md:block text-2xl font-bold text-blue-400 text-center mb-8">
          My Portfolio
        </h1>

        {/* Menu */}
        <ul className="flex flex-col mt-12 gap-4 overflow-y-auto scrollbar-hide">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
              ${location.pathname === item.path ? "bg-blue-600 text-white" : "hover:bg-gray-800"}`}
            >
              <span className="text-blue-400 text-lg">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </ul>

        {/* Footer */}
        <div className="mt-auto text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
          <p>Crafted with ❤️ using React & Tailwind</p>
        </div>
      </div>

      {/* Add left margin for main content */}
      <div className="md:ml-64 pt-16 md:pt-0"></div>
    </>
  );
};

export default Sidebar;


