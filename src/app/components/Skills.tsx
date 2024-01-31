import Image from "next/image";
import youtubeIcon from "./images/youtube.jpeg";
import chessKnight from "./images/chess piece.webp";
import basketball from "./images/basketball.png";
import dumbbell from "./images/dumbbell.webp";
import Link from "next/link";

export default function Skills() {
  return (
    <section className="bg-white py-12 px-2 lg:px-3">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Skills and frameworks</h2>
        <ul className="list-disc pl-3">
          <li>C, C++, x86 Assembly</li>
          <li>
            Python, OpenCV, AprilTag, ROS, Machine Learning, Convolutional
            Neural Networks
          </li>

          <li>
            HTML, CSS, JavaScript, TypeScript, React, NextJS, Tailwind, SCSS,
            NodeJS, Express, Convex.dev, Postman, SQL, MongoDB
          </li>
          <li>
            Video Editing (Final Cut Pro, Sony Vegas Pro, Davinci Resolve),
            UI/UX, Adobe Photoshop, Figma
          </li>
          <li>Google Suite, Microsoft Office, macOS, Windows, Linux</li>
          <li>Quadrilingual: English, Mandarin, Spanish, and Portuguese</li>
        </ul>

        <h2 className="text-3xl font-bold mt-6 mb-4">Hobbies</h2>

        <div className="flex flex-col justify-center items-center md:flex-row">
          {/* md:flex-row is so that hobbies is vertical on mobile view*/}

          <div className="pl-6">
            <div className="flex items-center">
              <div className="w-28 lg:w-36">
                <Image
                  src={chessKnight}
                  className="w-full h-full mb-2"
                  width={0}
                  height={0}
                  sizes="100vm"
                  alt="Chess Piece"
                  loading="lazy"
                />
              </div>
            </div>
            <p>
              I love playing chess. I just started playing two years ago and
              I&apos;m rated around 1800 on chess.com. Want to play?
            </p>
          </div>
          <div className="pl-6">
            <div className="flex items-center">
              <div className="w-60">
                <Image
                  src={basketball}
                  className="w-full h-full"
                  width={0}
                  height={0}
                  sizes="100vm"
                  alt="Basketball"
                  loading="lazy"
                />
              </div>
              <div className="h-32">
                <Image
                  src={dumbbell}
                  className="w-full h-full"
                  width={0}
                  height={0}
                  sizes="100vm"
                  alt="Basketball"
                  loading="lazy"
                />
              </div>
            </div>
            <p>
              I actively play sports and work out. I have played varsity
              basketball, varsity football, and badminton at a state level.
              Would you like to work out together? (My goal is to bench 225
              pounds and get a six pack)
            </p>
          </div>
          <div className="pl-6 pt-2">
            <Link href="https://www.youtube.com/@davitothestars">
              <div className="flex items-center">
                <div className="w-80 py-10">
                  <Image
                    src={youtubeIcon}
                    className="w-full h-full"
                    width={0}
                    height={0}
                    sizes="100vm"
                    alt="YouTube Icon"
                    loading="lazy"
                  />
                </div>
              </div>
              <p>
                I have always enjoyed creating content ever since I was young. I
                think it&apos;s a great way to view back on my memories.
                Recently, I have been uploading at an (in)frequent rate. Soon, I
                will be uploading a new video, so I am excited for that.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
