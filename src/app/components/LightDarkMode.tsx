"use client";

import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "./ThemeContext";

export default function LightDarkMode() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 border-2 border-yellow-50 transition duration-160 
      hover:border-[#fdaf67e3] rounded-xl px-5 py-3 bg-[#f5e2b6] hover:bg-[#fdaf67e3] hover:text-white shadow-[4px_4px_10px_2px_rgba(253,175,103,0.5)]
      dark:bg-[#112336] dark:text-[#e0ee60] dark:border-[#e0ee60] dark:hover:bg-[#e0ee60] dark:hover:text-[#112336]"
      aria-label="Toggle light/dark mode"
    >
      {theme === "light" ? (
        <MdOutlineLightMode size={36} />
      ) : (
        <MdOutlineDarkMode size={36} />
      )}
    </button>
  );
}
