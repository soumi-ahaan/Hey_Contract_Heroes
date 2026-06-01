import {
  ArrowUpRightIcon,FacebookLogoIcon,InstagramLogoIcon, LinkedinLogoIcon,XLogoIcon,ClockIcon
} from "@phosphor-icons/react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import award1 from "../../assets/award1.png";
import award2 from "../../assets/award2.png";
import pattern1 from "../../assets/pattern1.png";
import pattern2 from "../../assets/pattern2.png";
import logo from "../../assets/logo.png";
export default function Footer() {
  const services = [
    "Customer Experience",
    "Training Programs",
    "Business Strategy",
    "Training Program",
    "ESG Consulting",
    "Development Hub",
  ];

  const resources = [
    {
    name: "Contact us",
    isNew: false,
  },
  {
    name: "Team Member",
    isNew: false,
  },
  {
    name: "Recognitions",
    isNew: false,
  },
  {
    name: "Careers",
    isNew: true,
  },
  {
    name: "News",
    isNew: false,
  },
  {
    name: "Feedback",
    isNew: false,
  },
  ];

 

const marqueeItems = [
  {
    image: img1,
    text: "Enterprise",
  },
  {
    image: img2,
    text: "Leader",
  },
];

  return (
    <footer className="bg-[#0C1E21]  relative overflow-hidden  text-white">
      {/* Decorative Overlay Top Left */}
<img
  src={pattern1}
  alt=""
  className="absolute top-0 left-0 w-[420px] h-[420px] object-cover  pointer-events-none select-none"
/>

      {/* Decorative Blur Bottom Left */}
      <div className="absolute bottom-[80px] left-[-120px] w-[320px] h-[320px] rounded-full bg-[#0E7C86]/30 blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[54px] py-[50px] md:py-[68px]">
        {/* CTA BOX */}
        <div className="relative overflow-hidden rounded-md border border-[#FFFFFF1A] bg-[#FFFFFF1A] backdrop-blur-md px-6 md:px-[60px] py-3 md:py-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Title */}
            <h2 className="text-[28px] md:text-4xl xl:text-5xl font-bold leading-snug text-grad1">
              Hey contact heroes
            </h2>

            {/* Form */}
            <div className="flex w-full max-w-[520px] items-center rounded-full border border-[#FFFFFF1A] bg-transparent px-1 py-1">
              <input
                type="email"
                placeholder="Your Email ID"
                className="w-full bg-transparent pl-7 text-sm md:text-base text-white outline-none placeholder:text-white"
              />

              <button className="cursor-pointer group/btn bg-[#1A8888] hover:bg-transparent hover:border border-[#1A8888] hover:border-white  hover:shadow-[0px_0px_10px_1px_#00000026]  duration-300 text-white rounded-full  pl-5 pr-3 py-2 lg:pl-8 lg:pr-3 lg:py-2. flex items-center gap-3 font-semibold whitespace-nowrap">
                          <span className="text-white text-xs sm:text-sm lg:text-base font-semibold group-hover/btn:text-[#F49A19] transition-colors duration-300"> Send Message</span> 
                            <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[#F49A19] text-white flex items-center justify-center shrink-0 group-hover/btn:bg-[#1A8888] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform duration-300">
                              <ArrowUpRightIcon size={20} />
                            </div>
                          </button>
            </div>
          </div>
        </div>

        {/* FOOTER CONTENT */}
        <div className="mt-20 flex flex-col gap-10 lg:flex-row gap-14 xl:gap-[208px]">
          {/* LEFT */}
          <div className="max-w-[280px]">
            {/* Logo */}
            <div className="mb-5">
              <a href="/" className="text-decoration-none">
                            <img
                              src={logo}
                              alt="logo"
                              className="w-[118px] h-[48px] md:w-[144px] md:h-[69px] object-contain"
                            />
                          </a>
            </div>

            <p className="text-sm leading-[26px] text-white/60">
              Developing personable our customer journeys to increase
              satisfaction & loyalty of our expansion.
            </p>

            {/* Stats */}
            <div className="mt-8 flex gap-4">
              <div>
                <a href="/" className="text-decoration-none">
                            <img
                              src={award1}
                              alt="award1"
                              className="w-[96px] h-[60px]  object-contain"
                            />
                          </a>
              </div>
                <a href="/" className="text-decoration-none">
                            <img
                              src={award2}
                              alt="award2"
                              className="w-[96px] h-[60px]  object-contain"
                            />
                          </a>
              <div>
                
              </div>
            </div>
          </div>

          {/* RIGHT COLUMNS */}
          <div className="grid flex-1 grid-cols-1 gap-10 xl:gap-14 2xl:gap-[208px]  lg:grid-cols-3">
            {/* Services */}
            <div>
              <h3 className="mb-[33px] text-lg font-semibold">
                Services
              </h3>

              <ul className="space-y-4">
                {services.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-white/60 transition-all duration-300 hover:text-[#F49A19] cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="mb-[33px] text-lg font-semibold">
                Resources
              </h3>

              <ul className="space-y-4">
                {resources.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-white/60 transition-all duration-300 hover:text-[#F49A19] cursor-pointer"
                  >
                    {item.name}
                    {item.isNew && (
          <span className="rounded-full bg-[#1A8888] ml-1 px-1 py-[2px] text-[10px] font-semibold uppercase tracking-[1px] text-white">
            New
          </span>
        )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Office */}
            <div>
              <h3 className="mb-[33px] text-lg font-semibold">
                Our Office
              </h3>

              <div className="space-y-5 text-sm text-white/60">
                <a href="https://maps.app.goo.gl/k4ohBoZRiGmZXnVU9" className="leading-[28px] hover:text-[#F49A19] cursor-pointer">
                  993 Renner Burg, West Rond,
                  <br />
                  MT 94251-030, USA.
                </a>

                <div className=" flex flex-col gap-1">
                  <a href="tel:+10095447818" className="font-semibold text-white hover:text-[#F49A19] cursor-pointer">
                    P: +1 (009)544-7818
                  </a>

                  <a href="mailto:support@bexon.com" className="font-semibold text-white hover:text-[#F49A19] cursor-pointer">
                    M: support@bexon.com
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  
                    <ClockIcon size={20} className="text-[#13B6C8]"/>
                  <p>Mon-Fri 10am-10pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MARQUEE */}
        <div className="relative mt-20 overflow-hidden border-y border-white/10 py-8">
          
          <div className="flex animate-marquee items-center gap-12">
  {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
    (item, i) => (
      <div
        key={i}
        className="flex items-center gap-5 shrink-0"
      >
        {/* Image */}
        <div className="h-[90px] w-[180px] overflow-hidden rounded-md">
          <img
            src={item.image}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <h2 className="text-[40px] font-semibold  whitespace-nowrap text-[70px] xl:text-[130px] font-bold  leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)]">
          {item.text}
        </h2>
      </div>
    )
  )}
</div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-start sm:items-center justify-between gap-2 lg:gap-8 pt-10 text-white/50 sm:flex-row">
          {/* Copyright */}
          <p className="text-xs lg:text-sm">© 2026 Bexon All right reserved</p>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex p-[10px] items-center justify-center rounded-full border border-white/10 bg-[#A9B8B8]/50 text-[#0C1E21] transition-all duration-300 hover:bg-[linear-gradient(20deg,#A3167F_0%,#F49A19_100%)] transition-all duration-500"
            >
              <FacebookLogoIcon size={20} />
            </a>

            <a
              href="#"
              className="flex p-[10px] items-center justify-center rounded-full border border-white/10 bg-[#A9B8B8]/50 text-[#0C1E21] transition-all duration-300 hover:bg-[linear-gradient(20deg,#A3167F_0%,#F49A19_100%)] transition-all duration-500"
            >
              <InstagramLogoIcon size={20} />
            </a>

            <a
              href="#"
              className="flex p-[10px] items-center justify-center rounded-full border border-white/10 bg-[#A9B8B8]/50 text-[#0C1E21] transition-all duration-300 hover:bg-[linear-gradient(50deg,#A3167F_0%,#F49A19_100%)] transition-all duration-500"
            >
              <XLogoIcon size={20} />
            </a>

            <a
              href="#"
              className="flex p-[10px] items-center justify-center rounded-full border border-white/10 bg-[#A9B8B8]/50 text-[#0C1E21] transition-all duration-300 hover:bg-[linear-gradient(50deg,#A3167F_0%,#F49A19_100%)] transition-all duration-500"
            >
              <LinkedinLogoIcon size={20} />
            </a>
          </div>

          {/* Policies */}
          <div className="flex items-center gap-2">
            <a href="#" className="text-xs lg:text-sm hover:text-[#F49A19]">
              Privacy Policy
            </a>

            |

            <a href="#" className="text-xs lg:text-sm hover:text-[#F49A19]">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>

      {/* MARQUEE ANIMATION */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          width: max-content;
          animation: marquee 24s linear infinite;
        }
      `}</style>
    </footer>
  );
}