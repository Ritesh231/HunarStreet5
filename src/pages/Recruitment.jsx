import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import LeadGenClientTestomonial from '../components/LeadGenClientTestomonial';
import LeadGenGrowth from '../components/LeadGenGrowth';
import LeadGenBottomSection from '../components/LeadGenBottomSection';
import LeadGenFrequentlyaskedQuestions from "../components/LeadGenFrequentlyaskedQuestions";
import RecruitmentFrequently from "../components/RecruitmentFrequently.jsx";
import Recruitmentfooter from '../components/Recruitmentfooter.jsx';
import RecruitmentTestimonial from '../components/RecruitmentTestimonial.jsx';
import { Link } from 'react-router-dom';
import Schedule from "../components/Schedule.jsx";

const recruitmentAsset = (fileName) => `/assets/RecruitmentPageAssets/${fileName}`;

const blurboll = recruitmentAsset('Ellipse 36.png');
const logo = recruitmentAsset('img1046 1.png');
const hero2 = recruitmentAsset('Group 1000001779.png');
const hero3 = recruitmentAsset('Rectangle 30.png');
const line = '/assets/Rectangle 124.png';
const grayback = recruitmentAsset('Rectangle 139.png');
const ses23 = recruitmentAsset('Rectangle 3843.png');
const ses22 = recruitmentAsset('Rectangle 3842.png');
const icon1 = recruitmentAsset('streamline-freehand-color_job-profile-search.png');
const icon2 = recruitmentAsset('streamline-freehand-color_job-search-magnifier-briefcase.png');
const step1 = recruitmentAsset('55a9250c-5cbd-4584-89fc-854978709e64 1.png');
const step2 = recruitmentAsset('4cf62608-1f99-4920-b0af-980c10cdf2b1 1.png');
const step3 = recruitmentAsset('cc0d50cd-51b3-4a16-a257-f47016d1375c 1.png');
const step4 = recruitmentAsset('ChatGPT Image Jun 4, 2026, 08_37_18 PM 4.png');
const vector10 = recruitmentAsset('Vector 10.png');
const vector11 = recruitmentAsset('Vector 11.png');
const vector12 = recruitmentAsset('Vector 12.png');
const logoSvg = recruitmentAsset('Logo.svg.png');
const tech1 = recruitmentAsset('tech1.png');
const tech2 = recruitmentAsset('tech2.png');
const tech3 = recruitmentAsset('tech3.png');
const tech4 = recruitmentAsset('tech4.png');
const tech5 = recruitmentAsset('tech5.png');
const tech6 = recruitmentAsset('tech6.png');
const tech7 = recruitmentAsset('tech7.png');
const tech8 = recruitmentAsset('tech8.png');
const tech9 = recruitmentAsset('tech9.png');
const tech10 = recruitmentAsset('tech10.png');
const tech11 = recruitmentAsset('tech11.png');
const tech12 = recruitmentAsset('tech12.png');
const tech13 = recruitmentAsset('tech13.png');
const tech14 = recruitmentAsset('tech14.png');
const tech15 = recruitmentAsset('tech15.png');
const tech16 = recruitmentAsset('tech16.png');
const tech17 = recruitmentAsset('tech17.png');
const tech18 = recruitmentAsset('tech18.png');
const tech19 = recruitmentAsset('tech19.png');
const tech20 = recruitmentAsset('tech20.png');
// const tech21 = recruitmentAsset('tech21.png')
const tech22 = recruitmentAsset('tech22.png')
// const tech23 = recruitmentAsset('tech23.png')
const tech24 = recruitmentAsset('tech24.png')
const tech25 = recruitmentAsset('tech25.png')
const tech26 = recruitmentAsset('tech26.png')
const oip = recruitmentAsset('OIP.jpg');
const tech30 = recruitmentAsset('tech30.png');
const tech31 = recruitmentAsset('tech31.png');
const tech32 = recruitmentAsset('tech32.png');
const tech33 = recruitmentAsset('tech33.png');
const tech34 = recruitmentAsset('tech34.png');
const tech35 = recruitmentAsset('tech35.png');
const tech36 = recruitmentAsset('tech36.png');
const tech37 = recruitmentAsset('tech37.png');
const tech38 = recruitmentAsset('tech38.png');
const tech39 = recruitmentAsset('tech39.png');
const tech40 = recruitmentAsset('tech40.png');
const tech41 = recruitmentAsset('tech50.png');
const frontend1 = recruitmentAsset('frontend1.png');
const frontend2 = recruitmentAsset('frontend2.png');
const frontend3 = recruitmentAsset('frontend3.png');
const frontend4 = recruitmentAsset('frontend4.png');
const frontend5 = recruitmentAsset('frontend5.png');
const frontend6 = recruitmentAsset('frontend6.png');
const frontend7 = recruitmentAsset('frontend7.png');
const frontend8 = recruitmentAsset('frontend8.png');
const frontend9 = recruitmentAsset('frontend9.png');
const frontend10 = recruitmentAsset('frontend10.png');
const frontend11 = recruitmentAsset('frontend11.png');
const frontend12 = recruitmentAsset('frontend12.png');
const backend1 = recruitmentAsset('backend1.png');
const backend2 = recruitmentAsset('backend2.png');
const backend3 = recruitmentAsset('backend3.png');
const backend4 = recruitmentAsset('backend4.png');
const backend5 = recruitmentAsset('backend5.png');
const backend6 = recruitmentAsset('backend6.png');
const backend7 = recruitmentAsset('backend7.png');
const backend8 = recruitmentAsset('backend8.png');
const backend9 = recruitmentAsset('backend9.png');
const backend10 = recruitmentAsset('backend10.png');
const se1 = recruitmentAsset('SE1.png');
const se2 = recruitmentAsset('SE2.png');
const se3 = recruitmentAsset('SE3.png');
const se4 = recruitmentAsset('SE4.png');
const appd1 = recruitmentAsset('APPD1.png');
const appd2 = recruitmentAsset('APPD2.png');
const appd3 = recruitmentAsset('APPD3.png');
const appd4 = recruitmentAsset('APPD4.png');
const appd5 = recruitmentAsset('APPD5.png');
const appd6 = recruitmentAsset('APPD6.png');
const appd7 = recruitmentAsset('APPD7.png');
const appd8 = recruitmentAsset('APPD8.png');
const appd9 = recruitmentAsset('APPD9.png');
const appd10 = recruitmentAsset('APPD10.png');
const appd11 = recruitmentAsset('APPD11.png');
const appd12 = recruitmentAsset('APPD12.png');
const appd13 = recruitmentAsset('APPD13.png');
const appd14 = recruitmentAsset('APPD14.png');
const erp1 = recruitmentAsset('ERP1.png');
const erp2 = recruitmentAsset('ERP2.png');
const erp3 = recruitmentAsset('ERP3.png');
const erp4 = recruitmentAsset('ERP4.png');
const erp5 = recruitmentAsset('ERP5.png');
const erp6 = recruitmentAsset('ERP6.png');
const erp7 = recruitmentAsset('ERP7.png');
const erp8 = recruitmentAsset('ERP8.png');
const erp9 = recruitmentAsset('ERP9.png');
const erp10 = recruitmentAsset('ERP10.png');
const crm1 = recruitmentAsset('CRM1.png');
const crm2 = recruitmentAsset('CRM2.png');
const crm3 = recruitmentAsset('CRM3.png');
const crm4 = recruitmentAsset('CRM4.png');
const crm5 = recruitmentAsset('CRM5.png');
const crm6 = recruitmentAsset('CRM6.png');
const crm7 = recruitmentAsset('CRM7.png');
const crm8 = recruitmentAsset('CRM8.png');
const crm9 = recruitmentAsset('CRM9.png');
const crm10 = recruitmentAsset('CRM10.png');
const crm11 = recruitmentAsset('CRM11.png');
const crm12 = recruitmentAsset('CRM12.png');
const crm13 = recruitmentAsset('CRM13.png');
const cloude1 = recruitmentAsset('Cloude1.png');
const cloude2 = recruitmentAsset('Cloude2.png');
const cloude3 = recruitmentAsset('Cloude3.png');
const cloude4 = recruitmentAsset('Cloude4.png');
const cloude5 = recruitmentAsset('Cloude5.png');
const cloude6 = recruitmentAsset('Cloude6.png');
const cloude7 = recruitmentAsset('Cloude7.png');
const cloude8 = recruitmentAsset('Cloude8.png');
const cloude9 = recruitmentAsset('Cloude9.png');
const cloude10 = recruitmentAsset('Cloude10.png');
const tss1 = recruitmentAsset('TSS1.png');
const tss2 = recruitmentAsset('TSS2.png');
const tss3 = recruitmentAsset('TSS3.png');
const tss4 = recruitmentAsset('TSS4.png');
const tss5 = recruitmentAsset('TSS5.png');
const tss6 = recruitmentAsset('TSS6.png');
const tss7 = recruitmentAsset('TSS7.png');
const tss8 = recruitmentAsset('TSS8.png');
const tss9 = recruitmentAsset('TSS9.png');
const tss10 = recruitmentAsset('TSS10.png');
const tss11 = recruitmentAsset('TSS11.png');
const tss12 = recruitmentAsset('TSS12.png');
const sa1 = recruitmentAsset('SA1.png');
const sa2 = recruitmentAsset('SA2.png');
const sa3 = recruitmentAsset('SA3.png');
const sa4 = recruitmentAsset('SA4.png');
const sa5 = recruitmentAsset('SA5.png');
const sa6 = recruitmentAsset('SA6.png');
const sa7 = recruitmentAsset('SA7.png');
const dops1 = recruitmentAsset('DOPS1.png');
const dops2 = recruitmentAsset('DOPS2.png');
const dops3 = recruitmentAsset('DOPS3.png');
const dops4 = recruitmentAsset('DOPS4.png');
const dops5 = recruitmentAsset('DOPS5.png');
const dops6 = recruitmentAsset('DOPS6.png');
const dops7 = recruitmentAsset('DOPS7.png');
const dops8 = recruitmentAsset('DOPS8.png');
const dops9 = recruitmentAsset('DOPS9.png');
const dops10 = recruitmentAsset('DOPS10.png');
const dops11 = recruitmentAsset('DOPS11.png');
const dops12 = recruitmentAsset('DOPS12.png');
const dops13 = recruitmentAsset('DOPS13.png');
const dops14 = recruitmentAsset('DOPS14.png');
const dops15 = recruitmentAsset('DOPS15.png');
const dops16 = recruitmentAsset('DOPS16.png');

