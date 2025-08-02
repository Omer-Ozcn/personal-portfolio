import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { lang, t, toggleLang } = useLang();
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <nav
      className={`w-full pt-6 pb-4 z-20 transition-colors duration-300 ${
        isDark ? "bg-[#2A262B]" : "bg-[#f4f4f4]"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Menü Linkleri */}
        <ul
          className={`flex flex-wrap justify-center gap-5 md:gap-10 text-sm md:text-base font-normal ${
            isDark ? "text-[#FAFAFA]" : "text-[#222]"
          }`}
        >
          <li>
            <a href="#hero" className="hover:text-[#E92577] transition-colors">
              {t.nav.home}
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-[#E92577] transition-colors">
              {t.nav.skills}
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#E92577] transition-colors">
              {t.nav.projects}
            </a>
          </li>
          <li>
            <a href="#profile" className="hover:text-[#E92577] transition-colors">
              {t.nav.profile}
            </a>
          </li>
        </ul>

        {/* Tema ve Dil Değiştirici */}
        <div className="flex justify-center md:justify-end items-center gap-4">
          {/* Tema Butonu */}
          <div
            onClick={toggleTheme}
            className={`w-[50px] h-[24px] rounded-full relative cursor-pointer ${
              isDark ? "bg-black" : "bg-[#E92577]"
            } transition-all duration-300`}
          >
            <div
              className="w-[15px] h-[16px] bg-[#FFE86E] rounded-full absolute top-[4px] transition-all duration-300"
              style={{ left: isDark ? "5px" : "30px" }}
            />
          </div>
          <span
            className={`text-sm font-bold tracking-wide ${
              isDark ? "text-[#FAFAFA]" : "text-[#777777]"
            }`}
          >
            {lang === "tr"
              ? isDark
                ? "KOYU MOD"
                : "AÇIK MOD"
              : isDark
              ? "LIGHT MODE"
              : "DARK MODE"}
          </span>

          <span className="text-[#777777] font-bold text-sm">|</span>

          {/* Dil Değiştirici */}
          <button
            onClick={toggleLang}
            className="text-sm font-bold tracking-wide flex gap-1"
          >
            {lang === "tr" ? (
              <>
                <span className="text-[#777777]">Switch to</span>
                <span className="text-[#E92577]">ENGLISH</span>
              </>
            ) : (
              <>
                <span className="text-[#E92577]">TÜRKÇE</span>
                <span className="text-[#777777]">’YE GEÇ</span>
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
