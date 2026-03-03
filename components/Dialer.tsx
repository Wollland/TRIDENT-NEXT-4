
import React, { useState } from 'react';
import { 
  Phone, 
  Settings,
  Search,
  Grid3X3,
  CreditCard,
  PhoneForwarded,
  PhoneMissed,
  PhoneOff,
  Mic,
  MicOff,
  Pause,
  UserPlus,
  ArrowLeft,
  Delete,
  Disc
} from 'lucide-react';

export const Dialer: React.FC = () => {
  const [number, setNumber] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [countryCode, setCountryCode] = useState('ES');

  const keys = [
    { val: '1', sub: '' },
    { val: '2', sub: 'ABC' },
    { val: '3', sub: 'DEF' },
    { val: '4', sub: 'GHI' },
    { val: '5', sub: 'JKL' },
    { val: '6', sub: 'MNO' },
    { val: '7', sub: 'PQRS' },
    { val: '8', sub: 'TUV' },
    { val: '9', sub: 'WXYZ' },
    { val: '0', sub: '' },
    { val: '*', sub: '' },
    { val: '#', sub: '' },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 p-3 flex flex-col gap-3 font-sans mb-0 relative z-20 transition-colors duration-300">
      
      {/* ROW 1: Circular Keys */}
      <div className="flex flex-wrap justify-between items-center gap-1 px-1">
        {keys.map(k => (
          <button 
            key={k.val}
            onClick={() => setNumber(prev => prev + k.val)}
            className="w-10 h-10 rounded-full border-[2px] border-[#005c97] dark:border-sky-500 text-[#005c97] dark:text-sky-400 flex flex-col items-center justify-center hover:bg-blue-50 dark:hover:bg-slate-700 active:scale-95 transition-all shadow-sm group bg-white dark:bg-slate-700 flex-shrink-0"
          >
            <span className="text-lg font-normal leading-none mt-0.5">{k.val}</span>
            {k.sub && <span className="text-[6px] font-bold opacity-70 leading-none mt-[1px] tracking-widest">{k.sub}</span>}
          </button>
        ))}
      </div>

      {/* ROW 2: Number Input & Source */}
      <div className="flex gap-3 h-10">
         {/* Left: Number Input */}
         <div className="flex-[6] flex relative group min-w-0">
            {/* Icon Box */}
            <div className="w-9 flex items-center justify-center text-emerald-500 border-[1.5px] border-emerald-500 border-r-0 rounded-l-md bg-white dark:bg-slate-700 z-10 flex-shrink-0">
                <Grid3X3 size={18} />
            </div>
            {/* Input */}
            <input 
                value={number}
                onChange={e => setNumber(e.target.value)}
                className="flex-1 border-[1.5px] border-l-0 border-r-0 border-emerald-500 text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none h-full px-2 min-w-0 bg-white dark:bg-slate-900"
            />
            {/* Backspace Button */}
            <button 
                onClick={() => setNumber(prev => prev.slice(0, -1))}
                className="w-9 flex items-center justify-center text-slate-400 hover:text-rose-500 border-[1.5px] border-emerald-500 border-l-0 rounded-r-md bg-white dark:bg-slate-700 transition-colors hover:bg-slate-50 dark:hover:bg-slate-600 flex-shrink-0"
            >
                <ArrowLeft size={18} strokeWidth={2.5} />
            </button>
         </div>

         {/* Right: Source Selector */}
         <div className="flex-[5] flex relative min-w-0">
            {/* Icon Box */}
            <div className="w-9 flex items-center justify-center text-emerald-500 border-[1.5px] border-emerald-500 border-r-0 rounded-l-md bg-white dark:bg-slate-700 z-10 flex-shrink-0">
                <CreditCard size={18} />
            </div>
            {/* Select */}
            <div className="flex-1 border-[1.5px] border-emerald-500 rounded-r-md border-l-0 bg-white dark:bg-slate-900 relative min-w-0">
                <select className="w-full h-full pl-2 pr-6 text-xs font-medium text-slate-500 dark:text-slate-300 focus:outline-none appearance-none bg-transparent cursor-pointer truncate">
                    <option>+34944949494</option>
                    <option>+442012345678</option>
                </select>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor"><path d="M0 0L5 6L10 0H0Z"/></svg>
                </div>
            </div>
         </div>
      </div>

      {/* ROW 3: Action Buttons - PRECISE ORDER with Responsive Wrap */}
      <div className="flex flex-wrap items-center justify-between py-1 px-1 gap-y-2">
          
          {/* LEFT: Management Tools */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
              <ActionBtn icon={PhoneForwarded} color="text-[#005c97] dark:text-sky-400 border-[#005c97] dark:border-sky-500" />
              <ActionBtn icon={PhoneMissed} color="text-rose-600 dark:text-rose-400 border-rose-600 dark:border-rose-500" />
              <ActionBtn icon={UserPlus} color="text-[#005c97] dark:text-sky-400 border-[#005c97] dark:border-sky-500" />
              <ActionBtn icon={CreditCard} color="text-[#005c97] dark:text-sky-400 border-[#005c97] dark:border-sky-500" />
          </div>

          {/* CENTER: Call Control Sequence - Wrapped together */}
          <div className="flex items-center gap-2 justify-center flex-grow flex-wrap sm:flex-nowrap">
               
               {/* 1. HANGUP (Red Pill) */}
               <button className="h-10 w-14 rounded-full border-[2px] border-rose-600 text-rose-600 dark:text-rose-400 dark:border-rose-500 flex items-center justify-center hover:bg-rose-50 dark:hover:bg-rose-900/30 transition-colors shadow-sm flex-shrink-0">
                   <PhoneOff size={24} strokeWidth={2.5} />
               </button>
               
               {/* 2. Controls (Small Circles) */}
               <div className="flex gap-1.5 px-1 flex-shrink-0">
                    <ControlBtn icon={MicOff} />
                    <ControlBtn icon={Mic} />
                    <ControlBtn icon={Pause} />
                    {/* 4. RECORD (Restored Weight) */}
                    <button 
                        onClick={() => setIsRecording(!isRecording)}
                        className={`w-9 h-9 rounded-full border-2 flex items-center justify-center shadow-sm flex-shrink-0 transition-all ${
                            isRecording 
                            ? 'bg-rose-100 dark:bg-rose-900/50 border-rose-500 text-rose-600' 
                            : 'bg-rose-50 dark:bg-slate-700 border-rose-200 dark:border-slate-600 text-rose-500 hover:border-rose-400 hover:bg-rose-100 dark:hover:bg-rose-900/20'
                        }`}
                        title="Record Call"
                        >
                        {/* Solid Red Circle inside */}
                        <div className={`w-3.5 h-3.5 rounded-full bg-rose-600 ${isRecording ? 'animate-pulse' : ''}`}></div>
                    </button>
               </div>

               {/* 3. CALL (Green Pill) */}
               <button className="h-10 w-14 rounded-full border-[2px] border-emerald-600 text-emerald-600 dark:text-emerald-400 dark:border-emerald-500 flex items-center justify-center hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors shadow-sm flex-shrink-0">
                   <Phone size={24} strokeWidth={2.5} />
               </button>

          </div>

          {/* RIGHT: Settings */}
          <div className="pl-2 flex-shrink-0">
               <button className="w-9 h-9 rounded-full border-[1.5px] border-[#005c97] dark:border-sky-500 text-[#005c97] dark:text-sky-400 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    <Settings size={18} />
               </button>
          </div>
      </div>

      {/* ROW 4: Search & Country (Agenda Header) */}
      <div className="flex gap-3 h-10">
         {/* Left: Search Input */}
         <div className="flex-[6] flex relative group min-w-0">
            {/* Icon Box */}
            <div className="w-9 flex items-center justify-center text-emerald-500 border-[1.5px] border-emerald-500 border-r-0 rounded-l-md bg-white dark:bg-slate-700 z-10 flex-shrink-0">
                <Search size={18} />
            </div>
            {/* Input */}
            <input 
                placeholder="(55 contacts)"
                className="flex-1 border-[1.5px] border-l-0 border-r-0 border-emerald-500 text-sm text-slate-600 dark:text-slate-300 placeholder-slate-400 focus:outline-none h-full px-2 min-w-0 bg-white dark:bg-slate-900"
            />
         </div>

         {/* Right: Country Selector */}
         <div className="flex-[5] flex relative items-center min-w-0">
            {/* Text Code Positioned Absolute inside */}
            <div className="absolute left-2 z-20 pointer-events-none">
                <span className="text-emerald-700 dark:text-emerald-400 text-xs font-bold">{countryCode}</span>
            </div>
            {/* Select */}
            <div className="flex-1 border-[1.5px] border-emerald-500 rounded-md bg-white dark:bg-slate-900 relative min-w-0">
                <select 
                    onChange={(e) => setCountryCode(e.target.value.split(' ')[0])}
                    className="w-full h-full pl-8 pr-6 text-xs font-medium text-slate-500 dark:text-slate-300 focus:outline-none appearance-none bg-transparent cursor-pointer truncate"
                >
                    <option value="ES">Spain (+34)</option>
                    <option value="PT">Portugal (+351)</option>
                    <option value="IT">Italy (+39)</option>
                    <option value="US">USA (+1)</option>
                    <option value="UK">UK (+44)</option>
                </select>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor"><path d="M0 0L5 6L10 0H0Z"/></svg>
                </div>
            </div>
         </div>
      </div>

    </div>
  );
};

const ActionBtn: React.FC<{ icon: any, color: string }> = ({ icon: Icon, color }) => (
    <button className={`w-9 h-9 rounded-full border-[1.5px] flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm flex-shrink-0 bg-white dark:bg-slate-800 ${color}`}>
        <Icon size={18} strokeWidth={2} />
    </button>
);

const ControlBtn: React.FC<{ icon: any }> = ({ icon: Icon }) => (
    <button className="w-9 h-9 rounded-full border-[1.5px] border-[#005c97] dark:border-sky-500 text-[#005c97] dark:text-sky-400 flex items-center justify-center hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors shadow-sm flex-shrink-0 bg-white dark:bg-slate-800">
        <Icon size={16} strokeWidth={2} />
    </button>
);
