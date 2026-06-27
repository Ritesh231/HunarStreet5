import { useState, useEffect } from 'react';

const FAQSection = () => {
    const faqData = [
        // --- Core/Service Info (Initial View Top 5) ---
        {
            id: 1,
            category: "General Process",
            question: "What exactly does your service include?",
            answer: "We handle the full outbound process: defining your ideal customer profile, building verified prospect lists, creating outreach content, running campaigns on LinkedIn and/or email, managing and qualifying responses, and reporting on results. You stay involved in approving content and reviewing performance - we handle the execution."
        },
        {
            id: 2,
            category: "General Process",
            question: "Do you run LinkedIn campaigns, email campaigns, or both?",
            answer: "We run LinkedIn + email campaigns as a combined offering, which is what most clients choose. Both channels work together - LinkedIn builds familiarity, email deepens the conversation. We can also run either channel independently depending on your target audience and goals."
        },
        {
            id: 3,
            category: "General Process",
            question: "How long does it take to see results?",
            answer: "Most campaigns start producing initial replies and leads within the first 2-4 weeks. The pace depends on your industry, target audience, and how specific your ICP is. We discuss realistic timelines for your specific situation during onboarding."
        },
        {
            id: 4,
            category: "General Process",
            question: "What kind of companies do you work best with?",
            answer: "We work best with B2B companies that have a clear offering, a defined target market, and a sales team ready to take leads forward. We work with early-stage companies building their first outbound process as well as more established teams looking to scale pipeline."
        },
        {
            id: 5,
            category: "Content & Messaging",
            question: "Who writes the outreach content?",
            answer: "Our content team writes all outreach - LinkedIn messages and email sequences. Content is built around your ICP, your offer, and your brand voice. You review and approve everything before it goes live. Nothing is sent without your sign-off."
        },
        // --- Remaining List Items (Visible inside Modal) ---
        {
            id: 6,
            category: "Content & Messaging",
            question: "Can we request changes to the content before it goes out?",
            answer: "Absolutely. The review and approval stage is built into our process. We expect feedback - it helps us sharpen the content and ensures every message reflects how you want to be represented."
        },
        {
            id: 7,
            category: "Content & Messaging",
            question: "How personalised is the outreach?",
            answer: "Each sequence is tailored to your ICP and often to specific segments within it. While we run campaigns at scale, the content is written to feel relevant and specific - not generic. We avoid templates that read like templates."
        },
        {
            id: 8,
            category: "LinkedIn Outreach",
            question: "Whose LinkedIn account is the outreach sent from?",
            answer: "LinkedIn outreach is sent from the 3 LinkedIn profiles from your business team. We'll walk you through the setup, which involves giving us managed access."
        },
        {
            id: 9,
            category: "LinkedIn Outreach",
            question: "Do you use automation tools for LinkedIn?",
            answer: "We use established outreach tools, but all content is written by our team. Nothing is auto-generated. All messaging is reviewed and approved by you before going out."
        },
        {
            id: 10,
            category: "Email Outreach",
            question: "Do you set up the email infrastructure, or do we use our existing domain?",
            answer: "We recommend setting up a separate sending domain specifically for outreach - this keeps your primary domain's reputation protected. We handle the full technical setup: domain configuration, DNS records, and email warming."
        },
        {
            id: 11,
            category: "Email Outreach",
            question: "How do you maintain email deliverability?",
            answer: "Deliverability is a significant part of what we manage. This includes domain warming, maintaining clean sending lists, using verified contacts, and monitoring bounce and complaint rates throughout the campaign."
        },
        {
            id: 12,
            category: "Email Outreach",
            question: "Where do you source prospect email addresses?",
            answer: "We use reputable B2B data providers and verified CRM tools, and we verify all contact data before campaigns go live. Lists are built around your ICP and reviewed for quality before use."
        },
        {
            id: 13,
            category: "Your Dedicated Team",
            question: "Who will actually be working on my account?",
            answer: "Every client is assigned a dedicated team of 4 campaigners who manage your account. You also have a Relationship Manager - a senior point of contact who oversees campaign health, coordinates the team, and is your direct line for updates and strategy leads."
        },
        {
            id: 14,
            category: "Your Dedicated Team",
            question: "What does the Relationship Manager do?",
            answer: "Your Relationship Manager is accountable for the overall performance of your campaigns. They're involved in strategy, content review, and regular check-ins. If something needs to change, they're the one who makes it happen."
        },
        {
            id: 15,
            category: "Results & Expectations",
            question: "What kind of results can I realistically expect?",
            answer: "This depends on your industry, ICP, and offer. As a reference point, LinkedIn campaigns typically see 20-35% connection acceptance rates and 5-15% reply rates. Email campaigns vary by industry. We discuss realistic expectations specific to your situation before you commit."
        },
        {
            id: 16,
            category: "Results & Expectations",
            question: "What counts as a 'lead' in your reporting?",
            answer: "A lead is a prospect who has responded with genuine interest in learning more. Our response management team qualifies each reply - so what you receive is a meaningful, sales-ready conversation, not a raw reply count."
        },
        {
            id: 17,
            category: "Results & Expectations",
            question: "Do you guarantee a specific number of leads?",
            answer: "We don't offer contractual guarantees, but based on our campaign structure and the industries we work in, clients typically see 3-5 qualified leads per month."
        },
        {
            id: 18,
            category: "Working Together",
            question: "What information do you need from us to get started?",
            answer: "A clear description of your offering, your ideal customer profile (or our help building one), access to the LinkedIn profile or sending domain we'll use, and any existing materials that help us understand your positioning. We guide you through all of this during the onboarding call."
        },
        {
            id: 19,
            category: "Working Together",
            question: "What does the onboarding look like?",
            answer: "After signing on, we schedule a detailed onboarding call to understand your offer, buyer, context, and goals. We then build the prospect list and write the initial content. You review and approve before anything goes live. Most clients are live within 7-10 business days."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);
    const [modalOpenIndex, setModalOpenIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Prevent body scrolling when the full list modal is opened
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

    return (
        <>
            {/* =========================================================
            MAIN FAQS SECTION VIEW (Displays top 5 items)
            ========================================================= */}
            <section className="w-full bg-gradient-to-br from-white via-white to-[#FFFDEE] text-[#051126] py-16 lg:py-24 select-none relative overflow-hidden rounded-t-[40px] sm:rounded-t-[60px] lg:rounded-t-[100px]">

                {/* Background Decorative Graphic Objects */}
                <img src="/Ellipse 25.svg" className="absolute -top-20 left-0 w-120 h-120 opacity-40 pointer-events-none" alt="" />
                <img src="/Ellipse 26.png" className="absolute right-0 top-0 w-120 h-120 opacity-40 pointer-events-none" alt="" />

                <div className="max-w-7xl mx-auto w-full px-4 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start relative z-10">

                    {/* LEFT COLUMN: Main Headers & Modal Trigger */}
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
                            Find answers to common questions about our lead generation process, campaign management, platform logistics, and results.
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

                                        <div className={`transition-all duration-300 ease-in-out text-gray-700 overflow-hidden ${isOpen ? 'max-h-[300px] opacity-100 border-t border-[#D3E4FF]/60' : 'max-h-0 opacity-0'}`}>
                                            <p className="p-4 sm:p-5 text-xs sm:text-[14px] leading-relaxed bg-white/60 font-medium">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </section>

            {/* =========================================================
            MODAL COMPONENT: SLIDES AND OVERLAYS ALL 19 FAQS
            ========================================================= */}
            {isModalOpen && (
                <div
                    // Changed items-center to items-start so margin-top can push the modal down properly
                    className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn overflow-y-auto"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        // Added mt-10 md:mt-20 to give the modal a structured margin from the top of the viewport
                        className="bg-[#FCFBF7] w-full max-w-4xl h-full max-h-[85vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-scaleUp mt-24 md:mt-20"
                        onClick={(e) => e.stopPropagation()} // Stop propagation from triggering modal closing rules
                    >

                        {/* Modal Sticky Top Navbar Header Layout Bar */}
                        <div className="w-full p-5 sm:p-6 border-b border-slate-200 bg-white flex items-center justify-between shrink-0">
                            <div className="text-left">
                                <h3 className="text-xl sm:text-2xl font-extrabold text-[#051126] tracking-tight">
                                    All Questions & Answers
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">
                                    Total 19 items across operating campaign categories
                                </p>
                            </div>

                            {/* Round Close Action Element Button */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer border-none text-lg font-bold"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Modal Inner Scrollable Accordion Wrapper Container */}
                        <div className="w-full flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 bg-slate-50/50">
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
                                            className="w-full flex items-center justify-between p-4 text-left focus:outline-none cursor-pointer"
                                        >
                                            <div className="flex flex-col gap-1 pr-4">
                                                <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-widest text-[#FFBF00] bg-[#031430] w-fit px-2 py-0.5 rounded-md mb-0.5">
                                                    {faq.category}
                                                </span>
                                                <span className="font-bold text-sm sm:text-[15px] text-[#0B1B3D]">
                                                    {faq.question}
                                                </span>
                                            </div>
                                            <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isModalOpenItem ? 'bg-[#031430] text-white rotate-180' : 'bg-slate-100 text-slate-700'}`}>
                                                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </button>

                                        <div className={`transition-all duration-300 ease-in-out text-gray-700 overflow-hidden ${isModalOpenItem ? 'max-h-[300px] opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0'}`}>
                                            <p className="p-4 text-xs sm:text-[14px] leading-relaxed bg-slate-50 font-medium">
                                                {faq.answer}
                                            </p>
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