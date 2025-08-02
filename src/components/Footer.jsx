import React, { useState } from "react";
import EmailTo from "./EmailTo";

const socialLinks = [
  {
    name: "Github",
    color: "text-[#1769ff]",
    href: "https://github.com/Omer-Ozcn",
  },
  {
    name: "Linkedin",
    color: "text-[#0077b5]",
    href: "https://www.linkedin.com/in/omerzcn1/",
  },
  {
    name: "Email",
    color: "text-[#af0c48]",
    href: "#",
  },
];

const Footer = () => {
  const [showContact, setShowContact] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    setShowContact(true);
  };

  return (
    <>
      <footer className="w-full pt-16 bg-transparent dark:bg-[#484148] flex justify-center pb-[100px] px-4">
        <div className="relative max-w-[760px] w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-0">
          {/* Sol Bölüm */}
          <div className="relative flex-1 w-full md:w-auto">
            <div className="relative max-w-[542px] mx-auto md:mx-0">
              <div className="absolute w-[200px] h-[18px] top-[27px] md:top-[42px] left-[48%] md:left-[145px] bg-[#82bbff] rounded -translate-x-1/2 md:translate-x-0 z-0" />
              <h2 className="relative z-10 font-medium text-[32px] md:text-[42px] text-center md:text-right text-[#0a0a14] dark:text-[#fafafa] tracking-[0.42px] leading-[40px] md:leading-[63px]">
                Let's work together on your next product.
              </h2>
            </div>
          </div>

          {/* Sağ Sosyal Linkler */}
          <nav className="flex flex-row md:flex-col items-center md:items-start justify-center gap-6 md:gap-4 text-2xl font-medium whitespace-nowrap">
            {socialLinks.map((link, index) => {
              if (link.name === "Email") {
                return (
                  <a
                    key={index}
                    href="#"
                    className={`${link.color} hover:text-[#82bbff] transition-colors duration-300`}
                    onClick={handleEmailClick}
                  >
                    {link.name}
                  </a>
                );
              }
              return (
                <a
                  key={index}
                  href={link.href}
                  className={`${link.color} hover:text-[#82bbff] transition-colors duration-300`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        </div>
      </footer>

      {showContact && <EmailTo onClose={() => setShowContact(false)} />}
    </>
  );
};

export default Footer;
