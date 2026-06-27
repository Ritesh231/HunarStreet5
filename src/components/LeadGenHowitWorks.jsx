export default function HowItWorksTimeline() {
    const steps = [
        {
            number: "01",
            title: "Define Your Ideal Customer Profile (ICP)",
            description: (
                <>
                    We start with a focused conversation about your target market who you're trying to reach, what <span className="text-[#FAC207]">title, industry,</span> company size, and geography. We work with you to sharpen this definition before a single message goes out.
                </>
            ),
            image: "/New1.svg",
            imageAlt: "ICP Definition Dashboard"
        },
        {
            number: "02",
            title: "Research & List Building",
            description: (
                <>
                    Using{" "}
                    <span className="text-[#FAC207]">
                        LinkedIn Sales Navigator and Apollo.io
                    </span>{" "}
                    for data extraction, combined with CRM tools like <span className="text-[#FAC207]">HubSpot and Zoho</span>, we build a targeted prospect list of companies and decision-makers matching your ICP. Every contact is reviewed for relevance and quality before the campaign begins.
                </>
            ),
            image: "/New2.svg",
            imageAlt: "Research and Data List View"
        },
        {
            number: "03",
            title: "Content Creation & Campaign Setup",
            description: <>
                Content is the backbone of every campaign. We write personalised outreach content - LinkedIn messages and email sequences - generate relevant leads. For LinkedIn automation, we work with tools like <span className="font-bold text-[#FAC207]">LinkedHelper, Expandi, and Octopus CRM</span>. For email sequences and multi-channel outreach, we use <span className="font-bold text-[#FAC207]">Lemlist</span>. You review and approve all content before anything goes live. Nothing is sent without your sign-off.
            </>,
            image: "/New3.svg",
            imageAlt: "Campaign Strategy Workspace"
        },
        {
            number: "04",
            title: "Campaign Execution",
            description: (
                <> We run your LinkedIn and email campaigns, managing connection requests, follow-ups, and sequencing across both channels. Email marketing is executed via <span className="text-[#FAC207]">Mailchimp</span>, where applicable. WhatsApp follow-up touchpoints are managed through <span className="text-[#FAC207]">Wati</span>, Website visitor tracking—anonymity is broken via WarmLeads, <span className="text-[#FAC207]">Snitcher,LeadFeeder, and Kwanzoo</span> helps us identify warm prospects who are already engaging with your brand.</>
            ),
            image: "/New4.svg",
            imageAlt: "Automation Workflows Illustration"
        },
        {
            number: "05",
            title: "Response Management",
            description: (
                <>When replies come in, we go beyond simply acknowledging them. Our team qualifies each response, understands the <span className="text-[#FAC207]">prospect's intent, and engage meaningfully</span>, so by the time a conversation reaches you, it's already moving in the right direction.</>
            ),
            image: "/New6.svg",
            imageAlt: "Qualified Conversations Dashboard"
        },
        {
            number: "06",
            title: "Reporting & Optimisation",
            description: (<> You receive regular performance updates covering reply rates, connection acceptance rates, and leads generated.All communication and reporting is managed through <span className="text-[#FAC207]">Slack</span> and email.Campaign data flows into <span className="text-[#FAC207]">HubSpot</span> or <span className="text-[#FAC207]">Zoho CRM</span> for your team's full visibility. Campaigns are continuously refined based on what the data shows</>),
            image: "/New7.svg",
            imageAlt: "Reporting Optimization Charts"
        },
        {
            number: "07",
            title: "Lead Handover to Your Team",
            description: (
                <>
                    When a prospect is ready to talk, we hand the conversation over to you or book a meeting directly onto your calendar via <span className="font-bold text-[#FAC207]">Calendly</span>. Video meetings are facilitated over <span className="font-bold text-[#FAC207]">Zoom</span> or <span className="font-bold text-[#FAC207]">Google Meet</span>, depending on your preference. Your sales team picks up from a warm, qualified starting point - with full context on the conversation so far.
                </>
            ),
            image: "/New8.svg",
            imageAlt: "Sales Pipeline Pipeline Win Graphic"
        }
    ];

    return (
        <section className="w-full font-jakarta bg-white text-[#0A2540] py-4 lg:py-8 px-4 sm:px-6 lg:px-16  relative">
            <div className="absolute top-0 left-0 right-0 h-4 bg-[#FAAF00]" />

            {/* Background Radial Ambient Subtle Glows */}
            <div className="absolute top-[15%] left-0 w-72 h-96 bg-amber-50/60 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[30%] right-0 w-80 h-96 bg-amber-50/50 rounded-full blur-3xl pointer-events-none" />

            {/* Main Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-8 pt-8 lg:pt-4">
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                    How It <span className="text-[#FAC207] el-messiri">Works ?</span>
                </h2>
                {/* <p className="text-black text-xs sm:text-sm font-medium tracking-wide mt-3">
                    From understanding to booked meetings, here's what the process involves
                </p> */}
            </div>

            {/* Steps Pipeline Grid Wrapper */}
            <div className="max-w-6xl mx-auto relative -mt-10 flex flex-col space-y-16 lg:space-y-16">
                {steps.map((step, index) => {
                    const isEven = index % 2 === 1;
                    const showGlow = index % 2 === 0;

                    return (
                        <div
                            key={index}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative"
                        >
                            {showGlow && (
                                <div className="absolute left-[0%] top-1/2 -translate-y-1/2 w-72 h-72 bg-[#FAAF00]/40 rounded-full blur-[120px] pointer-events-none z-0" />
                            )}

                            {/* CONTENT BLOCK */}
                            <div
                                className={`lg:col-span-6 flex flex-col space-y-4
  order-1
  ${isEven ? 'lg:order-2 lg:pl-6' : 'lg:order-1 lg:pr-6'}
  items-center lg:items-start text-center lg:text-left`}
                            >

                                {/* Step & Title Header */}
                                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                                    <div className="flex items-center gap-2 text-lg sm:text-xl font-bold tracking-wider text-black flex-shrink-0 select-none">
                                        <span>Step</span>
                                        <span className="bg-[#FAC207] text-[#0A2540] rounded-md px-3 py-1 font-black text-base sm:text-lg shadow-sm">
                                            {step.number}
                                        </span>
                                    </div>

                                    <h3 className="text-md sm:text-xl md:text-xl font-black text-[#0A2540] tracking-tight">
                                        {step.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-sm font-medium leading-relaxed pt-1 lg:ml-28 text-center lg:text-left">
                                    {step.description}
                                </p>
                            </div>

                            {/* IMAGE SHOWCASE BLOCK */}
                            <div
                                className={`lg:col-span-6
  order-2
  ${isEven ? 'lg:order-1' : 'lg:order-2'}
  flex justify-center`}
                            >
                                <div className="relative w-full max-w-[460px]">

                                    {/* Yellow Glow Patch */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="w-52 h-52 bg-[#FAAF00]/15 rounded-full blur-3xl" />
                                    </div>

                                    <div className=" p-3 relative z-10">
                                        <img
                                            className="w-full h-full object-cover rounded-2xl"
                                            src={step.image}
                                            alt={step.imageAlt}
                                        />
                                    </div>

                                </div>
                            </div>

                            {/* INTERMEDIATE CONNECTIVE TIMELINE SWOOSH ARROWS (Desktop Only) */}
                            {index < steps.length - 1 && (
                                <div className={`hidden lg:block absolute left-1/2 -bottom-[70px] transform -translate-x-1/2 text-[#FAAF00] pointer-events-none opacity-80 h-24 w-36 z-0`}>
                                    <svg
                                        className={`w-full h-full ${isEven ? 'scale-x-[-1]' : ''}`}
                                        viewBox="0 0 160 120"
                                        fill="none"
                                    >
                                        <path
                                            d="M20 20
                                               C20 85,
                                               130 35,
                                               130 90"
                                            stroke="#FAAF00"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            fill="none"
                                        />

                                        <path
                                            d="M118 78
                                               L130 90
                                               L142 78"
                                            stroke="#FAAF00"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                        />
                                    </svg>
                                </div>
                            )}

                        </div>
                    );
                })}
            </div>
        </section>
    );
}