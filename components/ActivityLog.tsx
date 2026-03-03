
import React, { useState } from 'react';
import { 
  PhoneMissed, 
  User, 
  Tag, 
  Mail, 
  Flag, 
  MessageSquare, 
  Search, 
  FileAudio,
  FileText,
  Monitor,
  Hash,
  Bot,
  ArrowUpRight,
  ArrowDownLeft,
  CheckCheck,
  ListOrdered,
  Timer,
  BrainCircuit,
  Activity,
  Mic,
  MessageCircle,
  Smile,
  Meh,
  Frown,
  OctagonAlert,
  Phone,
  Play,
  Pause,
  MoreVertical,
  Calendar,
  Download,
  Share2,
  Filter,
  X,
  Sparkles,
  Copy
} from 'lucide-react';
import { MOCK_CALLS } from '../constants';
import { CallRecord } from '../types';
import { WhatsAppIcon, TeamsIcon } from './Icons';

export const ActivityLog: React.FC = () => {
  // State to toggle between List View and Detail View
  const [view, setView] = useState<'list' | 'detail'>('list');
  const [selectedItem, setSelectedItem] = useState<CallRecord | null>(null);
  const [filter, setFilter] = useState<'all' | 'calls' | 'missed' | 'messages' | 'voicemail'>('all');

  const handleItemClick = (item: CallRecord) => {
    setSelectedItem(item);
    setView('detail');
  };

  const handleBack = () => {
    setView('list');
    setSelectedItem(null);
  };

  // Filter Logic
  const filteredCalls = MOCK_CALLS.filter(call => {
      if (filter === 'all') return true;
      if (filter === 'calls') return call.type === 'call' && call.direction !== 'missed';
      if (filter === 'missed') return call.direction === 'missed';
      if (filter === 'messages') return call.type === 'message';
      if (filter === 'voicemail') return call.direction === 'missed' && call.flags.recorded; // Mock logic for voicemail
      return true;
  });

  // Render the appropriate view
  if (view === 'detail' && selectedItem) {
      return <DetailView onBack={handleBack} record={selectedItem} />;
  }

  return (
    <div className="bg-white dark:bg-slate-900 flex flex-col h-full font-sans relative transition-colors duration-300">
      
      {/* 1. SEARCH & FILTER HEADER */}
      <div className="flex flex-col border-b border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 z-20">
          
          {/* Search Bar */}
          <div className="p-2 flex gap-2 items-center">
            <div className="relative flex-1">
              <input 
                type="text" 
                className="w-full border border-slate-300 dark:border-slate-600 rounded px-2 py-1.5 text-xs focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-500/20 bg-slate-50 dark:bg-slate-800 dark:text-slate-200 placeholder-slate-400 pl-8"
                placeholder="Search history, transcripts, or IDs..." 
              />
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={12} />
            </div>
            <button className="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded border border-transparent hover:border-emerald-200 dark:hover:border-emerald-800 transition-all" title="Advanced Filters">
                <Filter size={14} />
            </button>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1 px-2 pb-0 overflow-x-auto scrollbar-none">
              <FilterTab label="All" count={MOCK_CALLS.length} active={filter === 'all'} onClick={() => setFilter('all')} />
              <FilterTab label="Calls" count={MOCK_CALLS.filter(c => c.type === 'call').length} active={filter === 'calls'} onClick={() => setFilter('calls')} />
              <FilterTab label="Missed" count={MOCK_CALLS.filter(c => c.direction === 'missed').length} active={filter === 'missed'} onClick={() => setFilter('missed')} />
              <FilterTab label="Messages" count={MOCK_CALLS.filter(c => c.type === 'message').length} active={filter === 'messages'} onClick={() => setFilter('messages')} />
          </div>
      </div>

      {/* 2. DATE HEADER (Sticky) */}
      <div className="px-3 py-1.5 bg-slate-100/90 dark:bg-slate-800/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 flex justify-between items-center shadow-sm sticky top-0 z-10 flex-shrink-0">
        <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Today, 19 Nov</span>
        <span className="text-[9px] font-bold text-slate-400 dark:text-slate-300 bg-slate-200 dark:bg-slate-700 px-1.5 rounded-full">{filteredCalls.length} Items</span>
      </div>
      
      {/* 3. LIST CONTENT */}
      <div className="overflow-y-auto flex-1 scrollbar-thin bg-slate-50/50 dark:bg-slate-900/50 relative">
        {filteredCalls.map((call, idx) => (
          <div key={call.id} onClick={() => handleItemClick(call)} className="cursor-pointer">
              <ActivityItem item={call} isEven={idx % 2 === 0} />
          </div>
        ))}
        
        {/* Empty State */}
        {filteredCalls.length === 0 && (
            <div className="flex flex-col items-center justify-center h-40 text-slate-400">
                <ListOrdered size={24} className="mb-2 opacity-50"/>
                <span className="text-xs">No records found</span>
            </div>
        )}
      </div>
    </div>
  );
};

