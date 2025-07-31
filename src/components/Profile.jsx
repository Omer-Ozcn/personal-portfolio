import { useLang } from "../context/LangContext";

export default function Profile() {
  const { t } = useLang();
  const p = t.profile;

  return (
    <div className="w-full min-h-[546px] bg-[#F4F4F4] dark:bg-[#2A262B]">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-center text-4xl font-medium text-black tracking-[0.36px] mb-16 [font-family:'Inter-Medium',Helvetica] dark:text-white">
          {t.profileTitle}
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-[500px] bg-white dark:bg-[#525252] rounded-xl shadow-[6px_8px_0px_rgba(82,82,82,0.15)] relative">
              <div className="absolute w-full h-full top-2 left-2 bg-[rgba(82,82,82,0.5)] dark:bg-[rgba(20,20,20,0.7)] rounded-xl -z-10" />
              <div className="pb-4 pt-6 px-10">
                <h3 className="text-[24px] leading-8 text-[#ea2678] [font-family:'Playfair_Display-Regular',Helvetica] font-normal tracking-[0.01em] mb-6">
                  {p.basicTitle}
                </h3>
                <ul className="space-y-6 text-[18px] leading-[22px] tracking-[0.01em]">
                  {p.fields.map((f, idx) => (
                    <li key={f.k} className="flex items-start gap-[20px]">
                      <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-black dark:text-white min-w-[160px]">
                        {f.k}
                      </span>
                      <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-black dark:text-white whitespace-pre-line flex-1 min-w-0">
                        {f.v}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-[480px]">
            <div className="mb-6">
              <div className="relative inline-block">
                <h3 className="text-2xl font-normal text-black dark:text-white tracking-[0.24px] [font-family:'Playfair_Display-Regular',Helvetica] relative z-10 px-3">
                  {p.aboutTitle}
                </h3>
                <div className="absolute bottom-0 left-0 w-[90px] h-[18px] bg-[#81bbff] rounded" />
              </div>
            </div>
            <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-lg text-black dark:text-white tracking-[0.18px] leading-[27px] whitespace-pre-line">
              {p.about}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
