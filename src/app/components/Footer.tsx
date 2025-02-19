export default function Footer() {
  return (
    <footer
      className="bg-[#fdaf67e3] p-6 rounded-xl text-lg
    dark:bg-[#e0ee60] dark:text-[#112336]"
    >
      <div>
        &copy; {new Date().getFullYear()} Designed, developed, and translated
        with love by Davi. Reach me.
      </div>
    </footer>
  );
}
