import { ArrowRightIcon } from "@phosphor-icons/react";

import pattern1 from "../../../assets/pattern1.png";

export default function WhyChoose() {
  const cards = [
    {
      title: "Scalable & Flexible Solutions",
      desc: "We tailor our services to your business needs — whether you need a small support team or large-scale campaign, grow with your business.",
    },
    {
      title: "AI + Human Expertise",
      desc: "By combining modern automation with experienced service teams, we deliver faster processes, better customer experiences, and measurable results.",
    },
    {
      title: "100% Remote & Fast Deployment",
      desc: "Our fully remote operating model allows quick implementation, high efficiency, and reliable German-speaking support — flexible and location-independent.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#EDF1F0]">
     
      {/* TOP LEFT PATTERN */}
  <img
    src={pattern1}
    alt=""
    className="absolute top-0 left-0 z-[1] w-[260px] md:w-[420px] opacity-100 brightness-10  pointer-events-none select-none"
  />

  {/* BOTTOM RIGHT PATTERN */}
  <img
    src={pattern1}
    alt=""
    className="absolute bottom-0 right-0 xl:right-40 z-[1] w-[260px] md:w-[420px] rotate-180 opacity-100 brightness-10  pointer-events-none select-none"
  />

      {/* CONTAINER */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[54px] py-[60px] lg:py-[80px] relative z-10">
        {/* TITLE */}
        <div className="w-full">
          <h3 className="text-[28px] md:text-4xl xl:text-5xl font-bold leading-snug text-[#122226] font-heading">
            Warum Sie {" "}
            <span className="bg-[linear-gradient(40deg,#A3167F_0%,#F49A19_90%)] bg-clip-text text-transparent">
               Hey Contact Heroes
            </span>
            <br className="hidden md:block"/>
            Wählen sollten
          </h3>
        </div>

        {/* CARDS */}
        <div className="relative mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
          {cards.map((card, index) => (
            <div key={index} className="relative flex items-center">
              {/* CARD */}
              <div className="group relative h-full rounded-[14px] bg-white p-[30px] md:px-7 md:pb-7 xl:pt-[150px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <h3 className="text-2xl font-bold leading-relaxed text-[#2B2B2B] font-heading">
                  {card.title}
                </h3>

                <p className="mt-6 text-base leading-relaxed text-[#6C757D]">
                  {card.desc}
                </p>
              </div>

              {/* CONNECTOR ARROW */}
              {index !== cards.length - 1 && (
                <div className="absolute -right-6 top-1/2 z-20 hidden -translate-y-1/2 lg:flex">
                  <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border-4 border-[#D8E5E5] bg-[#F7FAF9] shadow-sm animate-x-float">
                    <ArrowRightIcon
                      size={18}
                      className="text-[#1E8A8A]"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}