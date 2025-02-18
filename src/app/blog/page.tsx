import Link from "next/link";
import BlogPosts from "./BlogPosts";

export default function Blog() {
  return (
    <div className="min-h-screen px-60 py-6 bg-[#f7e6bc] flex flex-col">
      <Link href="/" className="font-semibold text-xl text-center mb-3">
        Home
      </Link>
      <BlogPosts />
    </div>
  );
}
