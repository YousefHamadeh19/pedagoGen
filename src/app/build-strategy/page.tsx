"use client";
import { Key, useState } from 'react';
import { useRouter } from 'next/navigation';
import SelectInput from "./components/SelectInput";
import { Stars } from 'lucide-react'
import { STRATEGY_DATA } from '../../../public/constants/constants';

export default function BuildStrategy() {
    const router = useRouter();
    const [curriculumVal, setCurriculumVal] = useState<string>('');
    const [gradeVal, setGradeVal] = useState<string>('');
    const [subjectVal, setSubjectVal] = useState<string>('');
    const [topicVal, setTopicVal] = useState<string>('');
    const [unitVal, setUnitVal] = useState<string>('');
    const [purposeVal, setPurposeVal] = useState<string>('');
    const [accreditationVal, setAccreditationVal] = useState<string>('');

    function validateString(val: string) {
        if (!val || val == '') return false;
        return true;
    }

    function handleSubmit() {
        if (!curriculumVal || !gradeVal || !subjectVal) {
            return;
        }

        // 2. Search for a match in your static data
        const match = STRATEGY_DATA.find(strategy =>
            strategy.curriculum === curriculumVal &&
            strategy.gradeLevel === gradeVal &&
            strategy.subject === subjectVal
        );

        console.log(match);
        // 3. Handle Missing/False Combinations
        if (!match) {
            // Stay on same page and show a failure toast
            return;
        } else {
            // Store id in localStorage
            localStorage.setItem("strategies", (match.id).toString())            
            // route to strategy page 
            router.push("strategy");
            return;
        }
    }

    return <main className="min-h-full w-full flex flex-col bg-gray-100 px-6">
        <div className="p-8 min-w-[100%]">
            <h1 className="text-black text-3xl font-bold py-3">Build Strategy</h1>
            <div className="flex flex-col lg:flex-row gap-8">

                {/* LEFT CONTAINER: Form Attributes (2/3) */}
                <div className="flex-[2] bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-6">
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-800">Input Configuration</h3>
                    </div>

                    <div className="space-y-4">
                        <SelectInput
                            label="Curriculum"
                            placeholder="Select curriculum"
                            items={["IB", "American", "British", "MOE", "Cambridge"]}
                            onChange={(val) => {
                                if (!val || val?.toString() == '') return;
                                setCurriculumVal(val?.toString() ?? '');
                            }}
                        />

                        <SelectInput
                            label="Grade Level"
                            placeholder="Select grade"
                            items={["Kindergarten", "Primary", "Middle School", "High School"]}
                            onChange={(val) => {
                                if (!val || val?.toString() == '') return;
                                setGradeVal(val?.toString() ?? '');
                            }}
                        />

                        <SelectInput
                            label="Subject"
                            placeholder="Select subject"
                            items={["Mathematics", "Science", "English", "History", "Arts"]}
                            onChange={(val) => {
                                if (!val || val?.toString() == '') return;
                                setSubjectVal(val.toString() ?? '');
                            }}
                        />

                        {/* 4. Topic */}
                        <div className="flex flex-col gap-1">
                            <label className="text-black font-bold text-gray-700 ml-1">Topic</label>
                            <input
                                type="text"
                                placeholder="e.g. Quantum Physics or Fractions"
                                className="w-full px-4 py-2 bg-gray-100 border-transparent rounded-md text-sm focus:bg-white focus:ring-2 focus:ring-[#2298f2] focus:outline-none transition-all text-black"
                                onChange={(e) => {
                                    const topic = e.target.value;
                                    if (validateString(topic)) setTopicVal(topic);
                                    return;
                                }}
                            />
                        </div>

                        {/* 5. Unit */}
                        <div className="flex flex-col gap-1">
                            <label className="text-black font-bold text-gray-700 ml-1">Unit</label>
                            <input
                                type="text"
                                placeholder="e.g. Unit 3: The Solar System"
                                className="w-full px-4 py-2 bg-gray-100 border-transparent rounded-md text-sm focus:bg-white focus:ring-2 focus:ring-[#2298f2] focus:outline-none transition-all text-black"
                                onChange={(e) => {
                                    const topic = e.target.value;
                                    if (validateString(topic)) setUnitVal(topic);
                                    return;
                                }}
                            />
                        </div>

                        <SelectInput
                            label="Strategy Purpose"
                            placeholder="Select purpose"
                            items={["Teaching", "Assessment", "Differentiation"]}
                            onChange={(val) => {
                                if (!val || val?.toString() == '') return;
                                setPurposeVal(val.toString() ?? '');
                            }}
                        />

                        <SelectInput
                            label="Accreditation Alignment"
                            placeholder="Select accreditation"
                            items={['MOE', 'NEASC', 'IB', 'Cambridge']}
                            onChange={(val) => {
                                if (!val || val?.toString() == '') return;
                                setAccreditationVal(val?.toString() ?? '');
                            }}
                        />
                    </div>
                    <button
                        className="w-full flex justify-center items-center gap-2 bg-black text-white py-2 rounded-md font-regular text-sm shadow-md hover:bg-gray-700 active:scale-[0.98] transition-all cursor-pointer"
                        onClick={handleSubmit}
                    >
                        <Stars size={14} /> Generate Strategies
                    </button>
                </div>

                {/* RIGHT CONTAINER: Summary (1/3) */}
                <div className="">
                    <div className="sticky top-8 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-800 mb-6 pb-2">
                            Configuration Summary
                        </h3>

                        <div className="space-y-4 mb-8">
                            <div className="flex flex-col justify-between items-left text-sm">
                                <span className="text-gray-500">Curriculum:</span>
                                <span className="font-semibold text-gray-800">
                                    {curriculumVal == '' ? "--" : curriculumVal}
                                </span>
                            </div>
                            <div className="flex flex-col justify-between items-left text-sm">
                                <span className="text-gray-500">Grade:</span>
                                <span className="font-semibold text-gray-800">{gradeVal == '' ? '--' : gradeVal}</span>
                            </div>
                            <div className="flex flex-col justify-between items-left text-sm">
                                <span className="text-gray-500">Subject:</span>
                                <span className="font-semibold text-gray-800">{subjectVal == '' ? '--' : subjectVal}</span>
                            </div>
                            <div className="flex flex-col justify-between items-left text-sm">
                                <span className="text-gray-500">Topic:</span>
                                <span className="font-semibold text-gray-800">{topicVal == '' ? '--' : topicVal}</span>
                            </div>
                            <div className="flex flex-col justify-between items-left text-sm">
                                <span className="text-gray-500">Unit:</span>
                                <span className="font-semibold text-gray-800">{unitVal == '' ? '--' : unitVal}</span>
                            </div>
                            <div className="flex flex-col justify-between items-left text-sm">
                                <span className="text-gray-500">Purpose:</span>
                                <span className="font-semibold text-gray-800">{purposeVal == '' ? '--' : purposeVal}</span>
                            </div>
                            <div className="flex flex-col justify-between items-left text-sm">
                                <span className="text-gray-500">Accreditation:</span>
                                <span className="font-semibold text-gray-800">{accreditationVal == '' ? '--' : accreditationVal}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
}