import React from 'react';

interface FooterProps {
    showDetails: boolean
}
export default function Footer({ showDetails }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`bg-white border-t border-gray-100 py-8 px-6 sm:px-12 ${showDetails ? '' : 'justify-center items-center'}`}>
            {
                showDetails
                    ?
                    (
                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                            {/* Brand Section */}
                            <div className="col-span-1 md:col-span-1">
                                <h2 className="text-xl font-bold tracking-tight text-black">PedagoGen</h2>
                                <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                                    Advancing educational technology through intelligent pedagogical decision-making and differentiated learning design.
                                </p>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h3 className="text-sm font-semibold text-black uppercase tracking-wider">Solutions</h3>
                                <ul className="mt-4 space-y-2">
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Curriculum Alignment</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Accreditation Support</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Differentiated Learning</a></li>
                                </ul>
                            </div>

                            {/* Company */}
                            <div>
                                <h3 className="text-sm font-semibold text-black uppercase tracking-wider">Company</h3>
                                <ul className="mt-4 space-y-2">
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">About Us</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Methodology</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Privacy Policy</a></li>
                                </ul>
                            </div>

                            {/* Contact Information */}
                            <div>
                                <h3 className="text-sm font-semibold text-black uppercase tracking-wider">Contact</h3>
                                <ul className="mt-4 space-y-2">
                                    <li>
                                        <a href="mailto:info@pedagogen.com" className="text-sm text-gray-600 hover:text-black transition-colors">
                                            info@pedagogen.com
                                        </a>
                                    </li>
                                    <li className="text-sm text-gray-500">
                                        Doha, Qatar
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                    :
                    <></>
            }


            <div className={`max-w-7xl ${showDetails ? "mt-12" : "mt-6"} border-gray-100 flex flex-col md:flex-row justify-center items-center`}>
                <p className="text-xs text-gray-400">
                    © {currentYear} PedagoGen. All rights reserved.
                </p>
            </div>
        </footer>
    );
}