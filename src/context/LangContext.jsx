import { createContext, useContext, useMemo, useState } from "react";
import tr from "../data/tr.js";
import en from "../data/en.js";

const LanguageContext = createContext();
export const useLang = () => useContext(LanguageContext);

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState("tr");
  const dict = useMemo(() => ({ tr, en }), []);
  const t = dict[lang];
  const toggleLang = () => setLang(l => (l === "tr" ? "en" : "tr"));

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}