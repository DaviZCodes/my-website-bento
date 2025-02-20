import Link from "next/link";
import Image from "next/image";
import { DiReact, DiSass, DiNodejsSmall } from "react-icons/di";
import { BiLogoMongodb } from "react-icons/bi";
import { SiTypescript, SiTailwindcss, SiRos, SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function Projects() {
  return (
    <section
      className="flex flex-col min-h-screen bg-[#f7e6bc] items-center
      dark:bg-[#112336] dark:text-[#e0ee60] dark:border-[#e0ee60] p-3
      sm:px-6 md:px-12 lg:px-16 lg:py-2 xl:px-52 xl:py-3 2xl:px-60 2xl:py-6"
    >
      <div className="w-full flex justify-start sticky top-0 z-10">
        <Link
          href={"/"}
          className="font-semibold text-xl px-3 py-2 my-2 border-2 transition-all duration-160 rounded-lg text-white bg-black
          dark:border-[#e0ee60]
          lg:border-black lg:hover:bg-black lg:hover:text-white
          xl:mt-6"
        >
          Home
        </Link>
      </div>

      <div
        className="text-center
      xl:mt-6 2xl:mt-12"
      >
        <h2
          className="font-bold mb-2 text-2xl 
          sm:mb-3 md:mb-6 lg:mb-12 sm:text-3xl xl:text-4xl 2xl:text-5xl"
        >
          Projects
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-black
        xl:gap-3 2xl:gap-6"
        >
          <Link href="https://arter-generative-ai.vercel.app" target="_blank">
            <div
              className="border-2 border-yellow-50 bg-gray-200 p-6 rounded-xl shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]"
              title="Click for more"
            >
              <h3
                className="text-lg font-bold mb-2
              xl:text-xl"
              >
                Arter - Generative AI
              </h3>
              <p>
                Generative AI website that transforms scribbles into realistic
                and colorful artworks.
              </p>
              <div className="flex justify-center gap-2 pt-2">
                <SiTypescript size={45} color="#007acc" title="Typescript" />
                <TbBrandNextjs size={50} color="black" title="NextJs" />
                <SiTailwindcss size={50} color="#03a9f4" title="Tailwind CSS" />
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

          <Link href="https://tinyurl.com/lunarexcav" target="_blank">
            <div
              className="border-2 border-yellow-50 bg-gray-200 p-6 rounded-xl shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]"
              title="Click for more"
            >
              <h3
                className="text-lg font-bold mb-2
              xl:text-xl "
              >
                Lunar excavator robot
              </h3>
              <p>
                Implemented an AprilTag/sensor data program, allowing the robot
                to detect objects and calibrate itself. Wrote autonomous
                locomotion, excavation, and deposition scripts using ROS nodes.
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
            href="https://github-licenses-ranked.vercel.app"
            target="_blank"
          >
            <div
              className="border-2 border-yellow-50 bg-gray-200 p-6 rounded-xl shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]"
              title="Click for more"
            >
              <h3
                className="text-lg font-bold mb-2
              xl:text-xl "
              >
                GitHub Licenses Ranked
              </h3>
              <p>
                Complex GitHub licenses are simplified and ranked to help
                developers choose the right license for their repository.
              </p>
              <div className="flex justify-center gap-2 pt-2">
                <SiTypescript size={45} color="#007acc" title="Typescript" />
                <TbBrandNextjs size={50} color="black" title="NextJs" />
                <SiTailwindcss size={50} color="#03a9f4" title="Tailwind CSS" />
              </div>
            </div>
          </Link>

          <Link
            href="https://github.com/DaviZCodes/pet-peeves-blog"
            target="_blank"
          >
            <div
              className="border-2 border-yellow-50 bg-gray-200 p-6 rounded-xl shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]"
              title="Click for more"
            >
              <h3
                className="text-lg font-bold mb-2
              xl:text-xl "
              >
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
            href="https://react-to-do-list-frontend.vercel.app"
            target="_blank"
          >
            <div
              className="border-2 border-yellow-50 bg-gray-200 p-6 rounded-xl shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]"
              title="Click for more"
            >
              <h3
                className="text-lg font-bold mb-2
              xl:text-xl "
              >
                To-do list
              </h3>
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
              className="border-2 border-yellow-50 bg-gray-200 p-6 rounded-xl shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]"
              title="Click for more"
            >
              <h3
                className="text-lg font-bold mb-2
              xl:text-xl "
              >
                Discord Bot
              </h3>
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
  );
}
