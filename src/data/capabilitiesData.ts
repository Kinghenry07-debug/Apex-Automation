import { Capability } from '../types';

export const capabilitiesData: Capability[] = [
  {
    id: 'robotic-arm-integration',
    title: 'Robotic Arm Cell Integration',
    shortDesc: 'Turnkey 6-axis articulated & cobot workcells for welding, material handling, assembly, and palletizing.',
    fullDesc: 'We design, engineer, and commission custom automated robotic cells engineered for maximum throughput and zero micro-stoppages. From heavy payload FANUC and KUKA articulated arms to safe collaborative robots (cobots), our Detroit engineering team delivers complete mechanical, electrical, and safety integration.',
    badge: 'ISO 10218-1 & RIA R15.06 Compliant',
    iconName: 'Bot',
    typicalRoiMonths: '6 - 12 Months',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    specs: [
      '6-Axis & Delta Robot Workcell Design',
      'End-of-Arm Tooling (EOAT) Custom Fabrication',
      'High-Speed Robotic Welding & ArcTool Integration',
      'Dual-Check Safety (DCS) & Safe Robot Technology',
      'Cobot (Collaborative Robot) Assembly Lines',
      'Palletizing, Depalletizing & Material Handling'
    ],
    supportedPlatforms: [
      { name: 'FANUC Robotics', category: 'Robot OEM' },
      { name: 'KUKA Robotics', category: 'Robot OEM' },
      { name: 'ABB Robotics', category: 'Robot OEM' },
      { name: 'Yaskawa Motoman', category: 'Robot OEM' },
      { name: 'Universal Robots', category: 'Cobot OEM' },
      { name: 'Schunk EOAT', category: 'Gripper & Tooling' }
    ],
    keyBenefits: [
      'Increases production throughput by up to 300%',
      'Eliminates ergonomic injury risks in heavy lifting',
      'Sub-millimeter repeatable accuracy (±0.02mm)',
      '24/7 continuous lights-out operation capacity'
    ]
  },
  {
    id: 'plc-scada-programming',
    title: 'PLC & SCADA Programming',
    shortDesc: 'Enterprise PLC logic, HMI interface design, and Ignition/Wonderware SCADA architectures.',
    fullDesc: 'Robust control logic is the beating heart of any smart factory. Our certified controls engineers write modular, fault-tolerant PLC programs (Ladder Logic, Structured Text, Function Block) adhering to PackML and ISA-88/95 standards. We build intuitive SCADA dashboards with real-time OEE tracking, alarm management, and cloud enterprise bridging.',
    badge: 'Rockwell & Siemens Certified',
    iconName: 'Cpu',
    typicalRoiMonths: '4 - 8 Months',
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    specs: [
      'Allen-Bradley ControlLogix & CompactLogix (Studio 5000)',
      'Siemens S7-1500 & TIA Portal V18 Programming',
      'Ignition 8.1 Gold Certified SCADA Architecture',
      'FactoryTalk View & Wonderware InTouch HMI',
      'Industrial Ethernet (EtherNet/IP, PROFINET, Modbus TCP)',
      'OPC-UA / MQTT Broker Data Acquisition'
    ],
    supportedPlatforms: [
      { name: 'Rockwell Automation', category: 'PLC / PAC' },
      { name: 'Siemens Industrial', category: 'PLC / Drive' },
      { name: 'Inductive Automation (Ignition)', category: 'SCADA Platform' },
      { name: 'Schneider Electric', category: 'Hardware' },
      { name: 'Omron Automation', category: 'PLC OEM' },
      { name: 'Beckhoff Automation', category: 'IPC Control' }
    ],
    keyBenefits: [
      'Standardized code architecture for easy maintenance',
      'Real-time OEE (Overall Equipment Effectiveness) dashboards',
      'Automated recipe management & batch control',
      'Instant fault diagnosis & predictive alarm messaging'
    ]
  },
  {
    id: 'vision-systems-inspection',
    title: 'Vision Systems & Quality Inspection',
    shortDesc: 'High-speed 2D/3D camera inspection, AI defect detection, and optical barcode verification.',
    fullDesc: 'Eliminate customer rejects and warranty claims with 100% inline automated optical inspection. We deploy Cognex, Keyence, and AI-driven deep learning vision systems capable of analyzing 1,200 parts per minute for micro-cracks, dimensional tolerances, weld bead geometry, and label compliance.',
    badge: '100% Inline Quality Verification',
    iconName: 'Eye',
    typicalRoiMonths: '3 - 7 Months',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    specs: [
      'Cognex In-Sight & VisionPro Deep Learning',
      'Keyence CV-X & LumiTrax Multi-Spectrum Lighting',
      '3D Laser Profilometry & Surface Height Mapping',
      'High-Speed OCR, 1D/2D Barcode & Matrix Traceability',
      'Weld Seam Verification & Adhesive Bead Inspection',
      'Automated Reject Mechanism Interlocks'
    ],
    supportedPlatforms: [
      { name: 'Cognex', category: 'Vision OEM' },
      { name: 'Keyence', category: 'Sensors / Vision' },
      { name: 'Basler Industrial Cameras', category: 'Hardware' },
      { name: 'MVTec HALCON', category: 'Vision Software' },
      { name: 'Matrox Imaging', category: 'Hardware' },
      { name: 'SICK Sensor Intelligence', category: 'Safety & Vision' }
    ],
    keyBenefits: [
      '0 PPM defect target achieved across production runs',
      'Sub-second part inspection at full line speed',
      'Full digital traceability log for every serial number',
      'Reduces manual inspection labor and eye-fatigue errors'
    ]
  },
  {
    id: 'legacy-machine-retrofits',
    title: 'Legacy Machine Retrofits',
    shortDesc: 'Modernize aging hydraulic/mechanical equipment with smart sensors, servo drives, and IIoT edge devices.',
    fullDesc: 'Don\'t spend millions replacing mechanically sound legacy stamping presses, CNC mills, or packaging lines. We retrofit existing machinery with modern servo drives, safety light curtains, PLC upgrades, and IIoT vibration/thermal sensors to bring 20-year-old machines directly into Industry 4.0 standards.',
    badge: 'CapEx Savings Up To 70% vs New Machinery',
    iconName: 'Wrench',
    typicalRoiMonths: '5 - 10 Months',
    imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
    specs: [
      'Hydraulic & Mechanical Press Control Upgrades',
      'AC Servo & Variable Frequency Drive (VFD) Retrofits',
      'Safety Light Curtain & E-Stop Interlock Certification',
      'Edge Gateway Installation (Vibration, Temp, Current Monitoring)',
      'Legacy Relay Logic to Compact PLC Conversion',
      'Industry 4.0 Cloud & MQTT Connectivity Bridge'
    ],
    supportedPlatforms: [
      { name: 'Allen-Bradley PowerFlex', category: 'VFD Drives' },
      { name: 'Siemens SINAMICS', category: 'Drives' },
      { name: 'Banner Engineering', category: 'Safety & Wireless' },
      { name: 'ifm efector', category: 'IO-Link Sensors' },
      { name: 'HMS Anybus', category: 'Fieldbus Gateways' },
      { name: 'Red Lion Controls', category: 'Edge Displays' }
    ],
    keyBenefits: [
      'Extends machinery lifecycle by 15+ years',
      'Consumes up to 35% less electrical power with modern drives',
      'Reduces unplanned downtime through predictive vibration monitoring',
      'Meets strict modern OSHA & ANSI B11 safety standards'
    ]
  }
];
