import { CellCameraFeed } from '../types';

export const cellFeedsData: CellCameraFeed[] = [
  {
    id: 'cell-01-welding',
    name: 'Cell 01: Automotive Frame Welding',
    cellType: '6-Axis High-Precision Arc Welding Workcell',
    cycleTime: '2.4 sec/joint',
    efficiency: 99.4,
    roboticArmModel: 'FANUC R-2000iC/210F + Lincoln Electric iSTP',
    status: 'OPERATIONAL',
    posterUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'cell-02-palletizing',
    name: 'Cell 02: High-Payload End-of-Line Palletizing',
    cellType: 'Dual Heavy-Duty Material Handling Cell',
    cycleTime: '1.8 sec/pick',
    efficiency: 98.9,
    roboticArmModel: 'KUKA KR 300 R2500 Ultra + Schunk Vacuum EOAT',
    status: 'OPERATIONAL',
    posterUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'cell-03-inspection',
    name: 'Cell 03: 3D Vision & Surface Quality Inspection',
    cellType: 'Sub-Millimeter Optical Defect Verification',
    cycleTime: '0.9 sec/part',
    efficiency: 100.0,
    roboticArmModel: 'ABB IRB 2600 + Cognex 3D Laser Scanner',
    status: 'OPTIMIZING',
    posterUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
  }
];
