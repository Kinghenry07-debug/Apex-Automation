import { CaseStudy } from '../types';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'auto-parts-downtime-reduction',
    title: 'How We Reduced Factory Downtime by 42% for Auto-Parts Manufacturer',
    clientCategory: 'Tier-1 Automotive Supplier',
    location: 'Warren, Michigan Facility',
    challenge: 'A major Detroit Tier-1 chassis component manufacturer suffered frequent unscheduled line stops on their 8-robot welding assembly cell. Micro-stoppages caused by stale PLC relay logic, legacy robot teach-pendant errors, and uncalibrated vision sensors resulted in $18,000/hr in lost revenue and an unsatisfactory Overall Equipment Effectiveness (OEE) of 64%.',
    solution: 'Apex Automation deployed a turnkey cell overhaul in a 72-hour holiday shutdown window. We replaced legacy relay logic with an Allen-Bradley ControlLogix PAC, integrated FANUC Dual-Check Safety (DCS), added Cognex 3D seam tracking cameras, and installed an Ignition SCADA system with predictive vibration sensors on all 8 robot gearboxes.',
    beforeMetrics: [
      { label: 'Unplanned Line Downtime', value: '14.2 hrs/wk' },
      { label: 'Overall Equipment Effectiveness (OEE)', value: '64.1%' },
      { label: 'Weld Scrap & Defect Rate', value: '4.8%' },
      { label: 'Mean Time Between Failures (MTBF)', value: '18.5 hrs' }
    ],
    afterMetrics: [
      { label: 'Unplanned Line Downtime', value: '8.2 hrs/wk (-42%)' },
      { label: 'Overall Equipment Effectiveness (OEE)', value: '91.4% (+27.3%)' },
      { label: 'Weld Scrap & Defect Rate', value: '0.4% (-91%)' },
      { label: 'Mean Time Between Failures (MTBF)', value: '142 hrs (+667%)' }
    ],
    metricsHighlights: [
      { label: 'Downtime Reduction', value: '42%', change: '-6.0 hrs/wk', positive: true },
      { label: 'OEE Gain', value: '91.4%', change: '+27.3%', positive: true },
      { label: 'Annual Cost Savings', value: '$1.42M', change: 'First Year', positive: true },
      { label: 'Payback Period', value: '5.8 Mos', change: 'ROI Realized', positive: true }
    ],
    techStack: [
      'Allen-Bradley ControlLogix 5580',
      '8x FANUC M-710iC/50 Robots',
      'Cognex In-Sight 3D Laser Seam Inspector',
      'Ignition 8.1 Enterprise SCADA',
      'EtherNet/IP CIP Safety Network'
    ],
    quote: {
      text: 'Apex Automation Systems delivered flawless execution. Their Detroit engineering team worked around our shift schedules and got our primary welding cell running at over 91% OEE within 3 days. The ROI was clear within six months.',
      author: 'Marcus Vance',
      title: 'VP of Operations, Great Lakes Precision Stamping'
    },
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'pharma-high-speed-packaging',
    title: 'High-Speed Vision-Guided Packaging Cell for BioMed Solutions',
    clientCategory: 'Pharmaceutical & Medical Devices',
    location: 'Ann Arbor, Michigan R&D Plant',
    challenge: 'BioMed Solutions required 100% sterile verification, 2D matrix barcode validation, and high-speed pick-and-place packaging for 450 vial units per minute with zero human contact.',
    solution: 'Engineered a dual-arm ABB Delta robot cell with Keyence multi-camera vision arrays, integrated with Siemens S7-1500 PLC and 21 CFR Part 11 compliant audit trail SCADA logging.',
    beforeMetrics: [
      { label: 'Throughput', value: '180 units/min' },
      { label: 'Manual QC Personnel', value: '12 operators/shift' },
      { label: 'Barcode Read Error Rate', value: '1.2%' }
    ],
    afterMetrics: [
      { label: 'Throughput', value: '480 units/min' },
      { label: 'Automated QC Efficiency', value: '100% Inline' },
      { label: 'Barcode Read Error Rate', value: '0.0001%' }
    ],
    metricsHighlights: [
      { label: 'Throughput Boost', value: '166%', change: '+300 u/min', positive: true },
      { label: 'Labor Reallocation', value: '12 Staff', change: 'To Higher Value', positive: true },
      { label: 'Compliance Rate', value: '100%', change: '21 CFR Part 11', positive: true },
      { label: 'Payback Period', value: '7.1 Mos', change: 'Full Return', positive: true }
    ],
    techStack: [
      'Siemens S7-1500F Safety PLC',
      '2x ABB IRB 360 FlexPicker Robots',
      'Keyence CV-X High-Resolution Vision',
      'Siemens Comfort HMI Touchpanel'
    ],
    quote: {
      text: 'Apex\'s pharmaceutical validation experience saved us months of FDA compliance headaches. The high-speed Delta pick-and-place operates like clockwork.',
      author: 'Dr. Elena Rostova',
      title: 'Head of Quality & Engineering, BioMed Solutions'
    },
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'heavy-stamping-press-retrofit',
    title: '2,000-Ton Hydraulic Stamping Press IIoT Modernization',
    clientCategory: 'Heavy Industrial Machinery',
    location: 'Detroit, Michigan Stamping Plant',
    challenge: 'A 25-year-old 2,000-ton hydraulic stamping press lacked safety interlocks and suffered frequent hydraulic seal failures due to unmonitored thermal spikes.',
    solution: 'Retrofitted press with modern hydraulic servo proportional valves, Banner safety light curtains, IO-Link temperature & vibration sensors, and a 15-inch FactoryTalk HMI display.',
    beforeMetrics: [
      { label: 'Press Setup Time', value: '110 minutes' },
      { label: 'Energy Consumption', value: '410 kWh/shift' },
      { label: 'Catastrophic Failures', value: '3 / year' }
    ],
    afterMetrics: [
      { label: 'Press Setup Time', value: '18 minutes' },
      { label: 'Energy Consumption', value: '275 kWh/shift' },
      { label: 'Catastrophic Failures', value: '0 / 2 Years' }
    ],
    metricsHighlights: [
      { label: 'Setup Time Saved', value: '83%', change: '-92 minutes', positive: true },
      { label: 'Energy Saved', value: '33%', change: '-135 kWh/shift', positive: true },
      { label: 'CapEx Savings', value: '$2.1M', change: 'vs New Press', positive: true },
      { label: 'Payback Period', value: '4.2 Mos', change: 'Ultra Fast', positive: true }
    ],
    techStack: [
      'Allen-Bradley CompactLogix 5380',
      'Banner Engineering Light Curtains',
      'ifm IO-Link Vibration Sensors',
      'FactoryTalk View ME 15" HMI'
    ],
    quote: {
      text: 'Rather than replacing our heavy hydraulic press for $3 Million, Apex retrofitted it for a fraction of the cost. The machine now performs better than a brand new press.',
      author: 'David Kowalski',
      title: 'Plant Operations Manager, Motor City Metalworks'
    },
    imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80'
  }
];
