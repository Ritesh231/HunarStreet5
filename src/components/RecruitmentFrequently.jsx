import { useState, useEffect } from 'react';

const FAQSection = () => {
    const faqData = [
        {
            id: 1,
            question: "Where do you source candidates from?",
            answer: "We exclusively source candidates through LinkedIn and other professional social media platforms. We don’t rely on traditional job portals - this means we reach active professionals who aren’t on conventional job boards, giving you access to a deeper, more relevant talent pool & to avoid duplicacy."
        },
        {
            id: 2,
            question: "Do you provide staffing or only permanent hiring?",
            answer: "We specialise exclusively in full-time, permanent hiring. We do not offer contract staffing, temporary placements, or blue-collar recruitment. Our sole focus on permanent roles allows us to deliver higher-quality matches and stronger long-term outcomes for both clients and candidates."
        },
        {
            id: 3,
            question: "Do you hire only for Mumbai, or across India?",
            answer: "We operate PAN India. Whether you’re based in Mumbai, Bengaluru, Delhi, Hyderabad, or any other city, we can manage your hiring requirements across all geographies within the country."
        },
        {
            id: 4,
            question: "What is your turnaround time (TAT)?",
            answer: "You will receive the first set of shortlisted profiles within 48–72 hours of mandate confirmation. We prioritise speed without compromising on relevance - every profile is carefully evaluated before it reaches you."
        },
        {
            id: 5,
            question: "Who will be our point of contact?",
            answer: "Every client is assigned a dedicated SPOC (Single Point of Contact) from our team. Your SPOC manages the entire recruitment cycle, ensuring continuity, accountability, and a clear line of communication at all times - no chasing multiple people."
        },
        {
            id: 6,
            question: "What seniority levels do you hire for?",
            answer: "Our core strength lies in mid-to-senior level hiring. We are well-networked with experienced professionals across functions, making us the right partner when the role demands depth, domain expertise, and cultural fit."
        },
        {
            id: 7,
            question: "What is your success rate?",
            answer: "Our numbers reflect our commitment to quality and speed in every placement we deliver.",
            hasStats: true,
            stats: [
                { value: "87%", label: "Candidate–job match rate" },
                { value: "62%", label: "Rapid placement success rate" }
            ]
        },
        {
            id: 8,
            question: "How large is your team?",
            answer: "We are a focused team of 41 professionals, including 32 dedicated recruiters with deep domain expertise across IT and Non-IT functions.",
            hasStats: true,
            stats: [
                { value: "41", label: "Total team strength" },
                { value: "15", label: "IT recruiters" },
                { value: "17", label: "Non-IT recruiters" }
            ]
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);
    const [modalOpenIndex, setModalOpenIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isModalOpen]);

    const toggleFAQ = (id, isFromModal = false) => {
        if (isFromModal) {
            setModalOpenIndex(modalOpenIndex === id ? null : id);
        } else {
            setOpenIndex(openIndex === id ? null : id);
        }
    };

    // Helper to render answer text alongside structured stat matrices
    const renderAnswerContent = (faq) => (
        <div className="space-y-4">
            <p className="leading-relaxed font-medium text-xs sm:text-[14px]">
                {faq.answer}
            </p>
            {faq.hasStats && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    {faq.stats.map((stat, i) => (
                        <div key={i} className="bg-white/80 backdrop-blur-xs border border-blue-100 rounded-xl p-3 flex flex-col justify-center shadow-xs">
                            <span className="text-xl sm:text-2xl font-black text-[#FFBF00] tracking-tight">
                                {stat.value}
                            </span>
                            <span className="text-[10px] sm:text-xs text-slate-600 font-semibold leading-tight mt-0.5">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <>
            {/* =========================================================
            MAIN FAQS SECTION VIEW (Displays top 5 items)
            ========================================================= */}
            <section className="w-full bg-gradient-to-br from-white via-white to-[#FFFDEE] text-[#051126] py-16 lg:py-24 select-none relative overflow-hidden rounded-t-[40px] sm:rounded-t-[60px] lg:rounded-t-[100px]">

                {/* Decorative background vectors */}
                <img src="/Ellipse 25.svg" className="absolute -top-20 left-0 w-120 h-120 opacity-40 pointer-events-none" alt="" />
                <img src="/Ellipse 26.png" className="absolute right-0 top-0 w-120 h-120 opacity-40 pointer-events-none" alt="" />

                <div className="max-w-7xl mx-auto w-full px-4 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start relative z-10">

                    {/* LEFT COLUMN: Headings & Modal Open Switch */}
                    <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-5 lg:sticky lg:top-8">
                        <div className="space-y-1">
                            <h2 className="text-3xl sm:text-[44px] font-semibold text-[#041C3E] tracking-tight leading-tight">
                                Frequently Asked
                            </h2>
                            <h2 className="text-3xl el-messiri sm:text-[44px] font-black tracking-tight text-[#FFBF00] relative inline-block">
                                Questions
                                <img src="/Rectangle 123.png" alt="" />
                            </h2>
                        </div>

                        <p className="text-sm sm:text-[16px] text-gray-700 font-medium leading-relaxed max-w-sm">
                            Everything you need to know about how we work and help scale your team capacity.
                        </p>

                        <div className="pt-2 relative w-auto">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-[#FFBF00] el-messiri hover:bg-[#E6AC00] text-[#041C3E] font-bold text-xs sm:text-[15px] px-8 py-3.5 rounded-xl shadow-[0_0_30px_rgba(250,194,7,0.4)] hover:shadow-[0_0_45px_rgba(250,194,7,0.6)] flex items-center space-x-2 transition-all duration-300 active:scale-95 group cursor-pointer border-none"
                            >
                                <span>View All Questions</span>
                                <span className="transform group-hover:translate-x-1 transition-transform font-bold duration-300">→</span>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Interactive Accordion Loop (Top 5) */}
                    <div className="lg:col-span-7 space-y-4 w-full">
                        <div className="flex flex-col gap-3.5 w-full">
                            {faqData.slice(0, 5).map((faq) => {
                                const isOpen = openIndex === faq.id;
                                return (
                                    <div
                                        key={faq.id}
                                        className={`w-full rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'bg-[#90BEFF36] border-[#B2CFFF]' : 'bg-[#90BEFF1F] hover:bg-[#90BEFF36] border-transparent'
                                            }`}
                                    >
                                        <button
                                            onClick={() => toggleFAQ(faq.id, false)}
                                            className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-[16px] text-[#0B1B3D] tracking-tight focus:outline-none group cursor-pointer"
                                        >
                                            <span className="font-bold text-[#0B1B3D] group-hover:text-blue-950 transition-colors pr-4">
                                                {faq.question}
                                            </span>
                                            <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#031430] text-white rotate-180' : 'bg-[#031430] text-white'}`}>
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </button>

                                        <div className={`transition-all duration-300 ease-in-out text-gray-700 overflow-hidden ${isOpen ? 'max-h-[400px] opacity-100 border-t border-[#D3E4FF]/60' : 'max-h-0 opacity-0'}`}>
                                            <div className="p-4 sm:p-5 bg-white/60">
                                                {renderAnswerContent(faq)}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </section>

            {/* =========================================================
            MODAL OVERLAY VIEW: Renders complete catalog array cleanly
            ========================================================= */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity duration-300 overflow-y-auto"
                    onClick={() => setIsModalOpen(false)}
                >
                    {/* Added mt-10 md:mt-16 to shift the modal down, and items-start to the parent wrapper */}
                    <div
                        className="bg-[#FCFBF7] w-full max-w-4xl h-full max-h-[85vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden transform transition-transform duration-300 mt-24 md:mt-16"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header Navbar Layout */}
                        <div className="w-full p-5 sm:p-6 border-b border-slate-200 bg-white flex items-center justify-between shrink-0 text-left">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-extrabold text-[#051126] tracking-tight">
                                    All Frequently Asked Questions
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">
                                    Total 8 core operations framework inquiries answered
                                </p>
                            </div>

                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer border-none text-base font-bold"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Modal Inner Scroll Wrapper list stack */}
                        <div className="w-full flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/50">
                            {faqData.map((faq) => {
                                const isModalOpenItem = modalOpenIndex === faq.id;
                                return (
                                    <div
                                        key={faq.id}
                                        className={`w-full rounded-xl border transition-all duration-300 overflow-hidden bg-white ${isModalOpenItem ? 'border-[#B2CFFF] shadow-xs' : 'border-slate-200/80 hover:border-slate-300'
                                            }`}
                                    >
                                        <button
                                            onClick={() => toggleFAQ(faq.id, true)}
                                            className="w-full flex items-center justify-between p-4 text-left focus:outline-none cursor-pointer group"
                                        >
                                            <span className="font-bold text-sm sm:text-[15px] text-[#0B1B3D] group-hover:text-blue-950 transition-colors pr-4">
                                                {faq.question}
                                            </span>
                                            <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isModalOpenItem ? 'bg-[#031430] text-white rotate-180' : 'bg-slate-100 text-slate-700'}`}>
                                                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </button>

                                        <div className={`transition-all duration-300 ease-in-out text-slate-700 overflow-hidden ${isModalOpenItem ? 'max-h-[400px] opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0'}`}>
                                            <div className="p-4 bg-slate-50/50">
                                                {renderAnswerContent(faq)}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default FAQSection;