'use client';
import React from 'react';
import { Users, Lightbulb, BarChart3, MoreVertical, Flag } from 'lucide-react';
import Footer from '@/components/Footer';

export default function CoordinatorDashboard() {
  const stats = [
    { title: 'Active Teachers', value: '24', icon: <Users className="text-blue-600" size={20} />, trend: '+2 this week' },
    { title: 'Strategies Generated', value: '142', icon: <Lightbulb className="text-yellow-500" size={20} />, trend: '+12% growth' },
    { title: 'Avg. Effectiveness', value: '4.2', icon: <BarChart3 className="text-green-600" size={20} />, trend: 'Out of 5.0' },
  ];

  const teacherData = [
    { name: 'Sarah Ahmed', frequency: 12, trend: 'Increasing', flags: 0 },
    { name: 'John Smith', frequency: 8, trend: 'Stable', flags: 1 },
    { name: 'Layla Hassan', frequency: 15, trend: 'Increasing', flags: 0 },
    { name: 'Robert Chen', frequency: 4, trend: 'Decreasing', flags: 2 },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Coordinator Dashboard</h1>
          <p className="text-gray-500 mt-1 font-light">Monitor teacher usage and effectiveness</p>
        </header>

        {/* Stats Tiles with rounded-md */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-sm border border-gray-200 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.title}</p>
                <h3 className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</h3>
                <p className="text-xs text-gray-400 mt-2">{stat.trend}</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-full">{stat.icon}</div>
            </div>
          ))}
        </div>

        {/* Table Container with rounded-md and overflow-hidden */}
        <div className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-800">Teacher Analytics</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Teacher Name</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Frequency</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Trend</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Flags</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {teacherData.map((teacher, index) => (
                  <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{teacher.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{teacher.frequency} uses</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold uppercase ${teacher.trend === 'Increasing' ? 'bg-green-100 text-green-700' :
                          teacher.trend === 'Stable' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                        }`}>
                        {teacher.trend}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <Flag size={14} className={teacher.flags > 0 ? "text-red-500 fill-red-500" : "text-gray-300"} />
                        <span className={`text-sm ${teacher.flags > 0 ? "text-red-600 font-bold" : "text-gray-400"}`}>{teacher.flags}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer showDetails={false} />
    </>
  );
}