// Imported crisp, modern brand icons from react-icons/fa6
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Schedule from "./Schedule";
import { useSendContactMessageMutation } from '../Redux/Api';

const OfficeAndFooter = () => {
    const officeVideo = `/HunarStreet Video edit.mp4`;
    const [emailInput, setEmailInput] = useState('');
    const [showSchedule, setShowSchedule] = useState(false);
    const [inputError, setInputError] = useState('');
    const navigate = useNavigate();

    // Same RTK Query mutation used by the Schedule modal form
    const [sendContactMessage, { isLoading: sendingEmail, isSuccess, isError, error }] =
        useSendContactMessageMutation();

    // Smooth scroll navigation utility to move user down to the contact forms/details
    const handleNavigate = (path) => {
        navigate(path);

        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 100);
    };

    // Validates email or 10-digit phone, then sends via the backend /api/contact endpoint
    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        const value = emailInput.trim();
        setInputError('');

        if (!value) return;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isDigitsOnly = /^\d+$/.test(value);

        let isEmail = false;

        if (emailRegex.test(value)) {
            isEmail = true;
        } else if (isDigitsOnly) {
            if (value.length !== 10) {
                setInputError("Phone number must be exactly 10 digits.");
                return;
            }
        } else {
            setInputError("Enter a valid email address or a 10-digit phone number.");
            return;
        }

        // Backend /api/contact expects firstName, lastName, email, phoneNumber, subject, message
        const payload = {
            firstName: "Website",
            lastName: "Visitor",
            email: isEmail ? value : "Not provided",
            phoneNumber: !isEmail ? value : "Not provided",
            subject: "Quick Contact Request",
            message: `A visitor requested recruitment support. Contact detail provided: ${value}`,
        };

        try {
            await sendContactMessage(payload).unwrap();
            setEmailInput('');
        } catch (err) {
            console.error('Contact API error:', err);
        }
    };

    // Triggers direct email context frame via mailto handler sequence
    const handleDirectMailClick = () => {
        window.location.href = "mailto:ayusg@gmail.com?subject=Get In Touch - Hunarstreet";
    };

    // Real dynamic maps placement pointer generated explicitly from address lines matching company metrics
    const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Arihant+Aura+Turbhe+Navi+Mumbai";

    return (
        <div className="w-full relative overflow-hidden select-none">

            {/* Topography wavy line design simulation overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] z-0" />

            {/* =========================================================
            1. VIDEO CONTAINER SECTION ("A Walk Through Our Office")
            ========================================================= */}
            <div className="max-w-8xl mx-auto px-4  sm:px-6 lg:px-8 pt-16 pb-24 text-center relative z-10">
                <h2 className="text-3xl sm:text-[44px] font-semibold lg:text-[44px] font-jakarta text-[#041C3E] tracking-tight mb-3">
                    A Walk Through Our <span className="text-[#FFBF00]  font-messiri relative inline-block leading-none">
                        Office
                        <img
                            src="/Rectangle 123.png"
                            alt=""
                            className="absolute left-0 -bottom-2 w-full h-auto"
                        />
                    </span>
                </h2>
                <p className="text-xs sm:text-[17px] text-black max-w-xl mx-auto mb-12 font-medium">
                    Meet the people, culture, and collaborative environment that drive successful hiring outcomes every day.
                </p>

                {/* Video Wrapper Box */}
                <div className="relative w-full max-w-7xl aspect-video min-h-[240px] max-h-[720px] mx-auto rounded-[32px] p-2 group">
                    <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-32 h-32 bg-[#F9B700] rounded-full -z-10 hidden md:block" />
                    <div className="absolute -right-16 -top-8 w-48 h-48 bg-[#F9B700] rounded-full -z-10 hidden md:block" />

                    <div className="w-full h-[250px] sm:h-[350px] lg:h-[550px] xl:h-[650px] rounded-[24px]  flex items-center justify-center relative overflow-hidden">
                        <video
                            src={officeVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls
                            preload="metadata"
                            className="w-full h-full object-contain md:object-cover"
                        >
                            <source src={officeVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>

            {/* =========================================================
            2. CTA LAYER CONTAINER ("Let's Talk About Your Pipeline?")
            ========================================================= */}
            {/* <div className="w-full hidden md:block px-4 -mt-56 lg:-mt-56 md:-mt-48 sm:px-6 lg:px-8 relative z-20 translate-y-[100px]">
                <div
                    className="max-w-5xl mx-auto text-[#031430] rounded-[36px] overflow-visible p-8 sm:p-12 text-center relative"
                    style={{
                        backgroundImage: "url('/Rectangle 117(1).png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >


                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-semibold tracking-tight text-[#031430] mb-4">
                        Ready to Build Your Winning Team?
                    </h3>
                    <p className="text-sm sm:text-lg font-semibold max-w-2xl mx-auto mb-8 leading-relaxed text-[#031430]/80">
                        Whether you're hiring for a single position or scaling an entire team, our recruitment specialists are here to help you connect with qualified professionals and achieve your hiring goals.
                    </p>

                    <button onClick={() => setShowSchedule(true)} className="bg-white hover:bg-slate-50 text-[#031430]  font-black  font-messiri text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md flex items-center space-x-2 mx-auto transition-all duration-200 active:scale-95 group">
                        <span className="font-messiri text-lg font-semibold">Talk to Our Team </span>
                        <span className="transform group-hover:translate-x-0.5 transition-transform">→</span>
                    </button>
                </div>
            </div> */}

            {/* =========================================================
            3. FOOTER FRAME SECTION (White Fluid Bottom Backdrop)
            ========================================================= */}
            <footer
                id="footer-contact-zone"
                className="w-full text-[#0A1A3A] -mt-8 pt-4 sm:pt-1 lg:pt-10 pb-6 px-4 sm:px-6 lg:px-12 rounded-t-[30px] sm:rounded-t-[60px] relative z-10 "
                style={{
                    backgroundImage: "url('/Rectangle 118.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0A1A3A_1px,transparent_1px)] [background-size:14px_14px] rounded-t-[60px]" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 pb-12 border-b border-slate-200 relative z-10 text-left">

                    {/* Left Column Block */}
                    <div className="md:col-span-3 space-y-4">
                        <h4 className="text-[16px] sm:text-[17px] font-bold text-black">Quick Links</h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-black/90 font-medium">
                            <li
                                onClick={() => handleNavigate('/recruitment')}
                                className="hover:text-[#E6B400] cursor-pointer transition-colors w-fit"
                            >
                                Recruitment
                            </li>

                            <li
                                onClick={() => handleNavigate('/lead-generation')}
                                className="hover:text-[#E6B400] cursor-pointer transition-colors w-fit"
                            >
                                Lead Generation
                            </li>
                        </ul>
                        <div className="pt-2">
                            <button
                                onClick={() => setShowSchedule(true)}
                                className="bg-[#FFC700] hover:bg-[#E6B400] text-[#031430] font-black text-xs px-5 py-3 rounded-xl shadow-md flex items-center space-x-1.5 transition-transform duration-150 active:scale-95 group cursor-pointer border-none"
                            >
                                <span>Get In Touch</span>
                                <span className="transform group-hover:translate-x-0.5 transition-transform">→</span>
                            </button>
                        </div>
                    </div>

                    {/* Center Column Block */}
                    <div className="md:col-span-4 -px-4 space-y-3">
                        <h4 className="text-[16px] sm:text-[17px] font-bold text-black">Contact Us</h4>
                        <div className="space-y-1">
                            <p className="text-[14px] sm:text-[15px] text-black font-bold">Address</p>
                            <a
                                href={mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-[13px] text-black/90 hover:text-[#031430] font-medium max-w-xs transition-colors leading-relaxed group"
                            >
                                B-1403, Arihant Aura, plot no. 13/1, TTC Industrial Area, Thane Belapur Road, Turbhe, Navi Mumbai - 400705
                                <span className="block text-xs text-blue-800 font-bold mt-1 group-hover:underline">View on Google Maps ↗</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column Block */}
                    <div className="md:col-span-5 space-y-4">
                        <h4 className="text-[15px] sm:text-[16px] font-bold text-black leading-snug">
                            Need recruitment support ?
                        </h4>

                        <form onSubmit={handleEmailSubmit} className="w-full flex flex-col gap-1 max-w-md">
                            <div className="w-full flex items-center bg-white/60 border border-slate-300 rounded-xl p-1 shadow-sm focus-within:border-slate-500 transition-colors backdrop-blur-xs">
                                <input
                                    type="text"
                                    required
                                    value={emailInput}
                                    onChange={(e) => setEmailInput(e.target.value)}
                                    placeholder="Enter your email address/Contact no"
                                    className="w-full bg-transparent px-3 py-2 text-xs sm:text-[14px] font-medium text-black placeholder-slate-500 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    disabled={sendingEmail}
                                    className="bg-[#FFC700] hover:bg-[#E6B400] text-black font-bold text-[14px] px-5 py-2.5 rounded-lg shadow-sm transition-colors cursor-pointer shrink-0 border-none disabled:opacity-60"
                                >
                                    {sendingEmail ? 'Sending...' : 'Send'}
                                </button>
                            </div>
                            {inputError && <p className="text-red-600 text-xs font-medium px-1">{inputError}</p>}
                        </form>

                        {isSuccess && (
                            <p className="text-green-700 text-xs font-medium pt-1">Thanks! We'll get in touch shortly.</p>
                        )}
                        {isError && (
                            <p className="text-red-600 text-xs font-medium pt-1">
                                {error?.data?.message || "Something went wrong. Please try again."}
                            </p>
                        )}

                        {/* Social Grid with Real Icons */}
                        <div className="flex items-center space-x-3 pt-2">
                            <a
                                href="https://www.facebook.com/people/Hunarstreet-Technologies-Pvt-Ltd/61559300385529/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-xl bg-[#FFC700] hover:bg-[#E6B400] text-[#031430] flex items-center justify-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-90"
                                aria-label="Facebook"
                            >
                                <FaFacebookF className="text-sm" />
                            </a>

                            <a
                                href="https://www.instagram.com/hunarstreettech_pvtltd/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-xl bg-[#FFC700] hover:bg-[#E6B400] text-[#031430] flex items-center justify-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-90"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="text-base" />
                            </a>

                            <a
                                href="https://www.linkedin.com/company/hunarstreet-technologies-pvtltd/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-xl bg-[#FFC700] hover:bg-[#E6B400] text-[#031430] flex items-center justify-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-90"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn className="text-sm" />
                            </a>

                            <a
                                href="https://x.com/Hunarstreet"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-xl bg-[#FFC700] hover:bg-[#E6B400] text-[#031430] flex items-center justify-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-90"
                                aria-label="Twitter / X"
                            >
                                <FaXTwitter className="text-sm" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* =========================================================
                4. SUB-FOOTER COPYRIGHT BAR
                ========================================================= */}
                <div className="max-w-7xl mx-auto pt-6 flex items-center justify-center text-center relative z-10">
                    <p className="text-black text-[14px] sm:text-[15px] font-bold">
                        ©2026 Hunarstreet. All Copyrights Reserved.
                    </p>
                </div>
            </footer>
            <Schedule isDemoOpen={showSchedule} setIsDemoOpen={setShowSchedule} />
        </div>
    );
};

export default OfficeAndFooter;