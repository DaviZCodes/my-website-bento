import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="bg-blue-800 py-16">
      <div className="text-white text-center py-6 p-10">
        <h1 className="text-6xl font-bold pt-5 sm:pt-0 pb-3">
          Hello, I&apos;m Davi Zheng.
        </h1>
        <div className="text-xl">Optimist, Team Player, and AI Enthusiast</div>
      </div>
      <NavBar />
    </header>
  );
}
