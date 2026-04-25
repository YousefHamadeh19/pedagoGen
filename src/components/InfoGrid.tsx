"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ClipboardCheck, Users, Target, Medal, X, CheckCircle2, LucideIcon } from "lucide-react"; // Example icon library

interface Strategy {
    icon: LucideIcon;
    title: string;
    text: string;
    details: string;
    whatItMeans: string[];
}
const InfoGrid = () => {
    const [selectedItem, setSelectedItem] = useState<Strategy | null>(null);

    const items = [
        {
            icon: BookOpen,
            title: "Instructional Strategy",
            text: "AI-powered teaching methodologies",
            details: "PedagoGen supports educators in designing high-quality instruction using AI-informed, research-based teaching approaches. From inquiry and concept-based learning to skills-focused and experiential methodologies, instructional strategies are tailored to subject, grade level, and learning intent.",
            whatItMeans: ["Design purposeful lessons aligned with best practice", "Move beyond content delivery to deep, transferable learning", "Save planning time while enhancing instructional quality"]

        },
        {
            icon: ClipboardCheck,
            title: "Assessment Design",
            text: "Aligned evaluation framework",
            details: "PedagoGen enables the creation of meaningful assessments that align directly with learning objectives and teaching strategies. It supports formative, summative, and performance-based assessments that measure understanding, skills, and real-world application.",
            whatItMeans: ["Ensure assessments accurately reflect intended learning",
                "Strengthen assessment for learning, not just of learning",
                "Promote fairness, clarity, and consistency across classrooms"]
        },
        {
            icon: Users,
            title: "Differentiation and Inclusion",
            text: "Personalized learning approaches",
            details: "PedagoGen embeds differentiation and inclusion into lesson and curriculum design. Using intelligent recommendations, it supports personalized pathways, targeted scaffolding, and appropriate challenge for diverse learner profiles.",
            whatItMeans: ["Meet the needs of all learners without duplicating effort", "Support inclusion, equity, and student well-being", "Create flexible learning experiences that adapt, not exclude"]
        },
        {
            icon: Target,
            title: "Curriculum Alignment",
            text: "Multi-framework integration",
            details: "PedagoGen aligns curriculum with multiple frameworks simultaneously (national standards, international curricula, and school-specific learning goals) while maintaining coherence and progression.",
            whatItMeans: ["Ensure vertical and horizontal curriculum alignment", "Confidently operate within hybrid or multi-system contexts", "Reduce fragmentation and duplication in curriculum planning"]
        },
        {
            icon: Medal,
            title: "Accreditation Alignment",
            text: "Standards Compliance",
            details: "PedagoGen connects teaching, assessment, and curriculum design directly to accreditation and inspection standards. It generates clear evidence of compliance through everyday pedagogical practice.",
            whatItMeans: ["Be accreditation-ready at all times", "Transform compliance into a continuous improvement process", "Reduce workload and stress during inspections and reviews"]
        },
    ];

    return (
        <section className="p-6">
            {/* Container Logic:
          - grid-cols-1: Single column on mobile
          - md:flex: Switches to a flex row on medium screens and up
          - items-stretch: Ensures all boxes have the same height 
      */}
            <div className="flex flex-wrap justify-center gap-6">
                {items.map((item, index) => {
                    // Assign the icon to a capitalized variable
                    const Icon = item.icon;

                    return (
                        <div
                            key={index}
                            onClick={() => setSelectedItem(item)}
                            className="flex-1 flex flex-col items-center justify-center text-center p-6 border border-gray-200 rounded-xl bg-white shadow-sm cursor-pointer transition-all duration-300 hover:scale-115 hover:shadow-md"
                        >
                            {/* Dynamic Icon Rendering */}
                            <div className="mb-4 text-blue-600">
                                <Icon size={32} strokeWidth={2} />
                            </div>

                            <h3 className="text-lg font-bold text-black mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 font-normal leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    );
                })}
            </div>
            <AnimatePresence>
                {selectedItem && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedItem(null)}
                            className="absolute inset-0 bg-black/40 backdrop-blur-md"
                        />

                        {/* 2. Centered Modal Box */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-y-auto max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-all"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex items-center gap-4 my-6">
                                <div className="text-blue-600">
                                    <selectedItem.icon size={32} />
                                </div>
                                <h2 className="text-2xl font-bold text-black">{selectedItem.title}</h2>
                            </div>

                            <div className="prose prose-gray text-justify">
                                <p className="text-gray-600 leading-relaxed">
                                    {selectedItem.details}
                                </p>
                            </div>

                            {selectedItem.whatItMeans && (
                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-left mt-3    ">
                                    <h4 className="text-sm font-bold text-black uppercase tracking-wider mb-4">
                                        What it means for you
                                    </h4>
                                    <ul className="space-y-4">
                                        {selectedItem.whatItMeans.map((point: string, i: number) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-700 text-sm leading-snug">
                                                <CheckCircle2 className="text-green-500 mt-0.5 shrink-0" size={18} />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default InfoGrid;