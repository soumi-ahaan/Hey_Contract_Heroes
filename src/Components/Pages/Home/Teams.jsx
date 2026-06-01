import member1 from "../../../assets/member1.png";
import member2 from "../../../assets/member2.png";
import member3 from "../../../assets/member3.png";
import member4 from "../../../assets/member4.png";
import member5 from "../../../assets/member5.png";


export default function Teams() {
    const teamMembers = [
        {
            name: "Savannah Ngueen",
            role: "Chief Executive",
            image: member1,
        },
        {
            name: "Emma Richardson",
            role: "Chief Executive",
            image: member2,
        },
        {
            name: "Eade Marren",
            role: "Chief Executive",
            image: member3,
        },
        {
            name: "Caleb Turner",
            role: "Chief Executive",
            image: member4,
        },
        {
            name: "Nathan Price",
            role: "Chief Executive",
            image: member5,
        },
        {
            name: "Nathaniel Ellington",
            role: "Chief Executive",
            image: member1,
        },
    ];

    return (
        <section className="relative overflow-hidden bg-[#0C1E21]">
       
            {/* CENTER TEAL GLOW */}
<div className="pointer-events-none absolute left-1/2 top-[58%] z-0 w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0E7C86]/40 blur-[120px]" />
            {/* CONTAINER */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20 xl:px-[107px] py-[60px] xl:py-[121px] relative z-10">

                {/* TITLE */}
                <div className="mx-auto md:max-w-[650px] text-center">
                    <h3 className="text-[28px]  md:text-4xl xl:text-5xl font-bold leading-snug text-white font-heading">
                        The People Empowering
                        <br />

                        <span className="bg-[linear-gradient(30deg,#A3167F_0%,#F49A19_80%)] bg-clip-text text-transparent">
                            Business Level.
                        </span>
                    </h3>
                </div>

                {/* TEAM GRID */}
                <div className="mt-[70px] md:mt-[90px] xl:mt-[120px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-[29px] gap-x-[47px]">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}

                            className="group relative overflow-hidden rounded-full bg-[#FFFFFF1A] backdrop-blur-md transition-all duration-500 ">

{(index === 0 || index === 3) && (
  <div className="absolute inset-0 bg-gradient-to-r from-[#02181C] via-[#02181C]/20 to-transparent z-[1]" />
)}

{(index === 2 || index === 5) && (
  <div className="absolute inset-0 bg-gradient-to-l from-[#02181C] via-[#02181C]/20 to-transparent z-[1]" />
)}

                            {/* CARD CONTENT */}
                            <div className="flex items-center justify-between pl-4 md:pl-8">

                                {/* TEXT */}
                                <div >
                                    <h3 className="text-xl font-semibold text-white pt-2 md:pt-4">
                                        {member.name}
                                    </h3>

                                    <p className="mt-2 text-sm text-[#A9B8B8] pb-2 md:pb-4">
                                        {member.role}
                                    </p>
                                </div>

                                {/* IMAGE */}
                                <div className="relative shrink-0">

                                    {/* CIRCLE BG */}
                                
                                    <div className="relative w-16 h-16 md:h-20 md:w-20 overflow-hidden pr-1 -mt-1">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* HOVER GRADIENT */}
                            <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100 bg-[linear-gradient(90deg,rgba(19,182,200,0.08)_0%,rgba(244,154,25,0.06)_100%)]" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}