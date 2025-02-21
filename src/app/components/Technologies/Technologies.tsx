"use client";

import { useState } from "react";
import { HiExternalLink } from "react-icons/hi";
import { SiPython, SiCplusplus, SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import TechnologiesModal from "./TechnologiesModal";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";

export default function Technologies() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { t } = useTranslation();

  const getTextSize = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "es" ||
      currentLanguage === "es-br" ||
      currentLanguage === "pt" ||
      currentLanguage === "pt-br"
      ? "text-lg 2xl:text-xl"
      : "text-lg xl:text-xl";
  };

  return (
    <div
      className="relative items-center flex w-full h-full border-2 border-yellow-50 transition duration-160 
    hover:border-[#fdaf67e3] rounded-xl px-3 py-5 bg-[#f5e2b6] hover:bg-[#fdaf67e3]
     hover:text-white cursor-pointer shadow-[4px_4px_10px_2px_rgba(253,175,103,0.5)] overflow-visible 
     dark:bg-[#112336] dark:text-[#e0ee60] dark:border-[#e0ee60] dark:hover:bg-[#e0ee60] dark:hover:text-[#112336]
     md:py-3 2xl:px-8 2xl:py-6 2xl:h-auto 2xl:overflow-hidden"
      onClick={openModal}
    >
      <div
        className={`flex-grow whitespace-nowrap ${getTextSize()} font-semibold l`}
      >
        {t("Technologies")}
      </div>
      <button aria-label="Technologies I use">
        <HiExternalLink size={30} />
      </button>

      {/* Background Logos */}
      <div className="absolute opacity-20 z-0 top-1/2 -translate-y-1/2 2xl:top-[20%] 2xl:translate-y-0 left-[6%]">
        <SiPython className="w-9 h-9 2xl:w-12 2xl:h-12" />
      </div>

      <div className="absolute opacity-20 z-0 top-1/2 -translate-y-1/2 2xl:top-[20%] 2xl:translate-y-0 left-[30%]">
        <SiCplusplus className="w-9 h-9 2xl:w-12 2xl:h-12" />
      </div>

      <div className="absolute opacity-20 z-0 top-1/2 -translate-y-1/2 2xl:top-[20%] 2xl:translate-y-0 left-[55%]">
        <SiJavascript className="w-9 h-9 2xl:w-12 2xl:h-12" />
      </div>

      <div className="absolute opacity-20 z-0 top-1/2 -translate-y-1/2 2xl:top-[20%] 2xl:translate-y-0 left-[76%]">
        <FaJava className="w-9 h-9 2xl:w-12 2xl:h-12" />
      </div>

      {isModalOpen && <TechnologiesModal onClose={closeModal} />}
    </div>
  );
}
