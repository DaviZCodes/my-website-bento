import Link from "next/link";
import BlogPosts from "./BlogPosts";

export default function Blog() {
  return (
    <div className="min-h-screen px-60 py-6 bg-[#f7e6bc] flex flex-col">
      <Link href="/" className="text-center">
        Home
      </Link>
      <BlogPosts />
    </div>
  );
}
