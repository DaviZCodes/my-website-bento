import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactSection from "./components/ContactComponent";
import { DiReact, DiSass, DiNodejsSmall } from "react-icons/di";
import { BiLogoMongodb } from "react-icons/bi";
import { SiTypescript, SiTailwindcss, SiRos, SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Header from "./components/Header";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";

const Home = () => {
  return (
    <div className="min-h-screen p-1 bg-gray-100">
      <Header />

      {/* About Me */}
      <AboutMe />

      {/* Work Experience */}
      <section className="bg-white py-12 px-2 lg:px-3">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#d6a511] p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02] cursor-pointer">
              <Link
                href="https://www.paysfer.com"
                target="_blank"
                title="Click for more"
              >
                <h3 className="text-xl font-bold mb-2">
                  Software Engineer Intern
                </h3>
                <h2 className="text-xl cursor-pointer font-semibold">
                  Paysfer eMart
                </h2>
                <p>
                  I was a full-stack engineer, developing several responsive
                  webpages, enhancing the user authentication and payment
                  gateways, and creating APIs that fetch user data and shops.
                </p>
              </Link>
            </div>

            <div className="bg-[#4d1782] text-white p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02] cursor-pointer">
              <Link
                href="https://engineering.nyu.edu/academics/undergraduate/tutoring-center"
                target="_blank"
                title="Click for more"
              >
                <h3 className="text-xl font-bold mb-2">
                  Computer Science Tutor
                </h3>
                <h2 className="text-xl cursor-pointer font-semibold">
                  Polytechnic Tutoring Center
                </h2>
                <p>
                  I was a tutor for the Introduction to Programming, Data
                  Structures and Algorithms, and Object-Oriented Programming
                  courses at NYU.
                </p>
              </Link>
            </div>

            <div className="bg-[#5c25f5] text-white p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02] cursor-pointer">
              <Link
                href="https://www.tutormundi.com"
                target="_blank"
                title="Click for more"
              >
                <h3 className="text-xl font-bold mb-2">
                  Software Engineer Intern
                </h3>
                <h2 className="text-xl cursor-pointe font-semibold">
                  TutorMundi
                </h2>
                <p>
                  I was a frontend developer, identifying and resolving numerous
                  bugs, while also making improvements to the user interface.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 px-2 lg:px-3">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="https://arter-generative-ai.vercel.app" target="_blank">
              <div
                className="bg-gray-200 p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]"
                title="Click for more"
              >
                <h3 className="text-xl font-bold mb-2">
                  Arter - Generative AI
                </h3>
                <p>
                  Generative AI website that transforms scribbles into realistic
                  and colorful artworks.
                </p>
                <div className="flex justify-center gap-2 pt-2">
                  <SiTypescript size={45} color="#007acc" title="Typescript" />
                  <TbBrandNextjs size={50} color="black" title="NextJs" />
                  <SiTailwindcss
                    size={50}
                    color="#03a9f4"
                    title="Tailwind CSS"
                  />
                  <div className="w-11 h-11">
                    <Image
                      src="/convex.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full"
                      title="Convex.dev"
                      alt="Convex Logo"
                    />
                  </div>
                  <div className="w-11 h-11">
                    <Image
                      src="/replicate.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full"
                      title="Replicate.com"
                      alt="Replicate Logo"
                    />
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="https://drive.google.com/file/d/1dE2FKNiOciM-4UD2Voa2ywq771438TMr/view?usp=sharing"
              target="_blank"
            >
              <div
                className="bg-gray-200 p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]"
                title="Click for more"
              >
                <h3 className="text-xl font-bold mb-2">
                  Lunar excavator robot
                </h3>
                <p>
                  Implemented an AprilTag/sensor data program, allowing the
                  robot to detect objects and calibrate itself. Wrote autonomous
                  locomotion, excavation, and deposition scripts using ROS
                  nodes.
                </p>
                <div className="flex justify-center gap-2 pt-2">
                  <div className="w-11 h-11">
                    <Image
                      src="/python.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full"
                      title="Python"
                      alt="Python Logo"
                    />
                  </div>
                  <div className="w-11 h-10">
                    <Image
                      src="/opencv.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full"
                      title="OpenCV"
                      alt="OpenCV Logo"
                    />
                  </div>
                  <div className="w-11 h-11">
                    <Image
                      src="/apriltag.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full"
                      title="AprilTag"
                      alt="AprilTag Logo"
                    />
                  </div>
                  <SiRos size={39} color="black" title="ROS" />
                </div>
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
                <h3 className="text-xl font-bold mb-2">
                  Pet Peeves - MERN Blog
                </h3>
                <p>
                  A blog for pet lovers who wish to share about their furry - or
                  raw chicken - pets.
                </p>
                <div className="flex justify-center gap-2 pt-2">
                  <SiTypescript size={45} color="#007acc" title="Typescript" />
                  <DiReact size={50} color="#61dbfb" title="React" />
                  <DiSass size={50} color="#c69" title="SASS" />
                  <DiNodejsSmall size={50} color="#3C873A" title="NodeJS" />
                  <SiExpress size={50} color="grey" title="ExpressJS" />
                  <BiLogoMongodb size={50} color="#4DB33D" title="MongoDB" />
                </div>
              </div>
            </Link>

            <Link
              href="https://github-licenses-ranked.vercel.app"
              target="_blank"
            >
              <div
                className="bg-gray-200 p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]"
                title="Click for more"
              >
                <h3 className="text-xl font-bold mb-2">
                  GitHub Licenses Ranked
                </h3>
                <p>
                  Complex GitHub licenses are simplified and ranked to help
                  developers choose the proper license for their repository.
                </p>
                <div className="flex justify-center gap-2 pt-2">
                  <SiTypescript size={45} color="#007acc" title="Typescript" />
                  <TbBrandNextjs size={50} color="black" title="NextJs" />
                  <SiTailwindcss
                    size={50}
                    color="#03a9f4"
                    title="Tailwind CSS"
                  />
                </div>
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
                <p>Simple to-do list to get your work done!</p>
                <div className="flex justify-center gap-2 pt-2">
                  <SiTypescript size={45} color="#007acc" title="Typescript" />
                  <DiReact size={50} color="#61dbfb" title="React" />
                  <DiNodejsSmall size={50} color="#3C873A" title="NodeJS" />
                </div>
              </div>
            </Link>

            <Link
              href="https://github.com/DaviZCodes/my-discord-bot"
              target="_blank"
            >
              <div
                className="bg-gray-200 p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]"
                title="Click for more"
              >
                <h3 className="text-xl font-bold mb-2">Discord Bot</h3>
                <p>Interactive discord bot with several functionalities.</p>
                <div className="flex justify-center gap-2 pt-2">
                  <div className="w-11 h-11">
                    <Image
                      src="/python.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full"
                      title="Python"
                      alt="Python Logo"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Skills />

      {/* Contact */}
      <ContactSection />
    </div>
  );
};

export default Home;
