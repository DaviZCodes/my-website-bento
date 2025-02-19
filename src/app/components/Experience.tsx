import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";

export default function Experience() {
  return (
    <Link href="/work" className="text-lg">
      <div
        className="flex justify-between border-2 border-yellow-50 transition duration-160 hover:border-[#fdaf67e3] rounded-xl shadow-sm p-6 bg-[#f5e2b6]
      dark:bg-[#112336] dark:text-[#e0ee60] dark:border-[#e0ee60]"
      >
        <div className="font-bold text-2xl">Experience</div>
        <button>
          <HiExternalLink size={26} />
        </button>
      </div>
    </Link>
  );
}
