"use client";

import Link from "next/link";

const CallToAction = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-6 p-4">
            {/* Optional Tagline to give the buttons context */}
            <div className="flex flex-wrap items-center justify-center gap-3">
                {/* Get Started: Black -> White on hover */}
                <Link href="/auth">
                    <button className="px-8 py-3 text-sm font-semibold text-white bg-black rounded-md cursor-pointer transition-all duration-300 active:scale-95 shadow-sm">
                        Get started
                    </button>
                </Link>
                {/* Request School Access: White -> Black on hover */}
                <button className="px-4 py-3 text-sm font-semibold text-black bg-white rounded-md cursor-pointer transition-all duration-300 hover:bg-black hover:text-white active:scale-95">
                    Request School Access
                </button>
            </div>
        </section>
    );
};

export default CallToAction;