import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";
import { SiPython, SiCplusplus, SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function Technologies() {
  return (
    <div className="relative flex w-full border-2 border-yellow-50 transition duration-160 hover:border-[#fdaf67e3] rounded-xl px-8 py-6 bg-[#f5e2b6] hover:bg-[#fdaf67e3] hover:text-white cursor-pointer shadow-[4px_4px_10px_2px_rgba(253,175,103,0.5)] overflow-hidden">
      <div className="flex-grow text-xl font-semibold">Technologies I use:</div>
      <button>
        <HiExternalLink size={26} className="hover:text-white" />
      </button>

      {/* Background Logos */}
      <div
        className="absolute opacity-20 z-0"
        style={{ top: "10%", left: "6%" }}
      >
        <SiPython size={60} />
      </div>

      <div
        className="absolute opacity-20 z-0"
        style={{ top: "10%", left: "30%" }}
      >
        <SiCplusplus size={60} />
      </div>

      <div
        className="absolute opacity-20 z-0"
        style={{ top: "10%", left: "55%" }}
      >
        <SiJavascript size={60} />
      </div>

      <div
        className="absolute opacity-20 z-0"
        style={{ top: "10%", left: "76%" }}
      >
        <FaJava size={60} />
      </div>
    </div>
  );
}
