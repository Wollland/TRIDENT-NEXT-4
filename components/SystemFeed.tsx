
import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Copy, 
  Phone, 
  Zap, 
  MessageSquare, 
  Tag, 
  TrendingUp, 
  Mic, 
  MicOff, 
  Globe, 
  Languages, 
  ThumbsUp, 
  ThumbsDown, 
  Volume2, 
  VolumeX, 
  FileText, 
  MoreHorizontal, 
  Clock
} from 'lucide-react';

export const SystemFeed: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 flex flex-col h-full font-sans transition-colors duration-300">
      
      {/* 1. ACTIVE CALL CONTROL HEADER */}
      <ActiveCallHeader />

      {/* 2. LIVE TRANSCRIPT (Chat Style) */}
      <div className="flex-1 flex flex-col min-h-0 bg-slate-50/50 dark:bg-slate-950/50">
        
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3 scrollbar-thin font-sans">
            
            {/* Historical Context Messages */}
            <ChatMessage role="Remote" name="Jorge" text="Hola, buenos días. ¿Hablo con Jorge?" time="01:25" />
            <ChatMessage role="Local" name="You" text="Sí, soy yo. Dime." time="01:24" isLocal />
            <ChatMessage role="Remote" name="Central" text="Te llamo de la central para verificar la instalación." time="01:23" />
            <ChatMessage role="Local" name="You" text="Ah, perfecto. Justo estaba esperando la llamada." time="01:22" isLocal />
            <ChatMessage role="Remote" name="Central" text="¿Has podido conectar el router nuevo?" time="01:21" />
            <ChatMessage role="Local" name="You" text="Sí, lo conecté hace unos 10 minutos." time="01:20" isLocal />
            
            <ChatMessage role="Remote" name="Central" text="Vale, veo que la señal llega correctamente." time="01:19" />
            <ChatMessage role="Local" name="You" text="Genial. ¿Tengo que hacer algo más?" time="01:18" isLocal />
            <ChatMessage role="Remote" name="Central" text="Solo confirmar que las luces están en verde." time="01:17" />
            <ChatMessage role="Local" name="You" text="Sí, todas en verde menos la del teléfono." time="01:16" isLocal />
            
            <ChatMessage role="Remote" name="Central" text="Eso es normal, tardará unos minutos en registrarse." time="01:15" />
            <ChatMessage role="Local" name="You" text="Entendido. Oye, una pregunta sobre la velocidad." time="01:14" isLocal />
            <ChatMessage role="Remote" name="Central" text="Dime." time="01:14" />
            <ChatMessage role="Local" name="You" text="¿Son 600 megas simétricos reales?" time="01:13" isLocal />
            <ChatMessage role="Remote" name="Central" text="Sí, garantizados por fibra directa." time="01:12" />

            {/* System Notification */}
            <div className="flex justify-center my-4 opacity-60">
                 <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm">
                     <Zap size={10} className="text-emerald-500" />
                     <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Signal Verified • 600Mbps</span>
                 </div>
            </div>

            <ChatMessage role="Local" name="You" text="Vale, porque la última vez tuve problemas." time="01:00" isLocal />
            <ChatMessage role="Remote" name="Central" text="No te preocupes, esta línea es nueva." time="00:58" />
            <ChatMessage role="Local" name="You" text="De acuerdo. ¿Y el tema de la factura? Porque me dijeron que los primeros tres meses eran gratis." time="00:55" isLocal />
            
            {/* Active Streaming Message */}
            <div className="flex gap-3 mb-2 group font-sans">
               <div className="flex flex-col items-center gap-1 flex-shrink-0 w-6 pt-1">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shadow-sm border bg-blue-100 border-blue-200 text-blue-700 dark:bg-blue-900/50 dark:border-blue-800 dark:text-blue-400">
                    R
                  </div>
               </div>
               <div className="flex-1 max-w-[85%]">
                  <div className="flex items-center gap-2 mb-1 px-1">
                        <span className="text-[9px] text-slate-400 font-medium">00:53</span>
                  </div>
                  <div className="bg-blue-50/80 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-2xl px-3.5 py-2.5 shadow-sm text-[11px] text-slate-700 dark:text-slate-200 leading-relaxed relative overflow-hidden">
                      <HighlightedText text="De seguida me acostumbro a la interfaz y ya me aburro. O sea, quiero decir que parece que es demasiado. El precio es 1200€ y el descuento del 15%." />
                      <span className="inline-block w-1.5 h-3 align-middle ml-0.5 bg-emerald-500 animate-pulse"></span>
                  </div>
                  <div className="flex items-center gap-1 mt-1.5 pl-1">
                      <span className="text-[8px] text-slate-400 font-medium uppercase tracking-wider flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                        Live via Whisper Turbo
                      </span>
                  </div>
               </div>
            </div>

        </div>

        {/* Action Bar */}
        <div className="p-2 border-t border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 flex justify-end">
             <button className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors bg-white dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 border border-slate-300 dark:border-slate-700 rounded px-3 py-1.5">
                 <Copy size={11} /> Copy Transcript
             </button>
        </div>
      </div>

      {/* 3. LIVE TAGGER */}
      <div className="h-[42%] border-t border-slate-300 dark:border-slate-700 flex flex-col bg-white dark:bg-slate-900">
          
          {/* Header - Minimalist */}
          <div className="px-4 py-2 border-b border-slate-300 dark:border-slate-700 flex justify-between items-center bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2">
                  <Activity size={14} className="text-indigo-500 dark:text-indigo-400" />
                  <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">Live Insights</span>
              </div>
              <div className="flex items-center gap-2">
                  <span className="text-[9px] font-medium text-slate-400 uppercase tracking-wider">Confidence Score</span>
                  <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded text-[10px] font-bold tabular-nums border border-slate-300 dark:border-slate-700">8.4/10</span>
              </div>
          </div>

          <div className="flex-1 p-0 flex divide-x divide-slate-300 dark:divide-slate-700 overflow-hidden">
              
              {/* Left Column: Summary */}
              <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-slate-900">
                  <div className="flex-1 p-4 overflow-y-auto scrollbar-thin">
                      <div className="mb-4">
                          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                              <MessageSquare size={12} /> Executive Summary
                          </h4>
                          <p className="text-xs text-slate-600 dark:text-slate-300 leading-loose">
                              <span className="font-semibold text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 px-1 rounded-sm">Ibai Moledo</span> está evaluando los elementos visuales con una postura <span className="text-emerald-700 dark:text-emerald-400 font-medium">crítica pero constructiva</span>.
                          </p>
                          <p className="text-xs text-slate-600 dark:text-slate-300 leading-loose mt-2">
                              <span className="font-semibold text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 px-1 rounded-sm">Jorge S. Fernández</span> muestra preocupación inicial por la intensidad del diseño, aunque indica una rápida adaptación.
                          </p>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-800/50 rounded border border-slate-200 dark:border-slate-700 p-3">
                          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                              <TrendingUp size={12} /> Key Signals
                          </h4>
                          <ul className="space-y-2">
                              <li className="flex gap-2 text-[11px] text-slate-600 dark:text-slate-400 items-start">
                                  <div className="w-1 h-1 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></div>
                                  <span><HighlightedText text='Mención de "problemas de conectividad" en el minuto 01:00.' /></span>
                              </li>
                              <li className="flex gap-2 text-[11px] text-slate-600 dark:text-slate-400 items-start">
                                  <div className="w-1 h-1 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></div>
                                  <span><HighlightedText text='Percepción de "interfaz intensa" repetida dos veces.' /></span>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>

              {/* Right Column: Tags */}
              <div className="w-[200px] bg-slate-50/30 dark:bg-slate-800/30 flex flex-col flex-shrink-0 border-l border-slate-300 dark:border-slate-700">
                  <div className="px-3 py-2 border-b border-slate-300 dark:border-slate-700">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Detected Tags</span>
                  </div>
                  <div className="flex-1 overflow-y-auto scrollbar-thin p-2 space-y-1">
                      <TagRow label="Diseño raro" score="90%" color="red" />
                      <TagRow label="Iconos agresivos" score="85%" color="red" />
                      <TagRow label="Conectividad" score="95%" color="red" />
                      <TagRow label="Feedback visual" score="75%" color="green" />
                      <TagRow label="Tiempo real" score="80%" color="gray" />
                      <TagRow label="Adaptación usuario" score="65%" color="green" />
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

