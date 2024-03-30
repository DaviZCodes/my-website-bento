"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [stickToTop, setStickToTop] = useState(false); // to keep NavBar stick after scroll

  useEffect(() => {
    // see if scrolled enough for NavBar to stick
    const handleScroll = () => {
      if (window.scrollY > 26) {
        setStickToTop(true);
      } else {
        setStickToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToWorkSection = () => {
    const workSection = document.getElementById("work-section");
    if (workSection) {
      // we need this because it does not fit to view
      const navbarHeight = stickToTop ? 64 : 108;
      const additionalOffset = 20; // this value for how much it moves
      const offsetTop = workSection.offsetTop - navbarHeight - additionalOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const goToProjectsSection = () => {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      // we need this because it does not fit to view
      const navbarHeight = stickToTop ? 64 : 108; // Adjust this value according to your actual navbar height
      const additionalOffset = 20; // this value for how much it moves
      const offsetTop =
        projectsSection.offsetTop - navbarHeight - additionalOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const goToSkillsSection = () => {
    const workSection = document.getElementById("skills-section");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`top-0 w-full py-2 xl:px-28 flex justify-between items-center text-xl
      ${
        stickToTop
          ? "fixed bg-blue-800 border px-3 py-2 z-50 transition-all duration-300"
          : "absolute w-full py-6 px-3 xl:px-12 flex justify-between items-center text-xl transition-all duration-200"
      }`}
    >
      <div>
        <Link href="/">
          <p className="text-white font-semibold text-2xl bold">Davi Zheng</p>
        </Link>
      </div>

      <div className="flex">
        <div className="">
          <p className="text-white cursor-pointer" onClick={goToWorkSection}>
            Work
          </p>
        </div>
        <div className="px-6">
          <p
            className="text-white cursor-pointer"
            onClick={goToProjectsSection}
          >
            Projects
          </p>
        </div>
        <div className="">
          <Link href="/blog">
            <p className="text-white">Blog</p>
          </Link>
        </div>
        {/*
        <div className="px-6">
          <p className="text-white cursor-pointer" onClick={goToSkillsSection}>
            Fun
          </p>
        </div>
            */}
      </div>
    </div>
  );
}
