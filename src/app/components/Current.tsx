"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import AmazonLogo from "./images/amazon_logo.png";

export default function Current() {
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
    <div className="flex flex-col border-2 border-yellow-50 transition duration-160 hover:border-[#fdaf67e3] rounded-xl shadow-sm p-6 bg-[#ffd79b] relative">
      <div className="relative z-10 flex justify-between">
        <div>
          <div className="font-bold text-2xl">Current</div>
          <div className="font-light">What I&apos;m doing now</div>
        </div>
        <div className="text-lg font-mono">{currTime}</div>
      </div>

      <div className="relative z-10 text-xl my-10">
        Software Engineering at Amazon
      </div>

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
