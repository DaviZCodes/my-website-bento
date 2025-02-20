"use client";

import { useTranslation } from "react-i18next";
import i18n from "./i18n/i18n";

export default function Footer() {
  const { t } = useTranslation();

  const getTextSize = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "es" ||
      currentLanguage === "es-br" ||
      currentLanguage === "pt" ||
      currentLanguage === "pt-br"
      ? "text-md"
      : "text-lg";
  };

  return (
    <footer
      className={`bg-[#fdaf67e3] p-2 rounded-xl ${getTextSize()}
    dark:bg-[#e0ee60] dark:text-[#112336]
    xl:p-3`}
    >
      <div
        className="text-sm
      2xl:text-lg"
      >
        &copy; {new Date().getFullYear()} {t("Footer")}
      </div>
    </footer>
  );
}
