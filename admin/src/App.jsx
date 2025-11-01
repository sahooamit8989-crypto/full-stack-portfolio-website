import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Introduction from "./pages/Introduction";
import Projects from "./pages/Projects";
import EducationExperience from "./pages/EducationExperience";
import Certifications from "./pages/Certifications";
import Technologies from "./pages/Technologies";
import About from "./pages/About";
import Showdata from "./pages/Showdata";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About/>} />
            <Route path="/education" element={<EducationExperience />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/showdata" element={<Showdata/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
