import React, { useState, useEffect } from 'react';
import { ArrowUp, Volume2, VolumeX, Cpu, ShieldCheck, ChevronLeft, ChevronRight, Activity, Zap } from 'lucide-react';
import { industrialAudio } from '../utils/industrialAudio';

interface ScrollingGearWidgetProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenAudit: () => void;
}

export const ScrollingGearWidget: React.FC<ScrollingGearWidgetProps> = ({
  soundEnabled,
  onToggleSound,
  onOpenAudit
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAscending, setIsAscending] = useState(false);
  const [activeZone, setActiveZone] = useState('ZONE 01: ROBOTIC STAGING BAY');

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const totalHeight = Math.max(
        1,
        (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight
      );
      const progress = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));

      setScrollY(currentScroll);
      setScrollPercent(Math.round(progress));

      // Determine active plant zone based on scroll position
      if (currentScroll < 600) {
        setActiveZone('ZONE 01: ROBOTIC STAGING BAY');
      } else if (currentScroll < 1400) {
        setActiveZone('ZONE 02: CAPABILITIES MATRIX');
      } else if (currentScroll < 2300) {
        setActiveZone('ZONE 03: ROI CALCULATOR');
      } else if (currentScroll < 3200) {
        setActiveZone('ZONE 04: SCADA & PLC TELEMETRY');
      } else if (currentScroll < 4100) {
        setActiveZone('ZONE 05: CASE STUDY DEPLOYMENTS');
      } else {
        setActiveZone('ZONE 06: DETROIT HQ & AUDIT LAB');
      }
    };

    // Initialize scroll state on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Calculate top vertical offset percentage on the right edge (clamped between 8% and 88% of viewport height)
  const topOffsetPercent = Math.min(88, Math.max(8, scrollPercent));

  // Dynamic gear rotations based on scroll distance
  const mainGearRotation = (scrollY * 0.75) % 360;
  const subGearRotation = -(scrollY * 1.5) % 360;

  // Harpoon Cable Winch Back-To-Top Trigger Handler
  const handleHarpoonAscend = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isAscending) return;
    setIsAscending(true);

    if (soundEnabled) {
      industrialAudio.playWinchMotorAudio();
    }

    // Comprehensive multi-target scroll to top to guarantee 100% operation
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } catch (err) {
      window.scrollTo(0, 0);
    }

    try {
      if (document.documentElement) {
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        document.body.scrollTop = 0;
      }
    } catch (err) {
      // Ignore
    }

    const topAnchor = document.getElementById('top-anchor');
    if (topAnchor && topAnchor.scrollIntoView) {
      topAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Enforce immediate zeroing fallback
    setTimeout(() => {
      window.scrollTo(0, 0);
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
    }, 400);

    setTimeout(() => {
      setIsAscending(false);
    }, 1100);
  };

  return (
    <>
      {/* Harpoon Steel Cable Line when winching to top */}
      {isAscending && (
        <div className="fixed top-0 right-5 w-1.5 h-screen bg-gradient-to-b from-[#F97316] via-amber-400 to-yellow-200 z-50 animate-pulse pointer-events-none shadow-[0_0_20px_#F97316]">
          <div className="absolute bottom-16 -left-2 w-5 h-5 bg-amber-300 rounded-full blur-sm animate-ping" />
        </div>
      )}

      {/* Right Edge Gear Rack Track Container */}
      <div className="fixed top-0 bottom-0 right-0 z-40 select-none pointer-events-none w-14">
        {/* Steel Rail Track Line down the right screen edge */}
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-slate-800 border-l border-slate-700/60 shadow-inner flex flex-col justify-between overflow-hidden">
          {/* Rail teeth notches */}
          <div className="w-full h-full bg-[repeating-linear-gradient(180deg,#F97316,#F97316_3px,transparent_3px,transparent_12px)] opacity-30" />
        </div>

        {/* Dynamic Elevator Gear Unit - Slides vertically as page scrolls */}
        <div
          className="absolute right-0 pointer-events-auto transition-all duration-75 ease-out flex items-center -translate-y-1/2"
          style={{ top: `${topOffsetPercent}%` }}
        >
          {/* Side Control Popout Button */}
          <div className="relative flex items-center group">
            
            {/* Hover Tooltip / Action Bar */}
            <div className="hidden sm:flex items-center gap-2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#0F172A] border border-slate-700 text-slate-200 px-3 py-1.5 rounded-sm shadow-2xl font-mono text-[10px]">
              <div className="flex flex-col">
                <span className="text-[#F97316] font-bold uppercase">{activeZone}</span>
                <span className="text-slate-400 text-[9px]">CLICK GEAR = REEL HARPOON TO TOP</span>
              </div>
            </div>

            {/* Main Interactive Rotating Gear Reel Container */}
            <div
              className={`relative bg-[#1E293B] hover:bg-slate-800 border-l-2 border-y border-slate-700 hover:border-[#F97316] p-2 sm:p-2.5 rounded-l-md shadow-2xl transition-all duration-150 flex items-center gap-2 ${
                isAscending ? 'scale-110 border-amber-400 bg-amber-950/80 shadow-[0_0_20px_rgba(249,115,22,0.8)]' : ''
              }`}
            >
              {/* Rotating Mechanical Dual Gear Graphic Button (Harpoon Reel Trigger) */}
              <button
                type="button"
                onClick={handleHarpoonAscend}
                id="edge-scrolling-gear-harpoon-trigger"
                className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center cursor-pointer group/gear focus:outline-none"
                title="Click gear to engage Harpoon Winch - Reel back to top"
              >
                {/* Main Outer Gear Wheel (Rotates in sync with scroll) */}
                <svg
                  className="w-full h-full text-[#F97316] drop-shadow-[0_0_8px_rgba(249,115,22,0.5)] transition-transform duration-75"
                  style={{ transform: `rotate(${mainGearRotation}deg)` }}
                  viewBox="0 0 100 100"
                  fill="currentColor"
                >
                  {/* 8-Tooth Precision Gear Path */}
                  <path d="M42 5 L58 5 L60 18 C64 20 68 22 72 25 L84 17 L95 28 L87 40 C90 44 92 48 94 52 L107 54 L107 70 L94 72 C92 76 90 80 87 84 L95 96 L84 107 L72 99 C68 102 64 104 60 106 L58 119 L42 119 L40 106 C36 104 32 102 28 99 L16 107 L5 96 L13 84 C10 80 8 76 6 72 L-7 70 L-7 54 L6 52 C8 48 10 44 13 40 L5 28 L16 17 L28 25 C32 22 36 20 40 18 Z" transform="scale(0.7) translate(20,20)"/>
                  <circle cx="50" cy="50" r="18" fill="#0F172A" />
                  <circle cx="50" cy="50" r="9" fill="#F97316" />
                </svg>

                {/* Counter-rotating Inner Gear */}
                <svg
                  className="absolute -top-0.5 -left-0.5 w-5 h-5 text-blue-400 transition-transform duration-75"
                  style={{ transform: `rotate(${subGearRotation}deg)` }}
                  viewBox="0 0 100 100"
                  fill="currentColor"
                >
                  <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="14" strokeDasharray="18 12" fill="none" />
                  <circle cx="50" cy="50" r="14" fill="#0F172A" />
                </svg>

                {/* Center Harpoon / Reel Icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <ArrowUp className={`w-4 h-4 text-white font-extrabold ${isAscending ? 'animate-bounce text-amber-300' : 'group-hover/gear:-translate-y-0.5 transition-transform'}`} />
                </div>
              </button>

              {/* Real-time Vertical Progress % and Drawer Trigger Button */}
              <button
                type="button"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                className="flex flex-col items-center justify-center gap-1 border-l border-slate-700/80 pl-2 cursor-pointer hover:text-white group/drawer focus:outline-none"
                title="Toggle Plant Telemetry Panel"
              >
                <span className="text-[9px] font-mono font-extrabold uppercase tracking-widest text-[#F97316] [writing-mode:vertical-lr]">
                  {scrollPercent}% ELEV
                </span>
                <div className="p-0.5 text-slate-400 group-hover/drawer:text-white transition-colors">
                  {isDrawerOpen ? <ChevronRight className="w-3.5 h-3.5 text-white" /> : <ChevronLeft className="w-3.5 h-3.5" />}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Slide-out Plant Telemetry Drawer Panel */}
        <div
          className={`fixed top-1/2 -translate-y-1/2 right-0 z-50 pointer-events-auto bg-[#0F172A] border-l-2 border-y border-slate-700 w-72 sm:w-80 shadow-2xl p-5 space-y-5 text-xs font-mono transition-all duration-300 transform ${
            isDrawerOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
          }`}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#F97316]" />
              <span className="font-bold text-white uppercase tracking-wider">PLANT GEAR TELEMETRY</span>
            </div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-slate-400 hover:text-white p-1"
            >
              ✕
            </button>
          </div>

          {/* Active Zone Display */}
          <div className="p-3 bg-[#1E293B] rounded-sm border border-slate-700 space-y-1">
            <div className="text-[10px] text-slate-400 uppercase font-bold">CURRENT PLANT ZONE</div>
            <div className="text-emerald-400 font-bold uppercase text-[11px] truncate">{activeZone}</div>
            <div className="text-[10px] text-slate-400 flex justify-between pt-1">
              <span>ELEVATION:</span>
              <span className="text-white font-bold">{scrollY} PX ({scrollPercent}%)</span>
            </div>
          </div>

          {/* Quick Harpoon Reel Button inside drawer */}
          <button
            onClick={(e) => {
              setIsDrawerOpen(false);
              handleHarpoonAscend(e);
            }}
            className="w-full py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 font-bold text-xs uppercase rounded-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#F97316]" />
            <span>REEL HARPOON TO TOP</span>
          </button>

          {/* Quick Sound Effects Toggle */}
          <div className="p-3 bg-[#1E293B] rounded-sm border border-slate-700 flex items-center justify-between">
            <div>
              <div className="text-[#F97316] font-bold uppercase text-[11px]">ACOUSTIC FEEDBACK</div>
              <div className="text-slate-400 text-[10px]">Pneumatic clicks & winch audio</div>
            </div>
            <button
              onClick={onToggleSound}
              className={`p-2 rounded-sm border transition-all cursor-pointer ${
                soundEnabled
                  ? 'bg-emerald-950 border-emerald-500 text-emerald-400'
                  : 'bg-slate-800 border-slate-700 text-slate-400'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>

          {/* Quick Action Button */}
          <button
            onClick={() => {
              setIsDrawerOpen(false);
              onOpenAudit();
            }}
            className="w-full py-2.5 bg-[#F97316] hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>DISPATCH FEASIBILITY AUDIT</span>
          </button>
        </div>
      </div>
    </>
  );
};
