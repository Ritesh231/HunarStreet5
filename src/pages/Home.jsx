import { FaTelegramPlane } from "react-icons/fa";
import Navbar from '../components/Navbar';
import { useNavigate } from "react-router-dom";

export default function LandingHero() {
    const navigate = useNavigate();
    return (
        <div id="home"
            className="w-full h-screen md:overflow-hidden bg-white text-slate-800 flex flex-col justify-between select-none relative"
            style={{ fontFamily: "'Segoe UI', sans-serif" }}
        >
            {/* Background Decorative Ellipses */}
            <img src="/Ellipse 25.svg" alt="" className='absolute -bottom-56 left-0 w-48 h-[700px] object-cover z-10 lg:block hidden  z-10' />
            <img src="/Ellipse 26.png" alt="" className='absolute -top-96 right-0 w-96 h-[2000px] object-cover z-10 lg:block hidden' />

            <Navbar />

            {/* --- HERO HEADER SECTION --- */}
            <section className="w-full   [@media(width:853px)_and_(height:1280px)]:-mt-64 max-w-3xl px-4 md:px-6 lg:px-6  mx-auto text-center justify-center items-center shrink-0 mb-8 lg:mb-12  relative flex flex-col items-center">
                {/* Badge row with megaphone */}
                <div className="flex items-center gap-2 mb-3 -ml-0">

                    <span className="bg-[#FFCC00] text-[#0B2240] mt-8 text-[12px] font-black px-4 py-1.5 rounded-md tracking-wide uppercase shadow-sm">
                        One Partner. Two Growth Solutions.
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl  text-[#041C3E] font-semibold tracking-tight leading-tight mb-3 whitespace-nowrap">
                    Build. Grow.{' '}
                    <span
                        className="text-[#FFCC00] el-messiri relative inline-block pb-1"
                        style={{
                            backgroundImage: "url('/Rectangle 123.png')",
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center calc(100% + 6px)',
                            backgroundSize: '150% 12px'
                        }}
                    >
                        Succeed.
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-black text-xs md:text-sm max-w-md mx-auto leading-relaxed px-2">
                    We help businesses hire top talent and generate qualified opportunities to accelerate growth.
                </p>

                {/* Decorative curved arrows (Desktop Only) */}
                {/* <img
                    src="/Arrow 6.svg"
                    alt=""
                    className="hidden lg:block absolute left-[-10px] top-[100px] w-24 h-24 pointer-events-none -mt-4"
                />

                <img
                    src="/Arrow 05.svg"
                    alt=""
                    className="hidden lg:block absolute right-[-10px] top-[100px] w-24 h-24 pointer-events-none -mt-4"
                /> */}


            </section>

            {/* =========================================================
            DESKTOP VIEWPORT: Only visible on desktop screens (lg up)
            ========================================================= */}
            <main
                id="solution"
                className="hidden  lg:grid lg:px-8 w-full p-2 -mt-16 xl:-mt-24 mx-auto flex-1 grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-stretch relative pb-16"
            >
                {/* Center Hub Logo with Connection Dotted Lines */}
                <img src="/Middle.svg" alt="" className="absolute w-32 h-32 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30" />

                {/* --- DESKTOP LEFT: RECRUITMENT --- */}
                <div
                    className="relative rounded-[2.5rem] flex flex-col md:flex-row justify-between p-8 xl:p-10 group overflow-visible"
                    style={{
                        backgroundImage: "url('/Vector 13.png')",
                        backgroundSize: "100% 100%",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        minHeight: "280px",
                    }}
                >
                    {/* <div className="absolute -top-10 left-8 w-28 h-28 bg-white rounded-full border border-blue-300 z-20 flex items-center justify-center shadow-[0_-6px_20px_rgba(66,133,244,0.18)]">
                        <img src="/team1.png" alt="Team" className="w-14 h-14 object-contain" />
                    </div> */}
                    <div className="flex flex-col justify-center gap-2 z-10 max-w-[50%] mt-4 md:mt-0">
                        <h2 className="text-3xl sm:text-4xl lg:text-[40px] 2xl:text-5xl font-semibold text-[#0B2240] leading-[1.1]">We Do <br /> Recruitment</h2>
                        <p className="text-sm 2xl:text-lg font-semibold my-2">Find The Right Talents. <br /> Build Stronger Teams.</p>
                        <div className="relative inline-flex">
                            <button
                                onClick={() => navigate("/recruitment")}
                                className="relative z-10 bg-[#0B2240] hover:bg-[#123159] rounded-lg text-white text-sm px-2 py-2.5 flex items-center gap-2 w-fit transition-all duration-300 border border-[#0B2240]"
                                style={{ boxShadow: "0 6px 8px 0 #4285F4BD" }}
                            >
                                Explore Recruitment
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>
                    </div>

                    {/* Hunarhome1 image with blue polygon glow behind */}
                    <div className="w-full md:w-[50%] h-64 md:h-full flex items-end justify-end z-10 mt-4 md:-mt-4">
                        <div className="absolute -bottom-0 right-0 z-10 pointer-events-none">
                            {/* Blue star/polygon glow behind image */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 0 }}>
                                {/* Blue organic blob glow behind Hunarhome1 */}
                                <svg width="320" height="320" viewBox="0 0 400 380" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <defs>
                                        <filter id="blueBlur">
                                            <feGaussianBlur stdDeviation="18" />
                                        </filter>
                                    </defs>
                                    {/* Outer soft glow */}
                                    <path
                                        d="M200,20 C260,10 340,40 370,100 C400,160 390,220 360,270 C330,320 280,360 220,365 C160,370 90,345 55,290 C20,235 15,160 40,105 C65,50 140,30 200,20 Z"
                                        fill="#72a2efff"
                                        opacity="0.10"
                                        filter="url(#blueBlur)"
                                    />
                                    {/* Inner stronger glow */}
                                    <path
                                        d="M200,40 C255,30 325,58 352,112 C378,166 368,222 340,268 C312,314 265,348 210,352 C155,356 92,333 62,282 C32,231 30,163 52,112 C74,61 145,50 200,40 Z"
                                        fill="#4285F4"
                                        opacity="0.13"
                                        filter="url(#blueBlur)"
                                    />
                                </svg>
                            </div>

                            <img
                                src="/Group 1000001776.png"
                                className="relative z-10 w-[420px] lg:w-[200px]   xl:w-[300px] 2xl:w-[360px] h-auto object-contain"
                            />

                        </div>
                    </div>
                </div>

                {/* --- DESKTOP RIGHT: LEAD GENERATION --- */}
                <div
                    className="relative rounded-[2.5rem] flex flex-col md:flex-row-reverse justify-between p-8 lg:p-10 group overflow-visible bg-no-repeat"
                    style={{
                        backgroundImage: "url('/Vector 14.png')",
                        backgroundSize: "100% 100%",
                        backgroundPosition: "center",
                        minHeight: "280px",
                    }}
                >
                    {/* <div className="absolute -top-8 right-8 w-24 h-24 bg-white rounded-full border border-amber-100 z-20 flex items-center justify-center shadow-[0_0_0_1px_rgba(250,194,7,0.15),0_0_15px_rgba(250,194,7,0.25),0_0_30px_rgba(250,194,7,0.18)]">
                        <div className="w-24 h-24 rounded-full flex items-center justify-center">
                            <FaTelegramPlane className="text-4xl text-[#FAC207] rotate-12" />
                        </div>
                    </div> */}
                    <div className="flex flex-col justify-center items-end text-right gap-2 z-10 max-w-[50%] mt-6 md:mt-0">
                        <h2 className="text-3xl sm:text-4xl lg:text-[40px] 2xl:text-5xl font-semibold text-[#0B2240] leading-[1.1]">
                            <span className="text-[#FAC207]">We Do</span> <br />
                            <span className="text-[#FAC207] whitespace-nowrap">Lead Generation</span>
                        </h2>
                        <p className="text-black text-sm 2xl:text-lg whitespace-nowrap font-semibold my-2">Generate Qualified Leads. <br /> Fuel Your Sales Pipeline.</p>
                        <button
                            onClick={() => navigate("/lead-generation")}
                            className="bg-[#FFCC00] whitespace-nowrap hover:bg-[#e6b800] text-[#0B2240] text-sm px-3 py-2.5 rounded-xl flex items-center gap-2 w-fit transition-all duration-300"
                            style={{ boxShadow: "0 0 25px rgba(255,204,0,0.45), 0 8px 16px rgba(0,0,0,0.30)" }}
                        >
                            Explore Lead Generation <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>

                    {/* Hunarhome2 image with yellow polygon glow behind */}
                    <div className="w-full md:w-[50%] h-64 md:h-full flex items-end justify-start z-10 mt-4 md:mt-0">
                        <div className="absolute -bottom-4 lg:-left-10 xl:-left-12 -left-24 z-10 pointer-events-none">
                            {/* Yellow star/polygon glow behind image */}
                            <svg width="320" height="320" viewBox="0 0 400 380" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <defs>
                                    <filter id="blueBlur">
                                        <feGaussianBlur stdDeviation="18" />
                                    </filter>
                                </defs>
                                {/* Outer soft glow */}
                                <path
                                    d="M200,20 C260,10 340,40 370,100 C400,160 390,220 360,270 C330,320 280,360 220,365 C160,370 90,345 55,290 C20,235 15,160 40,105 C65,50 140,30 200,20 Z"
                                    fill="#fac207"
                                    opacity="0.10"
                                    filter="url(#blueBlur)"
                                />
                                {/* Inner stronger glow */}
                                <path
                                    d="M200,40 C255,30 325,58 352,112 C378,166 368,222 340,268 C312,314 265,348 210,352 C155,356 92,333 62,282 C32,231 30,163 52,112 C74,61 145,50 200,40 Z"
                                    fill="#fac207"
                                    opacity="0.13"
                                    filter="url(#blueBlur)"
                                />
                            </svg>
                            <img
                                src="/leader.png"
                                className="relative z-10 w-[340px]   lg:w-[240px] xl:w-[300px] 2xl:w-[400px]  h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </main>

            {/* =========================================================
            MOBILE & TABLET VIEWPORT CONTAINER: (Visible on everything below 1024px)
            ========================================================= */}
            <main className="lg:hidden  [@media(width:853px)_and_(height:1280px)]:-mt-64  w-full flex flex-col gap-12 px-4 md:px-12 pb-12 relative z-20 max-w-2xl mx-auto">

                {/* --- MOBILE/TABLET RECRUITMENT CARD --- */}
                <div className="relative  rounded-[2rem] bg-[#F4F8FF] border border-blue-50 p-6 md:p-8 pt-8 flex flex-col justify-between bg-no-repeat bg-cover shadow-sm">

                    {/* Inner Container */}
                    <div className="flex  flex-col sm:flex-row sm:items-center justify-between gap-8 w-full">
                        {/* Text Content - Full width on mobile */}
                        <div className="w-full sm:w-[55%] text-center flex flex-col gap-2 z-10 items-center sm:items-start">
                            <h2 className="text-2xl md:text-4xl font-semibold text-[#0B2240] leading-tight">
                                We Do Recruitment
                            </h2>
                            <p className="text-slate-700 text-xs md:text-sm font-semibold">
                                Find The Right Talents. <br /> Build Stronger Teams.
                            </p>
                            {/* FIXED: Changed w-96 and w-fit to w-full sm:w-auto */}
                            <button
                                onClick={() => navigate("/recruitment")}
                                className="bg-[#0B2240] text-white text-xs md:text-sm font-semibold px-4 py-3 rounded-lg flex items-center justify-center gap-2 w-56 sm:w-auto mt-2 shadow-md hover:bg-opacity-90 transition-all cursor-pointer border-none"
                            >
                                Explore Recruitment <span>→</span>
                            </button>
                        </div>

                        {/* Illustration - Full width on mobile, right-aligned */}
                        <div className="w-full sm:w-[45%] flex justify-center sm:justify-end items-end sm:mt-0">
                            <img
                                src="/Group 1000001776.png"
                                alt="Recruitment Illustration"
                                className="w-full max-w-[360px] h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* --- MOBILE/TABLET LEAD GENERATION CARD --- */}
                <div className="relative  [@media(width:853px)_and_(height:1280px)]:mb-64 rounded-[2rem] bg-[#FFFBEB] border border-amber-50 p-6 md:p-8 pt-14 flex flex-col justify-between bg-no-repeat bg-cover shadow-sm">

                    {/* Inner Container */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 w-full">
                        {/* Text Content - Full width on mobile */}
                        <div className="w-full sm:w-[55%] text-center flex flex-col items-center sm:items-start  gap-2 z-10 order-1 sm:order-2">
                            <h2 className="text-2xl md:text-3xl font-semibold text-[#0B2240] leading-tight">
                                <span className="text-[#FAC207]">We Do Lead Generation</span>
                            </h2>
                            <p className="text-slate-600 text-xs md:text-sm font-semibold">
                                Generate Qualified Opportunities. <br /> Fuel Your Sales Pipeline.
                            </p>
                            {/* FIXED: Changed w-fit to w-full sm:w-auto */}
                            <button onClick={() => navigate("/lead-generation")} className="bg-[#FFCC00] text-[#0B2240] text-xs md:text-sm font-bold px-4 py-3 rounded-lg flex items-center justify-center gap-2 w-56 sm:w-auto mt-2 shadow-md hover:bg-opacity-90 transition-all cursor-pointer border-none">
                                Explore Lead Generation <span>→</span>
                            </button>
                        </div>

                        {/* Illustration - Full width on mobile, left-aligned */}
                        <div className="w-full sm:w-[45%] flex justify-center sm:justify-start items-end mt-4 sm:mt-0 order-2 sm:order-1">
                            <img
                                src="/leader.png"
                                alt="Lead Generation Illustration"
                                className="w-full max-w-[360px] h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