// --- NEW ACTIVE CALL HEADER COMPONENT ---
const ActiveCallHeader: React.FC = () => {
  const [micActive, setMicActive] = useState(true);
  const [speakerActive, setSpeakerActive] = useState(true);
  const [transcribeActive, setTranscribeActive] = useState(true);
  const [translateActive, setTranslateActive] = useState(false);
  
  // Dynamic Audio Visualizer State
  const [bars, setBars] = useState<number[]>(Array(24).fill(10));
  
  // Timer State
  const [seconds, setSeconds] = useState(18);

  // Simulate audio activity & Timer
  useEffect(() => {
    const interval = setInterval(() => {
        setBars(prev => prev.map(() => Math.max(15, Math.random() * 100)));
    }, 100);
    
    const timerInterval = setInterval(() => {
        setSeconds(s => s + 1);
    }, 1000);

    return () => {
        clearInterval(interval);
        clearInterval(timerInterval);
    };
  }, []);

  const formatTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white dark:bg-slate-900 border-b border-slate-300 dark:border-slate-700 flex-shrink-0 relative z-20 shadow-sm">
        
        {/* Top Strip: Info & Timer */}
        <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/30 dark:bg-slate-800/30">
             <div className="flex items-center gap-2">
                 <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)] relative z-10"></div>
                    <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping opacity-75"></div>
                 </div>
                 <Phone size={14} className="text-emerald-600 dark:text-emerald-400" />
                 <span className="text-sm font-bold text-slate-700 dark:text-slate-200">(+34691124646)</span>
             </div>
             <div className="flex items-center gap-4">
                 {/* LARGE VISUAL TIMER (Sans Serif, Tabular Nums) */}
                 <div className="flex items-center gap-2 px-2">
                     <span className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight tabular-nums leading-none">{formatTime(seconds)}</span>
                 </div>
                 <div className="h-4 w-px bg-slate-300 dark:bg-slate-700"></div>
                 <button className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 transition-colors">
                    <MoreHorizontal size={16} />
                 </button>
             </div>
        </div>

        {/* Main Control Area - Compact Layout */}
        <div className="px-3 py-3 flex items-center justify-between gap-3">
            
            {/* LEFT: Transcription / Local Source */}
            <div className="flex flex-col gap-2 w-1/4 min-w-[120px]">
                {/* Language Selector (Minimalist Flag) */}
                <div className="flex items-center justify-between border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 shadow-sm group cursor-pointer hover:border-emerald-400 transition-colors">
                    <span className="text-[10px] font-bold text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors uppercase tracking-wider">Source</span>
                    <MinimalFlag country="ES" />
                </div>
                 {/* Icons Row */}
                 <div className="flex gap-1">
                    <button 
                        onClick={() => setMicActive(!micActive)}
                        className={`flex-1 py-1.5 flex justify-center rounded border ${micActive ? 'border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800' : 'border-rose-300 dark:border-rose-700 text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/30'}`}
                    >
                        {micActive ? <Mic size={14} /> : <MicOff size={14} />}
                    </button>
                    <button 
                        onClick={() => setTranscribeActive(!transcribeActive)}
                        className={`flex-1 py-1.5 flex justify-center rounded border transition-colors ${transcribeActive ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30' : 'border-slate-300 dark:border-slate-600 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
                        title="Toggle Transcription"
                    >
                        <FileText size={14} />
                    </button>
                </div>
            </div>


            {/* CENTER: Visuals (Waveform + Quality) */}
            <div className="flex-1 flex flex-col justify-center gap-3 px-2">
                
                {/* 1. Dynamic Waveform (Live Animation) */}
                <div className="flex items-end justify-center gap-[3px] h-8 w-full">
                    {bars.map((height, i) => (
                        <div 
                            key={i} 
                            className="w-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full transition-all duration-100 ease-in-out" 
                            style={{ 
                                height: `${height}%`,
                                opacity: Math.max(0.4, height / 100)
                            }}
                        ></div>
                    ))}
                </div>

                {/* 2. WebRTC Quality Bar (Hands) */}
                <div className="flex items-center gap-2">
                    <ThumbsDown size={14} className="text-rose-500 cursor-pointer hover:scale-110 transition-transform opacity-60 hover:opacity-100" strokeWidth={2.5} />
                    
                    {/* The Bar */}
                    <div className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden relative shadow-inner">
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-emerald-500 to-emerald-600 opacity-80"></div>
                        
                        {/* Segments (Visual dividers) */}
                        <div className="absolute inset-0 flex justify-between px-[10%]">
                            <div className="w-[1px] h-full bg-white/30"></div>
                            <div className="w-[1px] h-full bg-white/30"></div>
                            <div className="w-[1px] h-full bg-white/30"></div>
                            <div className="w-[1px] h-full bg-white/30"></div>
                        </div>

                        {/* Indicator Logic */}
                        <div className="absolute top-0 bottom-0 right-[5%] w-1 bg-white shadow-[0_0_4px_rgba(0,0,0,0.5)] z-10"></div>
                    </div>

                    <ThumbsUp size={14} className="text-emerald-600 dark:text-emerald-400 cursor-pointer hover:scale-110 transition-transform" strokeWidth={2.5} />
                </div>
            </div>


            {/* RIGHT: Translation / Remote Source */}
            <div className="flex flex-col gap-2 w-1/4 min-w-[120px]">
                {/* Language Selector (Minimalist Flag) */}
                 <div className="flex items-center justify-between border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 bg-white dark:bg-slate-800 shadow-sm hover:border-emerald-400 transition-colors cursor-pointer group">
                    <span className="text-[10px] font-bold text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors uppercase tracking-wider">Target</span>
                    <MinimalFlag country="US" />
                </div>

                {/* Icons Row */}
                <div className="flex gap-1">
                    <button 
                        onClick={() => setTranslateActive(!translateActive)}
                        className={`flex-1 py-1.5 flex justify-center rounded border transition-colors ${translateActive ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30' : 'border-slate-300 dark:border-slate-600 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
                        title="Toggle Translation"
                    >
                        <Languages size={14} />
                    </button>
                    <button 
                        onClick={() => setSpeakerActive(!speakerActive)}
                         className={`flex-1 py-1.5 flex justify-center rounded border ${speakerActive ? 'border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800' : 'border-rose-300 dark:border-rose-700 text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/30'}`}
                    >
                        {speakerActive ? <Volume2 size={14} /> : <VolumeX size={14} />}
                    </button>
                </div>
            </div>
        </div>

        {/* Bottom Line Decoration */}
        <div className="h-[2px] w-full bg-emerald-500"></div>
    </div>
  );
}

