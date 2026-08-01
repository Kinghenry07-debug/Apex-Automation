import React, { useState, useMemo } from 'react';
import { Calculator, DollarSign, TrendingUp, Clock, Users, ShieldAlert, ArrowRight, Download, CheckCircle2, Sparkles, RefreshCw } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Cell, CartesianGrid } from 'recharts';
import { RoiCalculatorInputs, RoiCalculatorResults } from '../types';

interface ROIEstimatorProps {
  onOpenAuditWithData?: (data: Partial<RoiCalculatorInputs & { calculatedSavings: number }>) => void;
}

export const ROIEstimator: React.FC<ROIEstimatorProps> = ({ onOpenAuditWithData }) => {
  // Calculator inputs state
  const [inputs, setInputs] = useState<RoiCalculatorInputs>({
    employeesCount: 24,
    operatingHoursPerDay: 16,
    averageHourlyRate: 34,
    automationCoveragePct: 40,
    defectRatePct: 3.5,
  });

  // Calculation Logic
  const results: RoiCalculatorResults = useMemo(() => {
    const daysPerYear = 260; // 5-day shifts
    const totalHoursPerYear = inputs.operatingHoursPerDay * daysPerYear;
    
    // Manual Labor Cost per Year
    const annualManualCost = inputs.employeesCount * inputs.averageHourlyRate * totalHoursPerYear;
    
    // Direct Labor Saved via Automation
    const employeesAutomated = inputs.employeesCount * (inputs.automationCoveragePct / 100);
    const directLaborSavings = employeesAutomated * inputs.averageHourlyRate * totalHoursPerYear * 0.85; // 85% labor efficiency
    
    // Scrap/Defect Reduction Savings (Estimated $15 per defective part, assuming 12 parts/hr/worker)
    const annualPartsProduced = inputs.employeesCount * 12 * totalHoursPerYear;
    const currentScrapCost = annualPartsProduced * (inputs.defectRatePct / 100) * 8; // $8 scrap penalty
    const scrapReductionDollar = currentScrapCost * 0.88; // 88% defect elimination via vision & robotics
    
    // Maintenance & Power Operating Cost for Robot Workcells
    const annualCellMaintenanceCost = employeesAutomated * 4200;
    
    // Net Annual Savings
    const annualSavings = Math.round(directLaborSavings + scrapReductionDollar - annualCellMaintenanceCost);
    const annualPostAutomationCost = Math.round(annualManualCost - annualSavings);

    // Initial Workcell Capital Investment Estimate
    const estimatedWorkcellCapEx = Math.round(employeesAutomated * 75000 + 45000);
    
    // Payback Period in Months
    const paybackPeriodMonths = Math.max(2.5, Math.min(36, Number(((estimatedWorkcellCapEx / annualSavings) * 12).toFixed(1))));
    
    // 5-Year Cumulative Savings
    const fiveYearSavings = Math.round(annualSavings * 5 - estimatedWorkcellCapEx);

    // OEE Increase Pct
    const oeeIncreasePct = Math.min(35, Math.round(inputs.automationCoveragePct * 0.55 + 12));

    // Chart Data Generation (Years 1 to 5)
    const yearlyData = [
      {
        year: 'Year 1 (Capex)',
        manual: Math.round(annualManualCost / 1000),
        automated: Math.round((annualPostAutomationCost + estimatedWorkcellCapEx) / 1000),
        netCumulativeSavings: Math.round((annualSavings - estimatedWorkcellCapEx) / 1000)
      },
      {
        year: 'Year 2',
        manual: Math.round((annualManualCost * 2) / 1000),
        automated: Math.round((annualPostAutomationCost * 2 + estimatedWorkcellCapEx) / 1000),
        netCumulativeSavings: Math.round((annualSavings * 2 - estimatedWorkcellCapEx) / 1000)
      },
      {
        year: 'Year 3',
        manual: Math.round((annualManualCost * 3) / 1000),
        automated: Math.round((annualPostAutomationCost * 3 + estimatedWorkcellCapEx) / 1000),
        netCumulativeSavings: Math.round((annualSavings * 3 - estimatedWorkcellCapEx) / 1000)
      },
      {
        year: 'Year 4',
        manual: Math.round((annualManualCost * 4) / 1000),
        automated: Math.round((annualPostAutomationCost * 4 + estimatedWorkcellCapEx) / 1000),
        netCumulativeSavings: Math.round((annualSavings * 4 - estimatedWorkcellCapEx) / 1000)
      },
      {
        year: 'Year 5',
        manual: Math.round((annualManualCost * 5) / 1000),
        automated: Math.round((annualPostAutomationCost * 5 + estimatedWorkcellCapEx) / 1000),
        netCumulativeSavings: Math.round((annualSavings * 5 - estimatedWorkcellCapEx) / 1000)
      }
    ];

    return {
      annualManualCost,
      annualPostAutomationCost,
      annualSavings,
      paybackPeriodMonths,
      fiveYearSavings,
      oeeIncreasePct,
      scrapReductionDollar: Math.round(scrapReductionDollar),
      yearlyData
    };
  }, [inputs]);

  const resetDefaults = () => {
    setInputs({
      employeesCount: 24,
      operatingHoursPerDay: 16,
      averageHourlyRate: 34,
      automationCoveragePct: 40,
      defectRatePct: 3.5,
    });
  };

  return (
    <section id="roi-calculator" className="bg-[#0F172A] text-slate-200 py-16 lg:py-20 border-b border-slate-700/50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 bg-blue-900/40 border border-blue-400/30 text-blue-400 text-[10px] uppercase font-bold tracking-widest rounded-sm mb-3">
            Industry 4.0 Standard
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase italic tracking-tight">
            Automation Savings <span className="text-[#F97316]">& ROI Estimator</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Adjust your plant operational parameters below to model real-time labor savings, payback timeframe, and 5-year capital ROI.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: Sliders & Controls (5 Cols) */}
          <div className="lg:col-span-5 bg-[#1E293B] border border-slate-700 rounded-sm p-6 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-700">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 font-mono">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Plant Operating Parameters</span>
              </h3>
              <button
                onClick={resetDefaults}
                className="text-[10px] uppercase font-mono text-slate-400 hover:text-[#F97316] flex items-center gap-1 cursor-pointer transition-colors"
                title="Reset sliders to default"
              >
                <RefreshCw className="w-3 h-3" />
                Reset
              </button>
            </div>

            {/* Slider 1: Factory Employees */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono uppercase text-slate-400">
                <span>Production Operators / Shift</span>
                <span className="text-white font-bold">{inputs.employeesCount} Operators</span>
              </div>
              <input
                type="range"
                min="4"
                max="150"
                step="2"
                value={inputs.employeesCount}
                onChange={(e) => setInputs({ ...inputs, employeesCount: Number(e.target.value) })}
                className="w-full h-1 bg-slate-700 accent-[#F97316] rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>4 Staff</span>
                <span>150 Staff</span>
              </div>
            </div>

            {/* Slider 2: Operating Hours / Day */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono uppercase text-slate-400">
                <span>Daily Operating Hours</span>
                <span className="text-white font-bold">{inputs.operatingHoursPerDay} Hours</span>
              </div>
              <input
                type="range"
                min="8"
                max="24"
                step="8"
                value={inputs.operatingHoursPerDay}
                onChange={(e) => setInputs({ ...inputs, operatingHoursPerDay: Number(e.target.value) })}
                className="w-full h-1 bg-slate-700 accent-[#F97316] rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>8h (Single)</span>
                <span>16h (Two Shifts)</span>
                <span>24h (3 Shifts)</span>
              </div>
            </div>

            {/* Slider 3: Hourly Labor Rate */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono uppercase text-slate-400">
                <span>Loaded Labor Rate ($/hr)</span>
                <span className="text-white font-bold">${inputs.averageHourlyRate}/hr</span>
              </div>
              <input
                type="range"
                min="20"
                max="85"
                step="1"
                value={inputs.averageHourlyRate}
                onChange={(e) => setInputs({ ...inputs, averageHourlyRate: Number(e.target.value) })}
                className="w-full h-1 bg-slate-700 accent-[#F97316] rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>$20/hr</span>
                <span>$85/hr</span>
              </div>
            </div>

            {/* Slider 4: Target Automation Coverage */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono uppercase text-slate-400">
                <span>Cell Automation Coverage</span>
                <span className="text-white font-bold">{inputs.automationCoveragePct}% Coverage</span>
              </div>
              <input
                type="range"
                min="10"
                max="90"
                step="5"
                value={inputs.automationCoveragePct}
                onChange={(e) => setInputs({ ...inputs, automationCoveragePct: Number(e.target.value) })}
                className="w-full h-1 bg-slate-700 accent-[#F97316] rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>10% (Simple Pick)</span>
                <span>90% (Full Cell)</span>
              </div>
            </div>

            {/* Slider 5: Current Defect / Scrap Rate */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono uppercase text-slate-400">
                <span>Scrap / Reject Rate (%)</span>
                <span className="text-white font-bold">{inputs.defectRatePct}% Defects</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="8.0"
                step="0.5"
                value={inputs.defectRatePct}
                onChange={(e) => setInputs({ ...inputs, defectRatePct: Number(e.target.value) })}
                className="w-full h-1 bg-slate-700 accent-[#F97316] rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>0.5%</span>
                <span>8.0%</span>
              </div>
            </div>

            {/* Parameter Callout Footnote */}
            <div className="p-3 bg-[#0F172A] rounded-sm border border-slate-700 text-xs text-slate-400 space-y-1 font-mono">
              <p className="flex items-center gap-1 text-slate-300 text-[11px]">
                <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
                <span>Includes power, EOAT tooling maintenance & 85% operator efficiency offsets.</span>
              </p>
            </div>
          </div>

          {/* Right Panel: Output Metrics Cards & Chart (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Hero Result Card */}
            <div className="bg-[#1E3A8A]/20 border border-slate-700 rounded-sm p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#F97316] text-white font-black font-mono text-[10px] uppercase tracking-widest rounded-bl-sm">
                FEASIBILITY ESTIMATE
              </div>

              <p className="text-xs font-mono uppercase text-slate-400 tracking-wider font-bold">
                Est. Annual Cost Savings
              </p>
              
              <div className="mt-2 flex flex-wrap items-baseline gap-3">
                <span className="text-4xl sm:text-6xl font-black text-[#F97316] font-mono tracking-tighter">
                  ${results.annualSavings.toLocaleString()}
                </span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2.5 py-1 rounded-sm font-mono uppercase">
                  +${Math.round(results.annualSavings / 12).toLocaleString()} / mo
                </span>
              </div>

              {/* Secondary Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-700">
                <div>
                  <div className="text-slate-400 text-[10px] font-mono uppercase font-bold">Payback Time</div>
                  <div className="text-2xl font-black text-white font-mono mt-1">
                    {results.paybackPeriodMonths} Mo
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">Full CapEx Return</div>
                </div>

                <div>
                  <div className="text-slate-400 text-[10px] font-mono uppercase font-bold">5-Year Net ROI</div>
                  <div className="text-2xl font-black text-emerald-400 font-mono mt-1">
                    ${(results.fiveYearSavings / 1000000).toFixed(2)}M
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">Cumulative Profit</div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <div className="text-slate-400 text-[10px] font-mono uppercase font-bold">OEE Increase</div>
                  <div className="text-2xl font-black text-blue-400 font-mono mt-1">
                    +{results.oeeIncreasePct}%
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">Throughput Target</div>
                </div>
              </div>

              {/* Action Callout Button */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenAuditWithData && onOpenAuditWithData({
                    employeesCount: inputs.employeesCount,
                    operatingHoursPerDay: inputs.operatingHoursPerDay,
                    averageHourlyRate: inputs.averageHourlyRate,
                    automationCoveragePct: inputs.automationCoveragePct,
                    defectRatePct: inputs.defectRatePct,
                    calculatedSavings: results.annualSavings
                  })}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#F97316] hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all cursor-pointer shadow-md"
                >
                  <span>Lock In Feasibility Audit With These Parameters</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Recharts Bar Chart: 5-Year Financial Projection */}
            <div className="bg-[#1E293B] border border-slate-700 rounded-sm p-6 shadow-xl">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                <div>
                  <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#F97316]" />
                    <span>5-Year Cumulative Cash Flow Comparison ($k)</span>
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Comparing Manual Labor Costs vs. Apex Automated System Investment
                  </p>
                </div>
              </div>

              <div className="h-64 w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={results.yearlyData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="year" stroke="#64748b" tick={{ fontSize: 11, fill: '#94a3b8' }} />
                    <YAxis stroke="#64748b" tick={{ fontSize: 11, fill: '#94a3b8' }} unit="k" />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '4px', color: '#fff', fontSize: '12px' }}
                      formatter={(value: any) => [`$${value}k`, '']}
                    />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                    <Bar dataKey="manual" name="Manual Operating Cost ($k)" fill="#ef4444" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="automated" name="Automated System Cost ($k)" fill="#1E3A8A" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="netCumulativeSavings" name="Net Cumulative Savings ($k)" fill="#F97316" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700 flex flex-wrap justify-between items-center text-[10px] text-slate-400 font-mono uppercase">
                <span>* Modeling includes Detroit labor averages & equipment depreciation.</span>
                <span className="text-emerald-400 font-bold">ISO 9001 Standard</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
