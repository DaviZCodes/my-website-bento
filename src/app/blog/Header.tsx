import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-yellow-600">
      <div className="text-white text-center py-8 p-2">
        <h1 className="text-3xl font-bold">
          Welcome to my blog, where I can truly be free.
        </h1>
      </div>
      <div className="absolute top-0 pl-2 pt-2">
        <Link href="/" className="text-white font-semibold text-lg bold">
          Home
        </Link>
      </div>
    </header>
  );
}
