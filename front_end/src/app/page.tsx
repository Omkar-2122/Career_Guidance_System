'use client';

import { useState } from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

import InterestQuestionnaire from '../components/InterestQuestionnaire';

export default function Home() {
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
      <div className="max-w-4xl w-full text-center space-y-8 bg-white/70 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-white/20">
        <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Career Guidance System
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Find your ideal career path. Take a quick assessment to match your skills and interests.
        </p>
        
        <button 
          onClick={() => setShowQuestionnaire(true)}
          className="group relative inline-flex items-center px-10 py-5 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <span className="relative z-10 flex items-center">
            Start Assessment
            <ArrowRightCircleIcon 
              className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform duration-300" 
            />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      {showQuestionnaire && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Career Interest Assessment</h2>
                <button 
                  onClick={() => setShowQuestionnaire(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 group"
                >
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <InterestQuestionnaire />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
