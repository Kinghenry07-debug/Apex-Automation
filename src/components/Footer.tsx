import React from 'react';
import { Cpu, Phone, MapPin, ShieldCheck, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-slate-400 font-sans border-t border-slate-700/50 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-slate-700/50">
          
          {/* Brand Col (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-blue-900/60 border border-blue-500/30 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-[#F97316]" />
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-white font-mono uppercase italic">APEX</span>{' '}
                <span className="text-lg font-bold tracking-tight text-[#F97316] font-mono uppercase italic">AUTOMATION</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Detroit's premier system integrator for industrial robotics, ControlLogix PLC programming, high-speed vision quality inspection, and Industry 4.0 smart factory migrations.
            </p>

            <div className="pt-2 space-y-1.5 font-mono text-xs text-slate-300 uppercase">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F97316]" />
                <a href="tel:3135550167" className="hover:underline font-bold text-white">(313) 555-0167</a>
              </div>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#F97316] shrink-0 mt-0.5" />
                <span>1900 E Jefferson Ave, Suite 400, Detroit, MI 48207</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-[#F97316]">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs uppercase">
              <li><a href="#capabilities" className="hover:text-white transition-colors">Core Capabilities</a></li>
              <li><a href="#roi-calculator" className="hover:text-white transition-colors">ROI Savings Estimator</a></li>
              <li><a href="#scada-simulator" className="hover:text-white transition-colors">SCADA HMI Simulator</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#feasibility-audit" className="hover:text-white transition-colors">Feasibility Audit</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Detroit HQ Location</a></li>
            </ul>
          </div>

          {/* Core Disciplines */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-[#F97316]">
              SOLUTIONS
            </h4>
            <ul className="space-y-2 text-xs uppercase">
              <li><span className="text-slate-300">FANUC & KUKA Robot Cells</span></li>
              <li><span className="text-slate-300">Allen-Bradley ControlLogix</span></li>
              <li><span className="text-slate-300">Siemens S7-1500 TIA Portal</span></li>
              <li><span className="text-slate-300">Cognex 3D Vision Inspection</span></li>
              <li><span className="text-slate-300">Ignition SCADA Dashboards</span></li>
              <li><span className="text-slate-300">Legacy Press Retrofits</span></li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-[#F97316]">
              STANDARDS & COMPLIANCE
            </h4>
            <div className="space-y-2 text-xs uppercase">
              <div className="p-2 bg-[#1E293B] rounded-sm border border-slate-700 text-slate-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="p-2 bg-[#1E293B] rounded-sm border border-slate-700 text-slate-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>RIA Certified Integrator</span>
              </div>
              <div className="p-2 bg-[#1E293B] rounded-sm border border-slate-700 text-slate-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>OSHA & ANSI B11 Compliant</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-400 uppercase">
          <div>
            © {new Date().getFullYear()} Apex Automation Systems, LLC. All rights reserved. Detroit, Michigan.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-sm bg-[#1E293B] hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 border border-slate-700"
            title="Scroll to Top"
          >
            <span>TOP OF PAGE</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
