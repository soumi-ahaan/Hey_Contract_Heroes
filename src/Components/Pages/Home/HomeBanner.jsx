import React from "react";
import banner from "../../../assets/banner.png";
import {ArrowUpRightIcon} from "@phosphor-icons/react";

export default function Hero() {
 


  return (
    <section
      className="w-full max-w-[1440xpx] relative h-[580px] md:h-[650px] lg:h-[877px]  overflow-hidden bg-cover bg-center"
    >
        <img
    src={banner}
    alt="hero"
    className="absolute inset-0 w-full h-full object-cover"
    loading="eager"
    fetchriority="high"
  />
   <div className="absolute inset-0 bg-[linear-gradient(90deg,_#0C1E21_20%,_rgba(12,30,33,0.4)_60%,_rgba(12,30,33,0.1)_100%)]"></div>

      <div className="relative max-w-[1440px] mx-auto h-full flex items-center px-4 md:px-8 lg:px-12 xl:px-[54px] pt-40 pb-20 lg:pt-48 2xl:pt-[283px] 2xl:pb-[206px] ">

        <div className="flex flex-col gap-6 max-w-2xl">
        
        <h1
          
          className="text-2xl min-[425px]:text-3xl md:text-4xl lg:text-[45px] xl:text-[50px] leading-snug font-heading font-bold text-white"
          
        >
          Become the Hero Behind Every Great <span className="bg-[linear-gradient(90deg,#A3167F_0%,#F49A19_130%)] bg-clip-text text-transparent">Customer</span><br className="hidden xl:block"/>
          <span className="bg-[linear-gradient(90deg,#A3167F_50%,#F49A19_130%)] bg-clip-text text-transparent"> Experience</span>
        </h1>
        <p
          className="text-sm md:text-base text-[#A9B8B8]  font-medium leading-normal max-w-md"
        >
          Join Germany’s leading remote customer service team and discover flexible work, profit sharing, and real career opportunities..
        </p>


        {/* Buttons */}
        <div className=" flex flex-wrap  gap-6">
            <button className="cursor-pointer group/btn bg-[#1A8888] hover:bg-transparent hover:border border-[#1A8888] hover:border-white  hover:shadow-[0px_0px_10px_1px_#00000026]  duration-300 text-white rounded-full  pl-5 pr-3 py-2 lg:pl-8 lg:pr-3 lg:py-2.5 flex items-center gap-3 font-semibold">
            <span className="text-white text-xs sm:text-sm lg:text-base font-semibold group-hover/btn:text-[#F49A19] transition-colors duration-300"> For Business Partners</span> 
              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[#F49A19] text-white flex items-center justify-center shrink-0 group-hover/btn:bg-[#1A8888] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform duration-300">
                <ArrowUpRightIcon size={20} />
              </div>
            </button>

            <button className="cursor-pointer group/btn bg-transparent border border-[#F49A19] hover:border-[#F49A19] hover:bg-[#F49A19]  duration-300 text-white rounded-full  pl-4 pr-3 py-2 lg:pl-8 lg:pr-3 lg:py-2.5 flex items-center gap-3 font-semibold">
              <span className="text-[#F49A19] text-xs sm:text-sm lg:text-base font-semibold group-hover/btn:text-white transition-colors duration-300">Apply Now</span>
              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[#F49A19] group-hover/btn:bg-white text-white group-hover/btn:text-[#F49A19] flex items-center justify-center shrink-0 group-hover/btn:translate-x-1 transition-transform duration-300">
                <ArrowUpRightIcon size={20} />
              </div>
            </button>
          </div>
          </div>

      </div>
    </section>
  );
}