import { useState } from "react";
import Schedule from "../components/Schedule";

const IndustriesAndGrowthHub = () => {
    const [showSchedule, setShowSchedule] = useState(false);

    const industries = [
        {
            title: <>Fintech &amp; Financial<br />Services</>,
            desc: "payment platforms, lending, wealth management",
        },
        {
            title: <>Marketing Technology<br />(MarTech)</>,
            desc: "agencies, ad-tech platforms, and analytics tools",
        },
        {
            title: <>HR<br />Technology</>,
            desc: "workforce management, payroll, talent assessment, and employee engagement platforms",
        },
        {
            title: <>EdTech &amp;<br />Corporate Learning</>,
            desc: "online training platforms and professional development tools for businesses",
        },
        {
            title: <>SaaS &amp;<br />Cloud Platforms</>,
            desc: "B2B software, cloud infrastructure, and DevOps tooling companies",
        },
        {
            title: <>HealthTech &amp;<br />MedTech</>,
            desc: "digital health platforms, telemedicine, and medical device companies",
        },
    ];

    const workflowNodes = [
        { id: 1, title: "ICP Definition", isYellow: false },
        { id: 2, title: "Prospect List Building", isYellow: false },
        { id: 3, title: "Content Campaign", isYellow: true },
        { id: 4, title: "Email Campaigns", isYellow: false },
        { id: 5, title: "Response management", isYellow: false },
        { id: 6, title: "Dedicated team members", isYellow: true },
        { id: 7, title: "LinkedIn Outreach", isYellow: false },
        { id: 8, title: "Lead Qualification", isYellow: false },
        { id: 9, title: "Relationship Manager", isYellow: false },
    ];

    const loopedIndustries = [...industries, ...industries];

    return (
        <section className="w-full bg-[#031430] text-white py-16 relative overflow-hidden select-none">

            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="mx-auto text-center mb-12 relative z-10 px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-[44px] font-semibold tracking-tight text-white mb-3">
                    Industries We've{" "}
                    <span className="text-[#FFC700] el-messiri relative inline-block">
                        Worked
                        <img
                            src="/Rectangle 123.png"
                            alt=""
                            className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-36 sm:w-36"
                        />
                    </span>{" "}
                    With
                </h2>
                <p className="text-xs sm:text-[17px] text-white mx-auto mt-4 px-4">
                    We've run campaigns across some of the most active and high-growth B2B verticals, including
                </p>
            </div>

            <div
                className="relative z-10"
                style={{
                    maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                }}
            >
                <div className="marquee-track flex gap-5 w-max">
                    {loopedIndustries.map((ind, idx) => (
                        <div
                            key={idx}
                            className="w-[280px] sm:w-[300px] flex-shrink-0 bg-[#D9D9D921] border border-slate-700/50 rounded-2xl p-6 text-left backdrop-blur-sm shadow-xl flex flex-col justify-between hover:border-[#FFC700]/50 hover:shadow-[0_0_25px_rgba(255,199,0,0.1)] transition-all duration-300 group cursor-default"
                        >
                            <div>
                                <div className="flex items-start space-x-3 mb-4">
                                    <div className="w-[3px] h-6 bg-[#FFC700] rounded-full shrink-0 mt-0.5" />
                                    <h3 className="text-sm font-semibold text-[#FFC700] tracking-wide group-hover:text-amber-300 transition-colors">
                                        {ind.title}
                                    </h3>
                                </div>
                                <p className="text-xs sm:text-sm mt-6 text-slate-400 leading-relaxed font-medium">
                                    {ind.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center mt-20 px-4 sm:px-6 lg:px-8">

                {/* MOBILE */}
                <div className="w-full md:hidden flex flex-col gap-4 px-4 py-6 max-w-md mx-auto relative z-20">

                    {/* --- CENTRAL MAIN CARD (Custom growth Package) --- */}
                    <div className="w-full bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.05)] flex flex-col items-center text-center relative overflow-hidden mb-2">
                        {/* Subtle yellow glow background effect behind the badge */}
                        <div className="absolute top-0 w-32 h-32 bg-[#FAC207]/10 rounded-full blur-2xl pointer-events-none -translate-y-1/2" />

                        {/* Golden Dollar Badge */}
                        <div className="w-14 h-14 bg-gradient-to-b from-amber-300 to-amber-500 rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(244,180,0,0.4)] mb-3 border border-amber-200 z-10 animate-pulse">
                            <span className="text-white font-black text-xl select-none">$</span>
                        </div>

                        {/* Typography Titles */}
                        <h4 className="text-lg font-bold text-[#051126] tracking-tight leading-tight">
                            Custom growth
                        </h4>
                        <span className="text-sm font-extrabold text-[#FFB800] mt-1 tracking-wide uppercase">
                            Package
                        </span>

                        {/* FIXED: Re-styled Get Quote Action Button */}
                        <button
                            onClick={() => setShowSchedule(true)}
                            className="w-full sm:w-auto mt-5 bg-[#FAC207] hover:bg-[#E09E00] text-[#051126] font-bold text-xs sm:text-sm px-6 py-3 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(250,194,7,0.4)] active:scale-98 transition-all duration-200 cursor-pointer border-none"
                        >
                            <span>Get Custom Quote</span>
                            <span className="font-black text-sm">→</span>
                        </button>
                    </div>

                    {/* --- WORKFLOW CARDS STACKED ONE DOWN TO ANOTHER --- */}
                    <div className="flex flex-col gap-2.5 w-full">
                        {workflowNodes.map((node) => (
                            <div
                                key={node.id}
                                className={`w-full rounded-xl p-4 flex items-center gap-3.5 border transition-all duration-200 ${node.isYellow
                                    ? 'bg-white border-slate-100 text-[#0B1B3D] shadow-sm'
                                    : 'bg-white border-slate-100 text-[#0B1B3D] shadow-sm'
                                    }`}
                            >
                                {/* Checkmark Icon Container Badge */}
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${node.isYellow
                                    ? ''
                                    : 'bg-slate-50 border-slate-200 text-slate-600'
                                    }`}>
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>

                                {/* Node Label Text */}
                                <span className="font-bold text-sm sm:text-[15px] tracking-tight">
                                    {node.title}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
                {/*New*/}
                {/* DESKTOP */}
                <div className="hidden md:block relative w-full h-[500px]">
                    <div className="w-full max-w-[300px] text-black rounded-3xl p-6 flex flex-col items-center text-center z-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <button
                            onClick={() => setShowSchedule(true)}
                            className="xl:mt-28  lg:mt-28 md:mt-28 md:ml-5 lg:ml-0   lg:w-40 bg-[#FAC207] hover:from-[#FFA800] hover:to-[#E69500] text-[#051126] font-semibold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center space-x-1 shadow-md shadow-amber-500/10 transition-all duration-200 active:scale-95 group"
                        >
                            <span>Get Custom Quote</span>
                            <span className="transform group-hover:translate-x-0.5 transition-transform font-bold">→</span>
                        </button>
                    </div>
                    <img src="/RecruChart.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-10 w-full" alt="" />
                </div>
            </div>

            <Schedule isDemoOpen={showSchedule} setIsDemoOpen={setShowSchedule} />

        </section>
    );
};

export default IndustriesAndGrowthHub;