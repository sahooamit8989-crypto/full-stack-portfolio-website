import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experiences", href: "#experiences" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
      <div className="flex justify-between items-center px-6 py-4">
              {/* Logo */}
      <div className="cursor-pointer">
        <h1 className="text-3xl font-extrabold">
          <span className="text-orange-500">P</span>
          <span className="text-white">ort</span>
          <span className="text-blue-500">folio</span>
        </h1>
      </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-orange-400 text-lg font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-orange-400 transition"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar (right side) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold text-orange-400">Menu</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-400 hover:text-white transition"
          >
            <X size={26} />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col mt-8 space-y-6 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-orange-400 text-lg font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Background Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;






