import { useState } from "react";
import Schedule from "./Schedule";


const TrustedClients = () => {
    const [showSchedule, setShowSchedule] = useState(false)
    const logoCards = [
        {
            id: 1,
            gridPos: "col-start-3 row-start-1",
            logo: "/Logo1.jpeg",

        },
        {
            id: 2,
            gridPos: "col-start-1 col-span-2 row-start-2 row-span-2 is-large",
            logo: "/Logo2.jpeg",
            width: "w-36",
            height: "h-36"
        },
        {
            id: 3,
            gridPos: "col-start-3 row-start-2",
            logo: "/Logo3.jpeg",
            width: "w-36",
            height: "h-20"
        },
        {
            id: 4,
            gridPos: "col-start-4 row-start-2",
            logo: "/Logo4.jpeg",
            width: "w-64",
            height: "h-20"
        },
        {
            id: 5,
            gridPos: "col-start-5 row-start-2",
            logo: "/Metal Streets png.jpeg"
        },
        {
            id: 6,
            gridPos: "col-start-2 row-start-4",
            logo: "/Procedure png.jpeg",
            width: "w-36",
            height: "h-20"
        },
        {
            id: 7,
            gridPos: "col-start-3 row-start-3",
            logo: "/revrag png.jpeg"
        },
        {
            id: 8,
            gridPos: "col-start-4 row-start-3",
            logo: "/Agrim png.jpeg"
        },
        {
            id: 9,
            gridPos: "col-start-5 row-start-3",
            logo: "/Tyreplex png.png"
        },
        {
            id: 10,
            gridPos: "col-start-3 row-start-4",
            logo: "/Valyx png.jpeg"
        },
        {
            id: 11,
            gridPos: "col-start-3 row-start-4",
            logo: "/Amicco png.jpeg"
        },
        {
            id: 12,
            gridPos: "col-start-3 row-start-4",
            logo: "/Capgrid png.jpeg"
        },
        {
            id: 13,
            gridPos: "col-start-3 row-start-4",
            logo: "/Driversaab png.jpeg"
        },
        {
            id: 14,
            gridPos: "col-start-3 row-start-4",
            logo: "/Healthcred png.png",
            width: "w-64",
            height: "h-48"
        },
        {
            id: 15,
            gridPos: "col-start-3 row-start-4",
            text: "& many more...",
            width: "w-64",
            height: "h-48"
        }
    ];

    const mainLogos = logoCards.slice(0, 10);
    const extraLogos = logoCards.slice(10);

    return (
        <section className="w-full bg-[#031430] text-white py-16 px-6 sm:px-12 lg:px-20 relative overflow-hidden select-none">



            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                {/* =========================================================
            LEFT COLUMN: TEXT CONTENT & MARKETING BRANDING
            ========================================================= */}
                <div className="lg:col-span-5 space-y-6 relative z-10 text-left">

                    {/* Section Tag */}
                    <div className="inline-block  bg-[#2D436B] border border-blue-400/20 text-[#A5C2F4] text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-lg shadow-sm">
                        Our Clients
                    </div>

                    {/* Heading Container with Floating Megaphone Vector */}
                    <div className="relative pt-4">
                        {/* Absolute Megaphone Illustration position */}
                        {/* <div className="absolute top-[-60px] right-12 sm:right-32 lg:right-0 w-24 h-24 text-[#FFC700]  ">
                            <img src="/megaphone.svg" alt="" />
                        </div> */}

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                            Trusted By Leading <br />
                            <span className="text-[#FFC700] el-messiri relative inline-block mt-1">
                                Companies
                                {/* Underline Flourish Curve effect */}

                                <img
                                    src="/Rectangle 123.png"
                                    alt=""
                                    className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-48 sm:w-48"
                                />
                            </span>
                        </h2>
                    </div>

                    {/* Context Description paragraph */}
                    <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed max-w-md pt-2">
                        We've partnered with growing businesses, and established organizations to help them find the right talent and achieve their hiring goals.
                    </p>

                    {/* CTA Action Trigger */}
                    <div className="pt-4">
                        <button onClick={() => setShowSchedule(true)} className="bg-[#FFC700] hover:bg-[#E6B400] text-[#031430] font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-yellow-500/10 flex items-center space-x-2 group transition-all duration-200 active:scale-95">
                            <span>Join Us Now</span>
                            <span className="transform group-hover:translate-x-1 transition-transform font-bold">→</span>
                        </button>
                    </div>
                </div>

                {/* =========================================================
            RIGHT COLUMN: BENTO LAYOUT LOGO GRID
            ========================================================= */}
                <div className="lg:col-span-7 w-full flex justify-center items-center">

                    {/* Desktop/Tablet CSS Grid Container */}
                    <div className="hidden sm:grid grid-cols-5 gap-6 w-full max-w-[700px] mx-auto">
                        {logoCards.map((card) => (
                            <div
                                key={card.id}
                                className={
                                    card.logo
                                        ? "bg-white rounded-3xl h-[110px] flex items-center justify-center p-4 shadow-xl border border-white/20 transition-transform duration-300 hover:scale-105"
                                        : "h-[110px] flex items-center justify-center"
                                }
                            >
                                {card.logo ? (
                                    <img
                                        src={card.logo}
                                        alt="Company Logo"
                                        className={`
                                            object-contain
                                            ${card.width || "w-20"}
                                            ${card.height || "h-20"}
                                        `}
                                    />
                                ) : (
                                    <div className="text-center">
                                        <p className="text-[#FAC207] whitespace-nowrap font-bold text-lg">
                                            {card.text}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Clean Fluid Wrapping Grid Alternative */}
                    <div className="grid sm:hidden grid-cols-3 gap-3 w-full">
                        {logoCards.slice(0, 15).map((card) => (
                            <div
                                key={card.id}
                                className={
                                    card.logo
                                        ? "bg-white rounded-xl aspect-square p-2 flex items-center justify-center shadow-sm"
                                        : "aspect-square flex items-center justify-center"
                                }
                            >
                                {card.logo ? (
                                    <img
                                        src={card.logo}
                                        alt="Company Logo"
                                        className="w-12 h-12 object-contain"
                                    />
                                ) : (
                                    <p className="text-[#FAC207] whitespace-nowrap font-bold text-sm">
                                        {card.text}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                </div>

            </div>
            <Schedule isDemoOpen={showSchedule} setIsDemoOpen={setShowSchedule} />
        </section>
    );
};

export default TrustedClients;