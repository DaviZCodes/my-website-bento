"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import AmazonLogo from "./images/amazon_logo.png";
import { useTranslation } from "react-i18next";
import i18n from "./i18n/i18n";

export default function Current() {
  const { t } = useTranslation();

  const getTextSize = () => {
    const currentLanguage = i18n.language;
    console.log(currentLanguage);
    return currentLanguage === "es" ||
      currentLanguage === "es-br" ||
      currentLanguage === "pt" ||
      currentLanguage === "pt-br"
      ? "text-sm"
      : "text-md";
  };

  const [currTime, setCurrTime] = useState<string | null>(null);

  // Function to fetch current time from API
  const fetchTime = async () => {
    try {
      const response = await axios.get(
        "http://worldtimeapi.org/api/timezone/America/New_York"
      );
      const dateTime = new Date(response.data.datetime);
      const formattedTime = `${
        dateTime.getMonth() + 1
      }/${dateTime.getDate()}/${dateTime.getFullYear()} ${dateTime.getHours()}:${dateTime
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
      setCurrTime(formattedTime);
    } catch (error) {
      console.error("Error fetching time:", error);
    }
  };

  useEffect(() => {
    // Fetch time immediately when component mounts
    fetchTime();

    // Set up interval to update the time every minute (60000ms)
    const interval = setInterval(() => {
      fetchTime();
    }, 60000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex flex-col border-2 border-yellow-50 transition duration-160 hover:border-[#fdaf67e3] rounded-xl shadow-sm p-3 bg-[#ffd79b] relative overflow-hidden
    dark:bg-[#112336] dark:text-[#e0ee60] dark:border-[#e0ee60] dark:hover:bg-[#e0ee60] dark:hover:text-[#112336]
    xl:p-5 2xl:p-6"
    >
      <div className="relative z-10 flex justify-between">
        <div>
          <div
            className="font-bold text-xl
          xl:text-2xl"
          >
            {t("Current")}
          </div>
          <div
            className={`font-light ${getTextSize()} text-sm 
            2xl:text-lg`}
          >
            {t("CurrentSubtitle")}
          </div>
        </div>
        <div
          className="font-mono text-sm
        xl:text-lg"
        >
          {currTime}
        </div>
      </div>

      <div
        className="relative z-10 text-xl my-3
      xl:my-6 2xl:my-10"
      >
        {t("CurrentRole")}
      </div>
      <div className="font-light text-xl">{t("NewYork")}</div>

      <div
        className="absolute bottom-0 right-0 opacity-30 z-0"
        style={{
          width: "260px",
          height: "260px",
          marginBottom: "-100px",
          marginRight: "-50px",
        }}
      >
        <Image src={AmazonLogo} alt="Amazon Logo" layout="intrinsic" />
      </div>
    </div>
  );
}
