import "./css/handwave.css";

export default function Header() {
  return (
    <div className="">
      <div className="border p-6">
        {/*<div className="w-full border bg-slate-50 rounded-2xl p-6 shadow-lg">*/}
        <div className="text-3xl font-roboto flex">
          <span role="img" aria-label="wave" className="animate-wave">
            👋
          </span>

          <div className="ml-1">I&apos;m Davi.</div>
        </div>

        <div className="text-gray-600 mt-1 text-lg font-light">
          Software Engineer @ Amazon || Computer Science && Math @ NYU ||
          Polyglot
        </div>

        <div className="text-lg">
          Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem
          ipsum.
        </div>
      </div>
    </div>
  );
}
