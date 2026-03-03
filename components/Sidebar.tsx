import React from 'react';
import { 
  LayoutDashboard, 
  Phone, 
  Users, 
  MessageSquare, 
  BarChart2, 
  Settings, 
  HelpCircle,
  LogOut
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Phone, label: 'Calls', active: false },
    { icon: Users, label: 'Contacts', active: false },
    { icon: MessageSquare, label: 'Messages', active: false },
    { icon: BarChart2, label: 'Analytics', active: false },
  ];

  return (
    <div className="w-20 flex flex-col items-center py-6 bg-slate-900 h-screen fixed left-0 top-0 z-50 shadow-xl">
      <div className="mb-8">
        <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-4 w-full px-3">
        {menuItems.map((item, index) => (
          <button 
            key={index}
            className={`p-3 rounded-xl transition-all duration-200 group relative flex justify-center ${
              item.active 
                ? 'bg-emerald-500/10 text-emerald-400' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
            }`}
          >
            <item.icon size={22} />
            <div className="absolute left-14 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-700 z-50">
              {item.label}
            </div>
          </button>
        ))}
      </nav>

      <div className="flex flex-col gap-4 w-full px-3 mt-auto">
        <button className="p-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-slate-100 transition-colors flex justify-center">
          <Settings size={22} />
        </button>
        <button className="p-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-slate-100 transition-colors flex justify-center">
          <LogOut size={22} />
        </button>
      </div>
    </div>
  );
};