export default function Polyglot() {
  return (
    <div
      className="flex border-2 border-yellow-50 transition duration-160 hover:border-[#fdaf67e3] rounded-xl px-6 py-2 bg-[#f5e2b6] shadow-[4px_4px_10px_2px_rgba(253,175,103,0.5)]
    dark:bg-[#112336] dark:text-[#e0ee60] dark:border-[#e0ee60]"
    >
      <div className="flex items-center gap-3">
        <div className="text-xl font-semibold">Languages I speak:</div>
        <button
          title="English"
          className="px-5 py-3 rounded-lg bg-[#fdaf67e3] cursor-pointer transition-all duration-160 hover:bg-white hover:text-[#0A3161] shadow-[2px_2px_5px_1px_rgba(253,175,103,0.5)]
          dark:bg-[#e0ee60] dark:text-[#112336] dark:hover:bg-white dark:hover:text-[#0A3161]"
        >
          us-en
        </button>
        <button
          title="Spanish"
          className="px-5 py-3 rounded-lg bg-[#fdaf67e3]  cursor-pointer transition-all duration-160 hover:bg-[#F1BF00] hover:text-[#AA151B] shadow-[2px_2px_5px_1px_rgba(253,175,103,0.5)]
          dark:bg-[#e0ee60] dark:text-[#112336] dark:hover:bg-[#F1BF00] dark:hover:text-[#AA151B]"
        >
          es-br
        </button>
        <button
          title="Mandarin"
          className="px-5 py-3 rounded-lg bg-[#fdaf67e3] cursor-pointer transition-all duration-160 hover:bg-[#EE1C25] hover:text-[#FFFF00] shadow-[2px_2px_5px_1px_rgba(253,175,103,0.5)]
          dark:bg-[#e0ee60] dark:text-[#112336] dark:hover:bg-[#EE1C25] dark:hover:text-[#FFFF00]"
        >
          zh-cn
        </button>
        <button
          title="Portuguese"
          className="px-5 py-3 rounded-lg bg-[#fdaf67e3] cursor-pointer transition-all duration-160 hover:bg-[#009739] hover:text-[#FEDD00] shadow-[2px_2px_5px_1px_rgba(253,175,103,0.5)]
          dark:bg-[#e0ee60] dark:text-[#112336] dark:hover:bg-[#009739] dark:hover:text-[#FEDD00]"
        >
          pt-br
        </button>
      </div>
    </div>
  );
}
