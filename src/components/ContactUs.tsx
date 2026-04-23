"use client";
import React, { useState } from 'react';
import { Send } from 'lucide-react'; // Optional: if you're using lucide-react

export default function ContactSection() {
    const [formData, setFormData] = useState({
        from: '',
        subject: '',
        message: ''
    });
    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        const recipient = "info@pedagogen.com";
        const subject = encodeURIComponent(formData.subject || "Contact from PedagoGen");
        // We include the "From" email in the body since mailto uses the user's local account
        const body = encodeURIComponent(
            `From: ${formData.from}\n\n${formData.message}`
        );

        // This opens the user's email client (Gmail, Outlook, etc.)
        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    };

    const handleChange = (e: { target: { id: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    return (
        <section className="bg-gray-50 py-16 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

                {/* Left Half: Message */}
                <div className="flex-1 text-left">
                    <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                        We would like to hear from you <span className='text-[#155dfc]'>!</span>
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-md">
                        Have questions about our pedagogical frameworks or want to collaborate?
                        Reach out and our team will get back to you shortly.
                    </p>
                </div>

                {/* Right Half: Form Card */}
                <div className="flex-1 w-full">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 ">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* From Input */}
                            <div>
                                <label htmlFor="from" className="block text-sm font-bold text-gray-700 mb-1 text-left">
                                    From
                                </label>
                                <input
                                    type="email"
                                    id="from"
                                    placeholder="yourname@email.com"
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                />
                            </div>

                            {/* Subject Input */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-1 text-left">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="How can we help?"
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                />
                            </div>

                            {/* Message Input */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1 text-left">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Your message..."
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                ></textarea>
                            </div>

                            {/* Send Button */}
                            <button
                                type="submit"
                                className="w-full bg-black text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors group cursor-pointer"
                            >
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}