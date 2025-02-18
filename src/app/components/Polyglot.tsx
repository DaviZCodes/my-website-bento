export default function Polyglot() {
  return (
    <div className="flex border-2 border-yellow-50 transition duration-160 hover:border-[#fdaf67e3] rounded-xl px-6 py-2 bg-[#f5e2b6] shadow-[4px_4px_10px_2px_rgba(253,175,103,0.5)]">
      <div className="flex items-center gap-3">
        <div className="text-xl font-semibold">Languages I speak:</div>
        <button
          title="English"
          className="px-5 py-3 rounded-lg bg-gray-200 cursor-pointer transition-all duration-160 bg-[#fdaf67e3] hover:bg-white hover:text-[#0A3161] hover:scale-105 shadow-[2px_2px_5px_1px_rgba(253,175,103,0.5)]"
        >
          us-en
        </button>
        <button
          title="Spanish"
          className="px-5 py-3 rounded-lg bg-gray-200  cursor-pointer transition-all duration-160 bg-[#fdaf67e3] hover:bg-[#F1BF00] hover:text-[#AA151B] hover:scale-105 shadow-[2px_2px_5px_1px_rgba(253,175,103,0.5)]"
        >
          es-br
        </button>
        <button
          title="Mandarin"
          className="px-5 py-3 rounded-lg bg-gray-200 cursor-pointer transition-all duration-160 bg-[#fdaf67e3] hover:bg-[#EE1C25] hover:text-[#FFFF00] hover:scale-105 shadow-[2px_2px_5px_1px_rgba(253,175,103,0.5)]"
        >
          zh-cn
        </button>
        <button
          title="Portuguese"
          className="px-5 py-3 rounded-lg bg-gray-200 cursor-pointer transition-all duration-160 bg-[#fdaf67e3] hover:bg-[#009739] hover:text-[#FEDD00] hover:scale-105 shadow-[2px_2px_5px_1px_rgba(253,175,103,0.5)]   "
        >
          pt-br
        </button>
      </div>
    </div>
  );
}
