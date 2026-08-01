import React from 'react';
import { Activity, CheckCircle2, ShieldCheck, Zap, DollarSign, Cpu } from 'lucide-react';

export const TrustStatsBar: React.FC = () => {
  const stats = [
    {
      value: '99.8%',
      label: 'Uptime Delivered',
      subtext: 'Across active cells',
      color: 'text-[#F97316]'
    },
    {
      value: '150+',
      label: 'Factory Integrations',
      subtext: 'Tier-1 & OEM plants',
      color: 'text-[#F97316]'
    },
    {
      value: 'ISO 9001',
      label: 'Certified Quality',
      subtext: 'RIA R15.06 & OSHA safe',
      color: 'text-[#F97316]'
    },
    {
      value: '42%',
      label: 'Downtime Reduction',
      subtext: 'Realized within 90 days',
      color: 'text-[#F97316]'
    },
    {
      value: '$18.4M+',
      label: 'Operational Savings',
      subtext: 'Delivered to clients',
      color: 'text-[#F97316]'
    }
  ];

  return (
    <section className="bg-[#1E3A8A] text-white border-y border-blue-900/80 py-6 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-blue-800/60">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="px-4 py-3 md:py-0 text-center flex flex-col justify-center items-center"
            >
              <p className={`text-3xl font-black font-mono tracking-tighter ${stat.color}`}>
                {stat.value}
              </p>
              <p className="text-[11px] uppercase font-bold tracking-widest text-blue-200 mt-1">
                {stat.label}
              </p>
              <p className="text-[10px] text-blue-300/80 font-mono mt-0.5">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
