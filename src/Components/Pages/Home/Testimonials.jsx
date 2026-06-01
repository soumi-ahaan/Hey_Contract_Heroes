import { useEffect, useState } from "react";
import icon from "../../../assets/icon.png";

import testimonialImg from "../../../assets/testimonialImg.png";

import user from "../../../assets/user.png";
import member4 from "../../../assets/member4.png";
export default function Testimonial() {
    const testimonials = [
        {
            text: `The results we've seen after partnering with Bexon are beyond our expectations. They not only understood our vision but also brought new ideas to the table that have taken our business to the next level. Their expertise and commitment to success make them a trusted.`,
            name: "Ralph Edwards",
            role: "Co. Founder",
            image: user,
        },

        {
            text: `Working with this team completely transformed our customer communication strategy. Their professionalism and fast execution helped us scale rapidly and efficiently.`,
            name: "Jenny Wilson",
            role: "Marketing Lead",
            image: member4,
        }
    ];

    const [current, setCurrent] = useState(0);

    // AUTO SLIDE
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-[#F5F5F5]">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[54px] py-[70px] xl:py-[120px]">

                {/* GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">

                    {/* LEFT IMAGE */}
                    <div className="relative">

                        {/* IMAGE WRAPPER */}
                        <div className="relative overflow-hidden rounded-[12px]">

                            {/* IMAGE */}
                            <img
                                src={testimonialImg}
                                alt=""
                                className="h-full w-full object-cover"
                            />

                            {/* DARK OVERLAY */}
                            <div className="absolute inset-0 bg-black/25" />

                            {/* OVERLAY TEXT */}
                            <div className="absolute top-8 left-8 z-10">
                                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-snug text-white">
                                    Hear from Our
                                    <br />

                                    <span className="bg-[linear-gradient(180deg,#fa7f2c_0%,#FFAC00_100%)] bg-clip-text text-transparent">
                                        Customer
                                    </span>
                                </h2>
                            </div>
                        </div>
                        {/* FLOATING RATING CARD */}
                        <div className="absolute -bottom-[10px] right-0 md:-right-10">

                            {/* BACK PLATE */}
                            <div className="absolute bottom-[9px] right-[10px] h-full w-full rounded-tl-[10px] bg-[#ECF0F0]" />

                            {/* MAIN CARD */}
                            <div className="relative  rounded-[10px] bg-[#1E8A8A] p-4 md:pl-6  md:pr-16 md:py-4">

                                <h3 className="text-4xl lg:text-5xl 2xl:text-[74px] leading-none font-medium text-white">
                                    4.9
                                </h3>

                                <div className="mt-2 md:mt-10">
                                    <p className="text-lg text-white">★★★★★</p>

                                    <p className="mt-1 text-sm text-white/80">
                                        (80+ Clients Reviews)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="relative">

                        {/* SLIDER WRAPPER */}
                        <div className="relative overflow-hidden">

                            <div
                                className="flex transition-all duration-700"
                                style={{
                                    transform: `translateX(-${current * 100}%)`,
                                }}
                            >
                                {testimonials.map((item, index) => (
                                    <div
                                        key={index}
                                        className="min-w-full min-h-[520px] flex flex-col justify-between p-[20px] md:py-[50px] md:pl-[50px] md:pr-9"
                                    >

                                        <div>
                                            {/* QUOTE ICON */}
                                            <div>
                                                <img
                                                    src={icon}
                                                    alt=""
                                                    className="w-10 md:w-[70px]"
                                                />
                                            </div>

                                            {/* TEXT */}
                                            <p className="mt-8 text-[18px] leading-[38px] text-[#4E5B5B]">
                                                {item.text}
                                            </p>
                                        </div>

                                        <div>
                                            {/* BORDER */}
                                            <div className="my-8 h-[1px] w-full bg-[#D9DDDD]" />

                                            {/* USER */}
                                            <div className="flex items-center justify-between gap-5">

                                                <div className="flex items-center gap-4">

                                                    {/* IMAGE */}
                                                    <div className="h-[58px] w-[58px] overflow-hidden rounded-full">
                                                        <img
                                                            src={item.image}
                                                            alt=""
                                                            className="h-full w-full object-cover"
                                                        />
                                                    </div>

                                                    {/* INFO */}
                                                    <div>
                                                        <h4 className="text-xl font-semibold text-[#1A1A1A]">
                                                            {item.name}
                                                        </h4>

                                                        <p className="mt-1 text-sm text-[#7C8A8A]">
                                                            {item.role}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* PAGINATION DASH */}
                                                <div className="flex items-center gap-2">
                                                    {testimonials.map((_, i) => (
                                                        <button
                                                            key={i}
                                                            onClick={() => setCurrent(i)}
                                                            className={`cursor-pointer h-[6px] rounded-full transition-all duration-500 ${current === i
                                                                    ? "w-[34px] bg-[#1E8A8A]"
                                                                    : "w-[10px] bg-[#c8dbdb]"
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}