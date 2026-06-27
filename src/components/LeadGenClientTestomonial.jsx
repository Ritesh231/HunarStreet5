import { useState, useRef, useEffect } from 'react';

const ClientsTestimonials = () => {
    const testimonials = [
        {
            id: 1,
            author: "- VP Sales, Heftyverse",
            text: `"Hunarstreet helped us build a proper outbound motion - ICP defined, prospect lists verified, sequences personalized by segment. Within 45 days we had seven discovery calls booked with decision."`,
            rating: 3,
        },
        {
            id: 2,
            author: "- Sales Head, IndiaMART",
            text: `"The team helped us identify our ICP and consistently generate qualified meetings every single month, boosting our baseline MRR revenue trajectory entirely ahead of target."`,
            rating: 5,
        },
        {
            id: 3,
            author: "- Growth Lead, Hefty Art",
            text: `"Their outreach strategy improved our response rates significantly and created a highly predictable pipeline that our account executive team can easily forecast."`,
            rating: 5,
        },

        {
            id: 4,
            author: "- Head of Growth, Udaan",
            text: `"We scaled our outbound efforts from absolute zero to a reliable, revenue-generating engine in under two months while keeping our target CAC extremely efficient."`,
            rating: 5,
        },
        {
            id: 5,
            author: "- Director of Sales, Indyverse",
            text: `"They cut right through the noise and managed to get our executive reps into enterprise-level accounts we couldn't ever crack ourselves despite months of trying."`,
            rating: 5,
        },
        {
            id: 6,
            author: "- Co-Founder, Mcons",
            text: `"Incredible communication and rapid execution mechanics. The outbound pipeline visibility we have now has completely changed our business development strategy."`,
            rating: 5,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    const totalPages = Math.ceil(testimonials.length / 3);

    // Dynamic Navigation controls for both Desktop (Scroll) and Mobile (Index Slider)
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);

        setCurrentSlide((prev) =>
            prev >= testimonials.length - 3 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            (prev - 1 + testimonials.length) % testimonials.length
        );

        setCurrentSlide((prev) =>
            prev === 0 ? testimonials.length - 3 : prev - 1
        );
    };

    // Measure the actual viewport width so cards fill it perfectly
    const viewportRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);
    const GAP = 24; // gap-6 = 24px

    useEffect(() => {
        const update = () => {
            if (viewportRef.current) {
                const w = viewportRef.current.offsetWidth;
                setCardWidth(Math.floor((w - GAP * 2) / 3));
            }
        };
        update();
        const ro = new ResizeObserver(update);
        if (viewportRef.current) ro.observe(viewportRef.current);
        return () => ro.disconnect();
    }, []);

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
                    animation: marquee 45s linear infinite;
                }
                .animate-marquee-infinite:hover {
                    animation-play-state: paused;
                }
                /* Hide scrollbars for desktop button control tracking triggers */
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}} />

            <div
                className="w-full rounded-3xl p-6 sm:p-10 xl:p-12 relative bg-center bg-no-repeat bg-cover overflow-hidden"
                style={{
                    backgroundImage: "url('/Rectangle 3941.png')",
                }}
            >
                <div className="text-center mt-0 relative z-10">
                    {/* Section Header Title */}
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
                    TESTIMONIALS MARQUEE VIEWPORT (DESKTOP)
                    ========================================================= */}

                    <div className="hidden lg:block w-full relative pt-6 pb-0 overflow-visible">
                        {/* py-10 top keeps stagger visible; bottom set to 0 so no extra gap */}
                        <div ref={viewportRef} className="overflow-x-clip overflow-y-visible pt-10 pb-2">
                            <div
                                className="flex transition-transform duration-500"
                                style={{
                                    gap: GAP,
                                    transform: `translateX(-${currentSlide * (cardWidth + GAP)}px)`,
                                }}
                            >
                                {testimonials.map((item, idx) => {
                                    const stepIndex = idx % 3;

                                    return (
                                        <div
                                            key={item.id}
                                            className={`
                            bg-white border border-slate-100 rounded-[28px]
                            p-8 pb-10 text-left flex flex-col justify-between
                            relative min-h-[250px] xl:min-h-[260px]
                            shrink-0
                            ${stepIndex === 0 ? 'translate-y-0' : ''}
                            ${stepIndex === 1 ? 'translate-y-4' : ''}
                            ${stepIndex === 2 ? 'translate-y-8' : ''}
                        `}
                                            style={{ width: cardWidth || undefined }}
                                        >
                                            <div className="relative">
                                                <span className="text-[#051937]/90 text-7xl font-serif font-black leading-none block absolute -top-5 -left-3">
                                                    “
                                                </span>

                                                <div className="pl-6 pt-3">
                                                    <h4 className="text-[14px] font-bold text-[#051937] mb-3">
                                                        {item.author}
                                                    </h4>

                                                    <p className="text-[13px] text-gray-600 leading-relaxed font-medium">
                                                        {item.text}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="pt-6 flex justify-between items-end mt-auto pl-6 relative">
                                                <span className="text-[#051937]/90 text-7xl font-serif font-black leading-none absolute -bottom-8 right-0">
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
                        <div className="bg-white border border-slate-100 rounded-[24px] p-6 pb-8 text-left flex flex-col justify-between min-h-[280px] relative w-full shadow-lg">
                            <div className="relative">
                                <span className="text-[#051937]/90 text-6xl font-serif font-black leading-none block absolute -top-4 -left-2">“</span>

                                <div className="pl-6 pt-2">
                                    <h4 className="text-[14px] font-extrabold text-[#051937] tracking-tight mb-3">
                                        {testimonials[currentIndex].author}
                                    </h4>
                                    <p className="text-[13px] text-gray-600 leading-relaxed font-medium">
                                        {testimonials[currentIndex].text}
                                    </p>
                                </div>
                            </div>

                            <div className="pt-6 flex justify-between items-end mt-auto pl-6 relative w-full">
                                {/* <div className="flex space-x-1 z-10">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-[#FFBF00]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div> */}
                                <span className="text-[#051937]/90 text-6xl font-serif font-black leading-none absolute -bottom-7 right-0">”</span>
                            </div>
                        </div>
                    </div>

                    {/* =========================================================
                    SLIDER CONTROLLER BUTTON ARROWS (Controls Both Views)
                    ========================================================= */}
                    <div className="flex items-center justify-center space-x-3 mt-8 lg:mt-4 xl:mt-12">
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
        </section >
    );
};

export default ClientsTestimonials;