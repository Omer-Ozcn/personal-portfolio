import { Github, Linkedin } from "lucide-react";
import { useLang } from "../context/LangContext";
import avatar from "../assets/hero.jpg";

export default function Hero() {
  const { t } = useLang();

  const socialLinks = [
    {
      icon: Linkedin,
      className: "w-[31px] h-[34px]",
      position: "left-1",
      href: "#",
    },
    {
      icon: Github,
      className: "w-[34px] h-9",
      position: "left-[55px]",
      href: "#",
    },
  ];

  return (
    <div className="w-full h-[738px] bg-[#f4f4f4] dark:bg-[#2A262B] relative overflow-visible">
      <div className="relative w-full max-w-[1107px] h-full mx-auto">
        {/* Sol üst içerik */}
        <div className="absolute w-[683px] h-[313px] top-20 left-0">
          <div className="absolute top-0 left-3 text-3xl text-black dark:text-white tracking-[3px] leading-normal font-normal font-inter">
            {t.hero.hi}
          </div>
          <div className="absolute w-[637px] top-[72px] left-0">
            <div className="w-[148px] h-[31px] bg-[#e92577] rounded absolute top-8 left-0" />
            <h1 className="absolute w-[622px] h-56 top-0 left-[15px] text-[42px] font-medium leading-[63px] text-[#0A0A14] dark:text-white tracking-[0.01em] font-inter">
              {t.hero.iAm}
              <span className="ml-2">{t.hero.name}</span>
              <br />
              {t.hero.title}
              <span className="block opacity-80">{t.hero.desc}</span>
            </h1>
          </div>
        </div>

        {/* Sağ görsel */}
        <div className="absolute w-[361px] h-[361px] top-20 left-[746px]">
          <div className="w-[344px] h-[343px] bg-[#e92577] rounded-[32px] absolute top-0 left-0" />
          <img
            src={avatar}
            alt="Avatar"
            className="absolute w-[341px] h-[341px] top-5 left-5 object-cover rounded-[28px]"
          />
        </div>

        {/* Sosyal ikonlar + alt yazı */}
        <div className="absolute w-[542px] h-[123px] bottom-[160px] left-3">
          {/* Sosyal ikonlar */}
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute ${social.className} top-0 ${social.position} p-0 h-auto hover:bg-transparent`}
                aria-label={`Go to ${social.href}`}
              >
                <IconComponent className="w-full h-full text-black dark:text-white" />
              </a>
            );
          })}

          {/* Alt açıklama */}
          <div className="absolute top-[60px] left-0 font-normal text-lg leading-8 font-inter">
            <span className="text-black dark:text-white tracking-[0.16px]">{t.hero.bottomText1} </span>
            <span className="text-[#af0c48] tracking-[0.16px]">{t.hero.bottomText2}</span>
            <span className="text-black dark:text-white tracking-[0.16px]"> {t.hero.bottomText3} </span>
            <span className="text-[#af0c48] tracking-[0.16px]">{t.hero.bottomText4}</span>
            <span className="text-black dark:text-white tracking-[0.16px]">
              {" "}
              {t.hero.bottomText5}
              <br />
              {t.hero.bottomText6}
            </span>
            <span className="text-[#af0c48] tracking-[0.32px] underline">
              {t.hero.bottomText7}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}