import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <div className="flex justify-between items-center absolute top-0 w-full pt-3 sm:w-auto sm:pl-2 sm:pt-2">
        <div>
          <Link href="/" className="text-white font-semibold text-lg bold">
            Davi
          </Link>
        </div>
        <div>
          <Link href="/blog" className="text-white font-semibold text-lg bold">
            Blog
          </Link>
        </div>
        <div>
          <Link href="/blog" className="text-white font-semibold text-lg bold">
            Fun
          </Link>
        </div>
      </div>
    </div>
  );
}
