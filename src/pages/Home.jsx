import React from "react";
import { useLanguage } from "../context/LanguageContext";
import LanguageSelector from "../components/LanguageSelector";

const Home = () => {
  const { translations } = useLanguage();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{translations?.title || "Loading..."}</h1>
        <p className="text-lg text-gray-600">{translations?.subtitle || "Loading..."}</p>
        <div className="mt-4">
          <LanguageSelector />
        </div>
      </header>
    </div>
  );
};

export default Home;
