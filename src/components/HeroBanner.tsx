"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const images = [
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1920",
];

export default function HeroBanner() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000); // Changes image every 5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[600px] w-full overflow-hidden flex items-center justify-center text-white">
            {/* Background Image Layer */}
            {images.map((img, index) => <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <img
                    src={img}
                    alt={`Slide ${index}`}
                    className="h-full w-full object-cover"
                />
                {/* Dark Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
            </div>
            )}

            {/* Content Layer */}
            <div className="relative z-10 px-6 text-center max-w-4xl">
                <h1 className="text-6xl md:text-6xl font-bold tracking-tight text-balance">
                    PedagoGen
                </h1>

                <div className="mt-6">
                    <p className="text-xl md:text-2xl font-medium text-pretty text-gray-200">
                        AI-powered pedagogical intelligence
                    </p>

                    <div className="mt-5 flex justify-center">
                        <p className="max-w-2xl text-lg leading-relaxed text-gray-100">
                            Shift educational technology from content generation to pedagogical decision-making.
                            Design high-quality, differentiated learning experiences aligned with
                            curriculum and accreditation standards.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}