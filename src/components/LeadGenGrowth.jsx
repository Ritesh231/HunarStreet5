import { useState, useEffect } from "react";
import Schedule from './Schedule';

export default function GrowthNumbersSection() {
    const handleContactClick = () => {
        window.location.href = "mailto:enquiry@hunarstreet.com?subject=Growth Campaign Inquiry - Hunarstreet";
    };
    const [showSchedule, setShowSchedule] = useState(false);

    return (
        <section className="w-full bg-[#031430] py-6 lg:py-6 px-4 sm:px-6 lg:px-16 overflow-hidden">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-2 items-center">

                {/* LEFT COLUMN */}
                <div className="lg:col-span-8 relative flex justify-center lg:justify-start">
                    <img
                        src="/Growth.png"
                        alt="Growth Metrics Visual"
                        className="w-full max-w-[450px] lg:max-w-[500px] h-auto object-contain"
                    />
                </div>

                {/* RIGHT COLUMN */}
                <div className="lg:col-span-4 xl:-ml-36 relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                    {/* <h2 className="text-3xl sm:text-4xl xl:text-[43px] font-semibold tracking-tight text-white leading-tight lg:leading-[1.2]">
                        Numbers that reflect <br />
                        <span className="text-[#FAC207] el-messiri font-normal tracking-wide pl-1 relative inline-block">
                            Real Growth
                            <img src="/Rectangle 123.png" className="mt-2 w-full absolute left-0" alt="" />
                        </span>
                    </h2> */}
                    <p className="text-white mt-8  lg:-ml-8 text-md lg:text-[17px] xl:text-[25px] whitespace-nowrap font-medium leading-relaxed max-w-md pt-2">
                        From targeted prospecting to <span className="text-[#FAC207]">Qualified Leads,<br></br></span> our campaigns are built to deliver<br></br> measurable business outcomes.
                    </p>
                    <div className="pt-16">
                        <button onClick={() => setShowSchedule(true)}
                            className="bg-[#FAC207] -ml-8 -mt-12 lg:mt-6 xl:mt-4 text-5xl el-messiri hover:bg-[#E09E00] text-[#0A1931] font-normal px-7 py-3.5 rounded-xl shadow-[0px_0.87px_12.74px_0px_#FAC207] transition-all duration-300 text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 group cursor-pointer active:scale-95 border-none"
                        >
                            Get In Touch →
                        </button>
                    </div>
                </div>
            </div>
            <Schedule isDemoOpen={showSchedule} setIsDemoOpen={setShowSchedule} />
        </section>
    );
}