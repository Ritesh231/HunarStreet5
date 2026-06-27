import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Schedule from './Schedule';

const Navbar = ({ isDemoOpen: propIsDemoOpen, setIsDemoOpen: propSetIsDemoOpen }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [internalIsDemoOpen, setInternalIsDemoOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isDemoOpen = propIsDemoOpen !== undefined ? propIsDemoOpen : internalIsDemoOpen;
    const setIsDemoOpen = propSetIsDemoOpen !== undefined ? propSetIsDemoOpen : setInternalIsDemoOpen;

    const path = location.pathname;

    const navConfigs = {
        '/': [
            { label: 'Home', type: 'scroll', target: '/' },
            { label: 'Recruitment', type: 'link', target: '/recruitment' },
            { label: 'Lead Generation', type: 'link', target: '/lead-generation' },
        ],
        '/recruitment': [
            { label: 'Home', type: 'scroll', target: '/' },
            { label: 'About', type: 'scroll', target: 'about' },
            { label: 'Positions', type: 'scroll', target: 'positions' },
            { label: 'Industries', type: 'scroll', target: 'industries' },
        ],
        '/lead-generation': [
            { label: 'Home', type: 'scroll', target: '/' },
            { label: 'Solution', type: 'scroll', target: 'solution' },
            { label: 'Services', type: 'scroll', target: 'whatwedo' },
            { label: 'Industries', type: 'scroll', target: 'industries' },
        ],
    };

    const currentNavItems = navConfigs[path] || navConfigs['/'];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };



    const handleNavClick = (item) => {
        if (item.label === "Home") {
            navigate('/');

            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }, 100);

            setIsOpen(false);
            return;
        }

        if (item.type === 'scroll') {
            scrollToSection(item.target);
        } else {
            navigate(item.target);
            setIsOpen(false);
        }
    };

    return (
        <nav className="sticky top-0 w-full bg-white z-[9999] shadow-sm">
            <div className="mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* LEFT: Logo Area */}
                    <div
                        className="flex-shrink-0 w-20 mt-2 flex flex-col items-center cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        <img
                            src="/Hunarstreetlogo.png"
                            alt="HunarStreetLogo"
                            className="w-14 h-14 object-contain"
                        />

                        <h2 className=" text-[10px] whitespace-nowrap font-semibold text-center">
                            Hunar Street
                        </h2>
                    </div>

                    {/* CENTER: Navigation Links (Pill Style - Hidden on Mobile) */}
                    <div className="hidden md:flex ml-8 items-center justify-center flex-1 px-4">
                        <div className="bg-[#031530] rounded-full px-8 py-2.5 flex items-center space-x-8 shadow-md">
                            {currentNavItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleNavClick(item)}
                                    className={`${index === 0 ? 'text-yellow-500 font-semibold' : 'text-white font-medium'} text-sm hover:text-yellow-400 transition-colors`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: CTA Button (Hidden on Mobile) */}
                    <div className="hidden md:flex items-center">
                        <button
                            onClick={() => setIsDemoOpen(true)}
                            className="bg-[#FFC107] hover:bg-[#E0A800] text-[#031530] font-semibold px-5 py-2.5 rounded-lg border border-[#FFC107] shadow-[0_0_30px_rgba(255,193,7,0.55),0_0_60px_rgba(255,193,7,0.25)] hover:shadow-[0_0_45px_rgba(255,193,7,0.75),0_0_80px_rgba(255,193,7,0.35)] transition-all duration-300 text-sm"
                        >
                            Schedule Call
                        </button>
                    </div>


                    {/* MOBILE MENU BUTTON (Hamburger Icon) */}
                    <div className="flex md:hidden ">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#031530] hover:bg-gray-100 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                // Close (X) Icon
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Hamburger Menu Icon
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE DROPDOWN MENU */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#031530] transition-all duration-300 w-full`}>
                <div className="pt-4 pb-6 space-y-3 shadow-lg">
                    {currentNavItems.map((item, index) => (
                        <button
                            key={index}
                            className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium ${index === 0 ? 'text-yellow-500 bg-[#051937]' : 'text-white hover:bg-[#051937] hover:text-yellow-400'}`}
                            onClick={() => handleNavClick(item)}
                        >
                            {item.label}
                        </button>
                    ))}

                    <div className="pt-4 border-t border-gray-700 px-4">
                        <button
                            onClick={() => {
                                setIsDemoOpen(true);
                                setIsOpen(false);
                            }}
                            className="w-full bg-[#FFC107] hover:bg-[#E0A800] text-[#031530] font-semibold px-4 py-3 rounded-md shadow-md text-center block text-base"
                        >
                            Schedule Demo
                        </button>
                    </div>

                </div>
            </div>
            <Schedule isDemoOpen={isDemoOpen} setIsDemoOpen={setIsDemoOpen} />
        </nav>

    );
};

export default Navbar;