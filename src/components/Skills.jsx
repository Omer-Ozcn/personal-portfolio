import { skills } from "../data/skills.js";
import { useLang } from "../context/LangContext";

export default function Skills() {
  const { t } = useLang();

  return (
    <section
      id="skills"
      className="w-full px-4 py-28 bg-white dark:bg-[#3E3740] transition-colors duration-300"
    >
      {/* Başlık */}
      <h2 className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#0A0A14] dark:text-[#faf6ed] text-5xl tracking-[0.48px] leading-[normal] text-center mb-[114px] transition-colors duration-300">
        {t.skills?.skillsTitle ?? "Skills"}
      </h2>

      {/* Skill kartları alanı */}
      <div className="max-w-[942px] mx-auto flex flex-wrap justify-center gap-[35px]">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="inline-flex flex-col items-center gap-2.5 flex-[0_0_auto]"
          >
            {/* Arkaplan kontrolü varsa mavi bg */}
            {skill.hasBackground ? (
              <div className="relative w-[120px] h-[120px] bg-[#038fd6] dark:bg-[#0266c8] rounded-md transition-colors duration-300">
                <img
                  className="absolute w-[85px] h-[86px] top-[17px] left-[17px] object-cover"
                  alt={skill.name}
                  src={skill.image}
                  loading="lazy"
                />
              </div>
            ) : (
              <img
                className="relative w-[120px] h-[120px] object-cover rounded-md"
                alt={skill.name}
                src={skill.image}
                loading="lazy"
              />
            )}

            {/* Skill ismi */}
            <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-[#777777] dark:text-[#E5E7EB] text-2xl tracking-[0] leading-9 whitespace-nowrap transition-colors duration-300">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
