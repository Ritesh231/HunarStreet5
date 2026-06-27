


export default function HeroSection({ isDemoOpen, setIsDemoOpen }) {


    const scrollToHowItWorks = () => {
        const section = document.getElementById("howitworks");

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <section className="relative w-full md:mt-32 lg:mt-12 xl:-mt-4  [@media(min-width:1280px)_and_(min-height:720px)]:mt-12 lg:h-[100vh] py-8 px-8 md:px-12 xl:px-14 bg-white lg:py-4 z-10 overflow-hidden">
            {/* Left Yellow Background Patch - Kept for Desktop */}
            <div className="absolute left-0 top-[180px] w-[420px] h-[620px] bg-gradient-to-r from-[#FAC2076E]/30 to-[#FAC2076E]/10 rounded-r-[250px] blur-[20px] z-0 hidden lg:block" />

            <div className=" mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10">

                {/* LEFT COLUMN: Content & CTAs */}
                <div className="lg:col-span-6 lg:-ml-4  md:-mt-32 flex flex-col space-y-4 md:space-y-6 text-center lg:text-left z-10">

                    {/* Subheading Tag */}
                    <div className="self-center lg:-mt-24 xl:mt-0 lg:self-start bg-[#FAC207] text-[#0A2540] text-xs md:text-sm font-semibold px-4 py-1.5 rounded-md shadow-sm">
                        Real Leads. Geniune Pipeline. Higher Revenue
                    </div>

                    {/* Main Typography Header */}
                    <h1 className="text-2xl -ml-4 md:ml-0 sm:text-4xl md:text-4xl lg:text-[32px] xl:text-[44px] font-bold text-[#0A2540] leading-snug lg:leading-[1.5] tracking-normal">
                        <span className="whitespace-nowrap">
                            Build a Predictable <span className="text-[#F4B400]">B2B</span>
                        </span>
                        <br />

                        <span className="whitespace-nowrap">
                            Pipeline Without Hiring an
                        </span>
                        <br />

                        <span className="relative -mt-2 inline-flex items-baseline gap-0 whitespace-nowrap">
                            <span className="text-[#0A2540]">
                                Entire
                            </span>

                            <span className="text-[#FAAF00] -ml-4 md:ml-2 el-messiri font-semibold tracking-wide text-3xl sm:text-5xl md:text-[45px] xl:text-[45px] relative ">
                                Sales Team
                                <img src="/Rectangle 123.png" className="w-full" alt="" />
                            </span>
                        </span>
                    </h1>

                    {/* Action Buttons */}
                    <div className="flex flex-row items-center justify-center lg:justify-start gap-3 pt-2 md:pt-4">
                        <button
                            onClick={() => setIsDemoOpen(true)} className="w-1/2 z-10 sm:w-auto text-[17px] el-messiri bg-[#FAC207] hover:bg-[#E09E00] text-[#041C3E] font-normal px-4 lg:px-8 py-3.5 rounded-md shadow-[0_0_25px_rgba(250,194,7,0.6)] hover:shadow-[0_0_35px_rgba(250,194,7,0.8)] transition-all duration-300 text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 group">
                            Book a Call →
                        </button>

                        <button onClick={scrollToHowItWorks} className="w-1/2 sm:w-auto text-[17px] el-messiri hover:bg-gray-50 text-[#041C3E] font-normal px-4 lg:px-8 py-3.5 rounded-md border border-gray-300 shadow-sm transition-all duration-200 text-xs sm:text-sm md:text-base flex items-center justify-center gap-2">
                            See How It Works →
                        </button>
                    </div>

                    {/* Abstract bottom decorative swirl arrow */}
                    {/* <div className="hidden lg:block pl-28 pt-2">
                        <img src="/Arrow 07.png" className="w-40 h-40" alt="" />
                    </div> */}
                </div>

                {/* RIGHT COLUMN: Imagery & Floating Badges */}
                <div className="lg:col-span-6 relative flex flex-col items-center justify-center w-full min-h-[320px] sm:min-h-[450px] md:min-h-[580px] lg:min-h-[620px] px-2 sm:px-6">

                    {/* Subtle Radial Gradient Aura */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                        <div className="w-[85%] sm:w-[75%] aspect-square rounded-full bg-gradient-to-tr from-blue-50/60 to-amber-50/60 blur-3xl opacity-70" />
                    </div>

                    {/* Floating Megaphone - Hidden on small mobile to avoid layout clutter */}
                    {/* <div className="absolute top-[10%] left-[5%] sm:left-[18%] z-20 opacity-95 animate-pulse w-8 sm:w-auto">
                        <img src="/megaphone.svg" alt="" className="-scale-x-100 w-full h-auto" />
                    </div> */}

                    {/* PAN India Operations Badge */}
                    <div className="absolute top-[4%]  [@media(min-width:1280px)_and_(min-height:720px)]:top-[0%] right-[2%] lg:-top-[2%]  lg:right-[2%] xl:right-[10%] xl:top-[4%] sm:right-[8%] bg-white rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-gray-100 p-1.5 sm:p-2 flex items-center gap-2 z-50 max-w-[130px] sm:max-w-[175px]">
                        <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-lg  flex-shrink-0 bg-gray-100">
                            <img
                                className="w-full h-full object-cover"
                                src="/Rectangle 13.svg"
                                alt="Operations Thumbnail"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[9px] sm:text-sm font-bold text-[#0A2540] leading-tight">PAN India Operations</span>
                        </div>
                    </div>



                    <div className="absolute top-[40%] md:left-[2%]  w-fit -left-[8%] lg:top-[36%] lg:-left-[30%] xl:top-[48%] bg-white rounded-2xl shadow-[0px_4px_12px_rgba(0,0,0,0.18)] border border-gray-100 px-4 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-4 min-h-[40px] sm:min-h-[50px] lg:min-h-[50px] w-[120px] sm:w-[240px] lg:w-[180px] xl:w-[200px] flex items-center gap-2 z-50">
                        <div className="flex flex-col">
                            <span className="text-[10px] whitespace-nowrap sm:text-[16px] lg:text-[15px] font-bold text-[#0A2540] leading-tight">
                                Email Campaigns
                            </span>
                        </div>
                    </div>

                    <div className="absolute top-[0%]  w-fit md:w-fit md:right-[40%] [@media(min-width:1280px)_and_(min-height:720px)]:top-[4%] right-[48%] lg:-top-[2%]  lg:right-[60%] xl:top-[4%] sm:right-[8%] bg-white rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-gray-100 px-4 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-2 xl:py-4 min-h-[30px] sm:min-h-[30px] lg:min-h-[10px] xl:min-h-[30px] w-[120px] sm:w-[240px] lg:w-[200px] xl:w-[200px] flex items-center gap-2 z-50">
                        <div className="flex flex-col">
                            <span className="text-[9px] whitespace-nowrap sm:text-[15px] font-bold text-[#0A2540] leading-tight">LinkedIn Outreach</span>
                        </div>
                    </div>

                    <div
                        className="absolute top-[40%] md:right-[2%] md:w-fit [@media(min-width:1280px)_and_(min-height:720px)]:top-[48%] right-[0%] lg:top-[36%] lg:-right-[10%] xl:right-[8%] xl:top-[48%] sm:right-[8%] bg-white rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-gray-100 px-4 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-4 min-h-[30px] sm:min-h-[30px] lg:min-h-[30px] w-[120px] sm:w-[240px] lg:w-[200px] xl:w-[200px] flex items-center gap-2 z-50"
                    >
                        <div className="flex flex-col">
                            <span className="text-[9px] whitespace-nowrap sm:text-[15px] font-bold text-[#0A2540] leading-tight">
                                Whatsapp Campaigns
                            </span>
                        </div>
                    </div>

                    {/* Central Image Layer */}
                    <div className="w-full max-w-[340px] sm:max-w-[500px] lg:max-w-[1100px] px-2 mb-6 lg:mb-2 lg:-mt-48 xl:-mt-4 -mt-20 xl:mr-36 relative z-0 flex justify-center pointer-events-none">
                        <img
                            className="w-[250%]  xl:w-[350%] max-w-none h-[600px] lg:h-[600px] xl:h-[700px] object-contain select-none relative z-0"
                            src="/Recru1.png"
                            alt="B2B Campaign Experts"
                            draggable="false"
                        />
                    </div>

                    {/* On Desktop: Absolute overlapping position. On Mobile: Flat grid flexbox below the illustration */}
                    <div className="w-full -mt-48 lg:mt-[-10px] relative z-30 px-2 flex flex-col sm:flex-row items-center justify-center gap-4 lg:block lg:max-w-[490px]">

                        {/* Left Floating Metric Card */}
                        <div className="w-full sm:w-[180px] lg:absolute lg:-top-48 lg:-left-20 xl:left-[-100px]  [@media(width:853px)_and_(height:1280px)]:-top-40 xl:-top-48  xl:z-30 xl:w-[180px]">
                            <div className="bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-gray-100 p-4">
                                <div className="text-2xl font-semibold text-[#0A2540] tracking-tight">
                                    500+
                                </div>
                                <div className="w-full h-1.5 bg-gray-100 rounded-full mt-2 overflow-hidden">
                                    <div
                                        className="w-[82%] h-full rounded-full"
                                        style={{
                                            background: 'linear-gradient(to right, #FAC207 0% 40%, #0A2540 40% 100%)',
                                        }}
                                    />
                                </div>
                                <div className="text-[12px] text-black font-semibold mt-2 tracking-wider  whitespace-nowrap leading-snug">
                                    Campaigns Executed
                                </div>
                            </div>
                        </div>

                        {/* Brand Statement Summary Card */}
                        <div className="w-full sm:flex-1 lg:absolute lg:-top-28 lg:right-[-30px] xl:right-[-50px] xl:-top-32  [@media(min-width:1280px)_and_(min-height:720px)]:-top-20 lg:-translate-y-1/2 lg:z-30 lg:w-[80%] bg-[#FAC207] text-[#0A2540] rounded-2xl p-4 sm:p-5  flex items-center border border-amber-400">
                            <p className="text-[11px] text-[#041C3E] sm:text-xs  md:text-[13px] lg:text-[10px] xl:text-[13px] leading-relaxed tracking-wide text-center sm:text-left lg:whitespace-nowrap">
                                HunarStreet Technologies helps B2B companies<br className="hidden lg:inline" /> connect with their ideal clients through targeted<br className="hidden lg:inline" /> LinkedIn and email campaigns run by a dedicated team.
                            </p>
                        </div>

                    </div>

                </div>

            </div >
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#FAAF00]" />
        </section >
    );
}
