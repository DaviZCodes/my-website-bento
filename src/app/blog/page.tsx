import Link from "next/link";
import BlogPosts from "./BlogPosts";

export default function Blog() {
  return (
    <section
      className="flex flex-col min-h-screen bg-[#f7e6bc] items-center
      dark:bg-[#112336] dark:text-[#e0ee60] dark:border-[#e0ee60] p-3
      sm:px-6 md:px-12 lg:px-16 lg:py-2 xl:px-52 xl:py-3 2xl:px-60 2xl:py-6"
    >
      <div className="w-full flex justify-start sticky top-0 z-10">
        <Link
          href={"/"}
          className="font-semibold text-xl px-3 py-2 my-2 border-2 transition-all duration-160 rounded-lg text-white bg-black
          dark:border-[#e0ee60]
          lg:border-black lg:hover:bg-black lg:hover:text-white
          xl:mt-6"
        >
          Home
        </Link>
      </div>
      <BlogPosts />
    </section>
  );
}
