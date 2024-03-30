"use client";

import NavBar from "./NavBar";
import "./css/handwave.css";

export default function Header() {
  return (
    <header className="bg-blue-800 pt-10 xl:pt-10 xl:pb-10">
      <div className="text-white text-center py-3">
        <h1 className="text-2xl xl:text-4xl font-bold pt-5 sm:pt-0 pb-3">
          <span role="img" aria-label="wave" className="animate-wave">
            👋
          </span>{" "}
          I&apos;m Davi.
        </h1>
        <div className="text-xl">
          Full-Stack Engineer && Computer Science Nerd @ NYU
        </div>
        <div className="text-xl">
          Optimist || Team Player || Tech Enthusiast
        </div>
      </div>
      <NavBar />
    </header>
  );
}
