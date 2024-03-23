import Link from "next/link";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="bg-blue-800">
      <div className="text-white text-center py-6 p-2">
        <h1 className="text-3xl font-bold pt-5 sm:pt-0 pb-3">
          Hello, I'm Davi Zheng
        </h1>
        <div className="text-xl">Full-Stack Engineer</div>
        <div className="text-xl">Optimist, Team Player, and AI Enthusiast</div>
        <div className="text-xl">Computer Science Student @ NYU</div>
      </div>
      <NavBar />
    </header>
  );
}
