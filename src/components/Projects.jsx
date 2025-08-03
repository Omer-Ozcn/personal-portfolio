import React from "react";
import { useLang } from "../context/LangContext";
import ecommerce from "../assets/projects-image/e-commerce.jpg";
import yemekler from "../assets/projects-image/yemekler.jpg";
import laptopImg from "../assets/projects-image/laptop.jpg";
import en from "../data/en.js";
import tr from "../data/tr.js"; 

const projectsData = [
  {
    id: 1,
    title: {
      tr: "E-Ticaret Sitesi",
      en: "E-Commerce Website",
    },
    description: {
      tr:
        "Modern web teknolojileri kullanılarak geliştirilmiş, zengin özelliklere sahip ve duyarlı bir e-ticaret platformu. Kullanıcılar, ürün kategorilerini keşfetmenin yanı sıra ürünlerin ayrıntılarına göz atabilir, sepetlerini düzenleyebilir ve ödeme işlemlerini kolayca gerçekleştirebilir. Proje, temiz bileşen yapısı, mobil uyumlu tasarım ve kesintisiz kullanıcı deneyimi üzerine odaklanmaktadır.",
      en:
        "An e-commerce platform developed using modern web technologies, featuring rich functionalities and a responsive design. Users can explore product categories, view detailed product information, manage their shopping cart, and easily complete payment transactions. The project focuses on clean component structure, mobile-friendly design, and seamless user experience.",
    },
    githubLink: "https://github.com/Omer-Ozcn/e-commerce", 
    technologies: ["react", "redux", "axios", "tailwind css", "react router"],
    bgLight: "bg-[#d4e6ff]",
    bgDark: "dark:bg-[#2D3235]",
    previewImage: ecommerce,
  },
  {
    id: 2,
    title: {
      tr: "Teknolojik Yemekler",
      en: "Tech Foods",
    },
    description: {
      tr:
        "Bu proje, kullanıcıların pizza ürünlerine göz atabileceği, detaylı bilgi alabileceği, ürünleri sepete ekleyip sipariş verebileceği bir e-ticaret uygulamasıdır. Uygulama, mobil öncelikli ve tamamen duyarlı bir tasarımla geliştirilmiş olup, kullanıcıların farklı cihazlardan rahatça erişebileceği şekilde optimize edilmiştir. Proje, basit ve anlaşılır bir arayüzle birlikte modern web teknolojilerini kullanarak hızlı ve güvenli bir alışveriş deneyimi sunmayı hedeflemektedir.",
      en:
        "This project is an e-commerce application where users can browse pizza products, get detailed information, add items to their cart, and place orders. The app is developed with a mobile-first, fully responsive design, optimized for easy access across different devices. The project aims to offer a fast and secure shopping experience using modern web technologies, with a simple and intuitive interface.",
    },
    githubLink: "https://github.com/Omer-Ozcn/fsweb-s8-challenge-pizza", 
    technologies: ["react", "axios", "router", "reqres.in api"],
    bgLight: "bg-[#d8f0e9]",
    bgDark: "dark:bg-[#495351]",
    previewImage: yemekler,
  },
];

export default function Projects() {
  const { lang } = useLang(); 
  const t = lang === "en" ? en : tr;  // 'lang' değerini kontrol ettiğinizden emin olun

  return (
    <div className="w-full dark:bg-[#484148]">
      <section className="max-w-[1064px] mx-auto pt-10 px-4 pb-0">
        <h2 className="text-center text-xl font-semibold mb-10 dark:text-white">
          {t.projectsTitle} 
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 dark:bg-[#484148] rounded-xl p-4 gap-20">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`${project.bgLight} ${project.bgDark} rounded-xl p-10 flex flex-col justify-between`}
              style={{ minHeight: "500px" }}
            >
              <div>
                <h3 className="font-serif font-bold text-lg mb-4 text-black dark:text-white">
                  {project.title[lang]} 
                </h3>

                <p className="text-sm mb-6 max-w-[370px] text-black dark:text-white">
                  {project.description[lang]}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 max-w-[370px]">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-white dark:bg-[#fafafa] px-3 py-1 rounded-full text-xs cursor-default select-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between mb-10 max-w-[370px] text-sm font-semibold cursor-pointer text-black dark:text-white">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    View on Github
                  </a>
                  <a href="#" className="hover:underline flex items-center gap-1">
                    Go to app <span>→</span>
                  </a>
                </div>
              </div>

              <div
                className="relative w-full max-w-[458px] mx-auto rounded-xl overflow-visible -mb-10"
                style={{ aspectRatio: "500 / 287" }}
              >
                <img
                  src={laptopImg}
                  alt="Laptop frame"
                  className="absolute top-8 left-0 w-full h-full object-cover rounded-xl"
                />
                <img
                  src={project.previewImage}
                  alt={`${project.title[lang]} preview`} 
                  className="project-image absolute top-[40px] sm:top-[42px] left-[14.5%] w-[71%] h-[78%] object-cover pointer-events-none select-none"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
