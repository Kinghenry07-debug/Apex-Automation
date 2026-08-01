import React, { useState } from 'react';
import { Bot, Cpu, Eye, Wrench, CheckCircle2, ArrowRight, ShieldCheck, Download, Layers, ExternalLink, Zap } from 'lucide-react';
import { Capability } from '../types';
import { capabilitiesData } from '../data/capabilitiesData';

interface CapabilitiesTabsProps {
  onOpenAuditForm: () => void;
}

export const CapabilitiesTabs: React.FC<CapabilitiesTabsProps> = ({ onOpenAuditForm }) => {
  const [activeTabId, setActiveTabId] = useState<string>('robotic-arm-integration');

  const activeCap = capabilitiesData.find((c) => c.id === activeTabId) || capabilitiesData[0];

  const getTabIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return Bot;
      case 'Cpu':
        return Cpu;
      case 'Eye':
        return Eye;
      case 'Wrench':
        return Wrench;
      default:
        return Bot;
    }
  };

  return (
    <section id="capabilities" className="bg-[#0F172A] text-slate-200 py-16 lg:py-20 border-b border-slate-700/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 bg-[#1E3A8A]/40 border border-blue-400/30 text-blue-400 text-[10px] uppercase font-bold tracking-widest rounded-sm mb-3">
            Industry 4.0 Standard
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase italic tracking-tight">
            Core Engineering <span className="text-[#F97316]">Capabilities</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            From single robotic welding stations to multi-line automotive body assembly cells, explore our engineering disciplines.
          </p>
        </div>

        {/* Tab Buttons Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-700/30 mb-10 border border-slate-700/50">
          {capabilitiesData.map((cap) => {
            const Icon = getTabIcon(cap.iconName);
            const isActive = cap.id === activeTabId;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveTabId(cap.id)}
                className={`flex flex-col sm:flex-row items-center sm:items-start gap-3 p-6 text-left transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#1E3A8A]/30 border-b-2 border-[#F97316] text-white'
                    : 'bg-[#0F172A] text-slate-400 hover:bg-[#1E3A8A]/10 hover:text-slate-200'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-sm shrink-0 flex items-center justify-center ${
                    isActive ? 'border-2 border-[#F97316] text-[#F97316]' : 'border border-slate-700 text-slate-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                    {cap.badge.split(' ')[0]}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-tight text-white mt-1">
                    {cap.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Capability Detailed View Panel */}
        <div className="bg-[#1E293B] border border-slate-700 rounded-sm p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-sm bg-[#1E3A8A] border border-blue-600 text-white font-mono text-xs uppercase font-bold">
                  {activeCap.badge}
                </span>
                <span className="px-3 py-1 rounded-sm bg-[#0F172A] border border-slate-700 text-[#F97316] font-mono text-xs font-bold uppercase">
                  Payback: {activeCap.typicalRoiMonths}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase italic">
                {activeCap.title}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                {activeCap.fullDesc}
              </p>

              {/* Technical Specifications Grid */}
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#F97316] mb-3 font-bold">
                  Engineering Specifications & Scope
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {activeCap.specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-mono text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Business Benefits */}
              <div className="p-4 bg-[#0F172A] rounded-sm border border-slate-700 space-y-2">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                  Quantifiable Business Outcomes
                </h4>
                <div className="grid sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                  {activeCap.keyBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hardware & OEM Platform Compatibility Badges */}
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2 font-bold">
                  Supported OEM Hardware & Software
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCap.supportedPlatforms.map((platform, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-sm bg-[#0F172A] border border-slate-700 text-slate-300 text-xs font-mono uppercase font-bold flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                      {platform.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenAuditForm}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F97316] hover:bg-orange-600 text-white font-bold text-xs rounded-sm uppercase tracking-wider transition-all cursor-pointer shadow-md"
                >
                  <span>Request Proposal for {activeCap.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Visual / Spec Card (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-sm overflow-hidden border border-slate-700 shadow-2xl bg-[#0F172A] group">
                <img
                  src={activeCap.imageUrl}
                  alt={activeCap.title}
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0F172A]/90 rounded-sm border border-slate-700 text-xs text-slate-300 font-mono space-y-1">
                  <div className="text-[#F97316] font-bold text-sm uppercase">{activeCap.title}</div>
                  <div className="text-slate-400 text-[10px] uppercase">{activeCap.badge}</div>
                  <div className="text-emerald-400 font-bold pt-1 text-[11px] uppercase">
                    Detroit Staging Available
                  </div>
                </div>
              </div>

              {/* Tech Spec Quick Sheet Download Card */}
              <div className="p-4 bg-[#0F172A] rounded-sm border border-slate-700 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-white font-mono uppercase">TECHNICAL SPECIFICATION DATASHEET</div>
                  <div className="text-[10px] text-slate-400 font-mono">PDF • 2.4 MB • Complete Architecture Guide</div>
                </div>
                <button
                  onClick={onOpenAuditForm}
                  className="p-2.5 bg-[#1E293B] hover:bg-[#F97316] hover:text-white rounded-sm text-slate-300 transition-colors cursor-pointer shrink-0 border border-slate-700"
                  title="Download Technical Specification PDF"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
