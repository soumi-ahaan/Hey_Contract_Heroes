import React from "react";
import about from "../../../assets/about.png";
import favicon from "../../../assets/favicon.png";

const AboutUs = () => {
    return (
        <section className="w-full bg-white relative overflow-hidden">

            {/* Left 20% Background */}
            <div className="absolute left-0 top-0 h-full w-[34%] bg-[#F7F7F7] hidden lg:block"></div>

            {/* Container */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[54px] py-[60px] lg:py-[80px] relative z-10">

                {/* Heading */}
                <div className="mb-[50px]">
                    <div className="space-y-2">
                        <img src={favicon} alt="" />

                        <h3 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-[45px] lg:leading-[60px] tracking-[-2px] text-[#313131]">
                            We Create Customer Service <span className="bg-[linear-gradient(90deg,#fa7f2c_0%,#FFAC00_100%)] bg-clip-text text-transparent">Heroes</span>
                        </h3>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-[auto_1fr] gap-8 xl:gap-[57px] items-start">

                    {/* Left Image */}
                    <div className="relative w-full">
                        <img
                            src={about}
                            alt="about"
                            className="w-full max-w-[530px] object-cover animate-float"
                        />
                    </div>

                    {/* Right Content */}
                    <div>

                        {/* Top Text with Line */}
                        <div className="flex items-start gap-[10px] mb-[30px]">

                            {/* Vertical Line */}
                            <svg
                                width="3"
                                height="80"
                                viewBox="0 0 3 80"
                                className="shrink-0 mt-[4px]"
                            >
                                <line
                                    x1="1.5"
                                    y1="0"
                                    x2="1.5"
                                    y2="80"
                                    stroke="#FFAC00"
                                    strokeWidth="3"
                                />
                            </svg>

                            <div>
                                <p className="text-base md:text-[22px] font-medium text-[#313131]">
                                    We empower remote professionals and help businesses deliver exceptional customer experiences through flexible, scalable, and people-first service solutions.
                                </p>

                                <p className="mt-4 text-sm text-[#6F6F6F]">
                                    With the help of our volunteers, donors, and partners, we
                                    strive to build stronger communities filled with compassion,
                                    dignity, and equal opportunities for everyone.
                                </p>
                            </div>

                        </div>

                        {/* Cards */}
                        <div className="mt-[38px] lg:ml-4 flex flex-col md:flex-row gap-[20px] md:gap-[30px]">

                            {/* Mission */}
                            <div className="w-full md:w-[366px] h-auto md:h-[430px] bg-[#A3167F] p-6 md:p-8 text-white relative overflow-hidden">

                                {/* Circle */}
                                <div className="absolute top-6 left-6 w-[80px] h-[80px] bg-white/10 rounded-full"></div>

                                <h3 className="font-display text-[30px] md:text-[41px] font-bold mb-4 relative z-10">
                                    Mission
                                </h3>

                                <p className="text-[16px] relative z-10">
                                    To support underprivileged communities by providing food, education, healthcare,
                                    and essential resources that improve daily lives and create lasting impact.
                                    We are committed to bringing positive change through compassion,
                                    dedicated service, and strong community support, helping individuals and families build a better future.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="w-full md:w-[366px] h-auto md:h-[430px] bg-[#FFAC00] p-6 md:p-8 text-white relative overflow-hidden">

                                {/* Circle */}
                                <div className="absolute top-6 left-6 w-[80px] h-[80px] bg-white/10 rounded-full"></div>

                                <h3 className="font-display text-[30px] md:text-[41px] font-bold mb-4 relative z-10">
                                    Vision
                                </h3>

                                <p className="text-[16px] relative z-10">
                                    To build a better future where everyone has access to basic needs,
                                    equal opportunities, and a safe, supportive environment to grow and succeed.
                                    We envision stronger communities filled with hope, dignity, compassion,
                                    and sustainable development for generations to come.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;