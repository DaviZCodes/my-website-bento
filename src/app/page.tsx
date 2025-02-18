import Header from "./components/Header";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";

const Home = () => {
  return (
    <div className="min-h-screen px-60 py-6 bg-[#f7e6bc] flex justify-center gap-6">
      <div className="flex-grow max-w-5xl flex flex-col gap-y-6">
        <Header />

        <Projects />
      </div>

      <div className="w-[30%] max-w-sm">
        <ContactMe />
      </div>
    </div>
  );
};

export default Home;
