import Header from "./components/Header";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import Polyglot from "./components/Polyglot";
import Technologies from "./components/Technologies";
import LightDarkMode from "./components/LightDarkMode";
import Current from "./components/Current";

const Home = () => {
  return (
    <div className="min-h-screen px-60 py-6 bg-[#f7e6bc] flex justify-center gap-3">
      <div className="flex-grow max-w-5xl flex flex-col gap-y-3">
        <Header />

        <div className="flex justify-between w-full gap-2">
          <div className="flex gap-2">
            <Polyglot />
            <LightDarkMode />
          </div>

          <div className="flex-grow">
            <Technologies />
          </div>
        </div>

        <div>
          <Projects />
        </div>
      </div>

      <div className="flex flex-col gap-y-3 w-[30%] max-w-sm">
        <ContactMe />
        <Current />
      </div>
    </div>
  );
};

export default Home;
