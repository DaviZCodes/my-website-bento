"use client";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      className="bg-[#fdaf67e3] p-6 rounded-xl text-lg
    dark:bg-[#e0ee60] dark:text-[#112336]"
    >
      <div>
        &copy; {new Date().getFullYear()} {t("Footer")}
      </div>
    </footer>
  );
}
