"use client";

import Image from "next/image";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import ArterLogo from "./images/arter_logo.png";
import NYURDTLogo from "./images/nyu_rdt.png";
import NYURDTLogoDark from "./images/nyu_rdt_dark.png";
import GitHubLicensesRankedLogo from "./images/licenses_logo.png";
import { useTranslation } from "react-i18next";
import { useTheme } from "./ThemeContext";

export default function Projects() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const LightOrDarkNYURDTLogo = theme === "light" ? NYURDTLogo : NYURDTLogoDark;

  return (
    <section>
      <div
        className="flex flex-col border-2 border-yellow-50 transition duration-160 hover:border-[#fdaf67e3] rounded-xl shadow-sm p-3 bg-[#f5e2b6]
      dark:bg-[#112336] dark:text-[#e0ee60] dark:border-[#e0ee60]
      xl:p-5 2xl:p-6"
      >
        {/* For screens md and larger */}
        <div className="hidden md:flex md:flex-col">
          <div className="flex justify-between">
            <div
              className="font-bold text-xl
          xl:text-2xl"
            >
              {t("FeaturedProjects")}
            </div>

            <Link href="/projects" title="More projects">
              <button aria-label="My Projects">
                <HiExternalLink size={30} className="" />
              </button>
            </Link>
          </div>

          <div
            className="flex justify-between font-semibold text-base mt-2 gap-2
        md:text-xl 2xl:mt-3 2xl:text-2xl"
          >
            <Link
              href="https://arter-generative-ai.vercel.app"
              target="_blank"
              className="flex flex-col items-center w-1/3"
            >
              <div
                className="mb-1
            2xl:mb-2"
              >
                Arter
              </div>
              <div
                className="w-full h-36 p-3 flex justify-center items-center border-2 border-yellow-50 hover:border-[#fdaf67e3] rounded-xl shadow-[4px_4px_10px_2px_rgba(253,175,103,0.5)]
            dark:hover:border-[#e0ee60]
            xl:h-52 2xl:h-64"
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
              <div
                className="mb-1
            2xl:mb-2"
              >
                Lunar Excavator
              </div>
              <div
                className="w-full h-36 flex justify-center items-center border-2 border-yellow-50 hover:border-[#fdaf67e3] rounded-xl shadow-[4px_4px_10px_2px_rgba(253,175,103,0.5)]
            dark:hover:border-[#e0ee60]
            xl:h-52 2xl:h-64"
              >
                <Image
                  src={LightOrDarkNYURDTLogo}
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
              <div
                className="mb-1
            2xl:mb-2"
              >
                GitHub Licenses Ranked
              </div>
              <div
                className="w-full h-36 p-3 flex justify-center items-center border-2 border-yellow-50 hover:border-[#fdaf67e3] rounded-xl shadow-[4px_4px_10px_2px_rgba(253,175,103,0.5)]
            dark:hover:border-[#e0ee60]
            xl:h-52 2xl:h-64"
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

        {/* For screens sm and smaller */}
        <div className="md:hidden">
          <div className="flex justify-between">
            <div
              className="font-bold text-xl
          xl:text-2xl 2xl:text-2xl"
            >
              {t("FeaturedProjects")}
            </div>

            <Link href="/projects" title="More projects">
              <button aria-label="My Projects">
                <HiExternalLink size={30} className="" />
              </button>
            </Link>
          </div>

          <div
            className="flex flex-col font-semibold text-lg gap-2
        md:text-xl 2xl:mt-3 2xl:text-2xl"
          >
            <Link
              href="https://arter-generative-ai.vercel.app"
              target="_blank"
              className="flex flex-col items-center w-full"
            >
              <div
                className="mb-1
            2xl:mb-2"
              >
                Arter
              </div>
              <div
                className="w-full h-36 flex justify-center items-center border-2 border-yellow-50 hover:border-[#fdaf67e3] rounded-xl shadow-[4px_4px_10px_2px_rgba(253,175,103,0.5)]
            dark:hover:border-[#e0ee60]
            xl:h-56 2xl:h-64"
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
              className="flex flex-col items-center w-full"
            >
              <div
                className="mb-1
            2xl:mb-2"
              >
                Lunar Excavator
              </div>
              <div
                className="w-full h-36 flex justify-center items-center border-2 border-yellow-50 hover:border-[#fdaf67e3] rounded-xl shadow-[4px_4px_10px_2px_rgba(253,175,103,0.5)]
            dark:hover:border-[#e0ee60]
            xl:h-56 2xl:h-64"
              >
                <Image
                  src={LightOrDarkNYURDTLogo}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-full object-contain"
                  title="RDT Logo"
                  alt="RDT Logo"
                />
              </div>
            </Link>

            <Link
              href="https://github-licenses-ranked.vercel.app"
              target="_blank"
              className="flex flex-col items-center w-full"
            >
              <div
                className="mb-1
            2xl:mb-2"
              >
                GitHub Licenses Ranked
              </div>
              <div
                className="w-full h-36 p-1 flex justify-center items-center border-2 border-yellow-50 hover:border-[#fdaf67e3] rounded-xl shadow-[4px_4px_10px_2px_rgba(253,175,103,0.5)]
            dark:hover:border-[#e0ee60]
            xl:h-56 2xl:h-64"
              >
                <Image
                  src={GitHubLicensesRankedLogo}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-full object-contain"
                  title="GitHub Licenses Ranked Website Logo"
                  alt="GitHub Licenses Ranked Website Logo"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
