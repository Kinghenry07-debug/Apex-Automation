import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStatsBar } from './components/TrustStatsBar';
import { CapabilitiesTabs } from './components/CapabilitiesTabs';
import { ROIEstimator } from './components/ROIEstimator';
import { SCADASimulatorWidget } from './components/SCADASimulatorWidget';
import { CaseStudySection } from './components/CaseStudySection';
import { FeasibilityAuditForm } from './components/FeasibilityAuditForm';
import { GoogleMapSection } from './components/GoogleMapSection';
import { Footer } from './components/Footer';
import { LiveCellDemoModal } from './components/LiveCellDemoModal';
import { PlantSCADATicker } from './components/PlantSCADATicker';
import { ScrollingGearWidget } from './components/ScrollingGearWidget';
import { FeasibilityAuditFormData } from './types';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);
  const [auditFormData, setAuditFormData] = useState<Partial<FeasibilityAuditFormData & { calculatedSavings?: number }>>({});
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const scrollToAuditForm = (data?: Partial<FeasibilityAuditFormData & { calculatedSavings?: number }>) => {
    if (data) {
      setAuditFormData((prev) => ({ ...prev, ...data }));
    }
    const elem = document.getElementById('feasibility-audit');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-slate-950 relative">
      {/* Scroll Top Anchor for Harpoon Winch Reel */}
      <div id="top-anchor" className="absolute top-0 left-0 w-full h-0 pointer-events-none" />

      {/* Real-time SCADA Telemetry Top Bar */}
      <PlantSCADATicker />

      {/* Navigation Header */}
      <Header
        onOpenAuditForm={() => scrollToAuditForm()}
        onOpenDemoModal={() => setIsDemoModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onOpenAuditForm={() => scrollToAuditForm()}
        onOpenDemoModal={() => setIsDemoModalOpen(true)}
      />

      {/* Trust Stats Bar */}
      <TrustStatsBar />

      {/* Core Capabilities Tabs Section */}
      <CapabilitiesTabs
        onOpenAuditForm={() => scrollToAuditForm()}
      />

      {/* ROI & Savings Estimator Calculator Widget */}
      <ROIEstimator
        onOpenAuditWithData={(data) => scrollToAuditForm(data)}
      />

      {/* Interactive SCADA & PLC Live Simulator Panel */}
      <SCADASimulatorWidget />

      {/* Featured Case Studies Section */}
      <CaseStudySection
        onOpenAuditForm={() => scrollToAuditForm()}
      />

      {/* Interactive Feasibility Audit Form Section */}
      <FeasibilityAuditForm
        initialData={auditFormData}
      />

      {/* Embedded Google Map & Detroit HQ Section */}
      <GoogleMapSection />

      {/* Enterprise Footer */}
      <Footer />

      {/* Interactive Rotating Gear Sidebar Widget */}
      <ScrollingGearWidget
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
        onOpenAudit={() => scrollToAuditForm()}
      />

      {/* Live Cell Video Demo & Telemetry Modal */}
      <LiveCellDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
}

