import React, { useState, useMemo, useEffect } from 'react';
import { Send, CheckCircle2, ShieldCheck, Sparkles, Building2, User, Mail, Phone, MapPin, DollarSign, Calendar, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useForm, ValidationError } from '@formspree/react';
import { FeasibilityAuditFormData } from '../types';

interface FeasibilityAuditFormProps {
  initialData?: Partial<FeasibilityAuditFormData & { calculatedSavings?: number }>;
}

export const FeasibilityAuditForm: React.FC<FeasibilityAuditFormProps> = ({ initialData }) => {
  const [formState, handleFormspreeSubmit] = useForm('xjgnqran');

  const [hasSubmitted, setHasSubmitted] = useState<boolean>(() => {
    try {
      return localStorage.getItem('feasibility_audit_submitted') === 'true';
    } catch {
      return false;
    }
  });

  const [storedAuditData, setStoredAuditData] = useState<{
    facilityName?: string;
    technicalContact?: string;
    contactEmail?: string;
    budgetRange?: string;
    readinessScore?: number;
    submittedAt?: string;
  } | null>(() => {
    try {
      const stored = localStorage.getItem('feasibility_audit_details');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [formData, setFormData] = useState<FeasibilityAuditFormData>({
    facilityName: initialData?.facilityName || '',
    technicalContact: initialData?.technicalContact || '',
    contactEmail: initialData?.contactEmail || '',
    contactPhone: initialData?.contactPhone || '',
    location: initialData?.location || '',
    automationGoals: initialData?.automationGoals || ['Labor Shortage Relief', 'Cycle Time Optimization'],
    budgetRange: initialData?.budgetRange || '$150,000 - $500,000',
    timeline: initialData?.timeline || '1 - 3 Months',
    additionalDetails: initialData?.additionalDetails || ''
  });

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0 && !hasSubmitted) {
      setFormData((prev) => ({
        ...prev,
        ...initialData,
        automationGoals: initialData.automationGoals || prev.automationGoals
      }));
    }
  }, [initialData, hasSubmitted]);

  const goalOptions = [
    'Labor Shortage Relief',
    'OEE & Throughput Improvement',
    'Vision Quality & Defect Elimination',
    'Safety Light Curtain & DCS Upgrade',
    'Legacy PLC / SCADA Retrofit',
    'Robotic Palletizing / Packaging'
  ];

  // Dynamic Automation Readiness Score Calculation
  const readinessScore = useMemo(() => {
    let score = 20;
    if (formData.facilityName.trim().length > 2) score += 15;
    if (formData.technicalContact.trim().length > 2) score += 15;
    if (formData.contactEmail.includes('@')) score += 15;
    if (formData.contactPhone.length >= 7) score += 10;
    if (formData.location.trim().length > 2) score += 10;
    if (formData.automationGoals.length > 0) score += 15;
    return Math.min(100, score);
  }, [formData]);

  useEffect(() => {
    if (formState.succeeded && !hasSubmitted) {
      const summaryDetails = {
        facilityName: formData.facilityName,
        technicalContact: formData.technicalContact,
        contactEmail: formData.contactEmail,
        budgetRange: formData.budgetRange,
        readinessScore,
        submittedAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      try {
        localStorage.setItem('feasibility_audit_submitted', 'true');
        localStorage.setItem('feasibility_audit_details', JSON.stringify(summaryDetails));
      } catch (e) {
        // Storage fallback
      }

      setHasSubmitted(true);
      setStoredAuditData(summaryDetails);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Ignore if canvas confetti not supported
      }
    }
  }, [formState.succeeded, formData, readinessScore, hasSubmitted]);

  const toggleGoal = (goal: string) => {
    setFormData((prev) => {
      const exists = prev.automationGoals.includes(goal);
      return {
        ...prev,
        automationGoals: exists
          ? prev.automationGoals.filter((g) => g !== goal)
          : [...prev.automationGoals, goal]
      };
    });
  };

  return (
    <section id="feasibility-audit" className="bg-[#0F172A] text-slate-200 py-16 lg:py-20 border-b border-slate-700/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Audit Pitch & Value Proposition (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block px-3 py-1 bg-blue-900/40 border border-blue-400/30 text-blue-400 text-[10px] uppercase font-bold tracking-widest rounded-sm">
              Industry 4.0 Standard
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase italic tracking-tight">
              Request On-Site <span className="text-[#F97316]">Feasibility Audit</span>
            </h2>

            <p className="text-slate-400 text-base leading-relaxed">
              Our Detroit senior controls engineers conduct comprehensive on-site or virtual audits of your production line. Receive a detailed engineering proposal complete with cycle-time 3D simulations, PLC architecture, and guaranteed ROI timelines.
            </p>

            {/* What's Included in Audit */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#F97316] font-bold">
                AUDIT DELIVERABLES INCLUDE:
              </h3>
              <ul className="space-y-2 text-xs font-mono text-slate-300 uppercase">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Cycle-Time & Bottleneck Analysis Report</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>3D FANUC / KUKA Workcell Reach Simulation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>ControlLogix / Siemens PLC I/O Architecture Spec</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Fixed-Price Turnkey Integration Proposal</span>
                </li>
              </ul>
            </div>

            {/* Contact Callout Box */}
            <div className="p-5 bg-[#1E293B] rounded-sm border border-slate-700 space-y-2 font-mono text-xs">
              <div className="text-[#F97316] font-bold uppercase">URGENT FIELD DISPATCH NEEDED?</div>
              <div className="text-slate-400 uppercase text-[11px]">Call our Detroit Engineering Office directly:</div>
              <div className="text-lg font-bold text-white flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#F97316]" />
                <a href="tel:3135550167" className="hover:underline">(313) 555-0167</a>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Form / Success Modal (7 Cols) */}
          <div className="lg:col-span-7 bg-[#1E293B] border border-slate-700 rounded-sm p-6 sm:p-8 shadow-2xl relative">
            
            {formState.succeeded || hasSubmitted ? (
              /* Success Toast / Persistent Locked Submission View */
              <div className="py-8 text-center space-y-6 animate-fadeIn font-sans">
                <div className="w-20 h-20 bg-emerald-950 text-emerald-400 border-2 border-emerald-500 rounded-sm flex items-center justify-center mx-auto shadow-2xl relative">
                  <CheckCircle2 className="w-10 h-10" />
                  <div className="absolute -top-2 -right-2 bg-[#F97316] text-white text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-widest">
                    LOCKED
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="inline-block px-3 py-1 bg-amber-950/60 border border-amber-500/40 text-amber-400 text-[10px] font-mono font-bold uppercase tracking-widest rounded-sm">
                    🔒 SINGLE AUDIT DISPATCH LIMIT REACHED
                  </div>
                  <h3 className="text-2xl font-black text-white font-mono uppercase italic">
                    Feasibility Audit Request Active
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you, <strong className="text-white">{storedAuditData?.technicalContact || formData.technicalContact || 'Field Partner'}</strong>. Our Detroit controls engineering team has received your audit request for <strong className="text-[#F97316]">{storedAuditData?.facilityName || formData.facilityName || 'your facility'}</strong>.
                  </p>
                </div>

                <div className="p-4 bg-[#0F172A] rounded-sm border border-slate-700 text-xs font-mono max-w-md mx-auto text-left space-y-2.5 uppercase">
                  <div className="text-emerald-400 font-bold flex justify-between items-center border-b border-slate-800 pb-2">
                    <span>READINESS SCORE: {storedAuditData?.readinessScore || readinessScore}%</span>
                    <span className="text-[10px] text-slate-400">DISPATCHED</span>
                  </div>
                  {(storedAuditData?.contactEmail || formData.contactEmail) && (
                    <div className="text-slate-400">Confirmation email: <span className="text-white">{storedAuditData?.contactEmail || formData.contactEmail}</span></div>
                  )}
                  <div className="text-slate-400">CapEx Budget: <span className="text-white">{storedAuditData?.budgetRange || formData.budgetRange}</span></div>
                  {storedAuditData?.submittedAt && (
                    <div className="text-slate-400">Date Logged: <span className="text-slate-200">{storedAuditData.submittedAt}</span></div>
                  )}
                  <div className="text-slate-400">Portal Status: <span className="text-emerald-400 font-bold">Confirmed (1 Audit / Client Limit Active)</span></div>
                </div>

                <div className="p-4 bg-[#0F172A]/80 border border-slate-800 rounded-sm text-xs font-mono text-slate-400 max-w-md mx-auto space-y-1">
                  <div className="text-amber-400 font-bold uppercase text-[11px]">Need to modify your audit parameters?</div>
                  <p className="text-[11px] leading-relaxed">
                    To maintain engineer queue integrity, online audit dispatch is limited to 1 request per facility session. Contact our Detroit Engineering Office directly at <a href="tel:3135550167" className="text-[#F97316] font-bold underline">(313) 555-0167</a> for immediate updates.
                  </p>
                </div>
              </div>
            ) : (
              /* Main Feasibility Audit Form */
              <form
                onSubmit={handleFormspreeSubmit}
                className="space-y-6 font-sans"
              >
                {/* Hidden Fields to Send Readiness Score & Goals */}
                <input type="hidden" name="automationReadinessScore" value={`${readinessScore}%`} />
                <input type="hidden" name="automationGoals" value={formData.automationGoals.join(', ')} />

                {/* Readiness Progress Meter */}
                <div className="p-3 bg-[#0F172A] rounded-sm border border-slate-700 flex items-center justify-between gap-4 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#F97316]" />
                    <span className="text-slate-300 font-bold uppercase text-[11px]">AUTOMATION READINESS:</span>
                  </div>
                  <div className="flex items-center gap-3 flex-1 max-w-xs">
                    <div className="w-full h-1.5 bg-slate-800 rounded-sm overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#F97316] to-emerald-400 transition-all duration-500"
                        style={{ width: `${readinessScore}%` }}
                      />
                    </div>
                    <span className="text-[#F97316] font-bold">{readinessScore}%</span>
                  </div>
                </div>

                {/* Form-level errors if any */}
                {formState.errors && formState.errors.getFormErrors().length > 0 && (
                  <div className="p-3 bg-red-950/80 border border-red-800 rounded-sm text-red-300 text-xs font-mono">
                    {formState.errors.getFormErrors().map((err, idx) => (
                      <div key={idx}>{err.message}</div>
                    ))}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Facility Name */}
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase font-bold mb-1">
                      Facility / Company Name *
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                      <input
                        type="text"
                        name="facilityName"
                        required
                        value={formData.facilityName}
                        onChange={(e) => setFormData({ ...formData, facilityName: e.target.value })}
                        placeholder="e.g. Great Lakes Stamping Plant"
                        className="w-full pl-9 pr-3 py-2.5 rounded-sm bg-[#0F172A] border border-slate-700 text-white placeholder-slate-500 text-xs focus:border-[#F97316] focus:outline-none font-mono"
                      />
                    </div>
                    <ValidationError prefix="Facility Name" field="facilityName" errors={formState.errors} className="text-red-400 text-[10px] font-mono mt-1" />
                  </div>

                  {/* Technical Contact Name */}
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase font-bold mb-1">
                      Technical Contact *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                      <input
                        type="text"
                        name="technicalContact"
                        required
                        value={formData.technicalContact}
                        onChange={(e) => setFormData({ ...formData, technicalContact: e.target.value })}
                        placeholder="e.g. Marcus Vance (Plant Manager)"
                        className="w-full pl-9 pr-3 py-2.5 rounded-sm bg-[#0F172A] border border-slate-700 text-white placeholder-slate-500 text-xs focus:border-[#F97316] focus:outline-none font-mono"
                      />
                    </div>
                    <ValidationError prefix="Technical Contact" field="technicalContact" errors={formState.errors} className="text-red-400 text-[10px] font-mono mt-1" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Contact Email */}
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase font-bold mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                      <input
                        type="email"
                        name="contactEmail"
                        required
                        value={formData.contactEmail}
                        onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                        placeholder="mvance@greatlakesmetal.com"
                        className="w-full pl-9 pr-3 py-2.5 rounded-sm bg-[#0F172A] border border-slate-700 text-white placeholder-slate-500 text-xs focus:border-[#F97316] focus:outline-none font-mono"
                      />
                    </div>
                    <ValidationError prefix="Email Address" field="contactEmail" errors={formState.errors} className="text-red-400 text-[10px] font-mono mt-1" />
                  </div>

                  {/* Contact Phone */}
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase font-bold mb-1">
                      Direct Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                      <input
                        type="tel"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                        placeholder="(313) 555-0167"
                        className="w-full pl-9 pr-3 py-2.5 rounded-sm bg-[#0F172A] border border-slate-700 text-white placeholder-slate-500 text-xs focus:border-[#F97316] focus:outline-none font-mono"
                      />
                    </div>
                    <ValidationError prefix="Phone Number" field="contactPhone" errors={formState.errors} className="text-red-400 text-[10px] font-mono mt-1" />
                  </div>
                </div>

                {/* Facility Location */}
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase font-bold mb-1">
                    Facility Location (City, State) *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      name="location"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Warren, MI (or Detroit Metro Area)"
                      className="w-full pl-9 pr-3 py-2.5 rounded-sm bg-[#0F172A] border border-slate-700 text-white placeholder-slate-500 text-xs focus:border-[#F97316] focus:outline-none font-mono"
                    />
                  </div>
                  <ValidationError prefix="Location" field="location" errors={formState.errors} className="text-red-400 text-[10px] font-mono mt-1" />
                </div>

                {/* Automation Goals Checklist */}
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase font-bold mb-2">
                    Primary Automation Goals (Select All That Apply)
                  </label>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {goalOptions.map((goal) => {
                      const isSelected = formData.automationGoals.includes(goal);
                      return (
                        <button
                          type="button"
                          key={goal}
                          onClick={() => toggleGoal(goal)}
                          className={`p-2.5 rounded-sm border text-left text-xs font-mono uppercase font-bold transition-colors cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'bg-blue-900/40 border-[#F97316] text-[#F97316]'
                              : 'bg-[#0F172A] border-slate-700 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <span>{goal}</span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Budget Dropdown */}
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase font-bold mb-1">
                      Estimated CapEx Budget Range
                    </label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-sm bg-[#0F172A] border border-slate-700 text-white text-xs focus:border-[#F97316] focus:outline-none font-mono cursor-pointer"
                    >
                      <option value="$25,000 - $50,000">$25,000 - $50,000 (Small Workcell)</option>
                      <option value="$50,000 - $150,000">$50,000 - $150,000 (Single Robot Arm)</option>
                      <option value="$150,000 - $500,000">$150,000 - $500,000 (Full Assembly Cell)</option>
                      <option value="$500,000+">$500,000+ (Multi-Line Factory Overhaul)</option>
                    </select>
                  </div>

                  {/* Target Timeline */}
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase font-bold mb-1">
                      Expected Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-sm bg-[#0F172A] border border-slate-700 text-white text-xs focus:border-[#F97316] focus:outline-none font-mono cursor-pointer"
                    >
                      <option value="Immediate (30 Days)">Immediate (30 Days)</option>
                      <option value="1 - 3 Months">1 - 3 Months</option>
                      <option value="3 - 6 Months">3 - 6 Months</option>
                      <option value="Budget Planning Phase">Budget Planning Phase</option>
                    </select>
                  </div>
                </div>

                {/* Additional Details */}
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase font-bold mb-1">
                    Cell Specs / Parts Details (Optional)
                  </label>
                  <textarea
                    name="additionalDetails"
                    rows={2}
                    value={formData.additionalDetails}
                    onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                    placeholder="Mention part dimensions, payload weights, robot brand preference, or cycle time target..."
                    className="w-full px-3 py-2 rounded-sm bg-[#0F172A] border border-slate-700 text-white placeholder-slate-500 text-xs focus:border-[#F97316] focus:outline-none font-mono"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={formState.submitting}
                  className="w-full py-3.5 bg-[#F97316] hover:bg-orange-600 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer font-mono shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>{formState.submitting ? 'DISPATCHING AUDIT REQUEST...' : 'SUBMIT FEASIBILITY AUDIT REQUEST'}</span>
                </button>

                <p className="text-[10px] text-slate-500 text-center font-mono uppercase">
                  Submitted data sent directly to Formspree Form ID: xjgnqran • NDA Confidentiality Guaranteed
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

