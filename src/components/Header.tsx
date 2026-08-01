import React, { useState, useEffect } from 'react';
import { Phone, MapPin, ShieldCheck, Cpu, Menu, X, ArrowRight, Activity, Wrench } from 'lucide-react';

interface HeaderProps {
  onOpenAuditForm: () => void;
  onOpenDemoModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAuditForm, onOpenDemoModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Core Capabilities', href: '#capabilities' },
    { name: 'ROI Estimator', href: '#roi-calculator' },
    { name: 'SCADA Simulator', href: '#scada-simulator' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Detroit HQ Location', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Enterprise Information Bar */}
      <div className="bg-[#0F172A] text-slate-300 border-b border-slate-700/50 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <div className="flex items-center gap-1.5 text-orange-400 font-mono font-medium text-[11px] uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Detroit Engineering Hub Active
            </div>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <a href="tel:3135550167" className="font-mono text-[#F97316] font-bold hover:underline">(313) 555-0167</a>
            </div>
            <span className="text-slate-700 hidden md:inline">|</span>
            <div className="hidden md:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>1900 E Jefferson Ave, Detroit, MI 48207</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm bg-[#1E3A8A]/40 border border-blue-500/30 text-blue-300 text-[10px] font-mono uppercase font-bold tracking-wider">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              ISO 9001 Certified
            </span>
            <button
              onClick={onOpenDemoModal}
              className="text-[11px] font-bold text-orange-400 hover:text-orange-300 uppercase tracking-wider flex items-center gap-1 cursor-pointer"
            >
              <Activity className="w-3 h-3" />
              Live Cell Demo
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-700/80 shadow-2xl py-3'
            : 'bg-[#0F172A]/90 backdrop-blur-sm border-b border-slate-700/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-[#F97316] flex items-center justify-center rounded-sm rotate-45 group-hover:scale-105 transition-transform shadow-md">
              <div className="w-4 h-4 border-2 border-white -rotate-45" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-black tracking-tighter text-white uppercase font-sans">
                  APEX <span className="text-[#F97316]">AUTOMATION</span>
                </span>
              </div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 opacity-70">
                Detroit Engineering Hub
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-[#F97316] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F97316] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenAuditForm}
              className="px-6 py-2.5 bg-[#F97316] text-white font-bold text-xs rounded-sm hover:bg-orange-600 uppercase tracking-wide transition-all cursor-pointer shadow-md"
            >
              Secure Audit
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-sm text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-orange-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0F172A] border-b border-slate-700/80 px-4 pt-3 pb-6 space-y-3 mt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-200 hover:text-orange-400 text-sm font-bold uppercase tracking-wider py-2 border-b border-slate-800"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuditForm();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-sm bg-[#F97316] hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-md"
              >
                <span>Request Feasibility Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemoModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-[#1E3A8A] border border-blue-700 text-white text-xs font-bold uppercase tracking-wider"
              >
                <Activity className="w-4 h-4 text-orange-400" />
                <span>Launch Live Cell Telemetry</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