const Recruitment = () => {
    const [isDemoOpen, setIsDemoOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("technical");
    const [showAll, setShowAll] = useState(false);
    const [showSchedule, setShowSchedule] = useState(false);

    const [selectedRole, setSelectedRole] = useState(
        "Staff Software Engineer"
    );

    const logoCards = [
        { id: 1, logo: "/26five png.png" },
        { id: 2, logo: "/actvy png.png" },
        { id: 3, logo: "/arvind png.png" },
        { id: 4, logo: "/bright point png.png" },
        { id: 5, logo: "/Burgundy png.png" },
        { id: 6, logo: "/coffe png.png" },
        { id: 7, logo: "/eazydiner png.png" },
        { id: 8, logo: "/ed png.png" },
        { id: 9, logo: "/healthysure png.png" },
        { id: 10, logo: "/Hilton png.png" },
        { id: 11, logo: "/jai kisan png.png" },
        { id: 12, logo: "/Kotak png.png" },
        { id: 13, logo: "/plix png.png" },
        { id: 14, logo: "/R System png.png" },
        { id: 15, logo: "/som distilleries png.png" },
        { id: 16, logo: "/stulz png.png" },
        { id: 17, logo: "/tamarino png.png" },
        { id: 18, logo: "/traydo png.png" },
        { id: 19, logo: "/vayavya png.png" },
        { id: 20, logo: "/welspun png.png" },
        { id: 21, logo: "/eat png.png" },
        { id: 22, logo: "/TAC ayurveda png.jpg" },
        { id: 23, logo: "/msc png.jpeg" },
        { id: 24, logo: "/mother sparsh png.jpeg" }
    ];
    //Newest
    const techRoles = [
        "Staff Software Engineer",
        "Machine Learning Engineer",
        "Data Science Engineer",
        "DevOps Engineer",
        "Front-End Developers",
        "Back-End Developers",
        "Software Engineers",
        "App Developers",
        "ERP Consultants",
        "CRM Consultants",
        "Cloud Engineers",
        "Tech/Server Support",
        "System Analyst"
    ];

    const nonTechRoles = [
        "Manufacturing",
        "Retail/Apparel & Fashion",
        "Construction",
        "Fintech",
        "EV",
        "Health, Wellness & Fitness",
        "E-commerce",
        "Healthcare",
        "Capital Markets",
        "Real Estate",
        "Ad Tech",
        "MICE",
        "SCM",
        "Maritime",


    ];

    const techLogos = {
        "Staff Software Engineer": [tech1, tech2, tech4, tech5, tech6, tech7, tech8, tech9, tech10, tech11, tech12],
        "Machine Learning Engineer": [oip, tech14, tech15, tech17, tech18, tech19, tech25, tech22],
        "Data Science Engineer": [oip, tech31, tech32, tech33, tech34, tech35, tech36, tech37, tech38, tech39, tech40, tech41],
        "DevOps Engineer": [dops1, dops2, dops3, dops4, dops5, dops6, dops7, dops8, dops9, dops10, dops11, dops12, dops13, dops14, dops15, dops16],
        "Front-End Developers": [frontend1, frontend2, frontend5, frontend6, frontend7, frontend8, frontend9, frontend10, frontend11, frontend12],
        "Back-End Developers": [backend1, backend2, backend3, backend4, backend5, backend6, backend7, backend8, backend9, backend10],
        "Software Engineers": [se1, se2, se3, se4],
        "App Developers": [appd1, appd2, appd3, appd4, appd5, appd6, appd7, appd8, appd9, appd10, appd11, appd12, appd13, appd14],
        "ERP Consultants": [erp1, erp2, erp3, erp4, erp5, erp6, erp7, erp8, erp9, erp10],
        "CRM Consultants": [crm1, crm2, crm3, crm4, crm6, crm7, crm8, crm9, crm10, crm11, crm13],
        "Cloud Engineers": [cloude1, cloude2, cloude4, cloude5, cloude6, , cloude8, cloude9, cloude10],
        "Tech/Server Support": [tss1, tss2, tss3, tss4, tss5, tss6, tss7, tss8, tss9, tss10, tss11, tss12],
        "System Analyst": [sa1, sa2, sa3, sa4, sa5, sa6, sa7],
    };

    const industries = [
        'Healthcare', 'Manufacturing', 'Information Technology', 'BFSI',
        'E-Commerce', 'Retail', 'Logistics', 'Supply Chain',
        'Healthcare', 'Manufacturing', 'Information Technology', 'BFSI',
        'E-Commerce', 'Retail', 'Logistics', 'Supply Chain'
    ]

    const nonTechData = {
        "EV": [
            "Lead - EV Charging",
            "RND Head",
            "Technical Lead - Power Electronics - EV",
            "Sales / Business / Key Accounts Manager",
            "DGM - Lead Digital Twin System Development",
            "Lead Engineer (L3)",
            "Electric Vehicle Thermal Management System Engineer",
            "Vendor Development - Electrical",
            "Senior Manager Purchase Trims",
            "Head Product Development & System EV",
            "AM/DM - Service EV Preparation"
        ],

        "Health, Wellness & Fitness": [
            "Spa Manager",
            "Lead - Workplace Experience",
            "Partnership Specialist",
            "Health and Wellness Coach",
            "Research Manager",
            "Manager New Product Development",
            "Head Of Clinical Research",
            "Medical Affairs Manager",
            "Associate Venue Partnership",
            "Sales / Business Development / Key Accounts Manager"
        ],

        "E-commerce": [
            "E-commerce Manager",
            "Marketplace Manager",
            "Catalog Manager",
            "Digital Marketing Manager",
            "Operations Manager",
            "Supply Chain Manager",
            "Customer Success Manager",
            "Business Development Manager",
            "Category Manager",
            "Key Accounts Manager"
        ],

        "Healthcare": [
            "Hospital Administrator",
            "Clinical Operations Manager",
            "Medical Affairs Manager",
            "Healthcare Consultant",
            "Patient Relationship Manager",
            "Research Manager",
            "Medical Officer",
            "Healthcare Operations Lead",
            "Business Development Manager",
            "Key Accounts Manager"
        ],


        "Beauty & Cosmetics": [
            "Brand Manager",
            "Product Development Manager",
            "Beauty Consultant",
            "Retail Operations Manager",
            "Marketing Manager",
            "Sales Manager",
            "Category Manager",
            "Customer Experience Manager",
            "Business Development Manager",
            "Key Accounts Manager"
        ],

        "Fintech": [
            "Product Manager",
            "Business Analyst",
            "Risk Analyst",
            "Investment Advisor",
            "Relationship Manager",
            "Operations Manager",
            "Growth Manager",
            "Compliance Manager",
            "Business Development Manager",
            "Key Accounts Manager"
        ],

        "Capital Markets": [
            "Wealth Manager",
            "Deputy Manager - Fund Manager",
            "Sales / Business Development / Key Accounts Manager",
            "Startup Fund Raising Manager",
            "Senior Equity Research Analyst",
            "Mutual Fund Analyst",
            "Investment Advisor",
            "Head - Corporate Leasing",
            "Manager Investment Banking",
            "Client Relationship Manager",
            "Investor Relations Analyst"
        ],

        "Real Estate": [
            "Legal Head - Real Estate",
            "Assistant Manager - Sales - Real Estate",
            "Customer Relationship Management Specialist",
            "Real Estate Consultant",
            "Real Estate Project Finance Advisor",
            "Senior Real Estate Analyst",
            "Relationship Manager - Commercial Leasing",
            "Senior Survey Manager",
            "Accounts Manager - Real Estate",
            "Head - Corporate Leasing",
            "Sales / Business Development / Key Accounts Manager"
        ],

        "Ad Tech": [
            "Google Ads Specialist",
            "Search Engine Optimization Manager",
            "Performance Marketing Manager",
            "Sales / Business Development / Key Accounts Manager",
            "Advertising Copywriter",
            "Advertising Copyeditor",
            "Influencer Marketing Manager",
            "Social Media Marketing Manager",
            "Ad Film Maker",
            "Video Editor",
            "Public Relations"
        ],

        "MICE": [
            "Corporate Sales Specialist - MICE & Events",
            "Online Hotel Relations Manager",
            "Sales / Business Development / Key Accounts Manager",
            "Senior Manager - MICE Operations"
        ],

        "Construction": [
            "Construction Manager",
            "Civil Project Architect",
            "Township / Civil Construction Engineer",
            "Sales / Business Development / Key Accounts Manager",
            "Senior Planning Engineer",
            "Interior Designer",
            "Piping Engineer",
            "Senior Civil Engineer",
            "Solar Construction Manager",
            "CAD Engineer",
            "Electrical Engineer",
            "Tunnel Construction Engineer",
            "Warehouse Manager",
            "Environmental Engineer",
            "Finishing Manager - Infrastructure"
        ],

        "SCM": [
            "Manager - SCM",
            "Sales / Business Development / Key Accounts Manager",
            "SCM & Export Logistics Manager",
            "Warehouse Manager",
            "Material Management Engineer",
            "Inventory Manager",
            "Demand Forecasting Manager",
            "Purchasing Manager",
            "Distribution Manager",
            "Supply Chain Analyst / Specialist",
            "Order To Cash (OTC) Specialist"
        ],

        "Retail/Apparel & Fashion": [
            "Store Merchandiser",
            "Marketing Merchandising Manager",
            "Senior Fashion Consultant",
            "Customer Experience Manager",
            "Store Manager",
            "Regional Sourcing Manager",
            "Sales / Business Development / Key Accounts Manager",
            "Operations Manager",
            "Business Manager",
            "Lead Experience Stores",
            "Floor Manager",
            "Visual Merchandiser"
        ],

        "Maritime": [
            "Marine Superintendent",
            "Marine Officer",
            "Sales / Business Development / Key Accounts Manager",
            "Naval Architect",
            "Senior Naval Officer",
            "Ocean Engineer",
            "Marine Technician",
            "Fleet Manager"
        ],

        "Manufacturing": [
            "Automation Manager",
            "Plant Manager",
            "Process Engineer",
            "Manufacturing Operations Lead",
            "Plant Maintenance Engineer",
            "Sales / Business Development / Key Accounts Manager",
            "Production Manager",
            "Production Planning & Control",
            "Plant Operations Engineer",
            "Quality Control Engineer",
            "Business Process Re-Engineering Expert",
            "Safety Engineer"
        ]
    };
    const currentRoles =
        activeTab === "technical"
            ? techRoles
            : nonTechRoles;

    const visibleRoles = showAll
        ? currentRoles
        : currentRoles.slice(0, 5);

    const halfIndex = Math.ceil(logoCards.length / 2);
    const topRowLogos = logoCards.slice(0, halfIndex);
    const bottomRowLogos = logoCards.slice(halfIndex);

    return (
        <div className='relative w-full min-h-screen bg-white'>
            <Navbar setIsDemoOpen={setIsDemoOpen} isDemoOpen={isDemoOpen} />

            <section id="home" className="min-h-screen grid grid-cols-1 text-center  lg:-mt-12  [@media(min-width:1280px)_and_(min-height:720px)]:-mt-24 xl:-mt-12 lg:grid-cols-5 lg:text-left items-center justify-items-center px-8 md:px-16 lg:px-20  xl:px-6 lg:gap-8   w-full">

                <div className='col-span-2  grid items-center justify-items-center lg:items-start lg:justify-items-start gap-4'>
                    <div className="absolute left-0 top-[350px] w-[420px] h-[420px] bg-gradient-to-r from-[#FAC2076E]/30 to-[#FAC2076E]/10 rounded-r-[250px] blur-[20px] -z-0 hidden lg:block" />

                    <p className='text-center font-jakarta font-semibold text-lg text-[#041C3E] bg-[#90BEFF82] p-2 rounded-lg'>Industry-Specific Hiring Experts</p>
                    <h2 className='text-4xl whitespace-nowrap lg:text-[44px] font-jakarta font-bold text-[#041C3E] mt-6 '>India's Fastest Hiring</h2>
                    <div className='flex items-center gap-4 justify-center lg:justify-start  flex-col sm:flex-row  items-center'>

                        <div clasName='  overflow-hidden  '>
                            <h1 className='font-messiri font-semibold text-4xl lg:text-6xl  text-[#FAC207]'>Platform</h1>
                            <img src={line} alt="line" className=' ' />
                        </div>
                    </div>
                    <p className='text-[#041C3E] font-jakarta text-lg font-medium'>
                        We help organizations find and hire top talent across Tech and Non-Tech domains through our specialized recruitment process, extensive candidate network.
                    </p>
                    <div className='flex z-10 flex-row flex-wrap sm:flex-nowrap items-center justify-center lg:justify-start gap-3 mt-8'>
                        <button onClick={() => setShowSchedule(true)} className="cursor-pointer text-xs md:text-lg bg-[#FAC207] text-[#041C3E] font-messiri  py-2 px-4 rounded-lg hover:bg-[#041C3E] hover:text-white shadow-[0_0_25px_rgba(250,194,7,0.7)]">Get In Touch <i class="ri-arrow-right-long-fill text-sm"></i></button>
                        <button onClick={() => setShowSchedule(true)} className="cursor-pointer text-xs md:text-lg font-messiri text-[#041C3E] py-2 px-4 rounded-lg hover:bg-[#90BEFF82] hover:text-[#041C3E] border border-[#041C3E]">Share Profile <i class="ri-arrow-right-long-fill text-sm"></i></button>
                    </div>
                </div>
                <div className='col-span-3 mt-5 '>

                    <img src="/hero2.png" alt="Section Image" className='w-full h-full lg:mt-24 lg:ml-16 xl:ml-0 -mt-16 object-contain' />
                </div>
            </section>

            <section
                id="about"
                className="grid min-h-screen grid-cols-1 lg:grid-cols-2 px-8 lg:px-16 gap-8 py-12 w-full items-center relative overflow-hidden"
                style={{
                    backgroundImage: "url('/Rectangle 4(1).png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className='order-2  lg:order-1 relative w-full h-[400px] md:h-[480px] flex flex-wrap items-center justify-center mt-12 mx-12 gap4 lg:mt-0'>
                    {/* Top-right image (ses22) */}
                    <img src="/Rectangle 3842.png" className='absolute top-2 md:top-6 right-24 lg:right-24 xl:right-24 w-[80%] md:w-[65%] rounded-[30px]  z-20 object-cover' alt="recruitment 1" />
                    {/* Bottom-left image (ses23) */}
                    <img src="/Rectangle 3843.png" className='absolute bottom-16 lg:bottom-24 xl:bottom-4 md:bottom-4 left-4 lg:-left-16 xl:-left-16 w-[80%] md:w-[65%] rounded-[30px]  z-30 object-cover' alt="recruitment 2" />

                </div>

                <div className=' order-1 lg:order-2 flex flex-col items-start justify-center h-full pt-8 lg:pt-0 relative z-10'>
                    <div className="inline-block bg-[#C6DDFB] text-[#041C3E] font-bold text-sm px-4 py-2 rounded-lg mb-6 uppercase tracking-wide">
                        About Recruitment
                    </div>
                    <h2 className="text-2xl md:whitespace-nowrap md:text-[40px] xl:text-[44px] font-jakarta font-semibold text-[#041C3E] leading-tight">
                        Recruitment That Delivers  <span className='hidden lg:block'></span>
                        <span className="text-[#FFC600] text-2xl md:text-[40px] xl:text-6xl font-messiri relative inline-block mt-2">
                            Results
                            <img src={line} alt="underline" className="absolute -bottom-3 left-0 w-full object-contain" />
                        </span>
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-5 mt-12 w-full relative lg:w-[80%]">
                        {/* Card 1 */}
                        <div className="bg-[#041C3E] rounded-[24px] p-5 flex-1 text-white shadow-xl flex flex-col justify-between min-h-[190px] relative z-10">
                            <div className="flex items-start justify-between">
                                <div className="bg-white rounded-full p-2.5 flex items-center justify-center w-12 h-12">
                                    <img src={icon1} alt="icon" className="w-6 h-6 object-contain" />
                                </div>
                                <span className="text-[#FFC600] text-5xl font-bold font-jakarta">87%</span>
                            </div>
                            <p className="mt-6 text-base font-jakarta">Success rate in<br />candidate-job<br />matching</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#FFC600] rounded-[24px] p-5 flex-1 text-[#041C3E] shadow-xl flex flex-col justify-between min-h-[190px] relative z-10">
                            <div className="flex items-start justify-between">
                                <div className="bg-white rounded-full p-2.5 flex items-center justify-center w-12 h-12">
                                    <img src={icon2} alt="icon" className="w-6 h-6 object-contain" />
                                </div>
                                <span className="text-[#041C3E] text-5xl font-bold font-jakarta">62%</span>
                            </div>
                            <p className="mt-6 text-base font-jakarta font-bold">success rate in rapid<br />placements</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Impact in Numbers Section */}
            <section className="bg-[#041C3E]   py-24 lg:py-0 px-6 lg:px-8 w-full flex flex-col items-center justify-center lg:min-h-screen relative z-20 ">
                <div className="text-center mb-12 mt-6">
                    <h2 className="text-2xl md:text-[45px] lg:text-[44px] font-jakarta font-semibold text-white mb-2">
                        Impact in <span className="text-[#FAC207] font-messiri relative inline-block lg:text-5xl">
                            Numbers
                            <img src={line} alt="underline" className="absolute -bottom-2 left-0 w-full object-contain" />
                        </span>
                    </h2>
                    <p className="text-white/90 text-base md:text-[17px] lg:text-lg font-jakarta">
                        Delivering successful hiring outcomes through expertise, speed,<br className="hidden md:block lg:hidden"></br> and a strong talent network.
                    </p>
                </div>

                {/* Container for stats */}
                <div className="w-full max-w-[1400px] relative mt-4 lg:mt-8 mb-8">
                    {/* The gray rounded background spanning across on desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[65%] bg-[#313C47] rounded-[50px] transform -translate-y-1/2 z-0 shadow-lg"></div>

                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-0 items-center justify-items-center w-full">

                        {/* Stat 1 */}
                        <div className="flex flex-col items-center justify-center text-center px-2 lg:px-4 hidden lg:flex">
                            <h3 className="text-[#FAC207] text-2xl   lg:text-4xl xl:text-4xl font-bold  mb-2 lg:mb-4">1,20,000 +</h3>
                            <p className="text-white text-lg lg:text-xl font-jakarta">Candidate<br className="hidden lg:block" />Network</p>
                        </div>

                        {/* Stat 2 (Highlighted Card) */}
                        <div className="relative w-full max-w-[280px] lg:max-w-[290px] col-span-1 sm:col-span-2 lg:col-span-1 h-full mx-auto">
                            <div className="relative bg-white rounded-[32px] px-6 py-8 md:py-10 shadow-[0_0_50px_rgba(250,194,7,0.3)] flex flex-col items-center lg:items-start text-center lg:text-left h-full min-h-[280px] lg:scale-105 z-20">
                                <h3 className="text-[#FAC207] text-4xl md:text-5xl font-bold font-jakarta mb-3">80+</h3>
                                <p className="text-[#041C3E] text-xl md:text-2xl font-bold font-jakarta leading-snug mb-8">Positions<br />Closed Monthly</p>
                                <p className="text-[#041C3E] text-xs md:text-sm font-medium font-jakarta mt-auto">
                                    Consistently helping<br className="hidden lg:block" />organizations fill critical<br className="hidden lg:block" />roles with the right talent.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center px-2 lg:px-4 lg:hidden">
                            <h3 className="text-[#FAC207] text-2xl   lg:text-4xl xl:text-4xl font-bold font-jakarta mb-2 lg:mb-4">1,20,000 +</h3>
                            <p className="text-white text-lg lg:text-xl font-jakarta">Candidate<br className="hidden lg:block" />Network</p>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex flex-col items-center justify-center text-center px-2 lg:px-4">
                            <h3 className="text-[#FAC207] text-4xl lg:text-[40px] xl:text-4xl font-bold font-jakarta mb-2 lg:mb-4">72 H</h3>
                            <p className="text-white text-lg lg:text-xl font-jakarta">Avg Profile<br className="hidden lg:block" />Sharing Time</p>
                        </div>

                        {/* Stat 4 */}
                        <div className="flex flex-col items-center justify-center text-center px-2 lg:px-4">
                            <h3 className="text-[#FAC207] text-4xl lg:text-[40px] xl:text-4xl font-bold font-jakarta mb-2 lg:mb-4">100+</h3>
                            <p className="text-white text-lg lg:text-xl font-jakarta">Clients</p>
                        </div>

                        {/* Stat 5 */}
                        <div className="flex flex-col items-center justify-center text-center px-2 lg:px-4">
                            <h3 className="text-[#FAC207] text-4xl lg:text-[40px] xl:text-4xl font-bold font-jakarta mb-2 lg:mb-4">350+</h3>
                            <p className="text-white text-lg lg:text-xl font-jakarta">Open<br className="hidden lg:block" />Positions</p>
                        </div>


                    </div>
                </div>
            </section>

            {/* Our 4 Step Hiring Section */}
            <section id="positions" className="relative w-full py-24 px-6 lg:px-12 flex flex-col items-center justify-center overflow-hidden z-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${grayback})` }}>
                {/* Blur effects */}

                <div className="relative z-10 text-center mb-16 max-w-4xl ">
                    <h2 className="text-4xl lg:text-[44px] font-jakarta font-bold text-[#041C3E] mb-6">
                        Our 4 Step <span className="text-[#FAC207] font-messiri relative inline-block lg:text-5xl">
                            Hiring
                            <img src={line} alt="underline" className="absolute -bottom-2 left-0 w-full object-contain" />
                        </span>
                    </h2>
                    <p className="text-[#041C3E] text-lg md:text-lg font-jakarta font-medium">
                        From understanding your requirements to successful onboarding, we manage every step of the recruitment process.
                    </p>
                </div>

                <div className="relative z-10 w-full whitespace-nowrap">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-4">
                        <div className="absolute -left-10 top-[120px] w-[420px] h-[420px] bg-gradient-to-r from-[#FAC2076E]/30 to-[#FAC2076E]/10 rounded-r-[250px] blur-[20px] -z-10 hidden lg:block" />
                        <div className="absolute -right-20 top-[-350px] w-[420px] h-[420px] bg-gradient-to-r from-[#FAC2076E]/30 to-[#FAC2076E]/10 rounded-r-[250px] blur-[20px] -z-10 hidden lg:block" />

                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center xl:max-w-[260px] lg:max-w-[120px]">
                            <div className="h-[180px] flex items-center justify-center">
                                <img
                                    src={step1}
                                    alt="Step 1"
                                    className="w-full xl:max-w-[220px] lg:max-w-[150px] h-auto hover:-translate-y-2 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-[#041C3E]  text-xl font-bold font-jakarta mb-3 mt-6">
                                Share Your Hiring <br />
                                Requirements
                            </h3>
                            <p className="text-[#041C3E] text-sm leading-relaxed whitespace-nowrap">
                                Submit your job description<br />and hiring needs.
                            </p>
                        </div>

                        {/* Arrow */}
                        <img
                            src={vector10}
                            alt=""
                            className="hidden lg:block w-[90px] mt-24 flex-shrink-0"
                        />

                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center xl:max-w-[260px] lg:max-w-[120px]">
                            <div className="h-[180px] flex items-center justify-center">
                                <img
                                    src={step2}
                                    alt="Step 2"
                                    className="w-full max-w-[220px] h-auto hover:-translate-y-2 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-[#041C3E] text-xl font-bold font-jakarta mb-3 mt-6">
                                Dedicated Domain <br />
                                Specialists
                            </h3>
                            <p className="text-[#041C3E] text-sm leading-relaxed">
                                Experienced recruiters focused<br></br> on your hiring goals.
                            </p>
                        </div>

                        {/* Arrow */}
                        <img
                            src={vector11}
                            alt=""
                            className="hidden lg:block w-[90px] mt-24 flex-shrink-0"
                        />

                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center xl:max-w-[260px] lg:max-w-[120px]">
                            <div className="h-[180px] flex items-center justify-center">
                                <img
                                    src={step3}
                                    alt="Step 3"
                                    className="w-full max-w-[220px] h-auto hover:-translate-y-2 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-[#041C3E] text-xl font-bold font-jakarta mb-3 mt-6">
                                Sourcing Through <br />
                                Social Media
                            </h3>
                            <p className="text-[#041C3E] text-sm leading-relaxed">
                                Targeted candidate search<br></br> through professional networks.
                            </p>
                        </div>

                        {/* Arrow */}
                        <img
                            src={vector12}
                            alt=""
                            className="hidden lg:block w-[90px] mt-24 flex-shrink-0"
                        />

                        {/* Step 4 */}
                        <div className="flex flex-col items-center text-center xl:max-w-[260px] lg:max-w-[120px]">
                            <div className="h-[180px] flex items-center justify-center">
                                <img
                                    src={step4}
                                    alt="Step 4"
                                    className="w-full max-w-[220px] h-auto hover:-translate-y-2 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-[#041C3E] text-xl font-bold font-jakarta mb-3 mt-6">
                                Extensive Talent <br />
                                Network
                            </h3>
                            <p className="text-[#041C3E] text-sm leading-relaxed">
                                Access 1,20,000+ <br></br>pre-screened professionals.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="relative w-full py-24 px-6 lg:px-6 xl:px-6 flex flex-col items-center bg-[#FFFCF6] z-10 overflow-hidden">
                {/* Subtle top-left gradient blur similar to screenshot */}
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#FFF2C8] rounded-full blur-[100px] opacity-70 z-0 pointer-events-none"></div>

                <div className="relative z-10 w-full max-w-[1400px] flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-block bg-[#C6DDFB] text-[#041C3E] font-bold text-sm px-4 py-2 rounded-lg mb-6 uppercase tracking-wide">
                            Why Choose Us ?
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl lg:text-[44px] font-semibold font-jakarta text-[#041C3E] leading-tight">
                            Finding the right talent<br />
                            shouldn't be <span className="text-[#FAC207] font-messiri lg:text-5xl">complicated.</span>
                        </h2>
                    </div>
                    <div className="max-w-md lg:mb-4">
                        <p className="text-[#041C3E] text-lg font-jakarta font-medium leading-relaxed">
                            We combine industry expertise, an extensive candidate network, and a streamlined recruitment process to help businesses hire faster and smarter.
                        </p>
                    </div>
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1400px]">

                    {/* Card 1 */}
                    <div className="bg-[#FFF8E5] rounded-[32px] p-8 md:p-10 relative overflow-hidden group shadow-lg flex flex-col h-full">
                        <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#F5B500] rounded-full flex items-end justify-start pb-8 pl-8 transition-transform group-hover:scale-110">
                            <i className="ri-focus-2-line text-[#041C3E] text-4xl"></i>
                        </div>
                        <h3 className="text-[#041C3E] text-2xl font-bold font-jakarta mb-4 pr-16 relative z-10">Tailored Recruitment<br />Process</h3>
                        <p className="text-[#041C3E] text-base font-jakarta relative z-10 mt-auto ">
                            We deeply understand your requirements before initiating the recruitment process, ensuring precise matches for your team's needs.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#FAC207] rounded-[32px] p-8 md:p-10 relative overflow-hidden group shadow-lg flex flex-col h-full">
                        <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#FFD966] rounded-full flex items-end justify-start pb-8 pl-8 transition-transform group-hover:scale-110">
                            <i className="ri-search-line text-[#041C3E] text-4xl"></i>
                        </div>
                        <h3 className="text-[#041C3E] text-2xl font-bold font-jakarta mb-4 pr-16 relative z-10">Sourcing through<br />Social Media</h3>
                        <p className="text-[#041C3E] text-base font-jakarta relative z-10 mt-auto  ">
                            We exclusively utilize Social Media for sourcing like LinkedIn, Twitter, Facebook groups, Pyjama HR, etc. No traditional job portals are employed in our process.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#FFF8E5] rounded-[32px] p-8 md:p-10 relative overflow-hidden group shadow-lg flex flex-col h-full">
                        <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#FFD966] rounded-full flex items-end justify-start pb-8 pl-8 transition-transform group-hover:scale-110">
                            <i className="ri-shield-check-fill text-[#041C3E] text-4xl"></i>
                        </div>
                        <h3 className="text-[#041C3E] text-2xl font-bold font-jakarta mb-4 pr-16 relative z-10">Dedicated Account<br />Manager</h3>
                        <p className="text-[#041C3E] text-base font-jakarta relative z-10 mt-auto ">
                            Provides complete accountability and personalized assistance throughout the hiring process!
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#FFF8E5] rounded-[32px] p-8 md:p-10 relative overflow-hidden group shadow-lg flex flex-col h-full">
                        <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#FFD966] rounded-full flex items-end justify-start pb-8 pl-8 transition-transform group-hover:scale-110">
                            <i className="ri-team-fill text-[#041C3E] text-4xl"></i>
                        </div>
                        <h3 className="text-[#041C3E] text-2xl font-bold font-jakarta mb-4 pr-16 relative z-10">Domain Specialist<br />Team</h3>
                        <p className="text-[#041C3E] text-base font-jakarta relative z-10 mt-auto  ">
                            Benefit from the expertise of our specialized recruitment teams led by industry veterans who understand your specific industry needs.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#FFF8E5] rounded-[32px] p-8 md:p-10 relative overflow-hidden group shadow-lg flex flex-col h-full">
                        <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#FFD966] rounded-full flex items-end justify-start pb-8 pl-8 transition-transform group-hover:scale-110">
                            <i className="ri-shake-hands-fill text-[#041C3E] text-4xl"></i>
                        </div>
                        <h3 className="text-[#041C3E] text-2xl font-bold font-jakarta mb-4 pr-16 relative z-10">Candidate<br />Handholding</h3>
                        <p className="text-[#041C3E] text-base font-jakarta relative z-10 mt-auto  ">
                            We offer comprehensive support to candidates, reducing attrition rates and ensuring seamless integration into your organization.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-[#FFF8E5] rounded-[32px] p-8 md:p-10 relative overflow-hidden group shadow-lg flex flex-col h-full">
                        <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#FFD966] rounded-full flex items-end justify-start pb-8 pl-8 transition-transform group-hover:scale-110">
                            <i className="ri-money-dollar-circle-fill text-[#041C3E] text-4xl"></i>
                        </div>
                        <h3 className="text-[#041C3E] text-2xl font-bold font-jakarta mb-4 pr-16 relative z-10">Reasonable<br />Pricing</h3>
                        <p className="text-[#041C3E] text-base font-jakarta relative z-10 mt-auto  ">
                            We maintain transparency in our pricing, ensuring there are no hidden charges, providing you with a clear understanding of what you're paying for.
                        </p>
                    </div>

                </div>
            </section>

            {/* Industries vice & Trusted By Leading Company */}
            <section id="industries" className="w-full  pt-4 flex flex-col items-center rounded-t-[40px] md:rounded-t-[80px] z-20 relative px-12 overflow-hidden">
                {/* Part 1: Industries We Service */}
                <div className="flex flex-col  items-center text-center w-full mb-12">
                    <h2 className="text-4xl  lg:text-[44px] font-jakarta font-semibold text-black mb-6">
                        Our
                        <span className="text-[#FAC207] ml-2 font-messiri lg:text-5xl relative inline-block">
                            Expertise
                            <img src={line} alt="underline" className="absolute -bottom-2 left-0 w-full object-contain" />
                        </span>
                    </h2>
                    {/* <p className="text-white/90 hidden md:block text-lg md:text-xl font-jakarta mb-16 max-w-4xl leading-relaxed">
                        From fast-growing startups to established enterprises, we help organizations across multiple sectors find the right talent to drive their business forward.
                    </p> */}
                    <style>
                        {`
                        @keyframes scroll {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(calc(-50% - 0.75rem)); }
                        }
                        .animate-scroll {
                            animation: scroll 20s linear infinite;
                        }
                        .animate-scroll:hover {
                            animation-play-state: paused;
                        }
                        `}
                    </style>
                    <div className="relative w-screen overflow-hidden py-4 -mx-12">
                        <div className="flex animate-scroll gap-4 lg:gap-6 w-max">
                            {[...industries, ...industries].map((industry, index) => (
                                <div
                                    key={index}
                                    className="bg-[#A5C2F4] rounded-[24px] w-36 md:w-40 lg:w-44 h-20 flex-shrink-0 flex items-center justify-center"
                                >
                                    <span className="text-[#031430] font-medium text-sm md:text-base text-center">
                                        {industry}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Part 2: Trusted By Leading Company */}


            </section>
            <section className="w-full bg-[#031430] text-white py-16 relative overflow-hidden select-none flex flex-col items-center">

                {/* =========================================================
                1. TOP BLOCK: CENTERED TEXT & MARKETING CONTENT
            ========================================================= */}
                <div className="max-w-3xl w-full text-center px-6 space-y-6 flex flex-col items-center z-10 mb-4 ">

                    {/* Section Tag */}
                    <div className="inline-block -mt-8 bg-[#2D436B] border border-blue-400/20 text-[#A5C2F4] text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-lg shadow-sm">
                        Our Clients
                    </div>

                    {/* Heading Container */}
                    <div className="relative pt-2">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white">
                            Trusted By Leading{" "}
                            <span className="text-[#FFC700] relative inline-block font-messiri">
                                Companies
                                {/* Decorative underline curve match */}
                                <img
                                    src="/Rectangle 123.png"
                                    alt=""
                                    className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-44 sm:w-52"
                                />
                            </span>
                        </h2>
                    </div>

                    {/* Context Description */}
                    <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed max-w-xl pt-2">
                        We've partnered with growing businesses, and established organizations to help them find the right talent and achieve their hiring goals.
                    </p>
                </div>

                {/* =========================================================
                2. MIDDLE BLOCK: FULL-WIDTH MARQUEE RUNWAYS
            ========================================================= */}
                <div className="w-full overflow-hidden relative space-y-6 hover-pause py-4 mb-12">

                    {/* Left & Right Edge Gradient Faders to blend cards beautifully into dark backdrop */}
                    <div className="absolute top-0 bottom-0 left-0 w-20 md:w-12 bg-gradient-to-r from-[#031430] to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 bottom-0 right-0 w-20 md:w-12 bg-gradient-to-l from-[#031430] to-transparent z-10 pointer-events-none" />

                    {/* TOP ROW LOGOS: Rolling Left to Right */}
                    <div className="flex w-max space-x-5 animate-marquee-ltr">
                        {[...topRowLogos, ...topRowLogos].map((card, index) => (
                            <div
                                key={`top-${card.id}-${index}`}
                                className="w-28 sm:w-36 aspect-square bg-white rounded-2xl sm:rounded-[2rem] flex items-center justify-center p-5 shadow-xl border border-white/10 flex-shrink-0"
                            >
                                <img
                                    src={card.logo}
                                    alt="Company Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* BOTTOM ROW LOGOS: Rolling Right to Left */}
                    <div className="flex w-max space-x-5 animate-marquee-rtl">
                        {[...bottomRowLogos, ...bottomRowLogos].map((card, index) => (
                            <div
                                key={`bottom-${card.id}-${index}`}
                                className="w-28 sm:w-36 aspect-square bg-white rounded-2xl sm:rounded-[2rem] flex items-center justify-center p-5 shadow-xl border border-white/10 flex-shrink-0"
                            >
                                <img
                                    src={card.logo}
                                    alt="Company Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>

                </div>

                {/* =========================================================
                3. BOTTOM BLOCK: CENTERED CTA ACTION TRIGGER
            ========================================================= */}
                <div className="z-10 px-6">
                    {/* <button className="bg-[#FFC700] hover:bg-[#E6B400] text-[#031430] font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-yellow-500/20 flex items-center space-x-2 group transition-all duration-200 active:scale-95">
                        <span>Join Us Now</span>
                        <span className="transform group-hover:translate-x-1 transition-transform font-bold">→</span>
                    </button> */}
                </div>

            </section>
            <section className="relative w-full py-24 px-6 lg:px-16 xl:px-24 flex flex-col  items-center bg-gradient-to-br from-[#FFFCF6] to-[#FFF6E0] z-10">
                <div className="flex flex-col items-center text-center max-w-3xl mb-2">
                    {/* <div className="inline-block bg-[#C6DDFB] text-[#041C3E] font-bold text-sm px-6 py-2 rounded-lg mb-6 tracking-wide">
                        POSITIONS
                    </div> */}
                    <h2 className="text-4xl md:text-5xl  font-jakarta font-semibold text-[#041C3E] leading-tight mb-6 -mt-8">
                        Connecting Businesses with the<br className="hidden md:block" />
                        <span className="text-[#FAC207] font-messiri lg:text-5xl relative inline-block mt-4">
                            Right Talent
                            <img src={line} alt="underline" className="absolute -bottom-2 left-0 w-full object-contain" />
                        </span>
                    </h2>
                    <p className="text-[#041C3E] text-base md:text-lg font-jakarta mb-8 opacity-90">
                        From technical specialists to business professionals, we help organizations hire skilled candidates across a wide range of roles and experience levels.
                    </p>

                    {/* Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <button
                            onClick={() => {
                                setActiveTab("technical");
                                setShowAll(false);
                                setSelectedRole("Staff Software Engineer");
                            }}
                            className={`font-bold px-8 py-4 rounded-2xl ${activeTab === "technical"
                                ? "bg-[#041C3E] text-[#FAC207]"
                                : "bg-[#E2EFFF] text-[#8BA4C8]"
                                }`}
                        >
                            Technical
                        </button>

                        <button
                            onClick={() => {
                                setActiveTab("nontechnical");
                                setShowAll(false);
                                setSelectedRole("Manufacturing");
                            }}
                            className={`font-bold px-8 py-4 rounded-2xl ${activeTab === "nontechnical"
                                ? "bg-[#041C3E] text-[#FAC207]"
                                : "bg-[#E2EFFF] text-[#8BA4C8]"
                                }`}
                        >
                            Non Technical
                        </button>
                    </div>
                </div>
                {/* Split Content Area */}
                <div className="grid grid-cols-1 mt-4 lg:grid-cols-[320px_1fr] gap-8 w-full">

                    {/* Left Panel */}
                    <div className="w-full  ">
                        <div className="bg-[#C6DDFB] rounded-3xl p-4 lg:p-6 shadow-xl">

                            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2">

                                {visibleRoles.map((role, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedRole(role)}
                                        className={`
              shrink-0
              lg:w-full
              px-5 py-4
              rounded-2xl
              flex items-center justify-between
              transition-all duration-300
              ${selectedRole === role
                                                ? "bg-[#041C3E] text-white shadow-lg"
                                                : "bg-white text-[#041C3E] hover:shadow-md"
                                            }
            `}
                                    >
                                        <span className="font-semibold whitespace-nowrap">
                                            {role}
                                        </span>

                                        <i
                                            className={`ri-play-fill text-xl ${selectedRole === role
                                                ? "text-white"
                                                : "text-[#FAC207]"
                                                }`}
                                        />
                                    </button>
                                ))}

                                <button
                                    onClick={() => setShowAll(!showAll)}
                                    className="shrink-0 lg:w-full bg-[#AECDF6] rounded-2xl px-5 py-4 font-semibold text-[#041C3E]"
                                >
                                    {showAll ? "Less Roles" : "View All Roles"}
                                </button>

                            </div>

                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="w-full bg-white border border-[#EEF4FF] rounded-3xl p-4 md:p-6 lg:p-8 shadow-xl">

                        {activeTab === "technical" ? (
                            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">

                                {(techLogos[selectedRole] || []).map((logo, idx) => (
                                    <div
                                        key={idx}
                                        className="
      bg-[#FFF8E5]
      w-24 h-20
      sm:w-32 sm:h-24
      md:w-32 md:h-32
      lg:w-24 lg:h-24
      xl:w-32 xl:h-32
      flex
      items-center
      justify-center
      p-2 md:p-4
      hover:-translate-y-1
      transition-all
      shadow-sm
      rounded-xl
    "
                                    >
                                        <img
                                            src={logo}
                                            alt={`logo-${idx}`}
                                            className={`object-contain ${[tech1, tech3, tech4, tech7].includes(logo)
                                                ? "w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32"
                                                : "w-10 h-10 sm:w-14 sm:h-14 md:w-24 md:h-24"
                                                }`}
                                        />
                                    </div>
                                ))}

                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">

                                {(nonTechData[selectedRole] || []).map((role, idx) => (
                                    <div
                                        key={idx}
                                        className="
              bg-[#FFF8E5]
              rounded-2xl
              p-4
              min-h-[90px]
              flex
              items-center
              justify-center
              text-center
              hover:-translate-y-1
              hover:shadow-lg
              transition-all
            "
                                    >
                                        <h3 className="font-semibold text-[#041C3E]">
                                            {role}
                                        </h3>
                                    </div>
                                ))}

                            </div>
                        )}

                    </div>

                </div>

            </section>
            <RecruitmentTestimonial />
            <RecruitmentFrequently />
            <Recruitmentfooter />

            <Schedule isDemoOpen={showSchedule} setIsDemoOpen={setShowSchedule} />
        </div>
    );
};

export default Recruitment;