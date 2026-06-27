import { useState, useEffect } from 'react';
import { useSendContactMessageMutation } from '../Redux/Api';
import { toast } from 'react-toastify';

const Schedule = ({ isDemoOpen, setIsDemoOpen }) => {
    // Form State
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [localLoading, setLocalLoading] = useState(false);

    const [errors, setErrors] = useState({});

    // RTK Query mutation hook — gives us the trigger fn + request status flags
    const [sendContactMessage, { isLoading: sending, isSuccess, isError, error, reset }] =
        useSendContactMessageMutation();

    // Clear any previous success/error state whenever the modal is opened
    useEffect(() => {
        if (isDemoOpen) reset();
    }, [isDemoOpen, reset]);

    // Validation Logic
    const validate = () => {
        let newErrors = {};

        if (!/^[A-Za-z]+$/.test(formData.firstName)) newErrors.firstName = "Enter a valid first name (letters only).";
        if (!/^[A-Za-z]+$/.test(formData.lastName)) newErrors.lastName = "Enter a valid last name (letters only).";

        const email = formData.email.trim();
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Enter a valid email address.";
        }

        if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone number must be exactly 10 digits.";
        }

        if (!formData.message.trim()) newErrors.message = "Please write a message.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSend = async () => {
        if (!validate()) return;

        const payload = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email.trim() || undefined,
            phoneNumber: formData.phone,
            subject: formData.subject || "New Inquiry",
            message: formData.message,
        };

        try {
            setLocalLoading(true);

            await sendContactMessage(payload).unwrap();

            toast.success("Message sent successfully 🎉");

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });

            setTimeout(() => {
                setIsDemoOpen(false);
            }, 800);

        } catch (err) {
            console.error(err);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLocalLoading(false);
        }
    };

    const openMap = () => {
        const address = "B-1403, Arihant Aura, plot no. 13/1, TTC Industrial Area, Thane Belapur Road, Turbhe, Navi Mumbai 400705";
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
    };

    return (
        <div
            className={`fixed inset-0 z-[10000] flex items-center justify-center bg-[#041C3E]/80 p-4 backdrop-blur-sm transition-all duration-300 ${isDemoOpen ? "opacity-100 visible" : "pointer-events-none invisible opacity-0"}`}
            onClick={(e) => e.target === e.currentTarget && setIsDemoOpen(false)}
        >
            <div className={`w-full max-w-[95vw] lg:max-w-6xl max-h-[95vh] overflow-y-auto rounded-2xl bg-white shadow-2xl transition-all duration-300 ${isDemoOpen ? "translate-y-0 scale-100" : "translate-y-6 scale-95"}`}>
                <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] font-jakarta">

                    {/* LEFT SIDE (Contact Info) */}
                    <div className="relative bg-[#011C2B] text-white p-8 overflow-hidden flex flex-col hidden lg:flex">
                        <h2 className="text-2xl font-semibold">Contact Information</h2>
                        <p className="mt-3 text-white/70">Say something to start a live chat!</p>

                        <div className="mt-12 space-y-8">

                            <div className="flex items-center gap-4 cursor-pointer hover:text-[#FAC207]" onClick={() => window.location.href = 'mailto:enquiry@hunarstreet.com'}>
                                <i className="ri-mail-fill text-xl text-[#FAC207]"></i>
                                <span>enquiry@hunarstreet.com</span>
                            </div>
                            <div className="flex items-start gap-4 cursor-pointer hover:text-[#FAC207]" onClick={openMap}>
                                <i className="ri-map-pin-fill text-xl text-[#FAC207] mt-1"></i>
                                <span className="leading-relaxed">B-1403, Arihant Aura, Turbhe, Navi Mumbai-400705</span>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="mt-auto flex gap-4 relative z-10">
                            <a href="https://x.com/Hunarstreet" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#FAC207] text-[#011C2B] flex items-center justify-center hover:scale-110 transition"><i className="ri-twitter-x-line"></i></a>
                            <a href="https://www.instagram.com/hunarstreettech_pvtltd/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#FAC207] text-[#011C2B] flex items-center justify-center hover:scale-110 transition"><i className="ri-instagram-line"></i></a>
                            <a href="https://www.facebook.com/people/Hunarstreet-Technologies-Pvt-Ltd/61559300385529/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#FAC207] text-[#011C2B] flex items-center justify-center hover:scale-110 transition"><i className="ri-facebook-fill"></i></a>
                            <a href=" https://www.linkedin.com/company/hunarstreet-technologies-pvtltd/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#FAC207] text-[#011C2B] flex items-center justify-center hover:scale-110 transition"><i className="ri-linkedin-fill"></i></a>
                        </div>
                    </div>

                    {/* RIGHT SIDE (Form) */}
                    <div className="relative bg-white p-8">
                        <button onClick={() => setIsDemoOpen(false)} className="absolute top-4 right-4 h-10 w-10 rounded-full border flex items-center justify-center hover:bg-gray-100"><i className="ri-close-line text-xl text-black"></i></button>

                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-[#011C2B]">Send us a message</h3>
                            <p className="text-gray-500 mt-2">Fill in the details below and our team will get back to you.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-xs text-gray-400 uppercase font-bold">First Name</label>
                                <input type="text" placeholder="Enter" value={formData.firstName} className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#FAC207]"
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                            </div>
                            <div>
                                <label className="text-xs text-gray-400 uppercase font-bold">Last Name</label>
                                <input type="text" placeholder="Enter" value={formData.lastName} className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#FAC207]"
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div>
                                <label className="text-xs text-gray-400 uppercase font-bold">Email</label>
                                <input type="email" placeholder="Enter Email" value={formData.email} className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#FAC207]"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <label className="text-xs text-gray-400 uppercase font-bold">Phone Number</label>
                                <input
                                    type="text"
                                    placeholder="Enter Phone Number"
                                    maxLength={10}
                                    className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#FAC207]"
                                    value={formData.phone}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, "");
                                        setFormData({ ...formData, phone: value });
                                    }}
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                            </div>
                        </div>

                        {/* Subject Selection */}
                        <div className="mt-8">
                            <h4 className="font-semibold text-[#011C2B] mb-4">Select Subject?</h4>
                            <div className="flex gap-6">
                                {['Lead Generation', 'Recruitments'].map((sub) => (
                                    <label key={sub} className="flex items-center gap-2 cursor-pointer text-[#011C2B]">
                                        <input
                                            type="radio"
                                            name="subject"
                                            value={sub}
                                            checked={formData.subject === sub}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="accent-[#FAC207]"
                                        />
                                        {sub}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8">
                            <label className="text-xs text-gray-400 uppercase font-bold">Message</label>
                            <textarea placeholder="Write your message..." value={formData.message} className="w-full mt-2 border-b border-gray-300 outline-none resize-none focus:border-[#FAC207]" rows="2"
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                        </div>

                        {isSuccess && (
                            <p className="mt-4 text-green-600 text-sm font-medium">Message sent successfully!</p>
                        )}
                        {isError && (
                            <p className="mt-4 text-red-500 text-sm font-medium">
                                {error?.data?.message || "Something went wrong. Please try again."}
                            </p>
                        )}

                        <div className="mt-10 flex justify-end">
                            <button
                                onClick={handleSend}
                                disabled={localLoading}
                                className="w-full sm:w-auto bg-[#FAC207] text-[#011C2B] px-10 py-3 rounded-xl font-bold shadow-lg hover:bg-[#f8c736] transition disabled:opacity-60"
                            >
                                {localLoading ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
//Hello

export default Schedule;
