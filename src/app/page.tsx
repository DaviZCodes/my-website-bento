import React from "react";
import Link from "next/link";
import ContactSection from "./components/ContactComponent";

const Home = () => {
  return (
    <div className="min-h-screen p-1 bg-gray-100">
      <header className="bg-blue-800 py-8 p-2">
        <div className="container mx-auto text-white text-center">
          <h1 className="text-3xl font-bold pb-3">Davi Zheng</h1>
          <div className="text-xl">Full-Stack Engineer</div>
          <div className="text-xl">Computer Science Student @ NYU</div>
        </div>
      </header>

      {/* About Me */}
      <section className="py-12 p-2">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            Hello, I'm Davi, a full-stack developer passionate about creating
            modern and responsive applications. I am highly interested in
            creating Artificial Intelligence tools to automate.
          </p>
        </div>
      </section>

      {/* Work Experience */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]">
              <h3 className="text-xl font-bold mb-2">
                Software Engineer Intern
              </h3>
              <h2 className="text-xl cursor-pointer text-yellow-600 font-semibold">
                <Link
                  href="https://www.paysfer.com"
                  target="_blank"
                  title="Click for more"
                >
                  Paysfer eMart
                </Link>
              </h2>
              <p>Short description of project 2.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]">
              <h3 className="text-xl font-bold mb-2">Computer Science Tutor</h3>
              <h2 className="text-xl cursor-pointer text-purple-800 font-semibold">
                <Link
                  href="https://engineering.nyu.edu/academics/undergraduate/tutoring-center"
                  target="_blank"
                  title="Click for more"
                >
                  Polytechnic Tutoring Center
                </Link>
              </h2>
              <p>
                Tutor for the Introduction to Programming, Data Structures and
                Algorithms, and Object-Oriented Programming courses.
              </p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]">
              <h3 className="text-xl font-bold mb-2">
                Software Engineer Intern
              </h3>
              <h2 className="text-xl cursor-pointe text-purple-500 font-semibold">
                <Link
                  href="https://www.tutormundi.com"
                  target="_blank"
                  title="Click for more"
                >
                  TutorMundi
                </Link>
              </h2>
              <p>E-learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="https://arter-generative-ai.vercel.app" target="_blank">
              <div
                className="bg-gray-200 p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]"
                title="Click for more"
              >
                <h3 className="text-xl font-bold mb-2">Generative AI</h3>
                <p>
                  Generative AI website that tranforms scribbles into realistic
                  and colorful artworks.
                </p>
              </div>
            </Link>

            <Link
              href="https://github.com/DaviZCodes/pet-peeves-blog"
              target="_blank"
            >
              <div
                className="bg-gray-200 p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]"
                title="Click for more"
              >
                <h3 className="text-xl font-bold mb-2">MERN Blog</h3>
                <p>
                  A blog for pet lovers who wish to share about their furry - or
                  raw chicken - pets.
                </p>
              </div>
            </Link>

            <Link
              href="https://engineering.nyu.edu/research-innovation/student-research/vertically-integrated-projects/vip-teams/nyu-robotic-design-team"
              target="_blank"
            >
              <div
                className="bg-gray-200 p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]"
                title="Click for more"
              >
                <h3 className="text-xl font-bold mb-2">
                  Lunar excavator robot
                </h3>
                <p>Robotic Design Team</p>
              </div>
            </Link>

            <Link
              href="https://react-to-do-list-frontend.vercel.app"
              target="_blank"
            >
              <div
                className="bg-gray-200 p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]"
                title="Click for more"
              >
                <h3 className="text-xl font-bold mb-2">To-do list</h3>
                <p>Simple to-do list to get your work done!.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </div>
  );
};

export default Home;
