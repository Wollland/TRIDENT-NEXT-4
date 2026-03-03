
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Cloud, Power, Wifi, RefreshCw, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

// Define statuses with outline-friendly classes
const USER_STATUSES = [
  { label: 'Available', color: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-600 dark:border-emerald-500', bg: 'hover:bg-emerald-50 dark:hover:bg-emerald-900/30', indicator: 'bg-emerald-500' },
  { label: 'Idle', color: 'text-slate-600 dark:text-slate-400', border: 'border-slate-400 dark:border-slate-500', bg: 'hover:bg-slate-50 dark:hover:bg-slate-800', indicator: 'bg-slate-500' },
  { label: 'Away From Keyboard', color: 'text-blue-600 dark:text-blue-400', border: 'border-blue-600 dark:border-blue-500', bg: 'hover:bg-blue-50 dark:hover:bg-blue-900/30', indicator: 'bg-blue-500' },
  { label: 'Do Not Disturb', color: 'text-rose-600 dark:text-rose-400', border: 'border-rose-600 dark:border-rose-500', bg: 'hover:bg-rose-50 dark:hover:bg-rose-900/30', indicator: 'bg-rose-500' },
  { label: 'Out Of Work', color: 'text-slate-500 dark:text-slate-500', border: 'border-slate-300 dark:border-slate-600', bg: 'hover:bg-slate-50 dark:hover:bg-slate-800', indicator: 'border-2 border-slate-500 bg-transparent' }
];

export const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [time, setTime] = useState(new Date());
  const [isConnected, setIsConnected] = useState(true);
  
  // Status Dropdown State
  const [statusOpen, setStatusOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(USER_STATUSES[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setStatusOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      clearInterval(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  return (
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-400 dark:border-slate-700 px-4 flex items-center justify-between flex-shrink-0 shadow-sm z-50 font-sans relative transition-colors duration-300">
      
      {/* LEFT: Branding & Status Controls */}
      <div className="flex items-center gap-6">
        {/* Logo Placeholder */}
        <div className="flex flex-col leading-none">
            <div className="flex items-center gap-1">
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-b-[14px] border-b-emerald-600 dark:border-b-emerald-500 border-r-[8px] border-r-transparent transition-colors duration-300"></div>
                <span className="font-bold text-xl tracking-widest text-slate-800 dark:text-slate-100 drop-shadow-sm">TRIDENT</span>
            </div>
            <span className="text-[9px] text-slate-400 tracking-widest pl-4">AI4Groups</span>
        </div>

        {/* Separator */}
        <div className="h-8 w-px bg-slate-300 dark:bg-slate-700 mx-2"></div>

        {/* Controls */}
        <div className="flex items-center gap-3">
            {/* Extension Badge */}
            <div className="flex flex-col">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Extension</span>
                <button className="px-3 py-1.5 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center gap-2 shadow-sm tabular-nums hover:border-emerald-400 transition-colors">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
                    89093990236
                </button>
            </div>

            {/* Status Dropdown - OUTLINE STYLE */}
            <div className="flex flex-col relative" ref={dropdownRef}>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">My Status</span>
                <button 
                    onClick={() => setStatusOpen(!statusOpen)}
                    className={`px-3 py-1.5 rounded border text-xs font-bold flex items-center gap-2 shadow-sm transition-all min-w-[150px] justify-between bg-white dark:bg-slate-800 ${currentStatus.color} ${currentStatus.border} ${currentStatus.bg}`}
                >
                    <div className="flex items-center gap-2">
                         {/* Indicator */}
                         <div className={`w-2 h-2 rounded-full ${currentStatus.indicator} shadow-sm`}></div>
                         <span className="uppercase tracking-tight text-[11px]">{currentStatus.label === 'Away From Keyboard' ? 'AWAY' : currentStatus.label.toUpperCase()}</span>
                    </div>
                    <ChevronDown size={12} className="opacity-70" />
                </button>

                {/* Dropdown Menu */}
                {statusOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-300 dark:border-slate-600 py-1 z-[60] animate-in fade-in zoom-in-95 duration-100">
                        {USER_STATUSES.map((status) => (
                            <button
                                key={status.label}
                                onClick={() => {
                                    setCurrentStatus(status);
                                    setStatusOpen(false);
                                }}
                                className="w-full px-4 py-2.5 text-left flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors group border-b border-slate-100 dark:border-slate-700 last:border-0"
                            >
                                <div className={`w-2.5 h-2.5 rounded-full ${status.indicator} shadow-sm group-hover:scale-110 transition-transform`}></div>
                                
                                <span className={`text-xs font-medium ${currentStatus.label === status.label ? 'text-slate-900 dark:text-white font-bold' : 'text-slate-600 dark:text-slate-300'}`}>
                                    {status.label}
                                </span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

             {/* Connection Status */}
             <div className="flex flex-col">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">WebRTC</span>
                <button 
                    onClick={() => setIsConnected(!isConnected)}
                    className={`px-3 py-1.5 rounded text-[10px] font-bold flex items-center gap-2 shadow-sm border transition-all tabular-nums bg-white dark:bg-slate-800 ${
                        isConnected 
                            ? "border-emerald-500 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30" 
                            : "border-rose-500 text-rose-700 dark:text-rose-400 hover:bg-rose-50 animate-pulse"
                    }`}
                >
                    {isConnected ? (
                        <>
                            <Wifi size={14} strokeWidth={2.5} className="text-emerald-500" />
                            <span>CONNECTED: 24ms</span>
                        </>
                    ) : (
                        <>
                            <RefreshCw size={14} className="animate-spin-slow text-rose-500" />
                            <span>RECONNECTING...</span>
                        </>
                    )}
                </button>
            </div>
        </div>
      </div>

      {/* CENTER: Clock (Digital + Analog) */}
      <div className="flex items-center gap-4 pl-8 border-l border-slate-300 dark:border-slate-700">
        {/* Analog Clock SVG */}
        <div className="w-10 h-10 relative drop-shadow-md">
            <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" className="fill-white dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-600" strokeWidth="3" />
                {[...Array(12)].map((_, i) => (
                    <line 
                        key={i} 
                        x1="50" y1="10" x2="50" y2="15" 
                        className="stroke-slate-400 dark:stroke-slate-500"
                        strokeWidth="2" 
                        transform={`rotate(${i * 30} 50 50)`} 
                    />
                ))}
                <line 
                    x1="50" y1="50" x2="50" y2="25" 
                    className="stroke-slate-600 dark:stroke-slate-300"
                    strokeWidth="3" 
                    strokeLinecap="round"
                    transform={`rotate(${(hours % 12) * 30 + minutes * 0.5} 50 50)`} 
                />
                <line 
                    x1="50" y1="50" x2="50" y2="18" 
                    className="stroke-slate-500 dark:stroke-slate-400"
                    strokeWidth="2" 
                    strokeLinecap="round"
                    transform={`rotate(${minutes * 6} 50 50)`} 
                />
                <line 
                    x1="50" y1="50" x2="50" y2="15" 
                    className="stroke-emerald-500"
                    strokeWidth="1.5" 
                    strokeLinecap="round"
                    transform={`rotate(${seconds * 6} 50 50)`} 
                />
                <circle cx="50" cy="50" r="3" className="fill-emerald-500" />
            </svg>
        </div>

        <div className="flex flex-col items-start justify-center">
            <div className="text-lg font-light text-slate-700 dark:text-slate-200 tabular-nums tracking-tighter leading-none drop-shadow-sm">
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </div>
            <div className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">
                {time.toLocaleDateString([], { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
        </div>
      </div>

      {/* RIGHT: Weather & System Info */}
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-end">
             <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Riga, Latvia</span>
             <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <Cloud size={18} className="text-slate-400 fill-slate-100 dark:fill-slate-800" />
                <span className="text-xl font-light tabular-nums">-4°</span>
             </div>
        </div>

        <div className="h-10 w-px bg-slate-300 dark:bg-slate-700"></div>

        {/* DARK MODE TOGGLE */}
        <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-colors text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
            title="Toggle Theme"
        >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a10 10 0 0 1 0 20" fill="currentColor" className="opacity-50" />
            </svg>
        </button>

        <div className="flex items-center gap-2 pl-4 border-l border-slate-300 dark:border-slate-700">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg relative overflow-hidden shadow-md flex items-center justify-center transition-colors duration-300">
                <div className="absolute top-[-2px] left-[-2px] w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute bottom-[-2px] right-[-2px] w-2 h-2 bg-white rounded-full opacity-50"></div>
                <Wifi size={16} className="text-white relative z-10" />
            </div>
            <div className="flex flex-col leading-none">
                <span className="font-black text-lg text-slate-800 dark:text-slate-100 tracking-tighter">Dialoga</span>
                <span className="text-[8px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider transition-colors duration-300">CloudComms</span>
            </div>
        </div>

        <button className="text-slate-300 hover:text-rose-600 transition-colors ml-2">
            <Power size={22} />
        </button>
      </div>
    </header>
  );
};
