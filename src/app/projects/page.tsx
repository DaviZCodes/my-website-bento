import Link from "next/link";
import Image from "next/image";
import { DiReact, DiSass, DiNodejsSmall } from "react-icons/di";
import { BiLogoMongodb } from "react-icons/bi";
import { SiTypescript, SiTailwindcss, SiRos, SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function Projects() {
  return (
    <section
      className="flex flex-col min-h-screen bg-[#f7e6bc] px-60 py-6 items-center
      dark:bg-[#112336] dark:text-[#e0ee60] dark:border-[#e0ee60]"
    >
      <div className="w-full flex justify-start">
        <Link
          href={"/"}
          className="font-semibold text-xl px-3 py-2 mt-6 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-160
          dark:border-[#e0ee60]"
        >
          Home
        </Link>
      </div>

      <div className="text-center mt-16">
        <h2 className="text-5xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
          <Link href="https://arter-generative-ai.vercel.app" target="_blank">
            <div
              className="border-2 border-yellow-50 bg-gray-200 p-6 rounded-xl shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]"
              title="Click for more"
            >
              <h3 className="text-xl font-bold mb-2">Arter - Generative AI</h3>
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
              <h3 className="text-xl font-bold mb-2">Lunar excavator robot</h3>
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
              <h3 className="text-xl font-bold mb-2">GitHub Licenses Ranked</h3>
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
              <h3 className="text-xl font-bold mb-2">Pet Peeves - MERN Blog</h3>
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
              className="border-2 border-yellow-50 bg-gray-200 p-6 rounded-xl shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02]"
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
  );
}
