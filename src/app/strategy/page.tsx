"use client";
import strategyDataRaw from '../../../public/constants/strategies.json';
import { useRouter } from 'next/navigation';
// Assuming STRATEGY_DATA is imported or passed as a prop
export default function StrategiesDisplay() {
    const router = useRouter();
    const strategies = strategyDataRaw;

    function onBack() {
        router.push('/build-strategy');
    }

    function handleViewDetails(strategyId: number) {
        // Navigates to /strategy/details/1
        router.push(`/strategy/details/${strategyId}`);
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6 md:p-12">
            {/* Header & Back Button */}
            <div className="max-w-7xl mx-auto mb-8">
                <button
                    onClick={onBack}
                    className="flex items-center text-gray-600 hover:text-gray-800 transition-colors font-small text-sm cursor-pointer"
                >
                    <span className="mr-2">←</span> Back to Strategy Builder
                </button>
                <h1 className="text-3xl font-bold mt-4 text-gray-800">Generated Strategies</h1>
            </div>

            {/* Responsive Flex Grid */}
            <div className="max-w-7xl mx-auto flex flex-wrap -m-4">
                {strategies.length > 0 ? (
                    strategies.map((strategy) => (
                        <div key={strategy.id} className="p-4 w-full md:w-1/2 lg:w-1/2">
                            <div className="bg-white rounded-md shadow-sm h-full flex flex-col p-6 gap-3 border border-gray-200 hover:shadow-md transition-shadow">

                                {/* Strategy Title */}
                                <h2 className="text-xl font-bold text-gray-900 mb-3">
                                    {strategy.strategyName}
                                </h2>

                                {/* Teacher Action Snippet */}
                                <p className="text-gray-600 text-sm mb-6 flex-grow">
                                    {strategy.teacherActions[0]}
                                </p>

                                {/* Intended Learning Outcome (Student Action Box) */}
                                <div className="bg-blue-50 border border-blue-100 rounded-md p-4 mb-6">
                                    <h3 className="text-blue-800 text-sm font-bold tracking-wider mb-2">
                                        Intended learning outcome
                                    </h3>
                                    <p className="text-blue-900 text-sm">
                                        {strategy.studentActions[0]}
                                    </p>
                                </div>

                                {/* Expand Button */}
                                <button
                                    className="w-full py-1 bg-white border border-gray-200 text-black text-sm rounded-md font-semibold hover:bg-black hover:text-white transition-all text-center cursor-pointer"
                                    onClick={() => handleViewDetails(strategy.id)}
                                >
                                    Use This Strategy
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="w-full text-center py-20">
                        <p className="text-gray-500 italic">No matching strategies found. Please adjust your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
}