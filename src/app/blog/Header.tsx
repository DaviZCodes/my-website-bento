import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-yellow-600">
      <div className="text-white text-center py-8 p-2">
        <h1 className="mt-2 text-3xl font-bold">
          Welcome to my blog, where I can truly be free.
        </h1>
      </div>
      <div className="flex justify-center absolute top-0 w-full pt-3 sm:w-auto sm:pl-2 sm:pt-2">
        <Link href="/blog" className="text-white font-semibold text-lg bold">
          Home
        </Link>
      </div>
    </header>
  );
}
