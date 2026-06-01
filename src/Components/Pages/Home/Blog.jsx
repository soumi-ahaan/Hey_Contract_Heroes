import { useEffect, useState } from "react";
import { ArrowUpRightIcon, CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

export default function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [current, setCurrent] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(2);

    // FETCH BLOGS
    useEffect(() => {
        fetch("https://heycontractheroes.ahaanmedia.com/wp-json/wp/v2/posts?_embed")
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
            });
    }, []);



    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setSlidesPerView(1);
            } else {
                setSlidesPerView(2);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () =>
            window.removeEventListener(
                "resize",
                handleResize
            );
    }, []);

    const maxSlide =
        blogs.length - slidesPerView;

    // NEXT
    const nextSlide = () => {
        if (current >= maxSlide) {
            setCurrent(0);
        } else {
            setCurrent((prev) => prev + 1);
        }
    };

    // PREV
    const prevSlide = () => {
        if (current <= 0) {
            setCurrent(maxSlide);
        } else {
            setCurrent((prev) => prev - 1);
        }
    };
    return (
        <section className="overflow-hidden bg-[#F6F7F7]">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[54px] py-[60px] lg:py-[80px] relative z-10">

                {/* TOP */}
                <div className="flex items-center justify-between gap-6">

                    {/* TITLE */}
                    <h3 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-snug text-[#122226] font-heading">
                        Latest{" "}
                        <span className="bg-[linear-gradient(40deg,#A3167F_0%,#F49A19_90%)] bg-clip-text text-transparent">
                            Blogs & Resources
                        </span>
                    </h3>

                    {/* NAVIGATION */}
                    <div className="flex items-center gap-3">

                        {/* PREV */}
                        <button
                            onClick={prevSlide}
                            className="cursor-pointer flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#DDE3E3] bg-white transition-all duration-300 hover:bg-[#1E8A8A] hover:text-white"
                        >
                            <CaretLeftIcon size={18} />
                        </button>

                        {/* NEXT */}
                        <button
                            onClick={nextSlide}
                            className="cursor-pointer flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#DDE3E3] bg-white transition-all duration-300 hover:bg-[#1E8A8A] hover:text-white"
                        >
                            <CaretRightIcon size={18} />
                        </button>
                    </div>
                </div>


                {/* BLOG SLIDER */}
                <div className="mt-16 overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${current * (100 / slidesPerView)
                                }%)`,
                        }}
                    >
                        {blogs.map((blog, index) => {
                            const image =
                                blog._embedded?.["wp:featuredmedia"]?.[0]
                                    ?.source_url;

                            const author =
                                blog._embedded?.author?.[0]?.name;

                            // CATEGORY FETCH
                            const category =
                                blog._embedded?.["wp:term"]?.[0]?.[0]
                                    ?.name || "Business";

                            const date = new Date(blog.date);

                            const day = date.getDate();

                            const month = date.toLocaleString(
                                "en-US",
                                {
                                    month: "short",
                                }
                            );

                            return (
                                <div
                                    key={index}
                                    className={`shrink-0 ${slidesPerView === 1
                                            ? "w-full"
                                            : "w-1/2"
                                        }`}
                                >
                                    <div className="flex flex-col sm:flex-row gap-8  lg:gap-4 pr-0  2xl:pr-[155px]">

                                        {/* IMAGE */}
                                        <div className="relative shrink-0">
                                            <div className="overflow-hidden rounded-[10px]">
                                                <img
                                                    src={image}
                                                    alt={blog.title.rendered}
                                                    className="h-[260px]  w-full sm:w-[360px] lg:w-[260px] object-cover transition-all duration-500 hover:scale-110"
                                                />
                                            </div>

                                            {/* DATE */}
                                            <div className="absolute left-4 top-4 rounded-[6px] bg-white/10 px-4 py-3 backdrop-blur-md">
                                                <h4 className="text-3xl font-medium leading-none text-white">
                                                    {day}
                                                </h4>

                                                <p className="mt-2 text-xs uppercase tracking-[2px] text-white/80">
                                                    {month}
                                                </p>
                                            </div>
                                        </div>

                                        {/* CONTENT */}
                                        <div className="flex flex-1 flex-col justify-center">

                                            {/* CATEGORY + AUTHOR */}
                                            <div className="flex flex-wrap items-center gap-2 text-sm">

                                                <span className="rounded-[4px] border border-[#D8DEDE] px-2 py-1 text-[#4A5858]">
                                                    {category}
                                                </span>

                                                <span className="text-base text-[#6F7D7D]">
                                                    By Ellinien Loma
                                                </span>
                                            </div>

                                            {/* TITLE */}
                                            <h3
                                                className="mt-5 text-base xl:text-2xl font-semibold leading-snug text-[#1C2A2C] max-w-[300px]"
                                                dangerouslySetInnerHTML={{
                                                    __html: blog.title.rendered,
                                                }}
                                            />

                                            {/* READ MORE */}
                                            <a
                                                href={blog.link}
                                                target="_blank"
                                                rel="noopener noreferrer" className="group mt-10 flex items-center gap-3 text-base font-medium text-[#1C2A2C]">
                                                Read More

                                                <span className="ml-2 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#122B2D] text-white transition-all duration-300 group-hover:bg-[#1E8A8A]">
                                                    <ArrowUpRightIcon size={16} />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>


                {/* PAGINATION */}
                <div className="mt-14 flex items-center justify-center gap-2">
                    {Array.from({
                        length: maxSlide + 1,
                    }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`cursor-pointer h-[6px] rounded-full transition-all duration-500 ${current === index
                                    ? "w-[34px] bg-[#1E8A8A]"
                                    : "w-[10px] bg-[#D6DFDF]"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}