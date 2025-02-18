import { HiExternalLink } from "react-icons/hi";

export default function Technologies() {
  return (
    <div className="flex w-full border-2 border-yellow-50 transition duration-160 hover:border-[#fdaf67e3] rounded-xl px-8 py-6 bg-[#f5e2b6] hover:bg-[#fdaf67e3] hover:text-white cursor-pointer shadow-[4px_4px_10px_2px_rgba(253,175,103,0.5)]">
      <div className="flex-grow text-xl font-semibold">Technologies I use:</div>
      <button>
        <HiExternalLink size={26} className="hover:text-white" />
      </button>
    </div>
  );
}
