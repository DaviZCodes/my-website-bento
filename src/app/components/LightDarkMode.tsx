"use client";

import { useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function LightDarkMode() {
  const [isLightMode, setIsLightMode] = useState(true);

  return (
    <div>
      <div>
        <MdOutlineLightMode />
      </div>
      <div>
        <MdOutlineDarkMode />
      </div>
    </div>
  );
}
