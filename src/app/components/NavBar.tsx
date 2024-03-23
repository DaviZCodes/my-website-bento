import Link from "next/link";

export default function NavBar() {
  return (
    <div className="absolute top-0 w-full py-6 px-12 flex justify-between items-center text-2xl">
      <div>
        <Link href="/">
          <p className="text-white font-semibold text-2xl bold">Davi Zheng</p>
        </Link>
      </div>

      <div className="flex">
        <div className="px-6">
          <Link href="/blog">
            <p className="text-white">Blog</p>
          </Link>
        </div>
        <div className="px-6">
          <Link href="/fun">
            <p className="text-white">Fun</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
