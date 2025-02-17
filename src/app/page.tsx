import React from "react";
import "./components/css/handwave.css";
import Header from "./components/Header";
import ContactMe from "./components/ContactMe";

const Home = () => {
  return (
    <div className="min-h-screen px-60 py-6 bg-[#f7e6bc] flex justify-center">
      <Header />

      <ContactMe />
    </div>
  );
};

export default Home;
