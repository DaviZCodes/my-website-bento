import Image from "next/image";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";

export default function Projects() {
  return (
    <section className="">
      <div className="flex flex-col border-2 border-yellow-50 transition duration-160 hover:border-[#fdaf67e3] rounded-xl shadow-sm p-6 bg-[#f5e2b6]">
        <div className="flex justify-between">
          <div className="font-bold text-2xl">Projects</div>

          <button>
            <HiExternalLink size={26} className="" />
          </button>
        </div>

        <div className="flex justify-between text-xl mt-3 gap-2">
          <Link href="https://arter-generative-ai.vercel.app">
            <div>Arter</div>
            <div className="w-96">
              <Image
                src="https://i.imgur.com/l3q4T89.png"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full"
                title="Arter generative AI."
                alt="Arter generative AI"
              />
            </div>
          </Link>

          <Link href="https://arter-generative-ai.vercel.app">
            <div>Lunar excavator</div>
            <div className="w-96">
              <Image
                src="https://i.imgur.com/l3q4T89.png"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full"
                title="Arter generative AI."
                alt="Arter generative AI"
              />
            </div>
          </Link>

          <Link href="https://arter-generative-ai.vercel.app">
            <div>GitHub Licenses Ranked</div>
            <div className="w-96">
              <Image
                src="https://i.imgur.com/l3q4T89.png"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full"
                title="Arter generative AI."
                alt="Arter generative AI"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
