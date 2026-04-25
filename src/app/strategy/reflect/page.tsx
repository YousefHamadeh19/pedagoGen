"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Info, CheckCircle2 } from 'lucide-react';
import QUIZ_QUESTIONS from '../../../../public/constants/questions.json'
import PedagoLoader from '@/components/ui/Loader';

export default function Quiz() {
    const router = useRouter();
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const isComplete = Object.keys(answers).length === QUIZ_QUESTIONS.length;

    const handleSelect = (questionId: number, option: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: option }));
    };

    const handleSubmit = () => {
        setShowModal(true);
    };

    const confirmAndExit = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            router.push('/build-strategy');
        }, 3500)
        // Logic to save responses to your DB/Backend would go here
    };

    function onBack() {
        router.push('/strategy/details/1')
    }

    return (
        isLoading
            ?
            <PedagoLoader isLoading={isLoading} customMessage={["Submitting Reflection! Please wait a moment"]} />
            :
            <div className="min-h-screen bg-gray-100 p-6 md:p-12 relative">
                <div className="max-w-3xl mx-auto">
                    <div className="max-w-7xl mx-auto mb-8">
                        <button
                            onClick={onBack}
                            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors font-small text-sm cursor-pointer"
                        >
                            <span className="mr-2">←</span> Back to Strategy Details
                        </button>
                    </div>
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">Post-Implementation Survey</h1>
                        <p className="text-gray-500 mt-2">Evaluate the effectiveness of your strategy implementation.</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-100 rounded-md p-4 mb-6">
                        <span className="text-blue-800 flex gap-1 text-sm font-bold tracking-wider mb-2">
                            <Info size={15} />
                            How this works: Your feedback updates your class profile and improves the AI&apos;s strategy
                            weighting engine for future recommendation.
                        </span>
                    </div>
                    {/* Questions List */}
                    <div className="space-y-6">
                        {QUIZ_QUESTIONS.map((q) => (
                            <div key={q.id} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    {q.id}. {q.question}
                                </h3>
                                <div className="grid grid-cols-1 gap-3">
                                    {q.options.map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => handleSelect(q.id, option)}
                                            className={`flex items-center justify-between p-1.5 rounded-md border transition-all text-left ${answers[q.id] === option
                                                ? "border-blue-500 bg-blue-50 text-blue-700"
                                                : "border-gray-100 bg-gray-50 text-gray-600 hover:border-gray-300"
                                                }`}
                                        >
                                            <span className="text-sm font-medium">{option}</span>
                                            {answers[q.id] === option && <CheckCircle2 size={18} />}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Reflection Notes <span className="text-gray-400 capitalize font-normal">(Optional)</span>
                            </h3>
                            <textarea
                                id="reflections"
                                rows={4}
                                placeholder="Share any additional thoughts, insights, challenges, or observations..."
                                className="w-full p-4 rounded-md border border-gray-100 bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-gray-900"
                            ></textarea>
                            <p className="text-xs text-gray-400 italic">
                                Your reflections help in adapting future student-centered instruction.
                            </p>
                        </div>
                    </div>

                    {/* Footer Action */}
                    <div className="mt-10">
                        <button
                            onClick={handleSubmit}
                            disabled={!isComplete}
                            className={`w-full py-2 rounded-md font-bold transition-all ${isComplete
                                ? "bg-black text-white cursor-pointer hover:bg-gray-900"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`}
                        >
                            {isComplete ? "Submit Reflection" : `Answer ${QUIZ_QUESTIONS.length - Object.keys(answers).length} more to finish`}
                        </button>
                    </div>
                </div>

                {/* Popup Modal */}
                {showModal && (
                    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

                        {/* Modal Content */}
                        <div className="relative bg-white rounded-xl shadow-2xl p-8 max-w-md w-full animate-in fade-in zoom-in duration-200">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-blue-100 p-3 rounded-full mb-4">
                                    <Info className="text-blue-600" size={32} />
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 mb-4">Proceed with submission</h2>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    Pedagogen will analyze these responses to create a feedback loop and design targeted stages for improving the strategy in future implementations.
                                </p>
                                <button
                                    onClick={confirmAndExit}
                                    className="w-full py-2 bg-black text-white rounded-md font-semibold hover:bg-gray-800 transition-colors"
                                >
                                    Got it, thanks!
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
    );
}