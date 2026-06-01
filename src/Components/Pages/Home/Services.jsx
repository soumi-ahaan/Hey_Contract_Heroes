import { useState } from "react";
import {ArrowUpRightIcon} from "@phosphor-icons/react";

import service1 from "../../../assets/service1.png";

import pattern1 from "../../../assets/pattern1.png";
import favicon from "../../../assets/favicon.png";

export default function SmartSolutionsSection() {
  const [active, setActive] = useState(0);

  const services = [
    {
      number: "01",
      title: "INBOUND SERVICE",
      image: service1,
    },
    {
      number: "02",
      title: "OUTBOUND VERTRIEB",
      image: service1,
    },
    {
      number: "03",
      title: "BACKOFFICE SUPPORT",
      image: service1,
    },
    {
      number: "04",
      title: "CUSTOMER SERVICE",
      image: service1,
    },
    {
      number: "05",
      title: "LEADGENERIERUNG",
      image: service1,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0C1E21] text-white">
      {/* TOP LEFT PATTERN */}
      <img
        src={pattern1}
        alt=""
        className="absolute top-0 left-0 z-0  pointer-events-none"
      />

      {/* BOTTOM RIGHT PATTERN */}
      <img
        src={pattern1}
        alt=""
        className="absolute bottom-0 right-0 xl:right-40 z-0  pointer-events-none rotate-180 "
      />

      {/* Decorative Blur Bottom Left */}
      <div className="absolute bottom-0 left-[120px] w-[320px] h-[320px] rounded-full bg-[#0E7C86]/30 blur-[120px] pointer-events-none" />

      {/* CONTAINER */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[54px] py-[60px] lg:py-[80px] relative z-10">
        {/* TOP */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* TITLE */}
          {/* Heading */}
                          <div className="lg:mb-[50px]">
                              <div className="space-y-2">
                                  <img src={favicon} alt="" />
          
                                  <h3 className="font-heading font-bold text-[28px] md:text-4xl xl:text-[48px] leading-[45px] lg:leading-[60px] tracking-[-2px] text-[#fff]">
                                      <span className="bg-[linear-gradient(90deg,#A3167F_50%,#F49A19_130%)] bg-clip-text text-transparent">Smart Solutions</span> for Better Customer Communication
                                  </h3>
                              </div>
                          </div>

          {/* BUTTON */}
          <button className="cursor-pointer group/btn bg-[#1A8888] hover:bg-transparent hover:border border-[#1A8888] hover:border-white  hover:shadow-[0px_0px_10px_1px_#00000026]  duration-300 text-white rounded-full w-fit  pl-5 pr-3 py-2 lg:pl-8 lg:pr-3 lg:py-2.5 flex items-center gap-3 font-semibold whitespace-nowrap">
                      <span className="text-white text-xs sm:text-sm lg:text-base font-semibold group-hover/btn:text-[#F49A19] transition-colors duration-300"> View Our All Services</span> 
                        <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[#F49A19] text-white flex items-center justify-center shrink-0 group-hover/btn:bg-[#1A8888] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform duration-300">
                          <ArrowUpRightIcon size={20} />
                        </div>
                      </button>
        </div>

        {/* HORIZONTAL ACCORDION */}
        <div className="mx-auto w-full  hidden lg:flex">
          {services.map((item, index) => {
            const isActive = active === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                className={`relative flex h-[460px] cursor-pointer overflow-hidden border-r border-white transition-all duration-700 ${
                  isActive ? "w-full" : "w-[50%]"
                }`}
              >
                {/* ACTIVE CONTENT */}
                <div
                  className={`flex h-full w-full transition-all duration-700 ${
                    isActive
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                >
                  {/* IMAGE */}
                  <div className=" px-[100px]">
                    <div className="h-[420px] w-[280px] overflow-hidden ">
                      <img
                        src={item.image}
                        alt=""
                        className="h-full w-full object-cover md:object-contain lg:object-cover rounded-[14px]"
                      />
                    </div>
                  </div>
                </div>

                {/* VERTICAL CONTENT */}
                <div className="absolute left-0 top-0 flex h-full w-full justify-between px-[35px] py-[40px]">
                  {/* NUMBER + TITLE */}
                  <div className="flex flex-col items-center justify-end">
                    {/* ARROW */}
                  <div
                    className={`mb-16 transition-all duration-700 ${
                      isActive
                        ? "-rotate-180"
                        : "rotate-0"
                    }`}
                  >
                    <ArrowUpRightIcon
                      size={28}
                      className="text-white/90"
                    />
                  </div>
                    

                    <h3 className="rotate-180 whitespace-nowrap text-[22px] font-medium uppercase tracking-[1px] [writing-mode:vertical-rl]">
                      {item.title}
                    </h3>
                    <span className="rotate-180 mt-8 text-[22px] text-white/90 [writing-mode:vertical-rl]">
                      {item.number}
                    </span>
                  </div>

                  
                </div>
              </div>
            );
          })}
        </div>

        {/* MOBILE / TABLET ACCORDION */}
        <div className="mt-14 flex flex-col gap-5 lg:hidden">
          {services.map((item, index) => {
            const isActive = active === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-[20px] border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                {/* HEADER */}
                <div
                  onClick={() =>
                    setActive(isActive ? null : index)
                  }
                  className="flex cursor-pointer items-center justify-between px-6 py-5"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-white/50">
                      {item.number}
                    </span>

                    <h3 className="text-lg font-medium">
                      {item.title}
                    </h3>
                  </div>

                  <ArrowUpRightIcon
                    className={`transition-all duration-500 ${
                      isActive ? "rotate-45" : ""
                    }`}
                  />
                </div>

                {/* CONTENT */}
                <div
                  className={`overflow-hidden transition-all duration-700 ${
                    isActive
                      ? "max-h-[400px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="overflow-hidden rounded-[18px]">
                      <img
                        src={item.image}
                        alt=""
                        className="h-[280px] w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}