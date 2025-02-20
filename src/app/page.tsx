import Header from "./components/Header";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import Polyglot from "./components/Polyglot";
import Technologies from "./components/Technologies/Technologies";
import LightDarkMode from "./components/LightDarkMode";
import Current from "./components/Current";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div
      className="xl:h-screen bg-[#f7e6bc] flex justify-center overflow-hidden
    dark:bg-[#0d1c2b] p-2
    lg:px-12 xl:px-32 2xl:px-60 lg:py-3 xl:py-6 2xl:py-12 lg:gap-2 2xl:gap-3"
    >
      {/* For screens xl and larger */}
      <div className="hidden xl:flex xl:gap-2 2xl:gap-3">
        <div
          className="flex-grow max-w-5xl flex flex-col gap-2 
      2xl:gap-y-3"
        >
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

          <Projects />
        </div>

        <div
          className="flex flex-col gap-y-2 max-w-sm
      2xl:gap-y-3 xl:w-[70%] 2xl:w-[30%]"
        >
          <ContactMe />
          <Current />
          <Experience />
          <Blog />
          <Footer />
        </div>
      </div>

      {/* For screens lg and below */}
      <div className="lg:flex xl:hidden w-full flex-col py-3 gap-2 overflow-y-auto">
        <Header />
        <div className="flex flex-col justify-between w-full gap-2">
          <div className="flex gap-2">
            <div className="flex-grow mt-2">
              <Polyglot />
            </div>
          </div>

          <div className="flex flex-grow gap-2">
            <LightDarkMode />
            <div className="flex-grow">
              <Technologies />
            </div>
          </div>
        </div>

        <div className="my-2">
          <Projects />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
          <div className="md:col-span-2 lg:col-span-1">
            <ContactMe />
          </div>
          <div className="md:col-span-1">
            <Current />
          </div>
          <div className="md:col-span-1">
            <Experience />
          </div>
          <div className="md:col-span-1">
            <Blog />
          </div>
        </div>
        <div className="mt-2">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