// --- MINIMALIST FLAG COMPONENT (No Text, Just Geometry) ---
const MinimalFlag: React.FC<{ country: 'ES' | 'US' | 'UK' | 'BR' | 'EU' | 'DE' | 'FR' }> = ({ country }) => {
    return (
        <div className="w-6 h-4 rounded-sm overflow-hidden shadow-sm relative bg-slate-100 border border-slate-200">
            {country === 'ES' && (
                <svg viewBox="0 0 750 500" className="w-full h-full">
                    <rect width="750" height="500" fill="#c60b1e"/>
                    <rect y="125" width="750" height="250" fill="#ffc400"/>
                </svg>
            )}
            {country === 'US' && (
                <svg viewBox="0 0 741 390" className="w-full h-full">
                    <rect width="741" height="390" fill="#b22234"/>
                    <path d="M0,45H741M0,75H741M0,105H741M0,135H741M0,165H741M0,195H741M0,225H741M0,255H741M0,285H741M0,315H741M0,345H741M0,375H741" stroke="#fff" strokeWidth="30"/>
                    <rect width="296.4" height="210" fill="#3c3b6e"/>
                </svg>
            )}
            {country === 'UK' && (
                <svg viewBox="0 0 60 30" className="w-full h-full">
                    <rect width="60" height="30" fill="#012169"/>
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#c8102e" strokeWidth="2"/>
                    <path d="M30,0 L30,30 M0,15 L60,15" stroke="#fff" strokeWidth="10"/>
                    <path d="M30,0 L30,30 M0,15 L60,15" stroke="#c8102e" strokeWidth="6"/>
                </svg>
            )}
            {country === 'EU' && (
                <svg viewBox="0 0 50 33" className="w-full h-full">
                    <rect width="50" height="33" fill="#003399"/>
                    <circle cx="25" cy="16.5" r="10" stroke="#ffcc00" strokeWidth="2" fill="none" strokeDasharray="1 3" />
                </svg>
            )}
             {country === 'BR' && (
                <svg viewBox="0 0 700 500" className="w-full h-full">
                    <rect width="700" height="500" fill="#009c3b"/>
                    <polygon points="350,50 650,250 350,450 50,250" fill="#ffdf00"/>
                    <circle cx="350" cy="250" r="120" fill="#002776"/>
                    <path d="M250,280 Q350,220 450,280" stroke="white" strokeWidth="10" fill="none" />
                </svg>
            )}
            {country === 'DE' && (
                <svg viewBox="0 0 5 3" className="w-full h-full">
                    <rect width="5" height="1" y="0" fill="#000000"/>
                    <rect width="5" height="1" y="1" fill="#DD0000"/>
                    <rect width="5" height="1" y="2" fill="#FFCE00"/>
                </svg>
            )}
             {country === 'FR' && (
                <svg viewBox="0 0 3 2" className="w-full h-full">
                    <rect width="1" height="2" x="0" fill="#0055A4"/>
                    <rect width="1" height="2" x="1" fill="#FFFFFF"/>
                    <rect width="1" height="2" x="2" fill="#EF4135"/>
                </svg>
            )}
        </div>
    )
}

