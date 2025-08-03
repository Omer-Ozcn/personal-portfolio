import { Github, Linkedin } from "lucide-react";
import { useLang } from "../context/LangContext";
import avatar from "../assets/hero.jpg";

export default function Hero() {
  const { t } = useLang();

  const socialLinks = [
    {
      icon: Linkedin,
      className: "w-12 h-12 md:w-[50px] md:h-[50px]",
      position: "left-1 md:left-0",
      href: "https://linkedin.com/in/yourprofile",
    },
    {
      icon: Github,
      className: "w-12 h-12 md:w-[50px] md:h-[50px]",
      position: "left-[55px] md:left-[55px]",
      href: "https://github.com/yourprofile",
    },
  ];

  return (
    <div className="w-full min-h-[700px] bg-[#f4f4f4] dark:bg-[#2A262B] relative overflow-visible px-4 md:px-0">
      <div className="max-w-[1107px] mx-auto flex flex-col md:flex-row items-center md:items-start h-full relative py-20 md:py-0">
        
        <div className="relative md:w-[60%] w-full mb-12 md:mb-0 md:pt-8">
          <div className="text-3xl md:text-4xl text-black dark:text-white tracking-[3px] font-inter mb-7 md:mb-16 md:pl-[15px] md:translate-y-[63px]">
            {t.hero.hi}
          </div>
          <div className="relative w-full max-w-[637px]">
            <div className="absolute top-8 left-0 w-[148px] h-[31px] bg-[#e92577] rounded hidden md:block z-0" />
            <h1 className="relative z-10 text-[32px] md:text-[42px] font-medium leading-snug md:leading-[63px] text-[#0A0A14] dark:text-white tracking-[0.01em] font-inter pl-0 md:pl-[15px]">
              {t.hero.iAm}
              <span className="ml-2">{t.hero.name}</span>
              <br />
              {t.hero.title}
              <span className="block opacity-80 mt-2">{t.hero.desc}</span>
            </h1>
          </div>
        </div>

        <div className="relative md:w-[40%] w-full flex justify-center md:justify-end md:pt-16">
          <div className="relative w-[240px] h-[240px] md:w-[344px] md:h-[343px] bg-[#e92577] rounded-[32px]">
            <img
              src={avatar}
              alt="Avatar"
              className="absolute top-5 left-5 w-[230px] h-[230px] md:w-[341px] md:h-[341px] object-cover rounded-[28px]"
            />
          </div>
        </div>

        {/* Social links and bottom text */}
        <div className="w-full md:absolute md:bottom-[-170px] md:left-3 flex flex-col md:w-[542px] mt-20 md:mt-0">
          <nav className="flex justify-center md:justify-start gap-6 mb-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded hover:bg-transparent text-black dark:text-white ${social.className}`}
                  aria-label={`Go to ${social.href}`}
                >
                  <IconComponent className="w-full h-full" />
                </a>
              );
            })}
          </nav>

          <div className="text-center md:text-left font-normal text-lg leading-7 font-inter text-black dark:text-white space-y-1">
            <span className="text-black dark:text-white tracking-[0.16px]">{t.hero.bottomText1} </span>
            <span className="text-[#af0c48] tracking-[0.16px]">{t.hero.bottomText2}</span>
            <span className="text-black dark:text-white tracking-[0.16px]"> {t.hero.bottomText3} </span>
            <span className="text-[#af0c48] tracking-[0.16px]">{t.hero.bottomText4}</span>
            <span className="text-black dark:text-white tracking-[0.16px]">
              {t.hero.bottomText5}
              <br />
              {t.hero.bottomText6}
            </span>
            <span className="text-[#af0c48] tracking-[0.32px] underline cursor-pointer">
              {t.hero.bottomText7}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
