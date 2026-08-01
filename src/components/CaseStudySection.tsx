import React, { useState } from 'react';
import { Award, CheckCircle2, TrendingUp, ArrowRight, Quote, ShieldCheck, Factory, Clock, Zap, FileText } from 'lucide-react';
import { caseStudiesData } from '../data/caseStudiesData';

interface CaseStudySectionProps {
  onOpenAuditForm: () => void;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({ onOpenAuditForm }) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(caseStudiesData[0].id);

  const activeCase = caseStudiesData.find((c) => c.id === selectedCaseId) || caseStudiesData[0];

  return (
    <section id="case-studies" className="bg-[#0F172A] text-slate-200 py-16 lg:py-20 border-b border-slate-700/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 bg-blue-900/40 border border-blue-400/30 text-blue-400 text-[10px] uppercase font-bold tracking-widest rounded-sm mb-3">
            Industry 4.0 Standard
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase italic tracking-tight">
            Proven Field <span className="text-[#F97316]">Performance</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            See how Apex Automation solved critical production bottlenecks and delivered quantifiable ROI for midwest enterprise manufacturers.
          </p>
        </div>

        {/* Case Study Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {caseStudiesData.map((cs) => (
            <button
              key={cs.id}
              onClick={() => setSelectedCaseId(cs.id)}
              className={`px-4 py-2.5 rounded-sm font-mono text-xs sm:text-sm uppercase font-bold transition-all cursor-pointer border ${
                cs.id === selectedCaseId
                  ? 'bg-[#F97316] border-orange-500 text-white shadow-md'
                  : 'bg-[#1E293B] border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cs.clientCategory}
            </button>
          ))}
        </div>

        {/* Selected Case Study Hero Card */}
        <div className="bg-[#1E293B] border border-slate-700 rounded-sm p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* Top Title & Location */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700 pb-6">
            <div>
              <span className="text-xs font-mono text-[#F97316] uppercase tracking-widest font-bold">
                {activeCase.clientCategory} • {activeCase.location}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase italic tracking-tight mt-1">
                {activeCase.title}
              </h3>
            </div>

            <button
              onClick={onOpenAuditForm}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#0F172A] border border-slate-700 hover:border-[#F97316] text-slate-200 text-xs font-bold uppercase tracking-wider hover:text-[#F97316] transition-colors shrink-0 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#F97316]" />
              <span>Download Case Study PDF</span>
            </button>
          </div>

          {/* High Impact Key Highlight Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {activeCase.metricsHighlights.map((m, i) => (
              <div key={i} className="bg-[#0F172A] p-4 rounded-sm border border-slate-700">
                <div className="text-[10px] text-slate-400 font-mono uppercase font-bold">{m.label}</div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono mt-1">
                  {m.value}
                </div>
                <div className="text-[11px] text-[#F97316] font-mono font-bold mt-0.5">
                  {m.change}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Challenge vs Solution */}
          <div className="grid lg:grid-cols-2 gap-8 pt-2">
            
            <div className="bg-[#0F172A] p-6 rounded-sm border border-slate-700 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>THE PRODUCTION BOTTLENECK</span>
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeCase.challenge}
              </p>

              <div className="pt-2">
                <div className="text-[10px] font-mono text-slate-400 uppercase font-bold mb-2">BEFORE AUTOMATION METRICS:</div>
                <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                  {activeCase.beforeMetrics.map((bm, i) => (
                    <li key={i} className="flex justify-between border-b border-slate-800/80 pb-1">
                      <span>{bm.label}:</span>
                      <span className="text-red-400 font-bold">{bm.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-[#0F172A] p-6 rounded-sm border border-slate-700 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>APEX ENGINEERED SOLUTION</span>
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeCase.solution}
              </p>

              <div className="pt-2">
                <div className="text-[10px] font-mono text-slate-400 uppercase font-bold mb-2">AFTER AUTOMATION METRICS:</div>
                <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                  {activeCase.afterMetrics.map((am, i) => (
                    <li key={i} className="flex justify-between border-b border-slate-800/80 pb-1">
                      <span>{am.label}:</span>
                      <span className="text-emerald-400 font-bold">{am.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Tech Stack Chips & Testimonial Quote */}
          <div className="grid lg:grid-cols-12 gap-6 pt-4 border-t border-slate-700">
            
            {/* Tech Stack */}
            <div className="lg:col-span-5 space-y-2">
              <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">INTEGRATED CELL STACK</div>
              <div className="flex flex-wrap gap-2">
                {activeCase.techStack.map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-sm bg-[#0F172A] border border-slate-700 text-xs font-mono text-slate-300 font-bold uppercase">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quote Block */}
            <div className="lg:col-span-7 bg-[#0F172A] border border-slate-700 p-5 rounded-sm flex gap-4 items-start">
              <Quote className="w-8 h-8 text-[#F97316] shrink-0 opacity-80" />
              <div>
                <p className="text-xs sm:text-sm text-slate-200 italic font-sans leading-relaxed">
                  "{activeCase.quote.text}"
                </p>
                <div className="mt-2 text-xs font-mono text-[#F97316] font-bold uppercase">
                  {activeCase.quote.author} — <span className="text-slate-400 font-normal">{activeCase.quote.title}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Audit CTA */}
          <div className="pt-4 text-center">
            <button
              onClick={onOpenAuditForm}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F97316] hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all cursor-pointer shadow-md"
            >
              <span>Schedule a Similar Site Audit for Your Plant</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
