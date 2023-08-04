import React from "react";
import ContactSection from "./components/ContactComponent";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-800 py-8">
        <div className="container mx-auto text-white text-center">
          <h1 className="text-3xl font-bold pb-3">Davi Zheng</h1>
          <div className="text-xl">Full-Stack Engineer</div>
          <div className="text-xl">Computer Science Student @ NYU</div>
        </div>
      </header>

      {/* About Me */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            Hello, I'm Davi, a full-stack developer passionate about creating
            modern and engaging web experiences. With a strong foundation in
            HTML, CSS, and JavaScript, I strive to build user-friendly and
            visually appealing websites that leave a lasting impression.
          </p>
        </div>
      </section>

      {/* Work Experience */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add your past work items here */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p>Short description of project 1.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Project 2</h3>
              <p>Short description of project 2.</p>
            </div>
            {/* Add more past work items as needed */}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add your project items here */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Project A</h3>
              <p>Short description of project A.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Project B</h3>
              <p>Short description of project B.</p>
            </div>
            {/* Add more project items as needed */}
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </div>
  );
};

export default Home;
