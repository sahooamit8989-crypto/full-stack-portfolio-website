import React from "react";
import Header from "../componentes/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Cirtificate from "./Cirtificate";
import Technologi from "./Technologi";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Header />

      <section id="home">
        <Intro />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>
      <section id="experiences">
        <Experiences />
      </section>

      <section id="certificate">
        <Cirtificate />
      </section>

      <section id="skills">
        <Technologi />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
