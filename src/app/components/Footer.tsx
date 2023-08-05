import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-4 text-white text-center">
      <p>&copy; {new Date().getFullYear()} Davi Zheng. Reach me.</p>
    </footer>
  );
}
