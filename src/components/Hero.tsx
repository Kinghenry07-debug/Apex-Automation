import React from 'react';
import { Play, Calculator, ShieldCheck, ArrowRight, Bot, Cpu, CheckCircle2, Activity, Wrench } from 'lucide-react';

interface HeroProps {
  onOpenAuditForm: () => void;
  onOpenDemoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuditForm, onOpenDemoModal }) => {
  return (
    <section className="relative bg-[#0F172A] text-slate-200 overflow-hidden py-16 lg:py-20 border-b border-slate-700/50">
      {/* Background High Tech Grid Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      {/* Industrial Ambient Accent Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#1E3A8A]/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Main Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Industry Tag */}
            <div className="inline-block px-3 py-1 bg-blue-900/40 border border-blue-400/30 text-blue-400 text-[10px] uppercase font-bold tracking-widest rounded-sm">
              Industry 4.0 Standard
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white uppercase italic">
              Optimize Your <span className="text-[#F97316]">Production</span> Line.
            </h1>

            {/* Subheading */}
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl font-sans">
              Advanced robotics and PLC integration for high-stakes manufacturing environments. Engineered in Detroit for Tier-1 suppliers and OEM factories.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#roi-calculator"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#F97316] text-white font-bold text-sm rounded-sm hover:bg-orange-600 uppercase tracking-wide transition-all shadow-lg shadow-orange-950/40 cursor-pointer"
              >
                <Calculator className="w-4 h-4" />
                <span>Calculate ROI & Savings</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#1E293B] hover:bg-[#1E3A8A]/40 text-slate-100 font-bold text-sm rounded-sm border border-slate-700/80 transition-all uppercase tracking-wide cursor-pointer group"
              >
                <div className="w-5 h-5 rounded-sm bg-[#F97316]/20 text-[#F97316] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-[#F97316]" />
                </div>
                <span>Watch Live Cell Demo</span>
              </button>
            </div>

            {/* Key Assurance Bullet List */}
            <div className="grid sm:grid-cols-3 gap-3 pt-6 border-t border-slate-700/50">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>99.8% Proven Uptime</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 Field Support</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ISO 9001 Certified</span>
              </div>
            </div>

          </div>

          {/* Right Column - High Impact Industrial Visual / Interactive Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-sm bg-[#1E293B] border border-slate-700 p-2 shadow-2xl group">
              
              {/* Media Container */}
              <div className="relative aspect-video sm:aspect-[4/3] rounded-sm overflow-hidden bg-[#0F172A] border border-slate-700/80">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                  alt="Industrial Robotic Workcell Operating on Factory Floor"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />

                {/* Live Camera Stream Header Badge */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                  <span className="px-2.5 py-1 rounded-sm bg-[#0F172A]/90 border border-slate-700 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 shadow">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    CAM-01: AUTOMOTIVE WELDING
                  </span>
                  <span className="px-2 py-1 rounded-sm bg-[#1E3A8A] border border-blue-600 text-[10px] font-mono text-white uppercase font-bold">
                    480V ACTIVE
                  </span>
                </div>

                {/* Center Play Modal Trigger */}
                <button
                  onClick={onOpenDemoModal}
                  className="absolute inset-0 m-auto w-16 h-16 rounded-sm bg-[#F97316] text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-orange-600 transition-all cursor-pointer z-20 border border-white/40"
                  aria-label="Play Live Factory Demo Video"
                >
                  <Play className="w-8 h-8 fill-white ml-1" />
                </button>

                {/* Telemetry Overlay at Bottom of Card */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#0F172A]/90 border border-slate-700 p-3 grid grid-cols-3 gap-2 text-center text-xs font-mono rounded-sm">
                  <div>
                    <div className="text-slate-400 text-[9px] uppercase">CYCLE TIME</div>
                    <div className="text-[#F97316] font-bold text-sm">2.4 SEC</div>
                  </div>
                  <div className="border-x border-slate-700">
                    <div className="text-slate-400 text-[9px] uppercase">CELL OEE</div>
                    <div className="text-emerald-400 font-bold text-sm">99.4%</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[9px] uppercase">DISPATCH</div>
                    <div className="text-blue-400 font-bold text-sm">DETROIT</div>
                  </div>
                </div>
              </div>

              {/* Bottom Partner Logos Shelf */}
              <div className="pt-3 pb-1 px-2 text-center">
                <p className="text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-2 font-bold">
                  Authorized Integrator Platforms
                </p>
                <div className="flex flex-wrap items-center justify-around gap-2 text-xs font-bold text-slate-300 uppercase">
                  <span className="px-2 py-1 bg-[#0F172A] rounded-sm border border-slate-700/80">FANUC</span>
                  <span className="px-2 py-1 bg-[#0F172A] rounded-sm border border-slate-700/80">KUKA</span>
                  <span className="px-2 py-1 bg-[#0F172A] rounded-sm border border-slate-700/80">Allen-Bradley</span>
                  <span className="px-2 py-1 bg-[#0F172A] rounded-sm border border-slate-700/80">Siemens</span>
                  <span className="px-2 py-1 bg-[#0F172A] rounded-sm border border-slate-700/80">Cognex</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
