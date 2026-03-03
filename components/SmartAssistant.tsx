import React from 'react';
import { Sparkles, BrainCircuit, ArrowRight } from 'lucide-react';

export const SmartAssistant: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl shadow-lg text-white p-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-500 opacity-10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BrainCircuit className="text-indigo-200" size={24} />
            <h3 className="font-bold text-lg tracking-wide">Trident AI</h3>
          </div>
          <span className="bg-white/10 px-2 py-0.5 rounded text-xs font-medium text-indigo-100 border border-white/10">BETA</span>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/5 mb-4">
          <p className="text-sm text-indigo-50 leading-relaxed">
            <span className="text-indigo-200 font-semibold">Insight:</span> Call volume is 15% higher than average for this time. Suggest reallocating 2 agents from Support to Sales.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="bg-white text-indigo-700 py-2 px-3 rounded-lg text-sm font-semibold hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
            <Sparkles size={14} />
            Auto-Assign
          </button>
          <button className="bg-indigo-500/50 hover:bg-indigo-500/70 border border-indigo-400/30 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
            Generate Report
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};