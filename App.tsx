
import React, { useState, useRef, useEffect } from 'react';
import { Header } from './components/Header';
import { ActivityLog } from './components/ActivityLog';
import { SystemFeed } from './components/SystemFeed';
import { Dialer } from './components/Dialer';
import { TeamPanel, BotPanel } from './components/TeamPanel';

const App: React.FC = () => {
  // State to control the right panel content
  const [rightPanelMode, setRightPanelMode] = useState<'default' | 'bot'>('default');
  
  // Resizable Column Logic
  const [widths, setWidths] = useState([34, 33, 33]); // Percentages for 3 columns
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<number | null>(null);

  const startResize = (index: number) => {
    isDragging.current = index;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  };

  const stopResize = () => {
    isDragging.current = null;
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  };

  const doResize = (e: MouseEvent) => {
    if (isDragging.current === null || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const mouseX = e.clientX - containerRect.left;
    
    // Calculate new percentage based on mouse position
    const mousePercent = (mouseX / containerWidth) * 100;
    
    // Minimum width constraint
    const minWidth = 20; 

    if (isDragging.current === 0) {
        // Resizing first divider (Between Col 1 and Col 2)
        const newCol1 = Math.max(minWidth, Math.min(mousePercent, 100 - widths[2] - minWidth));
        const newCol2 = 100 - newCol1 - widths[2];
        setWidths([newCol1, newCol2, widths[2]]);
    } else if (isDragging.current === 1) {
        // Resizing second divider (Between Col 2 and Col 3)
        const col1W = widths[0];
        const newCol2 = Math.max(minWidth, Math.min(mousePercent - col1W, 100 - col1W - minWidth));
        const newCol3 = 100 - col1W - newCol2;
        setWidths([col1W, newCol2, newCol3]);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', doResize);
    window.addEventListener('mouseup', stopResize);
    return () => {
        window.removeEventListener('mousemove', doResize);
        window.removeEventListener('mouseup', stopResize);
    }
  }, [widths]);

  return (
    <div className="flex flex-col h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans overflow-hidden min-w-[1024px] transition-colors duration-300">
      {/* Top Bar - Personal PBX Style */}
      <Header />

      {/* Main Content - Resizable Layout */}
      <main className="flex-1 p-3 overflow-hidden flex flex-col" ref={containerRef}>
        <div className="flex h-full w-full gap-3 min-h-0">
          
          {/* Left Column: Activity / Inbox */}
          <div style={{ width: `${widths[0]}%` }} className="h-full min-w-[300px] flex flex-col transition-[width] duration-0 ease-linear shadow-sm rounded-lg overflow-hidden border border-slate-400 dark:border-slate-600">
            <ActivityLog />
          </div>

          {/* Resizer 1 */}
          <div 
            onMouseDown={() => startResize(0)} 
            className="w-[6px] -mx-2 cursor-col-resize hover:bg-emerald-500/50 active:bg-emerald-600 bg-transparent transition-colors z-50 flex-shrink-0 rounded-full h-1/6 self-center"
          ></div>

          {/* Middle Column: System Feed */}
          <div style={{ width: `${widths[1]}%` }} className="h-full min-w-[280px] flex flex-col transition-[width] duration-0 ease-linear shadow-sm rounded-lg overflow-hidden border border-slate-400 dark:border-slate-600">
             <SystemFeed />
          </div>

          {/* Resizer 2 */}
          <div 
             onMouseDown={() => startResize(1)}
             className="w-[6px] -mx-2 cursor-col-resize hover:bg-emerald-500/50 active:bg-emerald-600 bg-transparent transition-colors z-50 flex-shrink-0 rounded-full h-1/6 self-center"
          ></div>

          {/* Right Column: Control Panel */}
          <div style={{ width: `${widths[2]}%` }} className="h-full min-w-[300px] flex flex-col gap-3 relative transition-[width] duration-0 ease-linear">
              {rightPanelMode === 'default' ? (
                <>
                  {/* Dialer Section */}
                  <div className="flex-shrink-0 shadow-sm rounded-lg overflow-hidden border border-slate-400 dark:border-slate-600 bg-white dark:bg-slate-800">
                      <Dialer />
                  </div>
                  
                  {/* Team Status Section with Channels */}
                  <div className="flex-1 min-h-0 overflow-hidden flex flex-col shadow-sm rounded-lg overflow-hidden border border-slate-400 dark:border-slate-600">
                     <TeamPanel onOpenBot={() => setRightPanelMode('bot')} />
                  </div>
                </>
              ) : (
                /* Bot / AI Assistant Panel */
                <div className="h-full flex flex-col min-h-0 shadow-sm rounded-lg overflow-hidden border border-slate-400 dark:border-slate-600">
                  <BotPanel onClose={() => setRightPanelMode('default')} />
                </div>
              )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
