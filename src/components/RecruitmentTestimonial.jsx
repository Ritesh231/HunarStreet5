import { useState } from 'react';

const ClientsTestimonials = () => {
    const testimonials = [
        {
            id: 1,
            author: "Akhilesh More",
            designation: "Assistant Manager HR",
            company: "R Systems",
            text: "The team at Hunarstreet Technologies Pvt Ltd took the time to understand our company culture, values, and specific hiring needs, which resulted in presenting us with highly qualified candidates who were not only technically proficient but also aligned with our organizational goals. Their attention to detail and proactive communication throughout the hiring process made it seamless and stress-free for our team.",
            rating: 5,
        },
        {
            id: 2,
            author: "Ch. Sai Sanjay",
            designation: "HR Manager",
            company: "ED&F",
            text: "Hunarstreet helped us with filling a role that had been pending for close to 2.8 years and the working experience has been excellent with them. I would strongly recommend our team to reach out to Hunarstreet Technologies for any future hiring requirements.",
            rating: 5,
        },
        {
            id: 3,
            author: "Robert Jackson",
            designation: "HR Manager",
            company: "AGC Apps Pvt Ltd",
            text: "Hunarstreet exceeded our expectations by swiftly delivering qualified candidates for our crucial roles. Their proactive approach and commitment to quality impressed us greatly. Partnering with them was a game-changer for our recruitment needs!",
            rating: 5,
        },
        {
            id: 4,
            author: "Punam Bhujbal",
            designation: "HR",
            company: "Little Italy",
            text: "Our experience with HunarStreet Technologies has been satisfactory. Your team has been cooperative and prompt in sharing candidate profiles and coordinating during the hiring process. We appreciate your support and look forward to working together in the future.",
            rating: 5,
        },
        {
            id: 5,
            author: "Swara Shetty",
            designation: "HR",
            company: "Alumayer",
            text: "It was a pleasure meeting you and the team at Hunarstreet Technologies Pvt. Ltd. We sincerely appreciate the way you and your organization have connected with us and provided outstanding support throughout. Your proactive approach, consistent follow-ups, and excellent coordination truly set you apart.",
            rating: 5,
        },
        {
            id: 6,
            author: "Tulasi Talluri",
            designation: "Human Resources",
            company: "Graniti Vicentia Group",
            text: "HunarStreet has been our go-to partner for recruitment, especially for roles that are hard to fill or require specialized talent. They consistently deliver high-quality candidates, and the way their SPOC and team manage our hiring needs is truly commendable.",
            rating: 5,
        },
        {
            id: 7,
            author: "Madhuri Patil",
            designation: "HR",
            company: "Azbil",
            text: "Hunarstreet Technologies truly stands out in how effectively they combine strong industry understanding with execution. From clearly defining role requirements to shortlisting candidates, the entire workflow was structured, thoughtful, and efficient. Communication throughout the process was consistent and transparent.",
            rating: 5,
        },
        {
            id: 8,
            author: "Neha Thakur",
            designation: "Assistant Manager HR",
            company: "Jet Technologies",
            text: "As an HR professional, I truly appreciate the support provided by HunarStreet Consultancy. Their services are excellent, highly selective, and well-aligned with our hiring requirements. They consistently provide suitable and quality candidates as per our needs.",
            rating: 5,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [desktopSlide, setDesktopSlide] = useState(0);

    const cardWidthWithGap = 404; // 380px width + 24px gap

    const nextSlide = () => {
        // Mobile Index
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        // Desktop Index
        setDesktopSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        // Mobile Index
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        // Desktop Index
        setDesktopSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="w-full bg-[#031430] py-16 px-6 md:px-12 flex justify-center select-none overflow-hidden">

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee-infinite {
                    display: flex;
                    width: max-content;
                    animation: marquee 65s linear infinite;
                }
                .animate-marquee-infinite:hover {
                    animation-play-state: paused;
                }
            `}} />

            <div
                className="w-full lg:min-h-[600px] xl:min-h-[580px] rounded-3xl p-6 sm:p-10 xl:p-12 relative bg-center bg-no-repeat bg-cover overflow-hidden"
                style={{
                    backgroundImage: "url('/Rectangle 3941.png')",
                }}
            >
                <div className="text-center mt-0 relative z-10">
                    <h2 className="text-3xl sm:text-[40px] font-semibold text-[#051937] tracking-tight">
                        What Clients{" "}
                        <span className="text-[#FAC207] relative inline-block el-messiri">
                            Say ?
                            <img
                                src="/Rectangle 123.png"
                                alt=""
                                className="absolute left-0 top-full mt-2 w-full"
                            />
                        </span>
                    </h2>

                    <p className="text-xs sm:text-sm md:text-[15px] text-gray-800 max-w-2xl mx-auto font-medium mt-4 px-2 leading-relaxed mb-6">
                        Real feedback from businesses that trusted us to build their outbound pipeline and generate qualified sales opportunities.
                    </p>

                    {/* =========================================================
                    TESTIMONIALS MARQUEE VIEWPORT GRID CARDS (DESKTOP)
                    ========================================================= */}
                    <div className="hidden lg:block w-full overflow-x-clip overflow-y-visible relative py-6 h-[480px] pt-10">

                        {/* FIX: This structural outer container handles the button click offsets smoothly */}
                        <div
                            className="transition-transform duration-500 ease-out flex"
                            style={{ transform: `translateX(-${desktopSlide * cardWidthWithGap}px)` }}
                        >
                            {/* This structural inner container runs the infinite looping CSS marquee independently */}
                            <div className="animate-marquee-infinite gap-6 items-start">
                                {[...testimonials, ...testimonials].map((item, idx) => {
                                    const stepIndex = idx % 3;

                                    return (
                                        <div
                                            key={`${item.id}-${idx}`}
                                            className={`bg-white border border-slate-100 rounded-[28px] p-8 pb-10 text-left
                                            flex flex-col justify-between relative w-[380px] min-h-[320px] xl:min-h-[340px]
                                            shadow-[0_10px_35px_rgba(0,0,0,0.04)] shrink-0 group hover:border-slate-200 transition-all duration-500 ease-in-out
                                            ${stepIndex === 0 ? 'translate-y-0' : ''}
                                            ${stepIndex === 1 ? 'translate-y-6' : ''}
                                            ${stepIndex === 2 ? 'translate-y-12' : ''}
                                            `}
                                        >
                                            <div className="relative">
                                                <span className="text-[#051937]/90 text-7xl font-serif font-black leading-none block absolute -top-5 -left-3 select-none">
                                                    “
                                                </span>

                                                <div className="pl-6 pt-3">
                                                    <div className="mb-3">
                                                        <h4 className="text-[14px] font-bold text-[#051937]">
                                                            {item.author}
                                                        </h4>
                                                        <p className="text-[12px] text-gray-600">
                                                            {item.designation}
                                                        </p>
                                                        <p className="text-[12px] font-semibold text-[#FAC207]">
                                                            {item.company}
                                                        </p>
                                                    </div>
                                                    <p className="text-[13px] text-gray-600 leading-relaxed font-medium">
                                                        {item.text}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="pt-6 flex justify-between items-end mt-auto pl-6 relative w-full">
                                                <span className="text-[#051937]/90 text-7xl font-serif font-black leading-none absolute -bottom-8 right-0 select-none">
                                                    ”
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* =========================================================
                    TESTIMONIAL SINGLE SLIDER WINDOW (MOBILE & TABLET)
                    ========================================================= */}
                    <div className="block lg:hidden mt-4 w-full max-w-sm mx-auto pt-2 pb-8">
                        <div className="bg-white border border-slate-100 rounded-[24px] p-6 pb-8 text-left flex flex-col justify-between min-h-[320px] relative w-full shadow-lg">
                            <div className="relative">
                                <span className="text-[#051937]/90 text-6xl font-serif font-black leading-none block absolute -top-4 -left-2">“</span>

                                <div className="pl-6 pt-2">
                                    <div className="mb-3">
                                        <h4 className="text-[14px] font-extrabold text-[#051937] tracking-tight">
                                            {testimonials[currentIndex].author}
                                        </h4>
                                        <p className="text-[12px] text-gray-600">
                                            {testimonials[currentIndex].designation}
                                        </p>
                                        <p className="text-[12px] font-semibold text-[#FAC207]">
                                            {testimonials[currentIndex].company}
                                        </p>
                                    </div>
                                    <p className="text-[13px] text-gray-600 leading-relaxed font-medium">
                                        {testimonials[currentIndex].text}
                                    </p>
                                </div>
                            </div>

                            <div className="pt-6 flex justify-between items-end mt-auto pl-6 relative w-full">
                                <span className="text-[#051937]/90 text-6xl font-serif font-black leading-none absolute -bottom-7 right-0">”</span>
                            </div>
                        </div>
                    </div>

                    {/* =========================================================
                    SLIDER CONTROLLER BUTTON ARROWS
                    ========================================================= */}
                    <div className="flex items-center justify-center space-x-3 mt-6 lg:mt-8">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 rounded-full bg-[#FAC207] text-[#051937] flex items-center justify-center shadow-sm transition-all duration-200 active:scale-95 cursor-pointer hover:scale-105"
                            aria-label="Previous Testimonial"
                        >
                            <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-full bg-white border border-slate-300 text-[#051937] hover:bg-slate-50 flex items-center justify-center shadow-sm transition-all duration-200 active:scale-95 cursor-pointer hover:scale-105"
                            aria-label="Next Testimonial"
                        >
                            <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsTestimonials;