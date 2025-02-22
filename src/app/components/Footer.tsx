"use client";

import { useTranslation } from "react-i18next";
import i18n from "./i18n/i18n";
import Link from "next/link";

export default function Footer() {
  const { t } = useTranslation();

  const getTextAndPaddingSize = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "es" ||
      currentLanguage === "es-br" ||
      currentLanguage === "pt" ||
      currentLanguage === "pt-br"
      ? "p-1 text-base"
      : "p-2 text-base";
  };

  return (
    <Link href="https://github.com/DaviZCodes/my-website">
      <footer
        className={`bg-[#fdaf67e3] rounded-xl ${getTextAndPaddingSize()}
  dark:bg-[#e0ee60] dark:text-[#112336]`}
      >
        <div>
          &copy; {new Date().getFullYear()} {t("Footer")}
        </div>
      </footer>
    </Link>
  );
}
