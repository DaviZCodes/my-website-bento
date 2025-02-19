"use client";

import Image from "next/image";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import ArterLogo from "./images/arter_logo.png";
import NYURDTLogo from "./images/nyu_rdt.png";
import GitHubLicensesRankedLogo from "./images/licenses_logo.png";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="flex-1">
      <div
        className="flex flex-col h-full border-2 border-yellow-50 transition duration-160 hover:border-[#fdaf67e3] rounded-xl shadow-sm p-6 bg-[#f5e2b6]
      dark:bg-[#112336] dark:text-[#e0ee60] dark:border-[#e0ee60]"
      >
        <div className="flex justify-between">
          <div className="font-bold text-2xl">{t("FeaturedProjects")}</div>

          <Link href="/projects" title="More projects">
            <button>
              <HiExternalLink size={26} className="" />
            </button>
          </Link>
        </div>

        <div className="flex justify-between font-semibold text-xl mt-3 gap-2">
          <Link
            href="https://arter-generative-ai.vercel.app"
            target="_blank"
            className="flex flex-col items-center w-1/3"
          >
            <div className="mb-2">Arter</div>
            <div
              className="w-full h-72 p-3 flex justify-center items-center border-2 border-yellow-50 hover:border-[#fdaf67e3] rounded-xl shadow-[4px_4px_10px_2px_rgba(253,175,103,0.5)]
            dark:hover:border-[#e0ee60]"
            >
              <Image
                src={ArterLogo}
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-full object-contain"
                title="Arter generative AI"
                alt="Arter generative AI"
              />
            </div>
          </Link>

          <Link
            href="https://tinyurl.com/lunarexcav"
            target="_blank"
            className="flex flex-col items-center w-1/3"
          >
            <div className="mb-2">Lunar Excavator</div>
            <div
              className="w-full h-72 flex justify-center items-center border-2 border-yellow-50 hover:border-[#fdaf67e3] rounded-xl shadow-[4px_4px_10px_2px_rgba(253,175,103,0.5)]
            dark:hover:border-[#e0ee60]"
            >
              <Image
                src={NYURDTLogo}
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-full object-contain"
                title="Lunar Excavator"
                alt="Lunar Excavator"
              />
            </div>
          </Link>

          <Link
            href="https://github-licenses-ranked.vercel.app"
            target="_blank"
            className="flex flex-col items-center w-1/3"
          >
            <div className="mb-2">GitHub Licenses Ranked</div>
            <div
              className="w-full h-72 p-3 flex justify-center items-center border-2 border-yellow-50 hover:border-[#fdaf67e3] rounded-xl shadow-[4px_4px_10px_2px_rgba(253,175,103,0.5)]
            dark:hover:border-[#e0ee60]"
            >
              <Image
                src={GitHubLicensesRankedLogo}
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-full object-contain"
                title="GitHub Licenses Ranked"
                alt="GitHub Licenses Ranked"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
