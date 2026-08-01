import React, { useState, useEffect } from 'react';
import { Cpu, AlertTriangle, Play, Pause, RefreshCw, Activity, CheckCircle2, ShieldAlert, Zap, Radio, Sliders } from 'lucide-react';

export const SCADASimulatorWidget: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [eStopActive, setEStopActive] = useState<boolean>(false);
  const [conveyorFrequency, setConveyorFrequency] = useState<number>(60); // 60 Hz VFD
  const [partsCount, setPartsCount] = useState<number>(14820);
  const [defectsCount, setDefectsCount] = useState<number>(3);
  const [armAngle, setArmAngle] = useState<number>(45);
  const [logs, setLogs] = useState<string[]>([
    '[SCADA 06:25:01] System booted. ControlLogix PLC online at 192.168.1.10',
    '[SCADA 06:25:03] Ethernet/IP CIP connection established with FANUC Robot Cell 01',
    '[SCADA 06:25:05] Safety Light Curtains armed - DCS Safety Zone CLEAR',
    '[SCADA 06:25:10] VFD Conveyor Drive 01 synchronized at 60.0 Hz'
  ]);

  // Simulation tick loop
  useEffect(() => {
    if (!isRunning || eStopActive) return;

    const interval = setInterval(() => {
      setPartsCount((prev) => prev + Math.floor(conveyorFrequency / 20));
      setArmAngle((prev) => (prev + 15) % 360);

      // Random log generation occasionally
      if (Math.random() < 0.15) {
        const timeStr = new Date().toLocaleTimeString();
        const sampleLogs = [
          `[SCADA ${timeStr}] Cognex Vision Inspection: Part #${partsCount + 1} PASSED (0.002mm tolerance)`,
          `[SCADA ${timeStr}] Servo Axis 3 torque nominal at 14.2 Nm`,
          `[SCADA ${timeStr}] PLC Heartbeat OK - Cycle time 2.38 sec`,
          `[SCADA ${timeStr}] Temperature probe #2 normal at 42.1°C`
        ];
        const newLog = sampleLogs[Math.floor(Math.random() * sampleLogs.length)];
        setLogs((prev) => [newLog, ...prev.slice(0, 7)]);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [isRunning, eStopActive, conveyorFrequency, partsCount]);

  const toggleEStop = () => {
    if (!eStopActive) {
      setEStopActive(true);
      setIsRunning(false);
      const timeStr = new Date().toLocaleTimeString();
      setLogs((prev) => [`[ALARM ${timeStr}] *** EMERGENCY STOP ACTUATED *** DCS Safety Circuit Tripped!`, ...prev]);
    } else {
      setEStopActive(false);
      setIsRunning(true);
      const timeStr = new Date().toLocaleTimeString();
      setLogs((prev) => [`[SCADA ${timeStr}] E-Stop Safety Reset Acknowledged. Resuming Cell Cycle.`, ...prev]);
    }
  };

  const triggerDefectInspection = () => {
    if (eStopActive) return;
    setDefectsCount((prev) => prev + 1);
    const timeStr = new Date().toLocaleTimeString();
    setLogs((prev) => [
      `[INSPECTION ${timeStr}] DEFECT DETECTED on Part #${partsCount + 1}! Vision System actuated Pneumatic Reject Ram.`,
      ...prev
    ]);
  };

  return (
    <section id="scada-simulator" className="bg-[#0F172A] text-slate-200 py-16 lg:py-20 border-b border-slate-700/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 bg-blue-900/40 border border-blue-400/30 text-blue-400 text-[10px] uppercase font-bold tracking-widest rounded-sm mb-3">
            Industry 4.0 Standard
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase italic tracking-tight">
            Interactive <span className="text-[#F97316]">SCADA</span> Control Console
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Experience our enterprise PLC interface firsthand. Test speed controls, safety interlocks, and vision inspection reject triggers in real time.
          </p>
        </div>

        {/* SCADA Console Main Frame */}
        <div className="bg-[#1E293B] border border-slate-700 rounded-sm shadow-2xl overflow-hidden font-mono">
          
          {/* Top Control Bar Header */}
          <div className="bg-[#0F172A] border-b border-slate-700 p-4 flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-amber-500 rounded-full" />
              <div className="w-3 h-3 bg-emerald-500 rounded-full" />
              <span className="text-xs text-slate-400 border-l border-slate-700 pl-3 uppercase font-bold">
                APEX-SCADA-V8.1 • CELL_01_AUTO_BODY
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-1 rounded-sm text-xs font-bold uppercase ${
                eStopActive
                  ? 'bg-red-950 border border-red-700 text-red-400 animate-pulse'
                  : isRunning
                  ? 'bg-emerald-950 border border-emerald-800 text-emerald-400'
                  : 'bg-amber-950 border border-amber-800 text-amber-400'
              }`}>
                {eStopActive ? '🔴 E-STOP TRIPPED' : isRunning ? '🟢 PLC RUNNING' : '🟡 CELL PAUSED'}
              </span>

              <button
                onClick={toggleEStop}
                className={`px-4 py-1.5 rounded-sm text-xs font-bold tracking-wider uppercase transition-all cursor-pointer shadow-md ${
                  eStopActive
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                    : 'bg-red-600 hover:bg-red-700 text-white animate-pulse'
                }`}
              >
                {eStopActive ? 'RESET E-STOP SAFETY' : 'EMERGENCY E-STOP'}
              </button>
            </div>
          </div>

          {/* Main Dashboard Layout */}
          <div className="p-6 grid lg:grid-cols-12 gap-6 bg-[#1E293B]">
            
            {/* Column 1: Live Controls & VFD Slider (4 Cols) */}
            <div className="lg:col-span-4 bg-[#0F172A] rounded-sm p-5 border border-slate-700 space-y-5">
              <div className="text-xs text-[#F97316] font-bold tracking-widest border-b border-slate-700 pb-2 flex items-center justify-between uppercase">
                <span>VFD CONVEYOR DRIVE</span>
                <Sliders className="w-4 h-4 text-slate-400" />
              </div>

              {/* Cycle Start / Pause Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  disabled={eStopActive}
                  onClick={() => setIsRunning(true)}
                  className={`py-2 px-3 rounded-sm text-xs font-bold uppercase flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                    isRunning && !eStopActive
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#1E293B] text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  <Play className="w-3.5 h-3.5" />
                  START
                </button>
                <button
                  disabled={eStopActive}
                  onClick={() => setIsRunning(false)}
                  className={`py-2 px-3 rounded-sm text-xs font-bold uppercase flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                    !isRunning && !eStopActive
                      ? 'bg-amber-600 text-white'
                      : 'bg-[#1E293B] text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  <Pause className="w-3.5 h-3.5" />
                  PAUSE
                </button>
              </div>

              {/* VFD Frequency Slider */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs text-slate-300 font-mono uppercase">
                  <span>Conveyor Frequency</span>
                  <span className="text-[#F97316] font-bold">{conveyorFrequency} Hz</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="120"
                  value={conveyorFrequency}
                  disabled={eStopActive || !isRunning}
                  onChange={(e) => setConveyorFrequency(Number(e.target.value))}
                  className="w-full h-1 bg-slate-700 rounded appearance-none cursor-pointer accent-[#F97316]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>10 Hz</span>
                  <span>60 Hz</span>
                  <span>120 Hz</span>
                </div>
              </div>

              {/* Trigger Defect Button */}
              <div className="pt-2 border-t border-slate-700">
                <button
                  disabled={eStopActive || !isRunning}
                  onClick={triggerDefectInspection}
                  className="w-full py-2.5 px-3 rounded-sm bg-[#1E3A8A] hover:bg-blue-900 border border-blue-600 text-white text-xs font-bold uppercase flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-md"
                >
                  <ShieldAlert className="w-4 h-4 text-[#F97316]" />
                  SIMULATE REJECT TRIGGER
                </button>
              </div>
            </div>

            {/* Column 2: Digital Telemetry Gauges (4 Cols) */}
            <div className="lg:col-span-4 bg-[#0F172A] rounded-sm p-5 border border-slate-700 space-y-4">
              <div className="text-xs text-[#F97316] font-bold tracking-widest border-b border-slate-700 pb-2 uppercase">
                TELEMETRY COUNTERS & OEE
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#1E293B] p-3 rounded-sm border border-slate-700">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">PARTS PRODUCED</div>
                  <div className="text-2xl font-black text-white mt-1">
                    {partsCount.toLocaleString()}
                  </div>
                </div>

                <div className="bg-[#1E293B] p-3 rounded-sm border border-slate-700">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">REJECTS</div>
                  <div className="text-2xl font-black text-red-400 mt-1">
                    {defectsCount}
                  </div>
                </div>

                <div className="bg-[#1E293B] p-3 rounded-sm border border-slate-700">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">CELL OEE</div>
                  <div className="text-2xl font-black text-emerald-400 mt-1">
                    {eStopActive ? '0.0%' : '99.4%'}
                  </div>
                </div>

                <div className="bg-[#1E293B] p-3 rounded-sm border border-slate-700">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">ROBOT ANGLE</div>
                  <div className="text-2xl font-black text-blue-400 mt-1">
                    {armAngle}°
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="p-2.5 bg-[#1E293B] rounded-sm border border-slate-700 flex items-center justify-between text-xs uppercase font-bold">
                <span className="text-slate-400">PAC CONTROLLER:</span>
                <span className="text-emerald-400">ControlLogix L83E</span>
              </div>
            </div>

            {/* Column 3: Live SCADA Event Log (4 Cols) */}
            <div className="lg:col-span-4 bg-[#0F172A] rounded-sm p-5 border border-slate-700 flex flex-col justify-between">
              <div>
                <div className="text-xs text-[#F97316] font-bold tracking-widest border-b border-slate-700 pb-2 mb-3 uppercase">
                  SCADA EVENT LOG
                </div>

                <div className="space-y-2 max-h-48 overflow-y-auto text-[11px] text-slate-300 font-mono">
                  {logs.map((log, i) => (
                    <div
                      key={i}
                      className={`p-1.5 rounded-sm border text-[10px] ${
                        log.includes('EMERGENCY') || log.includes('DEFECT')
                          ? 'bg-red-950/80 border-red-800 text-red-300'
                          : log.includes('Reset')
                          ? 'bg-emerald-950/80 border-emerald-800 text-emerald-300'
                          : 'bg-[#1E293B] border-slate-700 text-slate-300'
                      }`}
                    >
                      {log}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 text-[10px] text-slate-500 border-t border-slate-700 flex justify-between font-mono uppercase">
                <span>PLC Cycle: 12ms</span>
                <span>OPC-UA Connected</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
