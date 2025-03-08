import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSelector = () => {
  const { language, changeLanguage, languageNames } = useLanguage();

  return (
    <div className="p-4 bg-gray-100 rounded">
      <label className="mr-2 font-medium">Language:</label>
      <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="border rounded p-1"
      >
        {Object.keys(languageNames).map((code) => (
          <option key={code} value={code}>
            {languageNames[code]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
