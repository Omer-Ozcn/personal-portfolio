import React from "react";
import { useLang } from "../context/LangContext";
import { motion } from "framer-motion";

// Resimler
import ecommerce from "../assets/projects-image/e-commerce.jpg";
import yemekler from "../assets/projects-image/yemekler.jpg";
import laptopImg from "../assets/projects-image/laptop.jpg";
import twitterImg from "../assets/projects-image/twitter.jpg"; 

import en from "../data/en.js";
import tr from "../data/tr.js";

const projectsData = [
  {
    id: 3, 
    title: {
      tr: "Twitter (X) Klonu",
      en: "Twitter (X) Clone",
    },
    description: {
      tr: "Java Spring Boot ve React ile geliştirilmiş full-stack sosyal medya uygulaması. Gelişmiş veritabanı ilişkileri (Retweet, Follow), güvenlik (Spring Security) ve responsive arayüz içerir.",
      en: "A full-stack social media app built with Java Spring Boot & React. Features complex DB relations (Retweet, Follow), security, and responsive UI.",
    },
    githubLink: "https://github.com/Omer-Ozcn/twitter-clone", 
    // appLink BURADA YOK, bu yüzden buton otomatik olarak gizlenecek.
    technologies: ["Java", "Spring Boot", "PostgreSQL", "React", "Tailwind"],
    bgGradient: "from-[#00BA7C] to-[#0F1419]", 
    previewImage: twitterImg,
  },
  {
    id: 1,
    title: { tr: "E-Ticaret Sitesi", en: "E-Commerce Website" },
    description: {
      tr: "Modern web teknolojileriyle geliştirilmiş, sepet ve ödeme yönetimi içeren kapsamlı e-ticaret platformu.",
      en: "Comprehensive e-commerce platform featuring cart and payment management built with modern web tech.",
    },
    githubLink: "https://github.com/Omer-Ozcn/e-commerce",
    appLink: "https://ecommerce-omer.vercel.app/",
    technologies: ["React", "Redux", "Axios", "Tailwind CSS"],
    bgGradient: "from-[#2980B9] to-[#6DD5FA]", 
    previewImage: ecommerce,
  },
  {
    id: 2,
    title: { tr: "Teknolojik Yemekler", en: "Tech Foods" },
    description: {
      tr: "Kullanıcıların pizza siparişi verebileceği, dinamik form yönetimi içeren sipariş uygulaması.",
      en: "Pizza ordering application featuring dynamic form management for user customization.",
    },
    githubLink: "https://github.com/Omer-Ozcn/fsweb-s8-challenge-pizza",
    appLink: "https://pizzaorder-omer.vercel.app/",
    technologies: ["React", "Cypress", "Formik"],
    bgGradient: "from-[#D4145A] to-[#FBB03B]",
    previewImage: yemekler,
  },
];

export default function Projects() {
  const { lang } = useLang();
  const t = lang === "en" ? en : tr;

  return (
    <div id="projects" className="w-full py-24 bg-[#F3F4F6] dark:bg-[#1F2937] overflow-hidden transition-colors duration-300">
      <section className="max-w-[1100px] mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl md:text-5xl font-bold mb-20 text-gray-800 dark:text-white tracking-tight"
        >
          {t.projectsTitle}
        </motion.h2>

        <div className="grid grid-cols-1 gap-24">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`group relative w-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${project.bgGradient}`}
            >
              <div className="flex flex-col lg:flex-row h-full min-h-[500px]">
                
                {/* Sol Taraf: Bilgiler */}
                <div className="lg:w-1/2 p-10 md:p-14 flex flex-col justify-center text-white relative z-10 order-2 lg:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
                    {project.title[lang]}
                  </h3>
                  
                  <p className="text-white/90 text-lg mb-8 leading-relaxed font-medium">
                    {project.description[lang]}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-bold shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.065 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" fill="currentColor"/></svg>
                      Github
                    </a>
                    
                    {/* DEĞİŞİKLİK BURADA YAPILDI:
                       project.appLink varsa butonu göster, yoksa gösterme.
                    */}
                    {project.appLink && (
                      <a 
                        href={project.appLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors flex items-center gap-2"
                      >
                        Live Demo →
                      </a>
                    )}

                  </div>
                </div>

                {/* Sağ Taraf: Laptop Görseli */}
                <div className="lg:w-1/2 relative h-[400px] lg:h-auto flex items-center justify-center lg:justify-end p-8 lg:p-0 order-1 lg:order-2">
                   <motion.div 
                     className="relative w-[120%] lg:w-[140%] lg:translate-x-10 transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-1"
                   >
                      <img src={laptopImg} alt="Laptop Frame" className="relative z-20 drop-shadow-2xl" />
                      <img 
                        src={project.previewImage} 
                        alt={project.title[lang]} 
                        className="absolute top-[4.5%] left-[13.2%] w-[73.5%] h-[78.7%] object-cover z-10 rounded"
                      />
                   </motion.div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}