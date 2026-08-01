import React, { useState } from 'react';
import { X, Play, Pause, Activity, Radio, ShieldCheck, Cpu, RefreshCw, Maximize2 } from 'lucide-react';
import { cellFeedsData } from '../data/cellFeedsData';

interface LiveCellDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LiveCellDemoModal: React.FC<LiveCellDemoModalProps> = ({ isOpen, onClose }) => {
  const [selectedCellId, setSelectedCellId] = useState<string>(cellFeedsData[0].id);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  if (!isOpen) return null;

  const currentCell = cellFeedsData.find((c) => c.id === selectedCellId) || cellFeedsData[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border-2 border-slate-700 rounded-2xl w-full max-w-5xl overflow-hidden shadow-2xl relative font-sans">
        
        {/* Modal Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
            <div>
              <h3 className="text-base font-bold text-white font-mono flex items-center gap-2">
                <span>LIVE ROBOTIC WORKCELL TELEMETRY FEED</span>
                <span className="text-xs px-2 py-0.5 rounded bg-blue-950 border border-blue-800 text-blue-300">
                  480V 3-PHASE ACTIVE
                </span>
              </h3>
              <p className="text-xs text-slate-400 font-mono">Detroit R&D Integration Bay • Camera Node #04</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Cell Feed Selector Tabs */}
          <div className="grid grid-cols-3 gap-2">
            {cellFeedsData.map((cell) => (
              <button
                key={cell.id}
                onClick={() => setSelectedCellId(cell.id)}
                className={`p-3 rounded-xl border text-left font-mono transition-all cursor-pointer ${
                  cell.id === selectedCellId
                    ? 'bg-slate-950 border-orange-500 text-white ring-1 ring-orange-500/50'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="text-[10px] text-orange-400 font-bold uppercase">{cell.status}</div>
                <div className="text-xs font-bold text-white truncate mt-0.5">{cell.name}</div>
                <div className="text-[10px] text-slate-500">{cell.roboticArmModel.split('+')[0]}</div>
              </button>
            ))}
          </div>

          {/* Main Simulated Video Stream Player Frame */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner group">
            <img
              src={currentCell.posterUrl}
              alt={currentCell.name}
              className="w-full h-full object-cover opacity-85"
              referrerPolicy="no-referrer"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60 pointer-events-none" />

            {/* Live Camera Grid Overlay Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

            {/* Target Crosshair Visual */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-orange-500/60 rounded-full flex items-center justify-center pointer-events-none animate-pulse">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
            </div>

            {/* Top Telemetry Header Overlay */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-xs font-mono text-white z-10">
              <div className="flex items-center gap-2 bg-slate-950/80 px-3 py-1.5 rounded border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>REC • LIVE STREAM 1080P 60FPS</span>
              </div>
              <div className="bg-slate-950/80 px-3 py-1.5 rounded border border-slate-800 text-orange-400">
                OEE: {currentCell.efficiency}%
              </div>
            </div>

            {/* Play/Pause Button overlay */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-orange-500/90 hover:bg-orange-500 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 cursor-pointer z-20 border-2 border-white/50"
            >
              {isPlaying ? <Pause className="w-8 h-8 fill-white" /> : <Play className="w-8 h-8 fill-white ml-1" />}
            </button>

            {/* Bottom Stream Telemetry Bar */}
            <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-lg p-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-slate-300">
              <div>
                <span className="text-slate-500 text-[10px] block">ROBOT MODEL</span>
                <span className="text-orange-400 font-bold truncate block">{currentCell.roboticArmModel}</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">CYCLE TIME</span>
                <span className="text-emerald-400 font-bold block">{currentCell.cycleTime}</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">DCS SAFETY ZONE</span>
                <span className="text-blue-400 font-bold block">CLEAR / ARMED</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">PLC STATUS</span>
                <span className="text-white font-bold block">{currentCell.status}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex justify-between items-center text-xs font-mono text-slate-400">
          <span>Apex Automation Systems • Detroit R&D Test Facility</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors cursor-pointer"
          >
            Close Feed
          </button>
        </div>

      </div>
    </div>
  );
};
