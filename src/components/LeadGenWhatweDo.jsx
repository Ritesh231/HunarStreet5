
import React, { useState } from "react";
export default function StrategyChannelsSection() {
    const [activeIndex, setActiveIndex] = useState(null);
    const features = [
        {
            text: "ICP-based prospect list building using LinkedIn Sales Navigator and verified CRM tools",
        },
        {
            text: "Personalised, multi-step outreach content for LinkedIn and email - reviewed and approved by you",
        },
        {
            text: "LinkedIn connection campaigns and follow-up message sequences",
        },
        {
            text: "Email infrastructure setup, domain warming, and deliverability monitoring",
        },
        {
            text: "A/B testing of content and subject Lines, powerful & effective response management & engaging with each reply meaningfully",
        },
        {
            text: "Regular performance reporting and campaign optimisation",
        },
    ];

    return (
        <section className="w-full bg-gradient-to-b from-[#F0F6FE] to-white text-[#0A2540] py-16 px-4 sm:px-6 lg:px-16 relative overflow-hidden">


            <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">

                {/* Top Tag */}
                <span className="bg-[#D2E3FC] text-[#1A73E8] text-[10px] sm:text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-md mb-4 shadow-sm">
                    What we do ?
                </span>

                {/* Header Typography */}
                <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-semibold text-center tracking-tight text-[#0A2540] leading-tight max-w-2xl">
                    One Strategy. Two Powerful <br className="hidden sm:inline" />
                    <span className="text-[#FAC207] el-messiri relative inline-block mt-4 sm:mt-4">
                        Channels
                        {/* Custom vector underline accent */}
                        <img src="/Rectangle 123.png" alt="" />
                    </span>
                </h2>

                {/* Context Subheading */}
                <p className="text-black text-center text-xs sm:text-[17px]   leading-relaxed mt-6 mb-12 px-2">
                    We combine LinkedIn outreach and email campaigns into a single coordinated growth system<br />designed to generate qualified conversations and predictable pipeline growth.
                </p>

                {/* Feature Grid Matrix */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`cursor-pointer flex items-start gap-4 p-5 sm:p-6 rounded-2xl transition-all duration-300 border transform hover:-translate-y-1
${activeIndex === index
                                    ? 'bg-[#FAC207] text-[#0A2540] border-[#FAC207] shadow-lg'
                                    : 'bg-white text-[#0A2540] border-[#FAC2075E] shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:bg-[#FAC207] hover:text-[#0A2540] hover:border-[#FAC207] hover:shadow-lg'
                                }`}
                        >
                            <div
                                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 border mt-0.5 transition-all duration-300
    ${activeIndex === index
                                        ? 'border-[#0A2540]'
                                        : 'border-gray-300 group-hover:border-[#0A2540]'
                                    }`}
                            >
                                <svg
                                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-none stroke-current"
                                    strokeWidth="2.5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>
                            </div>

                            <p
                                className={`text-xs sm:text-[17px] font-semibold leading-relaxed tracking-wide
            ${activeIndex === index
                                        ? 'text-[#0A2540]'
                                        : 'text-slate-600'
                                    }`}
                            >
                                {feature.text}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}