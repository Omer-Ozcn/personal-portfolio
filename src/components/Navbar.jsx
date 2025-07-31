import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { lang, t, toggleLang } = useLang();
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <nav
      className={`w-full pt-10 pb-4 relative transition-colors duration-300 relative z-20 ${
        isDark ? "bg-[#2A262B]" : "bg-[#f4f4f4]"
      }`}
    >
      <div className="container mx-auto px-10 flex items-center justify-center relative">
        {/* Menü */}
        <ul
          className={`flex gap-10 text-base font-normal ${
            isDark ? "text-[#FAFAFA]" : "text-[#222]"
          } -translate-x-[210px]`}
        >
          <li>
            <a href="#hero" className="hover:text-[#E92577] transition-colors ">
              {t.nav.home}
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-[#E92577] transition-colors ">
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

        {/* Sağ bölüm */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 -translate-x-[180px] flex items-center gap-4">
          {/* Tema butonu */}
          <div className="flex items-center gap-4">
            <div
              onClick={toggleTheme}
              className={`w-[55px] h-[24px] rounded-full relative cursor-pointer ${
                isDark ? "bg-black" : "bg-[#E92577]"
              } transition-all duration-300`}
            >
              <div
                className="w-[15px] h-[16px] bg-[#FFE86E] rounded-full absolute top-[4px] transition-all duration-300"
                style={{ left: isDark ? "5px" : "35px" }}
              />
            </div>
            <span
              className={`text-[15px] font-bold tracking-widest ${
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
          </div>

          {/* Dikey çizgi */}
          <span className="text-[#777777] font-bold text-[15px] tracking-widest">
            |
          </span>

          {/* Dil geçiş butonu */}
          <button
            onClick={toggleLang}
            className="text-[15px] font-bold tracking-widest flex gap-1"
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
