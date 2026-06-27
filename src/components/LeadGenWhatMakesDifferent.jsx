import { useState } from "react";
import Schedule from "./Schedule";
const WhatMakesUsDifferent = () => {
    const [showSchedule, setShowSchedule] = useState(false);

    return (
        <section className="w-full min-h-screen bg-[#F9F9FB] flex items-center justify-center p-6 md:p-12 lg:p-20 relative ">
            <img src="/Rectangle 4(1).png" alt="" className="absolute top-0 left-0 w-full h-full object-cover z-0" />

            <div className=" w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                {/* Left Side: Dummy Image Space */}
                <div className="lg:col-span-5 flex justify-center items-center w-full mx-auto lg:mx-0 relative">

                    {/* Main Image Placeholder */}
                    <img
                        src="/MakesDifferent.png"
                        alt=""
                        className="w-[350px] md:w-[500px] lg:w-[430px] xl:w-[550px] max-w-none"
                    />
                </div>

                {/* Right Side: Text & Content */}
                <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left z-10">

                    {/* Top Tag */}
                    <div>
                        <span className="inline-block  bg-[#DCE7FF] text-[#1E3A8A] text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-md shadow-sm">
                            What Makes Us Different ?
                        </span>
                    </div>

                    {/* Section Heading */}
                    <div className="relative inline-block">
                        <h2 className="text-3xl whitespace-nowrap sm:text-[44px] lg:text-5xl font-semibold text-[#0B1B3D] tracking-tight">
                            What Makes Us <span className="text-[#FFBF00] relative el-messiri inline-block">Different ?
                                <img src="/Rectangle 123.png" className="hidden md:block" alt="" />
                            </span>
                        </h2>

                    </div>

                    {/* Cards Container */}
                    <div className="space-y-4 pt-2">

                        {/* Card 1 */}
                        <div className="bg-[#E9F0FE] border border-[#D0E0FC] rounded-2xl p-5 sm:p-6 flex items-start space-x-4 shadow-sm transition-transform duration-300 hover:translate-x-1">
                            <div className="flex-shrink-0 mt-1 bg-white rounded-full p-1 border border-blue-200">
                                <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-base sm:text-lg font-bold text-[#0B1B3D]">
                                    Strategy-Driven Outreach That Gets Responses
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mt-1">
                                    Personalized content, precise targeting, and meaningful lead qualification that turns outreach into genuine sales opportunities.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#F5F2E6] border border-[#EBE3CD] rounded-2xl p-5 sm:p-6 flex items-start space-x-4 shadow-sm transition-transform duration-300 hover:translate-x-1">
                            <div className="flex-shrink-0 mt-1 bg-white rounded-full p-1 border border-amber-200">
                                <svg className="w-5 h-5 text-emerald-800" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-base sm:text-lg font-bold text-[#0B1B3D]">
                                    Dedicated Team, Transparent Execution & Qualified Leads.
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mt-1">
                                    A dedicated campaign team, clear weekly reporting, and coordinated LinkedIn + email outreach designed to deliver predictable pipeline growth.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Call to Action Button */}
                    <div className="pt-2">
                        <button onClick={() => setShowSchedule(true)} className="bg-[#FFBF00] el-messiri hover:bg-[#E6AC00] text-[#0B1B3D] font-bold text-sm px-6 py-3 rounded-lg shadow-md shadow-yellow-500/20 flex items-center space-x-2 group transition-all duration-200 active:scale-95">
                            <span>Connect Now</span>
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
            <Schedule isDemoOpen={showSchedule} setIsDemoOpen={setShowSchedule} />
        </section>
    );
};

export default WhatMakesUsDifferent;