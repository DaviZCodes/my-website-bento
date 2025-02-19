"use client";

import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function ContactMe() {
  const { t } = useTranslation();

  return (
    <section className="text-lg">
      <div
        className="border-2 border-yellow-50 transition duration-160 hover:border-[#fdaf67e3] rounded-xl shadow-sm p-6 bg-[#f5e2b6]
      dark:bg-[#112336] dark:text-[#e0ee60] dark:border-[#e0ee60] dark:hover:bg-[#e0ee60] dark:hover:text-[#112336]"
      >
        <div className="font-bold text-2xl">{t("ContactMe")}</div>
        <div className="mt-3">{t("ContactMeDesc")}</div>

        <div className="mt-3">Email: daviz.contactme@gmail.com</div>

        <div className="flex justify-center mt-6 gap-3">
          <div className="group">
            <Link href="https://github.com/DaviZCodes" target="_blank">
              <span className="sr-only">Visit my GitHub profile!</span>
              <BsGithub
                size={50}
                title="My GitHub profile!"
                className="text-[#f78f2e] group-hover:text-[#2b3137] transition duration-160 dark:text-white"
              />
            </Link>
          </div>
          <div className="group">
            <Link href="https://www.linkedin.com/in/davizheng/" target="_blank">
              <span className="sr-only">Visit my LinkedIn profile!</span>
              <BsLinkedin
                size={50}
                title="My LinkedIn profile!"
                className="text-[#f78f2e] group-hover:text-[#0072b1] transition duration-160 dark:text-white"
              />
            </Link>
          </div>
          <div className="group">
            <Link
              href="https://www.youtube.com/@davitothestars"
              target="_blank"
            >
              <span className="sr-only">Check out my YouTube channel!</span>
              <BsYoutube
                size={50}
                title="My YouTube channel!"
                className="text-[#f78f2e] group-hover:text-[#CD201F] transition duration-160 dark:text-white"
              />
            </Link>
          </div>
          <div className="group">
            <Link href="mailto:daviz.contactme@gmail.com">
              <span className="sr-only">Send me an email!</span>
              <AiOutlineMail
                size={50}
                title="Send me an email!"
                className="text-[#f78f2e] group-hover:text-gray-600 transition duration-160 dark:text-white"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
