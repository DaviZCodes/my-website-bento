"use client";

import { useTranslation } from "react-i18next";

export default function Polyglot() {
  const { i18n, t } = useTranslation();

  const switchLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language);
  };

  return (
    <div
      className="flex border-2 border-yellow-50 transition duration-160 hover:border-[#fdaf67e3] rounded-xl bg-[#f5e2b6] shadow-[4px_4px_10px_2px_rgba(253,175,103,0.5)]
    dark:bg-[#112336] dark:text-[#e0ee60] dark:border-[#e0ee60] p-3
    lg:py-5 xl:py-0 2xl:px-6 2xl:py-2"
    >
      {/* For screens md and larger */}
      <div className="hidden md:flex items-center gap-3">
        <div
          className="text-lg font-semibold whitespace-nowrap
        lg:text-lg xl:text-base 2xl:text-xl "
        >
          {t("Languages")}
        </div>
        <button
          title="English"
          onClick={() => switchLanguage("us-en")}
          className="px-3 py-2 font-semibold rounded-lg bg-[#fdaf67e3] cursor-pointer whitespace-nowrap transition-all duration-160 hover:bg-white hover:text-[#0A3161] shadow-[2px_2px_5px_1px_rgba(253,175,103,0.5)]
          dark:bg-[#e0ee60] dark:text-[#112336] dark:hover:bg-white dark:hover:text-[#0A3161]
          md:px-5 md:py-2 2xl:py-3"
        >
          us-en
        </button>
        <button
          title="Spanish"
          onClick={() => switchLanguage("es-br")}
          className="px-3 py-2 font-semibold rounded-lg bg-[#fdaf67e3]  cursor-pointer whitespace-nowrap transition-all duration-160 hover:bg-[#F1BF00] hover:text-[#AA151B] shadow-[2px_2px_5px_1px_rgba(253,175,103,0.5)]
          dark:bg-[#e0ee60] dark:text-[#112336] dark:hover:bg-[#F1BF00] dark:hover:text-[#AA151B]
          md:px-5 md:py-2 2xl:py-3"
        >
          es-br
        </button>
        <button
          title="Mandarin"
          onClick={() => switchLanguage("zh-cn")}
          className="px-3 py-2 font-semibold rounded-lg bg-[#fdaf67e3] cursor-pointer whitespace-nowrap transition-all duration-160 hover:bg-[#EE1C25] hover:text-[#FFFF00] shadow-[2px_2px_5px_1px_rgba(253,175,103,0.5)]
          dark:bg-[#e0ee60] dark:text-[#112336] dark:hover:bg-[#EE1C25] dark:hover:text-[#FFFF00]
          md:px-5 md:py-2 2xl:py-3"
        >
          zh-cn
        </button>
        <button
          title="Portuguese"
          onClick={() => switchLanguage("pt-br")}
          className="px-3 py-2 font-semibold rounded-lg bg-[#fdaf67e3] cursor-pointer whitespace-nowrap transition-all duration-160 hover:bg-[#009739] hover:text-[#FEDD00] shadow-[2px_2px_5px_1px_rgba(253,175,103,0.5)]
          dark:bg-[#e0ee60] dark:text-[#112336] dark:hover:bg-[#009739] dark:hover:text-[#FEDD00]
          md:px-5 md:py-2 2xl:py-3"
        >
          pt-br
        </button>
      </div>

      {/* For screens sm and smaller */}
      <div className="md:hidden flex flex-col justify-center items-center gap-3 w-full">
        <div
          className="text-lg font-semibold whitespace-nowrap
        lg:text-lg xl:text-base 2xl:text-xl "
        >
          {t("Languages")}
        </div>

        <div className="flex gap-x-1">
          <button
            title="English"
            onClick={() => switchLanguage("us-en")}
            className="p-3 text-lg font-semibold rounded-lg bg-[#fdaf67e3] cursor-pointer whitespace-nowrap transition-all duration-160 hover:bg-white hover:text-[#0A3161] shadow-[2px_2px_5px_1px_rgba(253,175,103,0.5)]
          dark:bg-[#e0ee60] dark:text-[#112336] dark:hover:bg-white dark:hover:text-[#0A3161]
          md:px-5 md:py-2 2xl:py-3"
          >
            us-en
          </button>
          <button
            title="Spanish"
            onClick={() => switchLanguage("es-br")}
            className="p-3 text-lg font-semibold rounded-lg bg-[#fdaf67e3]  cursor-pointer whitespace-nowrap transition-all duration-160 hover:bg-[#F1BF00] hover:text-[#AA151B] shadow-[2px_2px_5px_1px_rgba(253,175,103,0.5)]
          dark:bg-[#e0ee60] dark:text-[#112336] dark:hover:bg-[#F1BF00] dark:hover:text-[#AA151B]
          md:px-5 md:py-2 2xl:py-3"
          >
            es-br
          </button>

          <button
            title="Mandarin"
            onClick={() => switchLanguage("zh-cn")}
            className="p-3 text-lg font-semibold rounded-lg bg-[#fdaf67e3] cursor-pointer whitespace-nowrap transition-all duration-160 hover:bg-[#EE1C25] hover:text-[#FFFF00] shadow-[2px_2px_5px_1px_rgba(253,175,103,0.5)]
          dark:bg-[#e0ee60] dark:text-[#112336] dark:hover:bg-[#EE1C25] dark:hover:text-[#FFFF00]
          md:px-5 md:py-2 2xl:py-3"
          >
            zh-cn
          </button>
          <button
            title="Portuguese"
            onClick={() => switchLanguage("pt-br")}
            className="p-3 text-lg font-semibold rounded-lg bg-[#fdaf67e3] cursor-pointer whitespace-nowrap transition-all duration-160 hover:bg-[#009739] hover:text-[#FEDD00] shadow-[2px_2px_5px_1px_rgba(253,175,103,0.5)]
          dark:bg-[#e0ee60] dark:text-[#112336] dark:hover:bg-[#009739] dark:hover:text-[#FEDD00]
          md:px-5 md:py-2 2xl:py-3"
          >
            pt-br
          </button>
        </div>
      </div>
    </div>
  );
}
