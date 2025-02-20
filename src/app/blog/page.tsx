import Link from "next/link";
import BlogPosts from "./BlogPosts";

export default function Blog() {
  return (
    <div
      className="min-h-screen px-3 py-3 bg-[#f7e6bc] flex flex-col
    dark:bg-[#112336] dark:text-[#e0ee60] dark:border-[#e0ee60]
    2xl:px-60 2xl:py-6"
    >
      <div className="w-full flex justify-start sticky top-0 z-10">
        <Link
          href={"/"}
          className="font-semibold text-xl px-3 py-2 mt-6 border-2 transition-all duration-160 rounded-lg text-white bg-black
          dark:border-[#e0ee60]
          lg:border-black lg:hover:bg-black lg:hover:text-white"
        >
          Home
        </Link>
      </div>
      <BlogPosts />
    </div>
  );
}
