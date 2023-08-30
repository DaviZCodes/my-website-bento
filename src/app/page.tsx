import React from "react";
import ContactSection from "./components/ContactComponent";
import Header from "./components/Header";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import Projects from "./components/Projects";

const Home = () => {
  return (
    <div className="min-h-screen p-1 bg-gray-100">
      <Header />

      {/* About Me */}
      <AboutMe />

      {/* Work Experience */}
      <Work />

      {/* Projects */}
      <Projects />

      {/* Skills */}
      <Skills />

      {/* Contact */}
      <ContactSection />
    </div>
  );
};

export default Home;
