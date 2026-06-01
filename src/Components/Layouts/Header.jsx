import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import {
  CaretDown,
  ArrowUpRightIcon,
  ArrowRight,
  MagnifyingGlassIcon,
  X,
} from "@phosphor-icons/react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  // SEARCH
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [blogs, setBlogs] = useState([]);

  // FETCH BLOGS
  useEffect(() => {
    fetch(
      "https://heycontractheroes.ahaanmedia.com/wp-json/wp/v2/posts?_embed"
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // FILTER BLOGS
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.rendered
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const menuItems = [
    {
      title: "Pages",
      links: [
        {
          name: "page1",
          path: "/page1",
        },

        {
          name: "page2",
          path: "/page2",
        },

        {
          name: "page3",
          path: "/page3",
        },

        {
          name: "page4",
          path: "/page4",
        },
      ],
    },
  ];

  const serviceItems = [
    {
      title: "Services",
      links: [
        {
          name: "Inbound Service",
          path: "/inbound-service",
        },

        {
          name: "Outbound Service",
          path: "/outbound-service",
        },

        {
          name: "Backoffice Support",
          path: "/backoffice-support",
        },

        {
          name: "Customer Service",
          path: "/customer-service",
        },
      ],
    },
  ];

  return (
    <>
      <header className="absolute top-0 z-50 w-full">
        {/* CONTAINER */}
        <div className="mx-auto max-w-[1440px] px-4 py-4 md:px-8 lg:px-12 xl:px-[54px]">
          
          {/* GRID LAYOUT */}
          <div className="grid grid-cols-2 lg:grid-cols-3 md:px-7 gap-8 rounded-sm bg-[#FFFFFF1A] py-2 pl-2 backdrop-blur-md ">
            
            {/* LEFT LOGO */}
            <div className="flex items-center">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  className="h-[36px] w-[80px] object-contain md:h-[56px] md:w-[118px]"
                />
              </Link>
            </div>

            {/* CENTER NAV */}
            <nav className="hidden lg:flex items-center justify-center gap-3 text-xs  lg:text-sm xl:gap-[29px] xl:text-base">
              
              {/* HOME */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `relative z-20 px-1 py-[29px] font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[#A9B8B8]"
                      : "text-white hover:scale-110 hover:text-[#A9B8B8]"
                  }`
                }
              >
                Home
              </NavLink>

              {/* PAGE DROPDOWN */}
              {menuItems.map((item, index) => (
                <div key={index} className="group relative">
                  
                  <div className="flex cursor-pointer items-center gap-1">
                    <NavLink
                      to=""
                      className="relative z-20 px-1 py-[29px] font-medium text-white transition-all duration-300 hover:text-[#A9B8B8]"
                    >
                      {item.title}
                    </NavLink>

                    <CaretDown
                      size={12}
                      weight="bold"
                      className="text-white duration-300 group-hover:text-[#A9B8B8]"
                    />
                  </div>

                  {/* DROPDOWN */}
                  <div className="invisible absolute left-0 top-[180%] min-w-[300px] translate-y-4 rounded-2xl bg-[#0d0d0d] p-3 opacity-0 shadow-[0_20px_60px_rgba(0,0,0,0.2)] duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex flex-col gap-1">
                      {item.links.map((link, i) => (
                        <NavLink
                          key={i}
                          to={link.path}
                          className={({ isActive }) =>
                            `group/item flex items-center justify-between rounded-xl px-4 py-3 text-[15px] duration-300 ${
                              isActive
                                ? "bg-[#111] font-semibold text-[#F49A19]"
                                : "text-[#d6d6d6] hover:bg-[#111] hover:text-[#F49A19]"
                            }`
                          }
                        >
                          <span>{link.name}</span>

                          <ArrowRight
                            size={14}
                            weight="bold"
                            className="translate-x-[-8px] opacity-0 duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                          />
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* SERVICE DROPDOWN */}
              {serviceItems.map((item, index) => (
                <div key={index} className="group relative">
                  
                  <div className="flex cursor-pointer items-center gap-1">
                    <NavLink
                      to=""
                      className="relative z-20 px-1 py-[29px] font-medium text-white transition-all duration-300 hover:text-[#A9B8B8]"
                    >
                      {item.title}
                    </NavLink>

                    <CaretDown
                      size={12}
                      weight="bold"
                      className="text-white duration-300 group-hover:text-[#A9B8B8]"
                    />
                  </div>

                  {/* DROPDOWN */}
                  <div className="invisible absolute left-0 top-[180%] min-w-[300px] translate-y-4 rounded-2xl bg-[#0d0d0d] p-3 opacity-0 shadow-[0_20px_60px_rgba(0,0,0,0.2)] duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex flex-col gap-1">
                      {item.links.map((link, i) => (
                        <NavLink
                          key={i}
                          to={link.path}
                          className={({ isActive }) =>
                            `group/item flex items-center justify-between rounded-xl px-4 py-3 text-[15px] duration-300 ${
                              isActive
                                ? "bg-[#111] font-semibold text-[#F49A19]"
                                : "text-[#d6d6d6] hover:bg-[#111] hover:text-[#F49A19]"
                            }`
                          }
                        >
                          <span>{link.name}</span>

                          <ArrowRight
                            size={14}
                            weight="bold"
                            className="translate-x-[-8px] opacity-0 duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                          />
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* PORTFOLIO */}
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `relative z-20 px-1 py-[29px] font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[#A9B8B8]"
                      : "text-white hover:scale-110 hover:text-[#A9B8B8]"
                  }`
                }
              >
                Portfolio
              </NavLink>

              {/* BLOG */}
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `relative z-20 px-1 py-[29px] font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[#A9B8B8]"
                      : "text-white hover:scale-110 hover:text-[#A9B8B8]"
                  }`
                }
              >
                Blog
              </NavLink>

              {/* CONTACT */}
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `relative z-20 px-1 py-[29px] font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[#A9B8B8]"
                      : "text-white hover:scale-110 hover:text-[#A9B8B8]"
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>

            {/* RIGHT */}
            <div className="hidden items-center justify-end md:py-4 lg:flex">
              <div className="flex gap-5">
                
                {/* SEARCH BUTTON */}
                <button
                  onClick={() => setShowSearch(true)}
                  className="cursor-pointer flex items-center justify-center rounded-full bg-[#ECF0F0] p-2 text-black transition-all duration-300 hover:bg-[#F49A19] hover:text-white lg:p-[14px]"
                >
                  <MagnifyingGlassIcon size={20} weight="bold" />
                </button>

                {/* CTA */}
                <button className="group/btn flex w-fit cursor-pointer items-center gap-2 rounded-full border border-[#1A8888] bg-[#1A8888] pl-6 pr-[5px] text-white duration-300 hover:border-white hover:bg-transparent hover:shadow-[0px_0px_10px_1px_#00000026] lg:py-[5px]">
                  <span className="text-xs font-semibold text-white transition-colors duration-300 group-hover/btn:text-[#F49A19] sm:text-sm md:text-base">
                    Let's Talk
                  </span>

                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F49A19] text-white transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:bg-[#1A8888] lg:h-8 lg:w-8">
                    <ArrowUpRightIcon size={20} weight="bold" />
                  </div>
                </button>
              </div>
            </div>

            {/* MOBILE */}
            <div className="flex items-center justify-end gap-1 lg:hidden">
              
              {/* SEARCH */}
              <button
                onClick={() => setShowSearch(true)}
                className="flex items-center justify-center rounded-full bg-[#ECF0F0] p-2 text-black transition-all duration-300 hover:bg-[#F49A19] hover:text-white"
              >
                <MagnifyingGlassIcon size={20} weight="bold" />
              </button>

              {/* MENU */}
              <button
                className="mt-4 flex lg:hidden h-16 w-16 items-center justify-end rounded-lg bg-transparent"
                onClick={() => setOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#1A8888"
                  stroke="#1A8888"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`fixed right-0 top-0 z-50 h-screen w-[280px] overflow-y-auto bg-black/20 shadow-lg backdrop-blur-md transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setOpen(false)}
            className="ml-6 my-6 rounded-full bg-[#1F6B5A] px-2.5 py-1 text-xl text-white"
          >
            ✕
          </button>

          <div className="flex flex-col gap-2">
            
            {/* HOME */}
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `relative z-20 px-6 py-2 text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "font-bold text-[#F49A19]"
                    : "text-white hover:font-bold hover:text-[#F49A19]"
                }`
              }
            >
              Home
            </NavLink>

            {/* PAGES */}
            {[...menuItems, ...serviceItems].map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index}>
                  <div
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex cursor-pointer items-center justify-between"
                  >
                    <div className="flex-1 px-6 py-3 text-base font-[550] text-white">
                      {item.title}
                    </div>

                    <div
                      className={`px-4 text-[#F49A19] duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <CaretDown size={16} weight="bold" />
                    </div>
                  </div>

                  {/* DROPDOWN */}
                  <div
                    className={`overflow-hidden duration-300 ${
                      isOpen
                        ? "mt-2 max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="rounded-sm bg-[#111] p-2">
                      <div className="flex flex-col gap-1">
                        {item.links.map((link, i) => (
                          <NavLink
                            key={i}
                            to={link.path}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                              `group/item flex items-center justify-between rounded-xl px-4 py-3 text-base duration-300 ${
                                isActive
                                  ? "bg-[#111] font-semibold text-[#F49A19]"
                                  : "text-[#d6d6d6] hover:bg-[#111] hover:text-[#F49A19]"
                              }`
                            }
                          >
                            <span>{link.name}</span>

                            <ArrowRight
                              size={14}
                              weight="bold"
                            />
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* PORTFOLIO */}
            <NavLink
              to="/portfolio"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `relative z-20 px-6 py-2 text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "font-bold text-[#F49A19]"
                    : "text-white hover:font-bold hover:text-[#F49A19]"
                }`
              }
            >
              Portfolio
            </NavLink>

            {/* BLOG */}
            <NavLink
              to="/blog"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `relative z-20 px-6 py-2 text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "font-bold text-[#F49A19]"
                    : "text-white hover:font-bold hover:text-[#F49A19]"
                }`
              }
            >
              Blog
            </NavLink>

            {/* CONTACT */}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `relative z-20 px-6 py-2 text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "font-bold text-[#F49A19]"
                    : "text-white hover:font-bold hover:text-[#F49A19]"
                }`
              }
            >
              Contact
            </NavLink>
            {/* CTA */}
                <button className="group/btn lg:hidden flex w-fit ml-6 mt-2 cursor-pointer items-center gap-2 rounded-full border border-[#1A8888] bg-[#1A8888] text-white duration-300 hover:border-white hover:bg-transparent hover:shadow-[0px_0px_10px_1px_#00000026] py-1 px-2">
                  <span className="text-xs font-semibold text-white transition-colors duration-300 group-hover/btn:text-[#F49A19] sm:text-sm lg:text-base">
                    Let's Talk
                  </span>

                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F49A19] text-white transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:bg-[#1A8888] lg:h-8 lg:w-8">
                    <ArrowUpRightIcon size={20} weight="bold" />
                  </div>
                </button>
          </div>
        </div>

        {/* OVERLAY */}
        {open && (
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setOpen(false)}
          />
        )}
      </header>

      {/* SEARCH MODAL */}
      {showSearch && (
        <div className="fixed inset-0 z-[999] flex items-start justify-center bg-black/70 px-4 pt-24 backdrop-blur-md">
          
          <div className="w-full max-w-[700px] rounded-2xl border border-white/10 bg-[#071416] p-6 shadow-[0_20px_100px_rgba(0,0,0,0.5)]">
            
            {/* TOP */}
            <div className="flex items-center justify-between gap-4">
              
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search blogs..."
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(e.target.value)
                  }
                  className="h-[60px] w-full rounded-full border border-white/10 bg-white/5 pl-14 pr-5 text-white outline-none placeholder:text-white/40 focus:border-[#1A8888]"
                />

                <MagnifyingGlassIcon
                  size={20}
                  weight="bold"
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-white/50"
                />
              </div>

              <button
                onClick={() => setShowSearch(false)}
                className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#1A8888] text-white transition-all duration-300 hover:bg-[#F49A19]"
              >
                <X size={22} />
              </button>
            </div>

            {/* RESULTS */}
            <div className="mt-6 max-h-[400px] overflow-y-auto">
              
              {searchQuery.length > 0 ? (
                filteredBlogs.length > 0 ? (
                  <div className="flex flex-col gap-3">
                    {filteredBlogs.map((blog) => (
                      <a
                        key={blog.id}
                        href={blog.link}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-[#1A8888] hover:bg-white/[0.05]"
                      >
                        <h3
                          className="text-lg font-medium text-white"
                          dangerouslySetInnerHTML={{
                            __html: blog.title.rendered,
                          }}
                        />

                        <p className="mt-2 text-sm text-[#A9B8B8]">
                          Open Blog →
                        </p>
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="py-10 text-center text-white/50">
                    No blogs found
                  </p>
                )
              ) : (
                <p className="py-10 text-center text-white/50">
                  Search blog titles...
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}