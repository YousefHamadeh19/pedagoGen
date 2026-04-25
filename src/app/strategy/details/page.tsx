"use client";
import { useRouter, useParams } from 'next/navigation';
import { Info, BookOpen, User, Users, Bookmark, BrainCircuit } from 'lucide-react'; // Assuming Lucide for icons
import strategyDataRaw from '../../../../public/constants/strategies.json';
import { useState } from 'react';
import PedagoLoader from '@/components/ui/Loader';

export default function StrategyDetails() {
    const router = useRouter();
    const id = localStorage.getItem('strategyId');
    const [decision, setDecision] = useState<"Save" | "Reflect">("Save");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Logic to fetch strategy data based on ID
    // This is a placeholder for your actual data fetching logic
    const strategy = strategyDataRaw.find(s => s.id.toString() === id) || strategyDataRaw[0];

    const onSave = () => {
        // Add save logic here
        setDecision('Save');
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            router.push('/build-strategy');
            return;
        }, 3000)
    };

    const onSaveAndReflect = () => {
        setDecision('Reflect');
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            router.push('/strategy/reflect');
            return;
        }, 3000)
    };

    return (
        isLoading
            ?
            <PedagoLoader isLoading={isLoading} customMessage={decision == 'Save' ? ["Saving"] : ["Reflect! Generating Survey..."]} />
            :
            <div className="min-h-screen bg-gray-100 p-6 md:p-12">
                {/* Header & Back Button */}
                <div className="max-w-7xl mx-auto mb-8">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center text-gray-600 hover:text-gray-800 transition-colors font-small text-sm cursor-pointer"
                    >
                        <span className="mr-2">←</span> Back to Strategies
                    </button>
                    <h1 className="text-3xl font-bold mt-4 text-gray-800">Strategy Details</h1>
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-md shadow-sm flex flex-col p-8 gap-6 border border-gray-200">

                        {/* Strategy Header Info */}
                        <div className="border-b border-gray-100 pb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">{strategy.strategyName}</h2>
                            <div className="flex items-start gap-2 text-gray-600">
                                <BookOpen size={20} className="mt-1 flex-shrink-0" />
                                <p className="text-lg leading-relaxed">{strategy.description}</p>
                            </div>
                        </div>

                        {/* Actions Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Teacher Actions */}
                            <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-6">
                                <div className="flex items-center gap-2 mb-4 text-blue-800">
                                    <User size={20} />
                                    <h3 className="font-bold text-lg">Teacher Actions</h3>
                                </div>
                                <ul className="space-y-3">
                                    {strategy.teacherActions.map((action, index) => (
                                        <li key={index} className="flex gap-3 text-sm text-gray-700">
                                            <span className="font-bold text-blue-400">{index + 1}.</span>
                                            {action}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Student Actions */}
                            <div className="bg-green-50/50 border border-green-100 rounded-lg p-6">
                                <div className="flex items-center gap-2 mb-4 text-green-800">
                                    <Users size={20} />
                                    <h3 className="font-bold text-lg">Student Actions</h3>
                                </div>
                                <ul className="space-y-3">
                                    {strategy.studentActions.map((action, index) => (
                                        <li key={index} className="flex gap-3 text-sm text-gray-700">
                                            <span className="font-bold text-green-400">{index + 1}.</span>
                                            {action}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Footer Info Box */}
                        <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                            <span className="text-gray-600 flex gap-2 text-xs">
                                <Info size={14} className="mt-0.5" />
                                Review the actions above before proceeding. You can save this strategy to your library or jump straight into reflection after your lesson.
                            </span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <button
                                onClick={onSave}
                                className="flex-1 flex justify-center items-center gap-1.5 py-1.5 bg-white border border-gray-300 text-gray-700 rounded-md font-semibold text-center cursor-pointer"
                            >
                                Save <Bookmark size={18} className="hover:translate-x-1 hover:-translate-y-1 transition-transform" />

                            </button>
                            <button
                                onClick={onSaveAndReflect}
                                className="flex-1 flex justify-center items-center gap-1.5  py-1.5 bg-black text-white rounded-md font-semibold text-center cursor-pointer"
                            >
                                Save and Reflect <BrainCircuit size={18} className="hover:translate-x-1 hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
}