
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { 
  Users, 
  List, 
  Radio, 
  Chrome, 
  MessageCircle, 
  CalendarClock, 
  Bot, 
  Zap, 
  ChevronRight, 
  Briefcase, 
  Database, 
  LayoutGrid, 
  Globe, 
  Layers, 
  BrainCircuit, 
  Lock, 
  X, 
  ArrowRight, 
  Paperclip,
  Activity,
  FileText,
  Sparkles,
  Image as ImageIcon,
  Film,
  Languages,
  Network,
  Cpu,
  Wand2,
  Send,
  User,
  ArrowLeft,
  Settings2,
  Download,
  Maximize2,
  Mic,
  Terminal,
  Play,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import { MOCK_CONTACTS } from '../constants';
import { Contact, Status } from '../types';

// --- MAIN TEAM PANEL ---
export const TeamPanel: React.FC<{ onOpenBot: () => void }> = ({ onOpenBot }) => {
  const [activeTab, setActiveTab] = useState<'group' | 'channels' | 'broadcast' | 'chrome' | 'whatsapp' | 'scheduled'>('group');
  const contacts = MOCK_CONTACTS;

  const renderContent = () => {
    switch (activeTab) {
      case 'group':
        return (
          <>
            <div className="flex-1 overflow-y-auto scrollbar-thin bg-white dark:bg-slate-900 pt-0">
               {/* Bots at TOP for immediate access */}
               <div className="border-b border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
                    <button 
                    onClick={onOpenBot}
                    className="w-full p-2 flex items-center justify-between hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors group border-b border-slate-200 dark:border-slate-700"
                    >
                    <div className="flex items-center gap-2">
                        {/* HOLLOW ICON DESIGN */}
                        <div className="p-1.5 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg shadow-sm">
                            <Bot size={16} className="text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="flex flex-col leading-none text-left">
                            <span className="font-bold text-xs text-slate-800 dark:text-slate-200">THOTBrain</span>
                            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium scale-90 origin-left">General AI Agent</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                         <ChevronRight size={14} className="text-slate-300 group-hover:text-emerald-500" />
                    </div>
                    </button>

                    <button 
                    onClick={onOpenBot}
                    className="w-full p-2 flex items-center justify-between hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group"
                    >
                    <div className="flex items-center gap-2">
                         {/* HOLLOW ICON DESIGN */}
                        <div className="p-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg shadow-sm">
                            <Zap size={16} className="text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex flex-col leading-none text-left">
                            <span className="font-bold text-xs text-slate-800 dark:text-slate-200">THOTAssist</span>
                            <span className="text-xs text-blue-600 dark:text-blue-400 font-medium scale-90 origin-left">Call Helper Bot</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                         <span className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-300 text-[9px] font-bold rounded">Ready</span>
                         <ChevronRight size={14} className="text-slate-300 group-hover:text-blue-500" />
                    </div>
                    </button>
                </div>

                {/* Agents List */}
                <div className="pt-1">
                    {contacts.map((contact, i) => (
                        <ContactItem key={contact.id} contact={contact} isEven={i % 2 === 0} />
                    ))}
                </div>
            </div>
          </>
        );
      case 'channels':
        return <PlaceholderTab icon={List} title="Active Channels" desc="Manage your omni-channel sources" />;
      case 'broadcast':
        return <PlaceholderTab icon={Radio} title="Broadcast" desc="Send bulk notifications" />;
      
      case 'chrome':
        return (
            <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900">
                <div className="p-2 bg-white dark:bg-slate-800 border-b border-slate-300 dark:border-slate-700">
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200 block mb-2">Web Apps Launcher</span>
                    <div className="grid grid-cols-3 gap-2">
                        <AppShortcut icon={Database} label="CRM" color="text-blue-600 dark:text-blue-400" bg="bg-blue-50 dark:bg-blue-900/20" />
                        <AppShortcut icon={Briefcase} label="Salesforce" color="text-sky-600 dark:text-sky-400" bg="bg-sky-50 dark:bg-sky-900/20" />
                        <AppShortcut icon={LayoutGrid} label="HubSpot" color="text-orange-600 dark:text-orange-400" bg="bg-orange-50 dark:bg-orange-900/20" />
                        <AppShortcut icon={Globe} label="Intranet" color="text-emerald-600 dark:text-emerald-400" bg="bg-emerald-50 dark:bg-emerald-900/20" />
                        <AppShortcut icon={Bot} label="GPT" color="text-purple-600 dark:text-purple-400" bg="bg-purple-50 dark:bg-purple-900/20" />
                        <AppShortcut icon={Layers} label="Jira" color="text-indigo-600 dark:text-indigo-400" bg="bg-indigo-50 dark:bg-indigo-900/20" />
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center text-slate-400 p-4 text-center">
                     <Chrome size={24} className="mb-2 opacity-50" />
                     <span className="text-[10px]">Select an app to launch in main view</span>
                </div>
            </div>
        );

      case 'whatsapp':
        return <PlaceholderTab icon={MessageCircle} title="WhatsApp Business" desc="Channel status & templates" />;
      case 'scheduled':
        return <PlaceholderTab icon={CalendarClock} title="Scheduled Messages" desc="Queue management" />;
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 flex flex-col h-full overflow-hidden font-sans z-10 relative">
      {/* --- NAVIGATION BAR (TOP) --- */}
      <div className="border-b border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-1 flex-shrink-0 overflow-x-auto scrollbar-none">
          <div className="flex gap-0.5 min-w-max">
              <NavIcon icon={Users} label="Group" active={activeTab === 'group'} onClick={() => setActiveTab('group')} />
              <NavIcon icon={List} label="Channels" active={activeTab === 'channels'} onClick={() => setActiveTab('channels')} />
              <NavIcon icon={Radio} label="Broadcast" active={activeTab === 'broadcast'} onClick={() => setActiveTab('broadcast')} />
              <NavIcon icon={Chrome} label="Chrome" active={activeTab === 'chrome'} onClick={() => setActiveTab('chrome')} />
              <NavIcon icon={MessageCircle} label="WhatsApp" active={activeTab === 'whatsapp'} onClick={() => setActiveTab('whatsapp')} />
              <NavIcon icon={CalendarClock} label="Sched." active={activeTab === 'scheduled'} onClick={() => setActiveTab('scheduled')} />
          </div>
      </div>

      {/* --- CONTENT --- */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {renderContent()}
      </div>
    </div>
  );
};

// --- BOT PANEL (Command Center / Dashboard) ---
type ToolType = 'dashboard' | 'image_gen' | 'video_gen' | 'avatar' | 'translator' | 'ocr' | 'fast_chat';

export const BotPanel: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [activeTool, setActiveTool] = useState<ToolType>('dashboard');

    return (
        <div className="flex flex-col h-full bg-[#f8fafc] dark:bg-slate-900 font-sans overflow-hidden relative animate-in slide-in-from-right duration-300">
            
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm z-20 flex-shrink-0">
                <div className="flex items-center gap-3">
                    {activeTool !== 'dashboard' ? (
                         <button onClick={() => setActiveTool('dashboard')} className="hover:bg-slate-100 dark:hover:bg-slate-700 p-1 rounded-full text-slate-500 dark:text-slate-400 mr-1">
                             <ArrowLeft size={18} />
                         </button>
                    ) : (
                        <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center shadow-md relative">
                            <BrainCircuit size={18} className="text-white" />
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-white dark:border-slate-800 rounded-full"></div>
                        </div>
                    )}
                    
                    <div className="flex flex-col leading-none">
                        <span className="font-bold text-sm text-slate-800 dark:text-slate-100 tracking-tight">
                            {activeTool === 'dashboard' ? 'Command Center' : getToolTitle(activeTool)}
                        </span>
                        <div className="flex items-center gap-1 mt-0.5">
                             <Lock size={8} className="text-emerald-600 dark:text-emerald-400" />
                             <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">Private Cloud</span>
                        </div>
                    </div>
                </div>
                <button onClick={onClose} className="hover:bg-slate-100 dark:hover:bg-slate-700 p-1.5 rounded-full transition-colors text-slate-400 hover:text-rose-500 dark:hover:text-rose-400">
                    <X size={18} />
                </button>
            </div>

            {/* Content Area - Switch based on activeTool */}
            <div className="flex-1 overflow-y-auto scrollbar-thin bg-slate-50/50 dark:bg-slate-900/50 relative">
                {activeTool === 'dashboard' && <DashboardView onSelect={setActiveTool} />}
                {activeTool === 'fast_chat' && <FastChatTool />}
                {activeTool === 'image_gen' && <PlanExecuteLayout title="Image Generator"><ImageGenTool /></PlanExecuteLayout>}
                {activeTool === 'translator' && <PlanExecuteLayout title="Simultaneous Translator"><TranslatorTool /></PlanExecuteLayout>}
                {/* Fallback for others */}
                {['video_gen', 'avatar', 'ocr'].includes(activeTool) && (
                    <GenericToolPlaceholder tool={activeTool} />
                )}
            </div>

            {/* Footer Input (Only show on dashboard) */}
            {activeTool === 'dashboard' && (
                <div className="p-3 bg-white dark:bg-slate-800 border-t border-slate-300 dark:border-slate-700 z-20 flex-shrink-0">
                    <div className="rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 p-2 flex flex-col gap-2 focus-within:ring-1 focus-within:ring-emerald-500/50 transition-all">
                        <div className="flex items-center gap-2 text-slate-400 px-2 py-1 border-b border-slate-200 dark:border-slate-600 border-dashed">
                            <Paperclip size={14} />
                            <span className="text-[10px] font-medium">Drag context here...</span>
                        </div>
                        <div className="flex items-center justify-between px-1">
                            <input className="bg-transparent text-sm outline-none text-slate-700 dark:text-slate-200 placeholder-slate-400 w-full" placeholder="Prompt the cluster..." />
                            <button className="w-7 h-7 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-sm hover:bg-emerald-700 transition-colors">
                                <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// --- PLAN & EXECUTE LAYOUT ---
const PlanExecuteLayout: React.FC<{ children: React.ReactNode, title: string }> = ({ children, title }) => (
    <div className="flex flex-col min-h-full">
        <div className="bg-white dark:bg-slate-800 border-b border-slate-300 dark:border-slate-700 p-3 flex items-center gap-2">
            <div className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-[10px] font-bold rounded uppercase tracking-wide border border-blue-100 dark:border-blue-800">Phase 1: Planning</div>
            <div className="h-px bg-slate-200 dark:bg-slate-700 flex-1"></div>
            <Settings2 size={14} className="text-slate-300 dark:text-slate-500" />
        </div>
        {children}
    </div>
);

// --- SUB-VIEWS ---

const DashboardView: React.FC<{ onSelect: (t: ToolType) => void }> = ({ onSelect }) => {
    return (
    <div className="p-4">
        {/* 0. Priority Actions */}
        <div className="mb-6">
             <div className="flex items-center gap-2 mb-3">
                <Zap size={16} className="text-amber-500" />
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Priority Actions</span>
            </div>
            <DashboardCard 
                    title="Flash Lite Chat" desc="Low-latency text engine" 
                    icon={MessageSquare} gradient="from-amber-400 to-yellow-600" badge="INSTANT" badgeColor="bg-amber-500"
                    onClick={() => onSelect('fast_chat')}
            />
        </div>

        {/* 1. Generative Studio */}
        <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
                <Sparkles size={16} className="text-purple-600" />
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Generative Studio</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <DashboardCard 
                    title="Instant Image" desc="High-fidelity generation" 
                    icon={ImageIcon} gradient="from-fuchsia-500 to-pink-500" badge="GPU" badgeColor="bg-pink-500"
                    onClick={() => onSelect('image_gen')}
                />
                <DashboardCard 
                    title="Cinematic Video" desc="Motion generation 1.5" 
                    icon={Film} gradient="from-orange-400 to-red-500" badge="HD" badgeColor="bg-orange-500"
                    onClick={() => onSelect('video_gen')}
                />
                <DashboardCard 
                    title="Avatar Engine" desc="Digital identity clone" 
                    icon={User} gradient="from-indigo-400 to-blue-600" 
                    onClick={() => onSelect('avatar')}
                />
                    <DashboardCard 
                    title="Image Editor" desc="Modify & Inpaint" 
                    icon={Wand2} gradient="from-violet-500 to-purple-700" 
                    onClick={() => onSelect('image_gen')}
                />
            </div>
        </div>

        {/* 2. Global Operations */}
        <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                <Globe size={16} className="text-blue-600" />
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Global Operations</span>
            </div>
            <div className="grid grid-cols-1 gap-3">
                    <DashboardCardRow 
                    title="Simultaneous Translator" desc="Real-time multi-language voice processing" 
                    icon={Languages} color="text-blue-600 dark:text-blue-400" bg="bg-blue-50 dark:bg-blue-900/20"
                    onClick={() => onSelect('translator')}
                    />
                    <DashboardCardRow 
                    title="Job Orchestrator" desc="Manage distributed GPU workloads" 
                    icon={Network} color="text-cyan-600 dark:text-cyan-400" bg="bg-cyan-50 dark:bg-cyan-900/20"
                    onClick={() => {}}
                    />
            </div>
        </div>

        {/* 3. Document Intelligence */}
        <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                <FileText size={16} className="text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Document Intelligence</span>
            </div>
                <div className="grid grid-cols-1 gap-3">
                    <DashboardCardRow 
                    title="Digitize & Clean Docs" desc="OCR for Faxes, PDFs & Images." 
                    icon={FileText} color="text-emerald-600 dark:text-emerald-400" bg="bg-emerald-50 dark:bg-emerald-900/20"
                    onClick={() => onSelect('ocr')}
                    />
            </div>
        </div>
    </div>
    )
};

// --- FAST CHAT TOOL (Gemini Flash Lite) ---
const FastChatTool: React.FC = () => {
    const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
        { role: 'model', text: 'Trident Core Online. Using gemini-2.5-flash-lite-preview-02-05 for low-latency inference. Ready.' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;
        
        const userMsg = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsTyping(true);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            // Using the specific Lite model for speed as requested
            const stream = await ai.models.generateContentStream({
                model: 'gemini-2.5-flash-lite-preview-02-05',
                contents: userMsg,
            });

            setMessages(prev => [...prev, { role: 'model', text: '' }]);

            for await (const chunk of stream) {
                const chunkText = chunk.text;
                if (chunkText) {
                    setMessages(prev => {
                        const newHistory = [...prev];
                        const lastMsg = newHistory[newHistory.length - 1];
                        if (lastMsg.role === 'model') {
                            lastMsg.text += chunkText;
                        }
                        return newHistory;
                    });
                }
            }
        } catch (error) {
            setMessages(prev => [...prev, { role: 'model', text: 'Error: Connection interrupted. ' + error }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900">
             {/* Messages Area */}
             <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
                 {messages.map((msg, i) => (
                     <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                         <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                             msg.role === 'user' 
                             ? 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-tr-none border border-slate-200 dark:border-slate-700' 
                             : 'bg-emerald-50 dark:bg-emerald-900/20 text-slate-800 dark:text-slate-200 rounded-tl-none border border-emerald-100 dark:border-emerald-800/50'
                         }`}>
                             {msg.role === 'model' && (
                                 <div className="flex items-center gap-1.5 mb-1 opacity-50">
                                     <Zap size={10} className="text-amber-500 fill-amber-500" />
                                     <span className="text-[9px] font-bold uppercase">Flash Lite</span>
                                 </div>
                             )}
                             {msg.text}
                         </div>
                     </div>
                 ))}
                 {isTyping && (
                     <div className="flex justify-start">
                         <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-2xl rounded-tl-none border border-emerald-100 dark:border-emerald-800/50 flex items-center gap-1">
                             <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></div>
                             <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce delay-75"></div>
                             <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce delay-150"></div>
                         </div>
                     </div>
                 )}
             </div>

             {/* Input Area */}
             <div className="p-3 bg-white dark:bg-slate-800 border-t border-slate-300 dark:border-slate-700 z-20 flex-shrink-0">
                <div className="rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 p-2 flex flex-col gap-2 focus-within:ring-1 focus-within:ring-emerald-500/50 transition-all">
                    <div className="flex items-center justify-between px-1">
                        <input 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            className="bg-transparent text-sm outline-none text-slate-700 dark:text-slate-200 placeholder-slate-400 w-full" 
                            placeholder="Type for instant response..." 
                            autoFocus
                        />
                        <button 
                            onClick={handleSend}
                            disabled={isTyping}
                            className="w-7 h-7 bg-amber-500 hover:bg-amber-600 rounded-lg flex items-center justify-center text-white shadow-sm transition-colors disabled:opacity-50"
                        >
                            <ArrowRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- TOOL INTERFACES ---

const ImageGenTool: React.FC = () => (
    <div className="p-4 flex flex-col gap-4 animate-in fade-in slide-in-from-right-4 duration-300">
        {/* Plan Section */}
        <div className="flex flex-col gap-3">
             <div>
                 <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5 block">Prompt Strategy</label>
                 <textarea className="w-full text-xs p-3 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none h-20 resize-none font-medium text-slate-700" placeholder="Describe the visual output..." />
             </div>
             
             <div>
                 <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5 block">Constraints (Negative)</label>
                 <input className="w-full text-xs p-2 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 focus:border-slate-400 outline-none" placeholder="blur, distorted, ugly..." />
             </div>

             <div className="grid grid-cols-2 gap-3">
                 <div>
                    <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5 block">Format</label>
                    <select className="w-full text-xs p-2 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 bg-white">
                        <option>1:1 (Square)</option>
                        <option>16:9 (Landscape)</option>
                        <option>9:16 (Portrait)</option>
                    </select>
                 </div>
                 <div>
                    <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5 block">Engine</label>
                    <select className="w-full text-xs p-2 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 bg-white">
                        <option>Photorealistic V5</option>
                        <option>3D Render V2</option>
                        <option>Anime / Illustration</option>
                    </select>
                 </div>
             </div>
        </div>

        {/* Execute Section */}
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
             <div className="flex items-center gap-2 mb-3">
                 <div className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold rounded uppercase tracking-wide border border-emerald-100 dark:border-emerald-800">Phase 2: Execution</div>
                 <div className="h-px bg-slate-200 dark:bg-slate-700 flex-1"></div>
                 <Terminal size={14} className="text-slate-300" />
             </div>

             <button className="w-full py-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group">
                 <Play size={16} className="fill-white group-hover:scale-110 transition-transform" />
                 Initialize Generation Protocol
             </button>
             
             <div className="mt-3 bg-slate-900 rounded-lg p-3 font-mono text-[10px] text-emerald-400 opacity-80">
                 <div>&gt; Connecting to local cluster... OK</div>
                 <div>&gt; Allocating VRAM (12GB)... OK</div>
                 <div className="animate-pulse">&gt; Ready to execute.</div>
             </div>
        </div>
    </div>
);

const TranslatorTool: React.FC = () => (
    <div className="p-4 flex flex-col gap-4 animate-in fade-in slide-in-from-right-4 duration-300 h-full">
         <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
             <div className="flex flex-col gap-1 w-[45%]">
                 <label className="text-[9px] font-bold text-slate-400 uppercase">Input Stream</label>
                 <select className="text-xs font-bold text-slate-700 dark:text-slate-200 bg-transparent outline-none"><option>English (US) [Mic 1]</option><option>Spanish</option></select>
             </div>
             <ArrowRight size={14} className="text-slate-300" />
             <div className="flex flex-col gap-1 w-[45%] text-right">
                 <label className="text-[9px] font-bold text-slate-400 uppercase">Output Stream</label>
                 <select className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-transparent outline-none text-right"><option>Spanish (ES) [TTS]</option><option>German</option></select>
             </div>
         </div>

         <div className="flex-1 bg-slate-900 rounded-xl p-4 relative overflow-hidden flex flex-col items-center justify-center border border-slate-700">
             <div className="absolute top-2 left-2 px-2 py-0.5 bg-emerald-900/50 text-emerald-400 text-[9px] font-bold rounded border border-emerald-800 uppercase tracking-wide">Phase 2: Live Execution</div>
             
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
             {/* Audio Waveform Visualization Placeholder */}
             <div className="flex items-end gap-1 h-12 mb-4">
                 {[...Array(8)].map((_, i) => (
                     <div key={i} className="w-2 bg-blue-500 rounded-full animate-pulse" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }}></div>
                 ))}
             </div>
             <span className="text-slate-400 text-xs font-medium">System Idle. Waiting for input...</span>
         </div>

         <div className="flex justify-center gap-4">
             <button className="w-14 h-14 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform ring-4 ring-rose-100 dark:ring-rose-900">
                 <Mic size={24} />
             </button>
         </div>
    </div>
);

const GenericToolPlaceholder: React.FC<{ tool: string }> = ({ tool }) => (
    <div className="p-8 flex flex-col items-center justify-center h-full text-slate-400 text-center animate-in fade-in">
        <Settings2 size={48} className="mb-4 opacity-20" />
        <h3 className="font-bold text-slate-600 dark:text-slate-400 text-sm mb-1">{getToolTitle(tool)}</h3>
        <p className="text-xs max-w-[200px]">This module is currently initializing on the node cluster.</p>
    </div>
)

const getToolTitle = (tool: ToolType) => {
    switch(tool) {
        case 'image_gen': return 'Instant Image';
        case 'video_gen': return 'Cinematic Video';
        case 'avatar': return 'Avatar Engine';
        case 'translator': return 'Translator';
        case 'ocr': return 'Document Scanner';
        case 'fast_chat': return 'Flash Lite Chat';
        default: return 'Tool';
    }
}

// --- DASHBOARD COMPONENTS ---

const DashboardCard: React.FC<{ 
    title: string, 
    desc: string, 
    icon: any, 
    gradient: string, 
    badge?: string,
    badgeColor?: string,
    onClick?: () => void
}> = ({ title, desc, icon: Icon, gradient, badge, badgeColor, onClick }) => (
    <button 
        onClick={onClick}
        className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700 transition-all group text-left relative overflow-hidden"
    >
        <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${gradient} opacity-10 rounded-bl-3xl group-hover:scale-110 transition-transform`}></div>
        
        <div className="flex justify-between items-start mb-2 relative">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center shadow-sm text-white`}>
                <Icon size={16} />
            </div>
            {badge && (
                <span className={`text-[9px] font-bold text-white px-1.5 py-0.5 rounded ${badgeColor} shadow-sm`}>
                    {badge}
                </span>
            )}
        </div>
        
        <div className="relative z-10">
            <h4 className="font-bold text-xs text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white leading-tight">{title}</h4>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">{desc}</p>
        </div>
    </button>
)

const DashboardCardRow: React.FC<{
    title: string,
    desc: string,
    icon: any,
    color: string,
    bg: string,
    onClick?: () => void
}> = ({ title, desc, icon: Icon, color, bg, onClick }) => (
    <button 
        onClick={onClick}
        className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 transition-all group text-left"
    >
        <div className={`w-8 h-8 rounded-lg ${bg} ${color} flex items-center justify-center flex-shrink-0`}>
            <Icon size={16} />
        </div>
        <div>
            <h4 className="font-bold text-xs text-slate-800 dark:text-slate-200">{title}</h4>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">{desc}</p>
        </div>
        <ChevronRight size={14} className="ml-auto text-slate-300 group-hover:text-slate-400" />
    </button>
)

const SuggestionButton: React.FC<{ icon: any, label: string }> = ({ icon: Icon, label }) => (
    <button className="flex items-center gap-1.5 px-2.5 py-1.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-full text-[10px] font-semibold border border-emerald-100 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors">
        <Icon size={12} />
        {label}
    </button>
)

// --- HELPERS ---

const PlaceholderTab: React.FC<{ icon: any, title: string, desc: string }> = ({ icon: Icon, title, desc }) => (
  <div className="flex flex-col items-center justify-center h-full text-slate-400 p-6 text-center bg-slate-50/50 dark:bg-slate-900/50">
    <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-3 shadow-sm border border-slate-200 dark:border-slate-700">
        <Icon size={32} className="text-slate-300" />
    </div>
    <span className="text-sm font-bold text-slate-600 dark:text-slate-300">{title}</span>
    <span className="text-xs mt-1">{desc}</span>
  </div>
);

const NavIcon: React.FC<{ icon: any, label: string, active?: boolean, onClick: () => void }> = ({ icon: Icon, label, active, onClick }) => {
    return (
        <button 
            onClick={onClick}
            className={`flex flex-col items-center justify-center gap-0.5 p-1 rounded-lg transition-all h-14 w-14 flex-shrink-0 ${active ? 'bg-white dark:bg-slate-800 shadow-sm text-emerald-700 dark:text-emerald-400 border border-slate-300 dark:border-slate-600' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-700/50'}`}
        >
            <Icon size={18} strokeWidth={active ? 2.5 : 2} />
            <span className="text-[9px] font-bold tracking-tight">{label}</span>
        </button>
    );
}

const ContactItem: React.FC<{ contact: Contact, isEven: boolean }> = ({ contact, isEven }) => {
  const getStatusColor = (status: Status) => {
    switch (status) {
      case Status.Available: return 'bg-emerald-500 border-emerald-600';
      case Status.Busy: return 'bg-rose-500 border-rose-600';
      case Status.Away: return 'bg-amber-500 border-amber-600';
      case Status.OnCall: return 'bg-blue-500 border-blue-600';
      case Status.DoNotDisturb: return 'bg-purple-500 border-purple-600';
      default: return 'bg-slate-400 border-slate-500'; // Offline
    }
  };

  return (
    <div className={`group flex items-center py-1.5 px-2 border-b border-slate-200 dark:border-slate-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 transition-colors text-[11px] ${isEven ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/30 dark:bg-slate-800/30'}`}>
        {/* Status Dot with border for contrast */}
        <div className={`w-2 h-2 rounded-full mr-2 flex-shrink-0 border-[1px] ${getStatusColor(contact.status)}`}></div>

        {/* Name */}
        <div className={`flex-1 truncate font-semibold ${contact.isYou ? 'text-emerald-800 dark:text-emerald-300' : 'text-slate-700 dark:text-slate-300'}`}>
            {contact.name} {contact.isYou && <span className="text-[9px] font-normal text-slate-400">(You)</span>}
        </div>

        {/* Country Badges (Text Only) */}
         <div className="flex gap-1 flex-shrink-0">
            {contact.badges.map((badge, idx) => (
                <span key={idx} className="text-[9px] text-slate-400 font-bold bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-1 rounded">
                    {badge}
                </span>
            ))}
         </div>
    </div>
  );
};

const AppShortcut: React.FC<{ icon: any, label: string, color: string, bg: string }> = ({ icon: Icon, label, color, bg }) => (
    <button className={`flex flex-col items-center justify-center gap-1.5 p-2 rounded-xl hover:shadow-md transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-600 ${bg} bg-opacity-30 hover:bg-opacity-100 group`}>
        <div className={`p-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm ${color} group-hover:scale-110 transition-transform`}>
            <Icon size={16} />
        </div>
        <span className="text-[9px] font-bold text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200">{label}</span>
    </button>
);