// --- RICH DETAIL VIEW ---
const DetailView: React.FC<{ onBack: () => void, record: CallRecord }> = ({ onBack, record }) => {
    // Mock JSON data for the view
    const mockJson = {
        "CLIENT_SATISFACTION": 4,
        "AGENT_POLITENESS": 3,
        "RELEVANT_DATA": {
            "ISSUE": "The client experienced an error with the interface loading.",
            "DISCUSSION_POINTS": [
                "Troubleshooting slow connectivity",
                "Current version discrepancies",
                "Confusion about structure",
                "Plan to send updated interface",
                "Critique of UI elements"
            ]
        }
    };

    return (
        <div className="flex flex-col h-full bg-white dark:bg-slate-900 overflow-hidden relative animate-in slide-in-from-right duration-200 z-30">
           
           {/* Header - Matches Screenshot Layout */}
           <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm flex justify-between items-center flex-shrink-0">
               <div className="flex items-center gap-6">
                   {/* Date & Time */}
                   <div className="flex items-center gap-3">
                       <span className="text-sm font-bold text-rose-600 dark:text-rose-400 tabular-nums">27/02/2026</span>
                       <span className="text-sm font-medium text-slate-600 dark:text-slate-300 tabular-nums">{record.timestamp}</span>
                   </div>

                   {/* Agent Info */}
                   <div className="flex items-center gap-2 border-l border-slate-300 dark:border-slate-700 pl-4">
                       <Monitor size={16} className="text-slate-400" />
                       <div className="flex flex-col leading-none">
                           <span className="text-xs font-bold text-slate-800 dark:text-slate-100">{record.contactName}</span>
                           <span className="text-[10px] text-slate-400 font-mono">{record.contactId}</span>
                       </div>
                   </div>

                   {/* Sentiment */}
                   <div className="pl-2">
                       <HollowSentimentIcon sentiment={record.flags.sentiment || 'neutral'} />
                   </div>
               </div>

               <div className="flex items-center gap-4">
                   {/* Duration & Type */}
                   <div className="flex items-center gap-2">
                       <span className="text-sm font-bold text-slate-800 dark:text-slate-200 tabular-nums">{record.duration}</span>
                       {record.type === 'call' ? (
                           <Phone size={16} className="text-blue-600 dark:text-blue-400" />
                       ) : (
                           <MessageSquare size={16} className="text-indigo-600 dark:text-indigo-400" />
                       )}
                   </div>

                   {/* Close Button */}
                   <button onClick={onBack} className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                       <X size={20} />
                   </button>
               </div>
           </div>

           {/* Content Scroll */}
           <div className="flex-1 overflow-y-auto scrollbar-thin p-5 space-y-6 bg-white dark:bg-slate-900">
               
               {/* 1. JSON Data Block */}
               <div className="relative group">
                   <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                       <button className="p-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded text-slate-400 hover:text-emerald-600">
                           <Download size={12} />
                       </button>
                   </div>
                   <pre className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-4 text-[10px] font-mono text-slate-600 dark:text-slate-300 overflow-x-auto shadow-inner leading-relaxed">
                       {JSON.stringify(mockJson, null, 4)}
                   </pre>
               </div>

               {/* 2. Executive Summary */}
               <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-medium border-l-4 border-emerald-500 pl-4 py-1">
                   {record.summary || "Ibai muestra frustración por errores técnicos y una actitud colaborativa, mientras que Jorge expresa impaciencia y descontento por los fallos del sistema, pero también propone soluciones concretas para mejorar la interfaz y el funcionamiento del proceso."}
               </div>

               {/* 3. Split View: Details & Tags */}
               <div className="flex gap-6">
                   
                   {/* Left: Detailed Analysis */}
                   <div className="flex-1 space-y-3">
                       <DetailRow text="Ibai Moledo informa que el sistema ha dado un error en tiempo real al intentar acceder a una función específica." />
                       <DetailRow text="Jorge S. Fernández expresa frustración por la lentitud y los fallos recurrentes en el funcionamiento del aviso inicial del Glasgow." />
                       <DetailRow text="Se menciona que el sistema no funciona correctamente en el caso de los movimientos de interfaz, y que el comportamiento no es consistente." />
                       <DetailRow text="Jorge S. Fernández pregunta por la composición del 'resumen más resumen raro', un componente del sistema que no está bien definido." />
                       <DetailRow text="Ibai Moledo confirma que el error se ha repetido, aunque antes funcionaba correctamente, y sugiere un problema de saturación." />
                   </div>

                   {/* Right: Tags / Tagger */}
                   <div className="w-[280px] flex flex-col gap-2 flex-shrink-0 pt-1">
                       <TagPill label="incidencia" count={1} color="blue" />
                       <TagPill label="John" count={0.95} color="green" />
                       <TagPill label="Jorge" count={0.98} color="green" />
                       <TagPill label="dificultades en el volcado" count={0.88} color="red" />
                       <TagPill label="error al cargar la interfaz" count={0.95} color="red" />
                       <TagPill label="interfaz con mejoras" count={0.82} color="red" />
                       <TagPill label="mejora de la interfaz" count={0.80} color="red" />
                       <TagPill label="no funciona el movimiento" count={0.90} color="red" />
                       <TagPill label="problemas con el resumen" count={0.85} color="red" />
                       <div className="flex gap-2 mt-2">
                           <TagPill label="farewell" count={0} color="black" />
                           <TagPill label="survey" count={0} color="black" />
                       </div>
                   </div>
               </div>
           </div>

           {/* Floating Action Button (Bottom Left) */}
           <div className="absolute bottom-6 left-6">
               <button className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full border border-emerald-500 text-emerald-600 dark:text-emerald-400 shadow-lg flex items-center justify-center hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:scale-105 transition-all">
                   <Copy size={18} />
               </button>
           </div>
        </div>
    );
}

