"use client";

import { useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function LightDarkMode() {
  const [isLightMode, setIsLightMode] = useState<boolean>(true);

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <button
      onClick={toggleMode}
      className="flex items-center gap-2 border-2 border-yellow-50 transition duration-160 hover:border-[#fdaf67e3] rounded-xl px-5 py-3 bg-[#f5e2b6] hover:bg-[#fdaf67e3] hover:text-white shadow-[4px_4px_10px_2px_rgba(253,175,103,0.5)]"
      aria-label="Toggle light/dark mode"
    >
      {isLightMode ? (
        <MdOutlineLightMode size={36} />
      ) : (
        <MdOutlineDarkMode size={36} />
      )}
    </button>
  );
}
