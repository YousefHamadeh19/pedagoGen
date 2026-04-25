"use client";
import React, { useState, useEffect } from 'react';
import { Oval } from 'react-loader-spinner';
interface PedagoLoaderProps {
    isLoading: boolean,
    customMessage: string[]
}
export default function PedagoLoader({ isLoading, customMessage }: PedagoLoaderProps) {
    // Default messages related to pedagogy/AI if none are provided
    const defaultMessages = [
        "Analyzing class profile...",
        "Optimizing instructional strategies...",
        "Tailoring student actions...",
        "Finalizing your strategy...",
    ];

    const messages = customMessage || defaultMessages;
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        if (!isLoading) return;

        const interval = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % messages.length);
        }, 2000); // Change message every 2 seconds

        return () => clearInterval(interval);
    }, [isLoading, messages.length]);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-100/80 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-6">
                <Oval
                    height={80}
                    width={80}
                    color="#2298f2"
                    secondaryColor="#e2e8f0" // Light gray for the secondary ring looks cleaner
                    strokeWidth={3}
                    strokeWidthSecondary={3}
                    visible={true}
                    ariaLabel="oval-loading"
                />
                <div className="text-center">
                    <p className="text-lg font-semibold text-gray-700 animate-pulse">
                        {messages[messageIndex]}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                        PedagoGen is working its magic
                    </p>
                </div>
            </div>
        </div>
    );
}