import { skills } from "../data/skills.js";
import { useLang } from "../context/LangContext";
import { motion } from "framer-motion";

// Animasyon Ayarları
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Sırayla gelme hızı
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  const { t } = useLang();

  return (
    <section
      id="skills"
      className="w-full px-6 py-28 bg-white dark:bg-[#3E3740] transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-[942px] mx-auto">
        
        {/* BAŞLIK */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // ÖNEMLİ DEĞİŞİKLİK BURADA:
          viewport={{ once: false, amount: 0.5 }} 
          transition={{ duration: 0.6 }}
          className="font-medium text-[#0A0A14] dark:text-[#faf6ed] text-4xl md:text-5xl tracking-wide text-center mb-16 md:mb-24 transition-colors duration-300"
        >
          {t.skillsTitle}
        </motion.h2>

        {/* YETENEKLER LİSTESİ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          // ÖNEMLİ DEĞİŞİKLİK BURADA:
          // once: false -> Her görüşe girdiğinde çalışır.
          // amount: 0.2 -> Elemanın %20'si görününce başlasın (daha doğal durur)
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="flex flex-col items-center gap-4 group cursor-pointer"
            >
              {/* Resim Kutusu */}
              <div className={`
                relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] 
                rounded-xl overflow-hidden shadow-md group-hover:shadow-2xl 
                transition-all duration-300 flex items-center justify-center
                ${skill.hasBackground ? "bg-[#038fd6] dark:bg-[#0266c8]" : "bg-transparent"}
              `}>
                <img
                  className={`object-cover ${skill.hasBackground ? "w-[70%]" : "w-full h-full rounded-xl"}`}
                  alt={skill.name}
                  src={skill.image}
                  loading="lazy"
                />
              </div>

              {/* İsim */}
              <span className="font-medium text-[#777777] dark:text-[#E5E7EB] text-xl tracking-wide group-hover:text-[#3730A3] dark:group-hover:text-[#8ECAE6] transition-colors duration-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}