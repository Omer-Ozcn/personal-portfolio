import React, { useState } from "react"; // 1. useState eklendi
import { Github, Linkedin, Mail } from "lucide-react";
import { useLang } from "../context/LangContext";
import { motion } from "framer-motion";
import avatar from "../assets/hero.jpg";
import EmailTo from "./EmailTo"; // 2. EmailTo bileşeni import edildi (Yolunu projene göre ayarla)

export default function Hero() {
  const { t } = useLang();
  
  // 3. Modalın açık/kapalı durumunu tutan state
  const [showContactModel, setShowContactModel] = useState(false);

  return (
    <section id="hero" className="w-full min-h-[85vh] flex items-center bg-[#f4f4f4] dark:bg-[#2A262B] relative overflow-hidden transition-colors duration-300">
      
      {/* Arka Plan Dekoratif Işıklar */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1107px] mx-auto px-6 w-full flex flex-col-reverse md:flex-row items-center justify-between relative z-10 py-12 md:py-0">
        
        {/* Sol Taraf */}
        <div className="md:w-3/5 mt-12 md:mt-0 space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="h-[1px] w-12 bg-indigo-500"></div>
            <span className="text-lg text-indigo-600 dark:text-indigo-400 font-medium tracking-wider">
               {t.hero.name}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl md:text-7xl font-black text-[#1A1A1A] dark:text-[#EDEDED] leading-tight tracking-tight"
          >
            {t.hero.title}
            <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              Developer.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed"
          >
            {t.hero.desc}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-6 pt-2"
          >
            {/* 4. Buton Değişikliği: a etiketi yerine button kullanıldı ve onClick eklendi */}
            <button 
               onClick={() => setShowContactModel(true)}
               className="px-8 py-4 bg-[#3730A3] dark:bg-[#6366f1] text-white rounded-xl font-bold hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-3 cursor-pointer"
            >
              <Mail size={20} />
              {t.hero.cta}
            </button>
            
            <div className="flex items-center gap-4">
                <a href="https://github.com/Omer-Ozcn" target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-white hover:text-[#3730A3] dark:hover:text-[#6366f1] shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                    <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/omerzcn1" target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-white hover:text-[#0077b5] shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                    <Linkedin size={24} />
                </a>
            </div>
          </motion.div>
        </div>

        {/* Sağ Taraf: Resim */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="md:w-2/5 flex justify-center md:justify-end"
        >
          <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-[40px] rotate-6 opacity-60 blur-lg dark:opacity-40"></div>
            <img
              src={avatar}
              alt="Profile"
              className="relative z-10 w-full h-full object-cover rounded-[40px] shadow-2xl border-[6px] border-white dark:border-[#3E3740]"
            />
          </div>
        </motion.div>
      </div>

      {/* 5. Modal Render Edilmesi: State true ise modalı göster */}
      {showContactModel && (
        <EmailTo onClose={() => setShowContactModel(false)} />
      )}

    </section>
  );
}