const DetailRow: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex gap-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        <span className="text-slate-300 dark:text-slate-600 flex-shrink-0">-</span>
        <span>{text}</span>
    </div>
);

const TagPill: React.FC<{ label: string, count: number, color: 'blue' | 'green' | 'red' | 'black' }> = ({ label, count, color }) => {
    const styles = {
        blue: 'border-blue-600 text-blue-700 dark:text-blue-400 dark:border-blue-500',
        green: 'border-emerald-500 text-emerald-700 dark:text-emerald-400 dark:border-emerald-500',
        red: 'border-rose-600 text-rose-700 dark:text-rose-400 dark:border-rose-500',
        black: 'border-slate-600 text-slate-700 dark:text-slate-300 dark:border-slate-500',
    };

    return (
        <div className={`border-2 rounded-xl px-3 py-1.5 flex items-center justify-center text-[10px] font-bold uppercase tracking-wide bg-white dark:bg-slate-900 shadow-sm ${styles[color]}`}>
            <span className="truncate max-w-[180px] text-center">{label}</span>
            <span className="ml-1 opacity-80">({count})</span>
        </div>
    );
};

// --- LIST VIEW ITEM ---
const ActivityItem: React.FC<{ item: CallRecord, isEven: boolean }> = ({ item, isEven }) => {
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [hoverType, setHoverType] = useState<'summary' | 'emotion' | null>(null);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    // Only update for tooltip positioning
    if (hoverType) {
        setHoverPos({ x: e.clientX, y: e.clientY });
    }
  };

  const getSentimentColor = () => {
    switch (item.flags.sentiment) {
      case 'positive': return 'bg-emerald-500';
      case 'negative': return 'bg-amber-500';
      case 'angry': return 'bg-rose-600';
      default: return 'bg-slate-300';
    }
  };

  const getDirectionIcon = () => {
    if (item.type === 'message') {
        // Simulate app source based on ID for demo purposes
        const isWhatsApp = item.id.charCodeAt(item.id.length - 1) % 2 === 0;
        return isWhatsApp ? <WhatsAppIcon /> : <TeamsIcon />;
    }
    switch (item.direction) {
      case 'inbound': return <ArrowDownLeft size={14} strokeWidth={2.5} className="text-emerald-600 dark:text-emerald-400" />;
      case 'outbound': return <ArrowUpRight size={14} strokeWidth={2.5} className="text-blue-600 dark:text-blue-400" />;
      case 'missed': return <PhoneMissed size={14} strokeWidth={2.5} className="text-rose-600 dark:text-rose-400" />;
    }
  };

  return (
    <div 
        className={`group relative py-2 border-b border-slate-200 dark:border-slate-700 flex items-center text-[11px] hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${isEven ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/30 dark:bg-slate-800/30'}`}
        onMouseMove={handleMouseMove}
    >
      {/* Sentiment Indicator (Left Border) */}
      <div className={`absolute left-0 top-0 bottom-0 w-[3px] ${getSentimentColor()} opacity-80`}></div>
      
      {/* Time */}
      <div className="w-[72px] pl-3 font-medium text-slate-600 dark:text-slate-400 tabular-nums tracking-tight whitespace-nowrap flex-shrink-0 group-hover:text-slate-900 dark:group-hover:text-slate-200">
        {item.timestamp}
      </div>
      
      {/* Source Icon */}
      <div className="w-8 flex justify-center text-slate-400 flex-shrink-0">
          {item.isBot ? <Bot size={16} className="text-emerald-600 dark:text-emerald-400" /> : <Monitor size={14} strokeWidth={1.5} />}
      </div>
      
      {/* Contact Info */}
      <div 
        className="flex-1 min-w-0 flex flex-col justify-center px-1 cursor-pointer"
        onMouseEnter={() => setHoverType('summary')}
        onMouseLeave={() => setHoverType(null)}
      >
        <div className={`font-bold truncate leading-tight ${item.isBot ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-200'}`}>{item.contactName}</div>
        <div className="flex items-center gap-1 text-[9px] text-slate-400 leading-none mt-0.5 truncate">
           <User size={9} /><span className="font-medium">{item.contactId}</span>
        </div>
      </div>
      
      {/* Phone / ID Info (Hidden on small, visible on large) */}
      <div className="w-24 flex-col justify-center px-1 border-l border-slate-200 dark:border-slate-700 flex-shrink-0 hidden 2xl:flex">
        <div className="font-semibold text-slate-600 dark:text-slate-400 truncate leading-tight flex items-center gap-1 tabular-nums tracking-tight">{item.phoneNumber}</div>
        <div className="flex items-center gap-1 text-[9px] text-slate-400 leading-none mt-0.5">
           <Hash size={9} /><span className="font-medium tabular-nums">{item.callId}</span>
        </div>
      </div>

       {/* Sentiment Badge */}
       <div className="w-[40px] flex justify-center items-center flex-shrink-0">
             {item.flags.sentiment && !item.isBot && <HollowSentimentIcon sentiment={item.flags.sentiment} />}
             {item.isBot && <Bot size={16} className="text-emerald-500 opacity-80" />}
        </div>
      
      {/* Flags Section */}
      <div className="flex items-center justify-end gap-2 px-2 flex-shrink-0">
        <div className="flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity hidden sm:flex">
            <IconWrapper active={item.flags.recorded} icon={FileAudio} title="Recorded" color="text-emerald-600 dark:text-emerald-400" />
            <IconWrapper active={item.flags.hasNotes} icon={Tag} title="Notes" color="text-emerald-600 dark:text-emerald-400" />
            <IconWrapper active={item.flags.verified} icon={FileText} title="Verified" color="text-emerald-600 dark:text-emerald-400" />
        </div>
      </div>
      
      {/* Duration / Direction - VISIBLE BY DEFAULT */}
      <div className="w-20 flex items-center justify-end pr-2 group-hover:hidden transition-all">
          <div className="font-bold text-slate-600 dark:text-slate-400 tabular-nums tracking-tight mr-2">{item.duration}</div>
          <div>{getDirectionIcon()}</div>
      </div>

      {/* --- QUICK ACTIONS (REPLACES DURATION ON HOVER) --- */}
      <div className="absolute right-0 top-0 bottom-0 w-36 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm hidden group-hover:flex items-center justify-end pr-2 gap-1 animate-in fade-in slide-in-from-right-2 duration-200 border-l border-slate-100 dark:border-slate-700 shadow-[-10px_0_20px_rgba(255,255,255,1)] dark:shadow-[-10px_0_20px_rgba(0,0,0,0.5)]">
          <button className="w-7 h-7 rounded-md bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center hover:bg-emerald-100 dark:hover:bg-emerald-900/50 hover:scale-105 transition-all shadow-sm" title="Call Back">
              <Phone size={12} />
          </button>
           <button className="w-7 h-7 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:scale-105 transition-all shadow-sm" title="Message">
              <MessageSquare size={12} />
          </button>
          {item.flags.recorded && (
            <button className="w-7 h-7 rounded-md bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-800 flex items-center justify-center hover:bg-rose-100 dark:hover:bg-rose-900/50 hover:scale-105 transition-all shadow-sm" title="Play Recording">
                <Play size={12} />
            </button>
          )}
          <button className="w-7 h-7 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 flex items-center justify-center transition-colors">
              <MoreVertical size={14} />
          </button>
      </div>

      {/* TOOLTIPS REMAIN UNCHANGED FOR "TRIDENT NEXT" FEEL */}
      {item.summary && hoverType === 'summary' && (
        <div 
            style={{ 
                top: Math.min(window.innerHeight - 450, hoverPos.y + 10), 
                left: Math.min(window.innerWidth - 340, hoverPos.x + 15) 
            }}
            className="fixed z-[9999] w-[320px] bg-white/80 dark:bg-slate-900/90 backdrop-blur-2xl text-slate-800 dark:text-slate-100 rounded-3xl shadow-[0_25px_50px_rgba(0,0,0,0.15)] border border-white/60 dark:border-slate-700 animate-in fade-in zoom-in-95 duration-200 pointer-events-none ring-1 ring-white/50 dark:ring-slate-700 overflow-hidden flex flex-col"
        >
             <div className="relative h-40 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden flex-shrink-0">
                <img 
                    src={item.generatedImageUrl || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"} 
                    alt="AI Generated"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-black/20"></div>
                 <div className="absolute bottom-2 left-2 right-2">
                     <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-800">
                            <BrainCircuit size={12} className="text-white" />
                        </div>
                        <span className="text-[10px] font-black text-slate-800 dark:text-slate-100 uppercase tracking-wide bg-white/90 dark:bg-slate-800/90 px-2 py-0.5 rounded backdrop-blur shadow-sm">AI Summary</span>
                     </div>
                 </div>
             </div>
             
             <div className="p-4 bg-white/60 dark:bg-slate-900/60 max-h-[50vh] overflow-y-auto scrollbar-thin">
                 <p className="text-xs leading-relaxed text-slate-800 dark:text-slate-200 font-medium">{item.summary}</p>
             </div>
        </div>
      )}
    </div>
  );
};