const TagRow: React.FC<{ label: string, score: string, color: 'red' | 'green' | 'gray' }> = ({ label, score, color }) => {
    
    const getColors = () => {
        switch(color) {
            case 'red': return { text: 'text-rose-700 dark:text-rose-400', badge: 'text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/30 border-rose-100 dark:border-rose-800', dot: 'bg-rose-500' };
            case 'green': return { text: 'text-emerald-700 dark:text-emerald-400', badge: 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 border-emerald-100 dark:border-emerald-800', dot: 'bg-emerald-500' };
            default: return { text: 'text-slate-600 dark:text-slate-400', badge: 'text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700', dot: 'bg-slate-400' };
        }
    }

    const styles = getColors();

    return (
        <div className="group flex items-center justify-between px-2 py-1.5 rounded hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm border border-transparent hover:border-slate-300 dark:hover:border-slate-600 transition-all cursor-default">
            <div className="flex items-center gap-2 min-w-0">
                <div className={`w-1.5 h-1.5 rounded-full ${styles.dot} flex-shrink-0`}></div>
                <span className={`text-[11px] font-medium truncate ${styles.text} opacity-90 group-hover:opacity-100`}>{label}</span>
            </div>
            <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border ${styles.badge} ml-2 flex-shrink-0`}>{score}</span>
        </div>
    );
};

const ChatMessage: React.FC<{ role: string, name: string, text: string, time: string, isLocal?: boolean }> = ({ role, name, text, time, isLocal }) => (
    <div className={`flex gap-3 mb-3 ${isLocal ? 'flex-row-reverse' : ''} group font-sans`}>
        {/* Avatar */}
        <div className={`flex flex-col items-center flex-shrink-0 w-6 pt-1`}>
             <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shadow-sm border transition-transform group-hover:scale-110 ${
                 isLocal 
                 ? 'bg-emerald-100 border-emerald-200 text-emerald-700 dark:bg-emerald-900/50 dark:border-emerald-800 dark:text-emerald-400' 
                 : 'bg-blue-100 border-blue-200 text-blue-700 dark:bg-blue-900/50 dark:border-blue-800 dark:text-blue-400'
             }`}>
                {isLocal ? 'L' : 'R'}
             </div>
        </div>

        {/* Content */}
        <div className={`flex-1 max-w-[85%] ${isLocal ? 'items-end flex flex-col' : ''}`}>
            {/* Header Label - REMOVED FOR MINIMALISM */}
            <div className={`flex items-center gap-2 mb-1 px-1 ${isLocal ? 'flex-row-reverse' : ''}`}>
                <span className="text-[9px] text-slate-400 font-medium">{time}</span>
            </div>

            {/* Bubble */}
            <div className={`rounded-2xl px-3.5 py-2.5 shadow-sm text-[11px] leading-relaxed border ${
                isLocal 
                ? 'bg-emerald-50/80 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800 text-slate-700 dark:text-slate-200' 
                : 'bg-blue-50/80 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800 text-slate-700 dark:text-slate-200'
            }`}>
                 <HighlightedText text={text} />
            </div>
        </div>
    </div>
);

const HighlightedText: React.FC<{ text: string }> = ({ text }) => {
    // Regex to match numbers, times, percentages, currency
    // Matches: 123, 12.34, 12,34, 10:00, 100%, $100, 100€, 1200€
    const regex = /(\d+(?:[.,:]\d+)*(?:[%€$])?)/g;
    
    const parts = text.split(regex);
    
    return (
      <span>
        {parts.map((part, i) => {
          if (part.match(regex)) {
            return (
              <span key={i} className="font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/30 px-0.5 rounded-[2px]">
                {part}
              </span>
            );
          }
          return part;
        })}
      </span>
    );
  };
