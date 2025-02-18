import Image from "next/image";
import "./css/handwave.css";
import WoodenKnight from "../components/images/wooden_chess_knight.png";

export default function Header() {
  return (
    <section>
      <div className="flex border-2 border-yellow-50 transition duration-160 hover:border-[#fdaf67e3] rounded-xl shadow-sm p-6 bg-[#f5e2b6]">
        {/* Header */}
        <div className="flex flex-col justify-between mr-12">
          {/*<div className="w-full border bg-slate-50 rounded-2xl p-6 shadow-lg">*/}
          <div className="text-3xl flex">
            <span role="img" aria-label="wave" className="animate-wave">
              👋
            </span>

            <div className="ml-1 font-semibold">I&apos;m Davi.</div>
          </div>

          <div className="text-gray-700 mt-1 mb-6 text-lg">
            Software Engineer @ Amazon || Computer Science && Math @ NYU ||
            Polyglot
          </div>

          <div className="text-lg">
            Hey, I&apos;m Davi Zheng, a full-stack software engineer based in
            New York City.
          </div>

          <div className="text-lg mt-3">
            I&apos;m currently a senior studying Computer Science and Math at
            New York University graduating in May 2025.
          </div>

          <div className="text-lg mt-3">
            I am highly interested in all things technology and business
            related. Beyond coding, I work out, play chess, and make videos.
            I&apos;m open to trying new activities the same way that I&apos;m
            willing to learn new tools and technologies most suitable for the
            job.
          </div>
        </div>

        {/* Knight */}
        <div className="w-auto h-80 flex-shrink-0">
          <Image
            src={WoodenKnight}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full"
            title="Play me in chess! I am decent."
            alt="Wooden Knight"
          />
        </div>
      </div>
    </section>
  );
}