// --- COMPONENTS ---

const FilterTab: React.FC<{ label: string, count?: number, active?: boolean, onClick: () => void }> = ({ label, count, active, onClick }) => (
    <button 
        onClick={onClick}
        className={`px-3 py-2 text-[11px] font-bold border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap ${
            active 
            ? 'border-emerald-500 text-emerald-700 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-900/20' 
            : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
        }`}
    >
        {label}
        {count !== undefined && (
            <span className={`px-1.5 py-0.5 rounded-full text-[9px] ${active ? 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200' : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
                {count}
            </span>
        )}
    </button>
)

const ActionButton: React.FC<{ icon: any, label: string, color: string }> = ({ icon: Icon, label, color }) => {
    const colors: Record<string, string> = {
        emerald: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/40',
        blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/40',
        purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/40',
        slate: 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700',
    };

    return (
        <button className={`flex flex-col items-center justify-center gap-1 p-2 rounded-lg border transition-all hover:scale-[1.02] active:scale-95 ${colors[color]}`}>
            <Icon size={18} />
            <span className="text-[10px] font-bold">{label}</span>
        </button>
    )
}

const HollowSentimentIcon: React.FC<{ sentiment: string }> = ({ sentiment }) => {
    switch(sentiment) {
        case 'positive': return <Smile size={20} strokeWidth={2} className="text-emerald-500" />;
        case 'negative': return <Frown size={20} strokeWidth={2} className="text-amber-500" />;
        case 'angry': return <OctagonAlert size={20} strokeWidth={2} className="text-rose-600" />;
        default: return <Meh size={20} strokeWidth={2} className="text-amber-400" />;
    }
}

const IconWrapper: React.FC<{ active: boolean, icon: React.ElementType, color?: string, title?: string }> = ({ active, icon: Icon, color, title }) => {
    if (!active) return <div className="w-3 h-3"></div>;
    return <div className={`w-3 h-3 ${color || 'text-slate-500'}`} title={title}><Icon size={12} strokeWidth={2.5} /></div>
}
