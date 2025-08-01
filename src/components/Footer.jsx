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
    e.preventDefault(); // sayfa yenilenmesin
    setShowContact(true);
  };

  return (
    <>
      <footer className="w-full pt-30 bg-transparent dark:bg-[#484148] flex justify-center pb-[100px]">
        <div className="relative w-[760px] h-[137px]">
          <div className="absolute w-[542px] h-[126px] top-[7px] left-0">
            <div className="absolute w-[275px] h-[18px] top-[42px] left-[145px] bg-[#82bbff] rounded" />
            <h2 className="absolute w-[542px] top-0 left-0 font-medium text-[#0a0a14] dark:text-[#fafafa] text-[42px] text-right tracking-[0.42px] leading-[63px]">
              Let's work together on your next product.
            </h2>
          </div>

          <nav className="flex flex-col items-start justify-center absolute top-5 left-[600px]">
            {socialLinks.map((link, index) => {
              if (link.name === "Email") {
                return (
                  <a
                    key={index}
                    href="#"
                    className={`relative w-fit h-auto mt-[-1px] font-medium ${link.color} text-2xl leading-9 whitespace-nowrap hover:text-[#82bbff] transition-colors duration-300`}
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
                  className={`relative w-fit h-auto mt-[-1px] font-medium ${link.color} text-2xl leading-9 whitespace-nowrap hover:text-[#82bbff] transition-colors duration-300`}
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
