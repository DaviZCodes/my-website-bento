import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="bg-blue-800 pt-10 xl:pt-16 xl:pb-16">
      <div className="text-white text-center py-3">
        <h1 className="text-3xl xl:text-6xl font-bold pt-5 sm:pt-0 pb-3">
          Hello, I&apos;m Davi Zheng.
        </h1>
        <div className="text-xl">computer science nerd</div>
      </div>
      <NavBar />
    </header>
  );
}
