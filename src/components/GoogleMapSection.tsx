import React from 'react';
import { MapPin, Phone, Mail, Clock, Building, ShieldCheck, Navigation, ExternalLink, Cpu } from 'lucide-react';

export const GoogleMapSection: React.FC = () => {
  return (
    <section id="location" className="bg-[#0F172A] text-slate-200 py-16 lg:py-20 border-b border-slate-700/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 bg-blue-900/40 border border-blue-400/30 text-blue-400 text-[10px] uppercase font-bold tracking-widest rounded-sm mb-3">
            Industry 4.0 Standard
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase italic tracking-tight">
            Visit Our Detroit <span className="text-[#F97316]">R&D Center</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Located in the heart of the American manufacturing corridor at 1900 E Jefferson Ave. Tour our 40,000 sq ft robot cell staging bay and FAT testing facility.
          </p>
        </div>

        {/* Map & Facility Info Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Facility Specs & Contact Cards (5 Cols) */}
          <div className="lg:col-span-5 bg-[#1E293B] border border-slate-700 rounded-sm p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-2xl">
            
            <div className="space-y-6">
              <div className="border-b border-slate-700 pb-4">
                <span className="text-xs font-mono text-[#F97316] font-bold uppercase tracking-widest">
                  HEADQUARTERS ADDRESS
                </span>
                <h3 className="text-xl font-bold font-mono uppercase italic text-white mt-1">
                  Apex Automation Systems
                </h3>
                <p className="text-xs font-mono text-slate-300 mt-2 flex items-start gap-2 uppercase">
                  <MapPin className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                  <span>1900 E Jefferson Ave, Suite 400<br />Detroit, MI 48207</span>
                </p>
              </div>

              {/* Direct Phone & Dispatch */}
              <div className="space-y-3 font-mono text-xs uppercase">
                <div className="flex items-center justify-between p-3 bg-[#0F172A] rounded-sm border border-slate-700">
                  <span className="text-slate-400 font-bold">DIRECT PHONE:</span>
                  <a href="tel:3135550167" className="text-[#F97316] font-bold hover:underline">
                    (313) 555-0167
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#0F172A] rounded-sm border border-slate-700">
                  <span className="text-slate-400 font-bold">DISPATCH EMAIL:</span>
                  <a href="mailto:engineering@apexautomation.com" className="text-blue-400 font-bold hover:underline text-[11px]">
                    engineering@apexautomation.com
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#0F172A] rounded-sm border border-slate-700">
                  <span className="text-slate-400 font-bold">DISPATCH HOURS:</span>
                  <span className="text-emerald-400 font-bold">24/7 Field Response</span>
                </div>
              </div>

              {/* Detroit Lab Facility Highlights */}
              <div className="space-y-2 pt-2">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                  INTEGRATION LAB SPECIFICATIONS
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300 uppercase">
                  <div className="p-2.5 bg-[#0F172A] rounded-sm border border-slate-700">
                    <span className="text-[#F97316] block font-bold">40,000 SQ FT</span>
                    <span className="text-[10px] text-slate-400">FAT Staging Floor</span>
                  </div>
                  <div className="p-2.5 bg-[#0F172A] rounded-sm border border-slate-700">
                    <span className="text-[#F97316] block font-bold">10-TON</span>
                    <span className="text-[10px] text-slate-400">Overhead Crane</span>
                  </div>
                  <div className="p-2.5 bg-[#0F172A] rounded-sm border border-slate-700">
                    <span className="text-[#F97316] block font-bold">480V 3-PHASE</span>
                    <span className="text-[10px] text-slate-400">Power Test Bays</span>
                  </div>
                  <div className="p-2.5 bg-[#0F172A] rounded-sm border border-slate-700">
                    <span className="text-[#F97316] block font-bold">ISO 9001</span>
                    <span className="text-[10px] text-slate-400">Certified Lab</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions Link */}
            <div className="pt-4 border-t border-slate-700">
              <a
                href="https://maps.google.com/?q=1900+E+Jefferson+Ave,+Detroit,+MI+48207"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-[#F97316] hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all cursor-pointer shadow-md font-mono"
              >
                <Navigation className="w-4 h-4" />
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Embedded Google Map Iframe (7 Cols) */}
          <div className="lg:col-span-7 bg-[#1E293B] border border-slate-700 rounded-sm overflow-hidden shadow-2xl relative min-h-[400px]">
            <iframe
              title="Apex Automation Systems Location Map"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.810565809756!2d-83.02381282343906!3d42.33588997119561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2cc42d54e4eb%3A0x86bb7db49b14f85e!2s1900%20E%20Jefferson%20Ave%20%23400%2C%20Detroit%2C%20MI%2048207!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              className="w-full h-full filter grayscale contrast-125 brightness-90 hover:filter-none transition-all duration-500"
            />

            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-[#0F172A] border border-slate-700 p-3 rounded-sm text-xs font-mono text-white shadow-xl pointer-events-none uppercase">
              <div className="text-[#F97316] font-bold">APEX AUTOMATION R&D LAB</div>
              <div className="text-slate-400 text-[10px]">Detroit, MI 48207 • 42.3359° N, 83.0238° W</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
