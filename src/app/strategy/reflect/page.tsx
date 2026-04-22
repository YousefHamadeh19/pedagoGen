"use client";
import { useRouter } from "next/navigation";
import { Info } from "lucide-react";
import { STRATEGY_DATA } from "../../../../public/constants/constants";
export default function StrategyReflection() {
    const router = useRouter();
    const options = [
        { id: 'engaged', label: 'Students were engaged' },
        { id: 'easy', label: 'Too easy' },
        { id: 'difficult', label: 'Too difficult' },
        { id: 'time', label: 'Time constraints' }
    ];
    function onBack() {
        router.back()
    }
    return <div className="min-h-screen bg-gray-100 p-6 md:p-12">
        {/* Header & Back Button */}
        <div className="max-w-7xl mx-auto mb-8">
            <button
                onClick={onBack}
                className="flex items-center text-gray-600 hover:text-gray-800 transition-colors font-small text-sm"
            >
                <span className="mr-2">←</span> Back to Generated Strategies
            </button>
            <h1 className="text-3xl font-bold mt-4 text-gray-800">Post-Lesson Reflection</h1>
        </div>

        {/* Responsive Flex Grid */}
        <div className="max-w-7xl mx-auto flex justify-center -m-4">
            <div key={STRATEGY_DATA[0].id} className="p-4 w-full">
                <div className="bg-white rounded-md shadow-sm h-full flex flex-col p-6 gap-3 border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="bg-blue-50 border border-blue-100 rounded-md p-4 mb-6">
                        <span className="text-blue-800 flex gap-1 text-sm font-bold tracking-wider mb-2">
                            <Info size={15} />
                            How this works: Your feedback updates your class profile and improves the AI's strategy
                            weighting engine for future recommendation.
                        </span>
                    </div>
                    {/* Strategy Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3">
                        Lesson Observation
                    </h2>

                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            {options.map((option) => (
                                <label
                                    key={option.id}
                                    className="flex items-center space-x-2 cursor-pointer group w-fit"
                                >
                                    <input
                                        type="checkbox"
                                        className="w-3.5 h-3.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                    {/* Using text-xs for small text and text-gray-500 for a subtle look */}
                                    <span className="text-sm text-black font-semibold group-hover:text-gray-800 transition-colors">
                                        {option.label}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="py-6 border-t border-b border-gray-100 my-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Overall Effectiveness
                            </h3>
                        </div>
                        <div className="text-black ">
                            <ol>
                                <li className="text-sm font-bold">1. Not Effective</li>
                                <li className="text-sm font-bold">2. Somewhat Effective</li>
                                <li className="text-sm font-bold">3. Moderately Effective</li>
                                <li className="text-sm font-bold">4. Very Effective</li>
                                <li className="text-sm font-bold">5. Highly Effective</li>
                            </ol>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="reflections" className="text-md font-semibold text-black tracking-wide">
                            Reflection Notes <span className="text-gray-400 capitalize font-normal">(Optional)</span>
                        </label>
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

                    <button
                        className="w-full py-1 bg-black border border-gray-200 text-white text-sm rounded-md font-semibold text-center cursor-pointer"
                        onClick={() => router.push("/builder-strategy")}
                    >
                        Submit Reflection
                    </button>
                </div>
            </div>
        </div>
    </div>
}