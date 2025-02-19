import Link from "next/link";
import BlogPosts from "./BlogPosts";

export default function Blog() {
  return (
    <div
      className="min-h-screen px-60 py-6 bg-[#f7e6bc] flex flex-col
    dark:bg-[#112336] dark:text-[#e0ee60] dark:border-[#e0ee60]"
    >
      <div className="w-full flex justify-start sticky top-0 z-10">
        <Link
          href={"/"}
          className="font-semibold text-xl px-3 py-2 mt-6 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-160
          dark:border-[#e0ee60]"
        >
          Home
        </Link>
      </div>
      <BlogPosts />
    </div>
  );
}
