import React, { useState, useEffect } from 'react';
import { Radio, Zap, ShieldCheck, Activity, Cpu } from 'lucide-react';

export const PlantSCADATicker: React.FC = () => {
  const [oee, setOee] = useState(99.4);
  const [cycleTime, setCycleTime] = useState(14.2);
  const [airPressure, setAirPressure] = useState(88.5);
  const [activeRobots, setActiveRobots] = useState(12);

  // Simulate real-time micro-fluctuations in SCADA metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setOee((prev) => parseFloat((99.1 + Math.random() * 0.7).toFixed(1)));
      setCycleTime((prev) => parseFloat((14.0 + Math.random() * 0.4).toFixed(1)));
      setAirPressure((prev) => parseFloat((88.0 + Math.random() * 1.2).toFixed(1)));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0B1120] border-b border-slate-800 text-slate-300 font-mono text-[11px] py-1.5 px-4 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left Live Pulse Badge */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 font-bold uppercase tracking-wider text-[10px] hidden sm:inline">
            DETROIT LAB LIVE TELEMETRY
          </span>
        </div>

        {/* Ticker Items */}
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-0.5 whitespace-nowrap text-slate-400">
          <div className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#F97316]" />
            <span className="text-slate-400">OVERALL OEE:</span>
            <span className="text-white font-bold">{oee}%</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-slate-400">CYCLE TIME:</span>
            <span className="text-white font-bold">{cycleTime}s / PART</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-slate-400">PNEUMATIC LINE:</span>
            <span className="text-white font-bold">{airPressure} PSI</span>
          </div>

          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-400">ACTIVE CELLS:</span>
            <span className="text-emerald-400 font-bold">{activeRobots} / 12 ONLINE</span>
          </div>
        </div>

        {/* Right Protocol Badge */}
        <div className="hidden lg:flex items-center gap-2 text-[10px] text-slate-500 shrink-0 uppercase">
          <Radio className="w-3 h-3 text-[#F97316]" />
          <span>PROFINET / ETHERNET/IP 100Mbps</span>
        </div>

      </div>
    </div>
  );
};
