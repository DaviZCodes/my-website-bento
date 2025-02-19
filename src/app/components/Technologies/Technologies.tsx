"use client";

import { useState } from "react";
import { HiExternalLink } from "react-icons/hi";
import { SiPython, SiCplusplus, SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import TechnologiesModal from "./TechnologiesModal";
import { useTranslation } from "react-i18next";

export default function Technologies() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { t } = useTranslation();

  return (
    <div
      className="relative flex w-full border-2 border-yellow-50 transition duration-160 
    hover:border-[#fdaf67e3] rounded-xl px-8 py-6 bg-[#f5e2b6] hover:bg-[#fdaf67e3]
     hover:text-white cursor-pointer shadow-[4px_4px_10px_2px_rgba(253,175,103,0.5)] overflow-hidden
     dark:bg-[#112336] dark:text-[#e0ee60] dark:border-[#e0ee60] dark:hover:bg-[#e0ee60] dark:hover:text-[#112336]"
      onClick={openModal}
    >
      <div className="flex-grow text-xl font-semibold">{t("Technologies")}</div>
      <button>
        <HiExternalLink size={26} className="hover:text-white" />
      </button>

      {/* Background Logos */}
      <div
        className="absolute opacity-20 z-0"
        style={{ top: "10%", left: "6%" }}
      >
        <SiPython size={56} />
      </div>

      <div
        className="absolute opacity-20 z-0"
        style={{ top: "10%", left: "30%" }}
      >
        <SiCplusplus size={56} />
      </div>

      <div
        className="absolute opacity-20 z-0"
        style={{ top: "10%", left: "55%" }}
      >
        <SiJavascript size={56} />
      </div>

      <div
        className="absolute opacity-20 z-0"
        style={{ top: "10%", left: "76%" }}
      >
        <FaJava size={56} />
      </div>

      {isModalOpen && <TechnologiesModal onClose={closeModal} />}
    </div>
  );
}
