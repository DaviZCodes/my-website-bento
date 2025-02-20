"use client";

import Image from "next/image";
import "./css/handwave.css";
import WoodenKnight from "../components/images/wooden_chess_knight.png";
import GoldenKing from "../components/images/golden_king_chess.png";
import { useTheme } from "./ThemeContext";
import { useTranslation } from "react-i18next";
import i18n from "./i18n/i18n";

export default function Header() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const getTextSizeTitle = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "es" ||
      currentLanguage === "es-br" ||
      currentLanguage === "pt" ||
      currentLanguage === "pt-br"
      ? "text-2xl lg:text-3xl xl:text-xl 2xl:text-2xl"
      : "text-2xl lg:text-5xl xl:text-2xl 2xl:text-3xl";
  };

  const getTextSizeSubheading = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "es" ||
      currentLanguage === "es-br" ||
      currentLanguage === "pt" ||
      currentLanguage === "pt-br"
      ? "lg:text-xl xl:text-base 2xl:text-lg"
      : "lg:text-xl xl:text-lg 2xl:text-xl";
  };

  const getTextSizeDesc = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "es" ||
      currentLanguage === "es-br" ||
      currentLanguage === "pt" ||
      currentLanguage === "pt-br"
      ? "md:text-xl xl:text-base 2xl:text-lg"
      : "md:text-xl xl:text-lg 2xl:text-xl";
  };

  return (
    <section>
      <div
        className="flex border-2 border-yellow-50 transition duration-160 hover:border-[#fdaf67e3] rounded-xl shadow-sm p-3 bg-[#f5e2b6]
      dark:bg-[#112336] dark:text-[#e0ee60] dark:border-[#e0ee60] 
      lg:p-5 2xl:p-6"
      >
        <div
          className="flex flex-col justify-between 
        lg:mr-6"
        >
          <div className="flex lg:mb-3 xl:mb-0">
            <span
              role="img"
              aria-label="wave"
              className="text-2xl animate-wave
              lg:text-5xl xl:text-3xl"
            >
              👋
            </span>

            <div className={`ml-1 font-semibold ${getTextSizeTitle()}`}>
              {t("Greeting")}
            </div>
          </div>

          <div
            className={`text-gray-700 mt-1 ${getTextSizeSubheading()} dark:text-white text-base
            lg:mb-3`}
          >
            {t("Introduction")}
          </div>

          <div className={`mt-1 ${getTextSizeDesc()}`}>
            {t("Introduction-2")}
          </div>

          <div className={`mt-1 ${getTextSizeDesc()}`}>
            {t("Introduction-3")}
          </div>

          <div className={`mt-1 ${getTextSizeDesc()}`}>{t("AboutMe")}</div>
        </div>

        {/* Knight or King */}

        {theme === "light" ? (
          <div className="h-16 flex md:w-auto sm:h-32 md:h-60 lg:h-72 2xl:h-72 flex-shrink-0">
            <Image
              src={WoodenKnight}
              width={0}
              height={0}
              sizes="100vw"
              loading="lazy"
              className="w-auto h-full object-contain"
              title={t("Chess")}
              alt="Wooden Knight"
            />
          </div>
        ) : (
          <div className="h-16 w-auto sm:h-32 md:h-60 lg:h-72 2xl:h-72 flex-shrink-0">
            <Image
              src={GoldenKing}
              width={0}
              height={0}
              sizes="100vw"
              loading="lazy"
              className="w-auto h-full object-contain"
              title={t("Chess")}
              alt="Golden King"
            />
          </div>
        )}
      </div>
    </section>
  );
}
