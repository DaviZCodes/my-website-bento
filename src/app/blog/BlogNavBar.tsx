import Link from "next/link";

export default function BlogNavBar() {
  return (
    <div>
      <div className="flex justify-between items-center bg-yellow-600 font-semibold px-6">
        <div className="text-white text-xl lg:text-2xl">
          <Link href="/">
            <p>Return Home</p>
          </Link>
        </div>
        <div className="text-white py-6 text-xl lg:text-2xl">
          Davi&apos;s amazing blog.
        </div>
      </div>
    </div>
  );
}
