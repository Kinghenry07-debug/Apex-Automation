export interface Capability {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  specs: string[];
  supportedPlatforms: { name: string; logoUrl?: string; category: string }[];
  keyBenefits: string[];
  typicalRoiMonths: string;
  iconName: string;
  badge: string;
  imageUrl: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientCategory: string;
  location: string;
  challenge: string;
  solution: string;
  beforeMetrics: { label: string; value: string }[];
  afterMetrics: { label: string; value: string }[];
  metricsHighlights: { label: string; value: string; change: string; positive: boolean }[];
  techStack: string[];
  quote: { text: string; author: string; title: string };
  imageUrl: string;
}

export interface RoiCalculatorInputs {
  employeesCount: number;
  operatingHoursPerDay: number;
  averageHourlyRate: number;
  automationCoveragePct: number;
  defectRatePct: number;
}

export interface RoiCalculatorResults {
  annualManualCost: number;
  annualPostAutomationCost: number;
  annualSavings: number;
  paybackPeriodMonths: number;
  fiveYearSavings: number;
  oeeIncreasePct: number;
  scrapReductionDollar: number;
  yearlyData: { year: string; manual: number; automated: number; netCumulativeSavings: number }[];
}

export interface FeasibilityAuditFormData {
  facilityName: string;
  technicalContact: string;
  contactEmail: string;
  contactPhone: string;
  location: string;
  automationGoals: string[];
  budgetRange: string;
  timeline: string;
  additionalDetails?: string;
}

export interface CellCameraFeed {
  id: string;
  name: string;
  cellType: string;
  cycleTime: string;
  efficiency: number;
  roboticArmModel: string;
  status: 'OPERATIONAL' | 'SYNCHRONIZING' | 'OPTIMIZING';
  videoUrl?: string;
  posterUrl: string;
}
