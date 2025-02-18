import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";

export default function Blog() {
  return (
    <Link href={"/blog"} className="text-lg">
      <div className="flex justify-between border-2 border-yellow-50 transition duration-160 hover:border-[#fdaf67e3] rounded-xl shadow-sm p-6 bg-[#f5e2b6]">
        <div className="font-bold text-2xl">My Blog!</div>
        <HiExternalLink size={26} />
      </div>
    </Link>
  );
}
