import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="bg-blue-800 pt-10 xl:pt-20 xl:pb-14">
      <div className="text-white text-center py-3">
        <h1 className="text-3xl xl:text-6xl font-bold pt-5 sm:pt-0 pb-3">
          Hello, I&apos;m Davi Zheng.
        </h1>
        <div className="text-xl">
          Full-Stack Developer, Computer Science Nerd @ NYU
        </div>
        <div className="text-xl">
          Optimist, Team Player, and Tech Enthusiast
        </div>
      </div>
      <NavBar />
    </header>
  );
}
