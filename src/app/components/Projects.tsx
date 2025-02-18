import { HiExternalLink } from "react-icons/hi";

export default function Projects() {
  return (
    <section>
      <div className="flex flex-col border-2 border-yellow-50 transition duration-160 hover:border-[#fdaf67e3] rounded-xl shadow-sm p-6 bg-[#f5e2b6]">
        <div className="flex justify-between">
          <div className="font-bold text-2xl">Projects</div>

          <button>
            <HiExternalLink size={26} className="" />
          </button>
        </div>

        <div className="flex justify-evenly text-xl">
          <div>Arter</div>
          <div>Lunar excavator</div>
          <div>GitHub Licenses Ranked</div>
        </div>
      </div>
    </section>
  );
}
